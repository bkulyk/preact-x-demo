import React, { Fragment } from 'react';
import PageTitle, { SectionTitle } from '../page-title';
import Demo from './demo';

const AppBarPage = () => (
  <Fragment>
    <PageTitle>App Bars</PageTitle>

    <section>
      <SectionTitle>Standard</SectionTitle>
      <Demo path="app-bar-demo" />
    </section>
  </Fragment>
);

export default AppBarPage;
