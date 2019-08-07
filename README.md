# @bitchin/react-material-web

>

[![NPM](https://img.shields.io/npm/v/@bitchin/react-material-web.svg)](https://www.npmjs.com/package/@bitchin/react-material-web) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bitchin/react-material-web
```

### Setup

Some where in your app, you will want to import the fonts (Roboto and Material Icons, both loaded from fonts.googleapis.com). As well as import the Material Components Web css (however you choose).

```jsx
import React, { Fragment } from 'react';
import { BaseFonts } from '@bitchin/react-material-web';

const App = () => (
  <Fragment>
    <BaseFonts />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/material-components-web/3.1.0/material-components-web.min.css" rel="stylesheet" />
    {/* whatever other things your app does goes here */}
  </Fragment>
);
```

## Usage

```jsx
import React from 'react'
import { Button } from '@bitchin/react-material-web'

const Example = () => {
  return (
    <Button>My Button</Button>
  );
}
```

## License

MIT © [](https://github.com/)
