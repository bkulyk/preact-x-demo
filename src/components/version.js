import React from 'react';
import { useQuery } from 'urql';

const Version = () => {
  const [result] = useQuery({ query: '{ version }' });

  const { fetching, data } = result;

  return <span>{fetching ? 'loading...' : data.version}</span>;
};

export default Version;
