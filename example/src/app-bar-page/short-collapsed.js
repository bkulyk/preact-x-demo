import React from 'react';
import { AppBar } from '@bitchin/react-material-web';
import Wrapper from './wrapper';

const Short = () => (
  <Wrapper>
    <AppBar title="Always Collapsed" short shortCollapsed />
  </Wrapper>
);

export default Short;
