import React, { Fragment } from 'react';
import PageTitle, { SectionTitle } from '../page-title';
import Demo from './demo';

const AppBarPage = () => (
  <Fragment>
    <PageTitle>App Bars</PageTitle>

    <section>
      <SectionTitle>Standard</SectionTitle>
      <Demo path="app-bar-simple" title="Standard" />
    </section>

    <section>
      <SectionTitle>Short</SectionTitle>
      <Demo path="app-bar-short" title="Short" />
    </section>

    <section>
      <SectionTitle>Short - Always Collapsed</SectionTitle>
      <Demo path="app-bar-short-collapsed" title="Short - Always Collapsed" />
    </section>
  </Fragment>
);

export default AppBarPage;
