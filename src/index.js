import React, { useState, useEffect } from 'react';
import { render } from 'preact';

const App = () => {
  const [x] = useState('default');

  useEffect(() => {
    console.log('generic');
  });

  useEffect(() => {
    console.log('first');
  }, []);

  return (
    <div>hi there {x}</div>
  );
};

render(<App />, document.body);
