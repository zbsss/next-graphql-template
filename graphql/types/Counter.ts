import { extendType, objectType } from 'nexus';
import pubsub, { Event } from '../../lib/pubsub';

let countRunning = false;
let count = 0;

const startCountingThread = async function () {
  countRunning = true;

  while (countRunning) {
    count = (count + 1) % 1000_000_000;

    console.log(count);

    await pubsub.publish('COUNTER_INC', {
      data: count,
    });

    await new Promise((res) => setTimeout(res, 5000));
  }
};

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
      type: 'Counter',
      resolve() {
        if (!countRunning) startCountingThread();

        return { count };
      },
    });
  },
});

export const CounterSubscription = extendType({
  type: 'Subscription',
  definition(t) {
    t.nonNull.field('counter', {
      type: 'Counter',
      subscribe(_parent, _args, ctx) {
        if (!countRunning) startCountingThread();

        return ctx.pubsub.asyncIterator('COUNTER_INC');
      },
      async resolve(eventPromise: Promise<Event<number>>) {
        const { data } = await eventPromise;
        return { count: data };
      },
    });
  },
});
