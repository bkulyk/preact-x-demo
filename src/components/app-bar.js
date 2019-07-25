import React from 'react';
import TopAppBar from 'preact-material-components/esm/TopAppBar';
import FormField from 'preact-material-components/esm/FormField';
import Switch from 'preact-material-components/esm/Switch';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/TopAppBar/style.css';

const AppBar = () => (
  <TopAppBar className="mdc-theme--dark">
    <TopAppBar.Row>
      <TopAppBar.Section align-start={true}>
        <TopAppBar.Icon
          menu={true}
          href="#"
          onClick={e => {
            e.preventDefault();
            this.menu.open();
          }}>
          menu
        </TopAppBar.Icon>
        <TopAppBar.Title>My Title</TopAppBar.Title>
      </TopAppBar.Section>
      <TopAppBar.Section align-end={true}>
        <FormField className="field-darkmode">
          Dark Mode
          <Switch
            className="switch-darkmode"
          />
        </FormField>
      </TopAppBar.Section>
    </TopAppBar.Row>
</TopAppBar>
);

export default AppBar;
