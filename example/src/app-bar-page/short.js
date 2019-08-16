import React from 'react';
import { AppBar, IconButton, AppBarIcons } from '@bitchin/react-material-web';
import Wrapper from './wrapper';

const ShortCollapsed = () => (
  <Wrapper>
    <AppBar title="Short" short>
      <AppBarIcons>
        <IconButton icon="favorite" />
      </AppBarIcons>
    </AppBar>
  </Wrapper>
);

export default ShortCollapsed;
