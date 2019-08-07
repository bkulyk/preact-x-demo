import React, { Fragment, useState } from 'react';
import { Typography, Elevation } from '@bitchin/react-material-web';
import Example from '../example';

const style = {
  textAlign: 'center',
  width: '80px',
  display: 'inline-block',
  margin: '0px 26px 26px 0px',
  padding: '30px 0px',
};

const makeKey = i => `el-${i}`;

const ElevationPage = () => {
  const [elevation, setElevation] = useState(0);

  return (
    <Fragment>
      <Typography use="headline4" component="h2">Elevation</Typography>

      <Typography use="headline5" component="h3">25 levels of depth</Typography>
      <Example>
        {[...(new Array(25))].map((_, i) => (
          <Elevation style={style} z={i} key={makeKey(i)}>
            z &rarr;
            {' '}
            {i}
          </Elevation>
        ))}
      </Example>

      <Typography use="headline5" component="h3">Transitions</Typography>
      <Example>
        <Elevation
          style={{ ...style, width: '100px' }}
          z={elevation}
          onMouseOver={() => setElevation(24)}
          onMouseOut={() => setElevation(0)}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          <Typography>Hover over this!</Typography>
        </Elevation>
      </Example>
    </Fragment>
  );
};

export default ElevationPage;
