import React, { Fragment, useState } from 'react';
import { Typography, ExpansionPanel } from '@bitchin/react-material-web';
import Example from '../example';

const SampleContent = () => (
  <div>
    <Typography component="p">details section with content</Typography>
    <Typography component="p">
      blah blah
      <br/>
      blah blah blah blah blah blah blah blah
    </Typography>
  </div>
);

const ExpansionPanelPage = () => {
  const [active, setActive] = useState();
  const handleChange = val => setActive(val);

  return (
    <Fragment>
      <Typography use="headline4" component="h2">Expansion Panels</Typography>

      <Typography use="headline5" component="h3">Simple Panel</Typography>
      <Example>
        <ExpansionPanel summary="So much to say. Just make it go away." open>
          <Typography component="div">
            <p>Cake cookie gingerbread pudding cotton candy sweet roll. Cake tiramisu pastry. Macaroon soufflé toffee dragée brownie tootsie roll gummies. Pudding danish danish cheesecake sweet cheesecake jelly beans. Lollipop danish cookie cake apple pie. Tiramisu sweet roll pie macaroon candy canes gingerbread. Dessert pastry cake lemon drops dessert cake. Sugar plum jelly beans sweet roll wafer cheesecake tiramisu sweet halvah.</p>
            <p>Caramels candy halvah biscuit lollipop carrot cake gingerbread jujubes. Chocolate bar marzipan gingerbread cookie gummies chocolate powder dragée carrot cake. Topping candy soufflé cake carrot cake cheesecake wafer sugar plum. Jelly beans candy powder chocolate cake gummies pie. Lollipop sweet ice cream croissant pie gummi bears caramels biscuit. Carrot cake jelly beans soufflé. Bonbon powder gummi bears sesame snaps brownie. Sesame snaps sweet chocolate cake apple pie caramels pie. Fruitcake tiramisu cookie cake sweet roll pie. Sugar plum sugar plum tiramisu gingerbread tiramisu cake bonbon jelly beans cake. Sweet roll gummi bears tart halvah tart pudding. Brownie halvah gummi bears marzipan cupcake marzipan dessert chocolate cake biscuit. Cotton candy danish chocolate bar liquorice jelly tiramisu powder croissant pastry. Macaroon jelly beans pudding.</p>
          </Typography>
        </ExpansionPanel>
      </Example>

      <Typography use="headline5" component="h3">Multiple Panels</Typography>
      <Example>
        <ExpansionPanel
          summary="Expansion Panel 1"
          details={(<Typography>A very simple details section</Typography>)}
        />
        <ExpansionPanel
          summary="Expansion Panel 2"
          details={(<SampleContent />)}
        />
        <ExpansionPanel
          summary="Expansion Panel 3"
          disabled
          details={(<SampleContent />)}
        />
      </Example>

      <Typography use="headline5" component="h3">Accorion</Typography>
      <Typography component="div">
        <p>
          You can add 'onChange" callbacks and set the "open" to make create an
          accordion style set of panels.
        </p>
      </Typography>
      <Example>
        <ExpansionPanel
          summary="Expansion Panel 1"
          details={(<Typography>A very simple details section</Typography>)}
          open={active === 1}
          onChange={() => handleChange(1)}
        />
        <ExpansionPanel
          summary="Expansion Panel 2"
          details={(<SampleContent />)}
          open={active === 2}
          onChange={() => handleChange(2)}
        />
        <ExpansionPanel
          summary="Expansion Panel 3"
          details={(<SampleContent />)}
          open={active === 3}
          onChange={() => handleChange(3)}
        />
      </Example>
    </Fragment>
  );
};

export default ExpansionPanelPage;
