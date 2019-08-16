import React, { Fragment } from 'react';
import { node } from 'prop-types';
import { BaseFonts } from '@bitchin/react-material-web';
import LoremIpsum from './lorem-ipsum';

const Wrapper = ({ children }) => (
  <Fragment>
    <BaseFonts />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/material-components-web/3.1.0/material-components-web.min.css" rel="stylesheet" />
    {children}
    <main>
      <LoremIpsum />
    </main>
  </Fragment>
);

Wrapper.propTypes = {
  children: node.isRequired,
};

export default Wrapper;
