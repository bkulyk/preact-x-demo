import React, { Fragment } from 'react';
import { node } from 'prop-types';
import { Typography, TextField, Icon } from '@bitchin/react-material-web';
import Example from '../example';
import PageTitle from '../page-title';

const Eg = ({ children }) => (<div style={{ margin: '10px 0px' }}>{children}</div>);
Eg.propTypes = {
  children: node.isRequired,
};

const TextFieldPage = () => (
  <Fragment>
    <PageTitle>Form Controls</PageTitle>

    <Typography use="headline5" component="h3">Filled Text Input</Typography>
    <Example>
      <Eg>
        <TextField
          id="filled-1"
          placeholder="placeholder text"
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="filled-2"
          leadingIcon={(<Icon icon="event" />)}
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="filled-3"
          trailingIcon={(<Icon icon="event" />)}
          label="Standard"
          help="Helper Text"
        />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">Outlined Text Input</Typography>
    <Example>
      <Eg>
        <TextField
          id="outlined-1"
          outlined
          placeholder="placeholder text"
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="outlined-2"
          outlined
          placeholder="placeholder text"
          leadingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="outlined-2"
          outlined
          placeholder="placeholder text"
          trailingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="Helper Text"
        />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">Required Text Input</Typography>
    <Example>
      <Eg>
        <TextField
          id="outlined-1"
          outlined
          placeholder="placeholder text"
          label="Standard"
          help="Helper Text"
          required
        />
      </Eg>

      <Eg>
        <TextField
          id="required-2"
          outlined
          placeholder="placeholder text"
          leadingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="Helper Text"
          required
        />
      </Eg>

      <Eg>
        <TextField
          id="required-2"
          outlined
          placeholder="placeholder text"
          trailingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="Helper Text"
          required
        />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">Text Input with error</Typography>
    <Example>
      <Eg>
        <TextField
          id="invalid-1"
          outlined
          placeholder="placeholder text"
          label="Standard"
          help="I've made a huge mistake!"
          invalid
        />
      </Eg>

      <Eg>
        <TextField
          id="invalid-2"
          outlined
          placeholder="placeholder text"
          leadingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="I've made a huge mistake!"
          invalid
        />
      </Eg>

      <Eg>
        <TextField
          id="invalid-3"
          outlined
          placeholder="placeholder text"
          trailingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="I've made a huge mistake!"
          invalid
        />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">TextAreas</Typography>
    <Example>
      <Eg>
        <TextField
          textarea
          id="textarea-1"
          outlined
          placeholder="placeholder text"
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          textarea
          id="textarea-2"
          outlined
          placeholder="placeholder text"
          leadingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          textarea
          id="textarea-2"
          outlined
          placeholder="placeholder text"
          trailingIcon={(<Icon icon="favorite" />)}
          label="Standard"
          help="Helper Text"
        />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">Full Width Text Input</Typography>
    <Example>
      <Eg>
        <TextField
          id="fullWidth-1"
          placeholder="Standard"
          help="Helper Text"
          fullWidth
        />
      </Eg>
    </Example>
  </Fragment>
);

export default TextFieldPage;
