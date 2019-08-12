import React, { Fragment, useState } from 'react';
import { Typography, TabBar, Tab } from '@bitchin/react-material-web';
import Example from '../example';
import PageTitle from '../page-title';

const makeArray = x => Array(x).fill(0, 0, x);
const makeKey = i => `tab-${i}`;

const TabBarPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <Fragment>
      <PageTitle>Tab Bar</PageTitle>

      <Typography use="headline5" component="h3">Tabs with icons next to labels</Typography>
      <Example>
        <TabBar activeIndex={0}>
          <Tab icon="access_time" label="Recent" />
          <Tab icon="near_me" label="Nearby" />
          <Tab icon="favorite" label="Favorites" />
        </TabBar>
      </Example>

      <Typography use="headline5" component="h3">Tabs with icons above labels and indicators restricted to content</Typography>
      <Example>
        <TabBar activeIndex={0}>
          <Tab stacked icon="access_time" label="Recent" />
          <Tab stacked icon="near_me" label="Nearby" />
          <Tab stacked icon="favorite" label="Favorites" />
        </TabBar>
      </Example>

      <Typography use="headline5" component="h3">Scrolling tabs</Typography>
      <Example>
        <TabBar>
          {makeArray(15).map((i, k) => (
            <Tab icon="tab" label={`Tab ${k + 1}`} key={makeKey(k)} />
          ))}
        </TabBar>
      </Example>

      <Typography use="headline5" component="h3">Controlled Tabs Example</Typography>
      <Example>
        <TabBar activeIndex={currentTab} onChange={({ index }) => setCurrentTab(index)}>
          <Tab icon="access_time" label="Recent" />
          <Tab icon="near_me" label="Nearby" />
          <Tab icon="favorite" label="Favorites" />
        </TabBar>

        <Typography component="aside" style={{ display: currentTab === 0 ? 'block' : 'none' }}>
          <p>some recent content goes here</p>
        </Typography>

        <Typography component="aside" style={{ display: currentTab === 1 ? 'block' : 'none' }}>
          <p>some nearby content goes here</p>
        </Typography>

        <Typography component="aside" style={{ display: currentTab === 2 ? 'block' : 'none' }}>
          <p>some favorite content goes here</p>
        </Typography>
      </Example>
    </Fragment>
  );
};

export default TabBarPage;
