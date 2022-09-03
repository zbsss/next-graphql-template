import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Counter = {
  __typename?: 'Counter';
  count: Scalars['Int'];
};

export type Link = {
  __typename?: 'Link';
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  users: Array<User>;
};

export type Query = {
  __typename?: 'Query';
  counter: Counter;
  links: Array<Link>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Subscription = {
  __typename?: 'Subscription';
  counter: Counter;
};

export type User = {
  __typename?: 'User';
  bookmarks: Array<Link>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  role: Role;
};

export type AllLinksQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLinksQueryQuery = { __typename?: 'Query', links: Array<{ __typename?: 'Link', id: string, title: string, url: string, description: string, imageUrl: string, category: string }> };

export type LiveCounterSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LiveCounterSubscription = { __typename?: 'Subscription', counter: { __typename?: 'Counter', count: number } };

export type CounterQueryVariables = Exact<{ [key: string]: never; }>;


export type CounterQuery = { __typename?: 'Query', counter: { __typename?: 'Counter', count: number } };


export const AllLinksQueryDocument = gql`
    query AllLinksQuery {
  links {
    id
    title
    url
    description
    imageUrl
    category
  }
}
    `;

/**
 * __useAllLinksQueryQuery__
 *
 * To run a query within a React component, call `useAllLinksQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLinksQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLinksQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllLinksQueryQuery(baseOptions?: Apollo.QueryHookOptions<AllLinksQueryQuery, AllLinksQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllLinksQueryQuery, AllLinksQueryQueryVariables>(AllLinksQueryDocument, options);
      }
export function useAllLinksQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllLinksQueryQuery, AllLinksQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllLinksQueryQuery, AllLinksQueryQueryVariables>(AllLinksQueryDocument, options);
        }
export type AllLinksQueryQueryHookResult = ReturnType<typeof useAllLinksQueryQuery>;
export type AllLinksQueryLazyQueryHookResult = ReturnType<typeof useAllLinksQueryLazyQuery>;
export type AllLinksQueryQueryResult = Apollo.QueryResult<AllLinksQueryQuery, AllLinksQueryQueryVariables>;
export const LiveCounterDocument = gql`
    subscription LiveCounter {
  counter {
    count
  }
}
    `;

/**
 * __useLiveCounterSubscription__
 *
 * To run a query within a React component, call `useLiveCounterSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLiveCounterSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveCounterSubscription({
 *   variables: {
 *   },
 * });
 */
export function useLiveCounterSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LiveCounterSubscription, LiveCounterSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LiveCounterSubscription, LiveCounterSubscriptionVariables>(LiveCounterDocument, options);
      }
export type LiveCounterSubscriptionHookResult = ReturnType<typeof useLiveCounterSubscription>;
export type LiveCounterSubscriptionResult = Apollo.SubscriptionResult<LiveCounterSubscription>;
export const CounterDocument = gql`
    query Counter {
  counter {
    count
  }
}
    `;

/**
 * __useCounterQuery__
 *
 * To run a query within a React component, call `useCounterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCounterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCounterQuery({
 *   variables: {
 *   },
 * });
 */
export function useCounterQuery(baseOptions?: Apollo.QueryHookOptions<CounterQuery, CounterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CounterQuery, CounterQueryVariables>(CounterDocument, options);
      }
export function useCounterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CounterQuery, CounterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CounterQuery, CounterQueryVariables>(CounterDocument, options);
        }
export type CounterQueryHookResult = ReturnType<typeof useCounterQuery>;
export type CounterLazyQueryHookResult = ReturnType<typeof useCounterLazyQuery>;
export type CounterQueryResult = Apollo.QueryResult<CounterQuery, CounterQueryVariables>;