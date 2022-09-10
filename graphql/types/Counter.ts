import { extendType, objectType } from 'nexus';
import pubsub, { Event } from '../../lib/pubsub';

let count = 0;

export const Counter = objectType({
  name: 'Counter',
  definition(t) {
    t.nonNull.int('count');
  },
});

export const CounterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('counter', {
      type: Counter,
      async resolve() {
        return { count };
      },
    });
  },
});

export const CounterSubscription = extendType({
  type: 'Subscription',
  definition(t) {
    t.nonNull.field('counter', {
      type: Counter,
      subscribe(_parent, _args, ctx) {
        return ctx.pubsub.asyncIterator('COUNTER_INC');
      },
      async resolve(eventPromise: Promise<Event<number>>) {
        const { data } = await eventPromise;
        return { count: data };
      },
    });
  },
});

export const IncrementCounter = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('counter', {
      type: Counter,
      async resolve() {
        count++;
        await pubsub.publish('COUNTER_INC', {
          data: count,
        });

        return { count };
      },
    });
  },
});
