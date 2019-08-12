import React from 'react';
import { Typography } from '@bitchin/react-material-web';

const PageTitle = ({ ...props }) => (
  <Typography component="h2" use="headline4" {...props} />
);

export default PageTitle;
