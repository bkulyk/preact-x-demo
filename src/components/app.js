import React, { useState } from 'react';
import { Provider } from 'urql';
import Version from './version';
import client from '../graphql_client';
import List from './list';

const App = () => {
  const [x] = useState('default');

  return (
    <Provider value={client}>
      <div>hi there {x}</div>
      <Version />
      <List />
    </Provider>
  );
};

export default App;
