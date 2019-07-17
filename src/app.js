import React, { useState, useEffect } from 'react';
import { Provider } from 'urql';
import Version from './version';
import client from './graphql_client';

const App = () => {
  const [x] = useState('default');

  return (
    <Provider value={client}>
      <div>hi there {x}</div>
      <Version />
    </Provider>
  );
};

export default App;
