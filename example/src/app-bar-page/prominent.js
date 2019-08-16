import React from 'react';
import { AppBar, AppBarIcons, IconButton } from '@bitchin/react-material-web';
import Wrapper from './wrapper';

const Prominent = () => (
  <Wrapper>
    <AppBar title="Prominent" prominent>
      <AppBarIcons>
        <IconButton icon="favorite" />
        <IconButton icon="print" />
        <IconButton icon="person" />
      </AppBarIcons>
    </AppBar>
  </Wrapper>
);

export default Prominent;
