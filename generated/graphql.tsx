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

export type LinkConnection = {
  __typename?: 'LinkConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<LinkEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type LinkEdge = {
  __typename?: 'LinkEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Link>;
};

export type Mutation = {
  __typename?: 'Mutation';
  counter: Counter;
  createLink: Link;
};


export type MutationCreateLinkArgs = {
  category: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars['String']>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  counter: Counter;
  links: LinkConnection;
};


export type QueryLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
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

export type LiveCounterSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LiveCounterSubscription = { __typename?: 'Subscription', counter: { __typename?: 'Counter', count: number } };

export type CounterQueryVariables = Exact<{ [key: string]: never; }>;


export type CounterQuery = { __typename?: 'Query', counter: { __typename?: 'Counter', count: number } };

export type IncrementCounterMutationVariables = Exact<{ [key: string]: never; }>;


export type IncrementCounterMutation = { __typename?: 'Mutation', counter: { __typename?: 'Counter', count: number } };

export type AllLinksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type AllLinksQuery = { __typename?: 'Query', links: { __typename?: 'LinkConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges?: Array<{ __typename?: 'LinkEdge', cursor: string, node?: { __typename?: 'Link', imageUrl: string, url: string, title: string, category: string, description: string, id: string } | null } | null> | null } };

export type CreateLinkMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
  imageUrl: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateLinkMutation = { __typename?: 'Mutation', createLink: { __typename?: 'Link', id: string, title: string, url: string, description: string, imageUrl: string, category: string } };


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
export const IncrementCounterDocument = gql`
    mutation IncrementCounter {
  counter {
    count
  }
}
    `;
export type IncrementCounterMutationFn = Apollo.MutationFunction<IncrementCounterMutation, IncrementCounterMutationVariables>;

/**
 * __useIncrementCounterMutation__
 *
 * To run a mutation, you first call `useIncrementCounterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementCounterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementCounterMutation, { data, loading, error }] = useIncrementCounterMutation({
 *   variables: {
 *   },
 * });
 */
export function useIncrementCounterMutation(baseOptions?: Apollo.MutationHookOptions<IncrementCounterMutation, IncrementCounterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IncrementCounterMutation, IncrementCounterMutationVariables>(IncrementCounterDocument, options);
      }
export type IncrementCounterMutationHookResult = ReturnType<typeof useIncrementCounterMutation>;
export type IncrementCounterMutationResult = Apollo.MutationResult<IncrementCounterMutation>;
export type IncrementCounterMutationOptions = Apollo.BaseMutationOptions<IncrementCounterMutation, IncrementCounterMutationVariables>;
export const AllLinksDocument = gql`
    query AllLinks($first: Int, $after: String) {
  links(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        imageUrl
        url
        title
        category
        description
        id
      }
    }
  }
}
    `;

/**
 * __useAllLinksQuery__
 *
 * To run a query within a React component, call `useAllLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLinksQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useAllLinksQuery(baseOptions?: Apollo.QueryHookOptions<AllLinksQuery, AllLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllLinksQuery, AllLinksQueryVariables>(AllLinksDocument, options);
      }
export function useAllLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllLinksQuery, AllLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllLinksQuery, AllLinksQueryVariables>(AllLinksDocument, options);
        }
export type AllLinksQueryHookResult = ReturnType<typeof useAllLinksQuery>;
export type AllLinksLazyQueryHookResult = ReturnType<typeof useAllLinksLazyQuery>;
export type AllLinksQueryResult = Apollo.QueryResult<AllLinksQuery, AllLinksQueryVariables>;
export const CreateLinkDocument = gql`
    mutation CreateLink($title: String!, $url: String!, $imageUrl: String!, $category: String!, $description: String!) {
  createLink(
    title: $title
    url: $url
    imageUrl: $imageUrl
    category: $category
    description: $description
  ) {
    id
    title
    url
    description
    imageUrl
    category
  }
}
    `;
export type CreateLinkMutationFn = Apollo.MutationFunction<CreateLinkMutation, CreateLinkMutationVariables>;

/**
 * __useCreateLinkMutation__
 *
 * To run a mutation, you first call `useCreateLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLinkMutation, { data, loading, error }] = useCreateLinkMutation({
 *   variables: {
 *      title: // value for 'title'
 *      url: // value for 'url'
 *      imageUrl: // value for 'imageUrl'
 *      category: // value for 'category'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateLinkMutation, CreateLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLinkMutation, CreateLinkMutationVariables>(CreateLinkDocument, options);
      }
export type CreateLinkMutationHookResult = ReturnType<typeof useCreateLinkMutation>;
export type CreateLinkMutationResult = Apollo.MutationResult<CreateLinkMutation>;
export type CreateLinkMutationOptions = Apollo.BaseMutationOptions<CreateLinkMutation, CreateLinkMutationVariables>;