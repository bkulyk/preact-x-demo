import React from 'react';
import {
  Typography,
  Card,
  List,
  NavLink,
} from '@bitchin/react-material-web';
import ColorForm from './color-form';
import ButtonExamples from './button-examples';

const ThemePage = () => (
  <div>
    <ColorForm />
    <div>
      <Typography use="headline5" component="h3">Button Example:</Typography>
      <Typography component="h4">Raised Buttons</Typography>
      <ButtonExamples />

      <Typography use="headline5" component="h3">Card Example:</Typography>
      <Card title="Card" subtitle="A card is a surface" />

      <Typography use="headline5" component="h3">Drawer Example:</Typography>
      <aside className="mdc-drawer">
        <div className="mdc-drawer__content">
          <List component="div">
            <NavLink icon="favorite" active>Active NavLink</NavLink>
            <NavLink icon="favorite">In-Active NavLink</NavLink>
          </List>
        </div>
      </aside>
    </div>
  </div>
);

export default ThemePage;
