import React from 'react';
import { AppBar, AppBarIcons, IconButton } from '@bitchin/react-material-web';
import Wrapper from './wrapper';

const Simple = () => (
  <Wrapper>
    <AppBar title="Standard">
      <AppBarIcons>
        <IconButton icon="favorite" />
        <IconButton icon="print" />
        <IconButton icon="person" />
      </AppBarIcons>
    </AppBar>
  </Wrapper>
);

export default Simple;
