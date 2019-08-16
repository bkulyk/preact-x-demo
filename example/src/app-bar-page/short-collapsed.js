import React from 'react';
import { AppBar, AppBarIcons, IconButton } from '@bitchin/react-material-web';
import Wrapper from './wrapper';

const Short = () => (
  <Wrapper>
    <AppBar title="Always Collapsed" short shortCollapsed>
      <AppBarIcons>
        <IconButton icon="person" />
      </AppBarIcons>
    </AppBar>
  </Wrapper>
);

export default Short;
