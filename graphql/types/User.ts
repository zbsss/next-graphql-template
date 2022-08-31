import { enumType, objectType } from 'nexus';
import { Link } from './Link';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id');
    t.string('email');
    t.string('image');
    t.nonNull.field('role', { type: Role });
    t.nonNull.list.nonNull.field('bookmarks', {
      type: Link,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .bookmarks();
      },
    });
  },
});

const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
});
