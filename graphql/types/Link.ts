import { connectionFromArraySlice, cursorToOffset } from 'graphql-relay';
import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { resolve } from 'path';
import { User } from './User';

export const Link = objectType({
  name: 'Link',
  nonNullDefaults: {
    input: true,
    output: true,
  },
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('url');
    t.string('description');
    t.string('imageUrl');
    t.string('category');
    t.list.field('users', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return ctx.prisma.link
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .users();
      },
    });
  },
});

export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.connectionField('links', {
      type: Link,
      resolve: async (_parent, { after, first }, ctx) => {
        const offset = after ? cursorToOffset(after) + 1 : 0;
        if (isNaN(offset)) throw new Error('Invalid cursor');

        // by default take 10 elements per page
        first = first || 10;

        const [totalCount, items] = await Promise.all([
          ctx.prisma.link.count(),
          ctx.prisma.link.findMany({
            take: first,
            skip: offset,
          }),
        ]);

        return connectionFromArraySlice(
          items,
          { first, after },
          { sliceStart: offset, arrayLength: totalCount }
        );
      },
    });
  },
});

export const CreateLinkMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createLink', {
      type: 'Link',
      args: {
        title: nonNull(stringArg()),
        url: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
        category: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.user) {
          throw new Error('You need to be logged in to perform this action');
        }

        return await ctx.prisma.link.create({
          data: args,
        });
      },
    });
  },
});
