import React from 'react';
import ListItem from './list-item';

const List = () => {
  const items = ['a', 'b', 'c', 'd'];

  return (
    <ul>
      {items.map(i => (<ListItem>{i}</ListItem>))}
    </ul>
  );
};

export default List;
