import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  useAllLinksQueryQuery,
  useLiveCounterSubscription,
} from '../generated/graphql';

export default function Home() {
  const { data: linksData, loading, error } = useAllLinksQueryQuery();

  const [count, setCount] = useState<number>();

  const { data: counterData } = useLiveCounterSubscription();

  /**
   * Whenever the subscription looses connection it returns data === undefined
   * so to keep the last legit result we need to store it in the state.
   *
   * Better solution would be to use the Apollo Cache
   * but I couldn't figure out how to use it with subscriptions.
   */
  useEffect(() => {
    if (counterData) {
      setCount(counterData.counter.count);
    }
  }, [counterData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-3">
      <Head>
        <title>Next.js Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{JSON.stringify(count)}</h1>
      {linksData?.links.map((link) => (
        <li
          key={link.id}
          className="list-none shadow-lg hover:shadow-2xl  max-w-md rounded"
        >
          <img className="shadow-sm" src={link.imageUrl} />
          <div className="p-5 flex flex-col space-y-2">
            <p className="text-sm text-blue-500">{link.category}</p>
            <p className="text-lg font-medium">{link.title}</p>
            <p className="text-gray-600">{link.description}</p>
            <a href={link.url} className="flex hover:text-blue-500">
              {link.url.replace(/(^\w+:|^)\/\//, '')}
              <svg
                className="w-4 h-4 my-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </li>
      ))}
    </div>
  );
}
