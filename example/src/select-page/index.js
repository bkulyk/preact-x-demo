import React, { Fragment, useState } from 'react';
import { Typography, Select, Button } from '@bitchin/react-material-web';
import Example from '../example';
import PageTitle from '../page-title';

const Eg = ({ ...props }) => (
  <span style={{ marginRight: '15px' }} {...props} />
);

const SelectPage = () => {
  const [best, setBest] = useState('Darth Vader');
  const [valid, setValid] = useState(true);

  const handleChange = (v) => {
    setBest(v);
    setValid(v === 'Darth Vader');
  };

  const handleButton = () => {
    setBest('Darth Vader');
    setValid(true);
  };

  return (
    <Fragment>
      <PageTitle>Select Boxes</PageTitle>

      <Typography use="headline5" component="h3">Simple</Typography>
      <Example>
        <Select
          id="simple"
          label="Your Fav!"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
        />
      </Example>

      <Typography use="headline5" component="h3">With Object Options</Typography>
      <Example>
        <Select
          id="object-simple"
          label="Your Fav!"
          options={{ 1: 'Darth Vader', 2: 'Darth Maul', 3: 'Darth Plagueis' }}
        />
      </Example>

      <Typography use="headline5" component="h3">Outlined</Typography>
      <Example>
        <Select
          id="simple"
          label="Your Fav!"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          outlined
        />
      </Example>

      <Typography use="headline5" component="h3">With Helper Line</Typography>
      <Example>
        <Select
          id="placeholder"
          label="Your Fav!"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          help="Just pick one..."
        />
      </Example>

      <Typography use="headline5" component="h3">Disabled</Typography>
      <Example>
        <Eg>
          <Select
            id="disabled-simple"
            label="Your Fav!"
            options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
            disabled
          />
        </Eg>
        <Eg>
          <Select
            id="disabled-outlined"
            label="Your Fav!"
            options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
            outlined
            disabled
          />
        </Eg>
      </Example>

      <Typography use="headline5" component="h3">Required Select</Typography>
      <Example>
        <Select
          id="required-simple"
          label="Your Fav!"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          required
        />
      </Example>

      <Typography use="headline5" component="h3">Required Outlined Select</Typography>
      <Example>
        <Select
          id="required-outlined"
          label="Your Fav!"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          outlined
          required
        />
      </Example>

      <Typography use="headline5" component="h3">With Icon</Typography>
      <Example>
        <Select
          id="required-outlined"
          label="Your Fav!"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          icon="favorite"
          required
        />
      </Example>

      <Typography use="headline5" component="h3">Controlled Select</Typography>
      <Example>
        <Select
          id="controlled"
          label="Pick the best"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          onChange={handleChange}
          value={best}
          valid={valid}
          help={`You think the best is: ${best}. That's ${valid ? 'correct' : 'not quite right'}`}
        />

        <div style={{ minHeight: '50px', marginTop: '14px' }}>
          {
            best === 'Darth Vader'
              ? ''
              : (<Button onClick={handleButton}>It&apos;s Darth Vader</Button>)
          }
        </div>
      </Example>

      <Typography use="headline5" component="h3">Enhanced Select</Typography>
      <Example>
        <Select
          id="enhanced"
          label="Pick the best"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          enhanced
        />
      </Example>

      <Typography use="headline5" component="h3">Enhanced Outlined Select</Typography>
      <Example>
        <Select
          id="enhanced"
          label="Pick the best"
          options={['Darth Vader', 'Darth Maul', 'Darth Plagueis']}
          outlined
          enhanced
        />
      </Example>
    </Fragment>
  );
};

export default SelectPage;
