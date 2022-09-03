import { ApolloServer } from 'apollo-server-micro';

declare module 'http' {
  export interface ServerResponse {
    socket: {
      server: NetServer & {
        apolloServer?: ApolloServer;
      };
    };
  }
}
