import React, { Fragment } from 'react';
import Card from '../components/card';
import CardMedia from '../components/card/card-media';
import CardActions from '../components/card/card-actions';
import CardActionButtons from '../components/card/card-action-buttons';
import CardActionIcons from '../components/card/card-action-icons';
import CardActionButton from '../components/card/card-action-button';
import CardActionIcon from '../components/card/card-action-icon';

const CardDemo = () => (
  <Fragment>
    <h2>Cards</h2>
    <h3>Simple</h3>
    <Card
      width="21rem"
      title="Our Changing Planet"
      subtitle="by Kurt Wagner"
      content="Visit ten places on our planet that are undergoing the biggest changes today."
    />

    <h3>With Media</h3>
    <Card
      title="Our Changing Planet"
      subtitle="by Kurt Wagner"
      content="Visit ten places on our planet that are undergoing the biggest changes today."
      media={(<CardMedia url="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />)}
    />

    <h3>With Media and actions</h3>
    <Card
      title="Our Changing Planet"
      subtitle="by Kurt Wagner"
      content="Visit ten places on our planet that are undergoing the biggest changes today."
      media={(<CardMedia url="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />)}
    >
      <CardActions>
        <CardActionButtons>
          <CardActionButton>View</CardActionButton>
          <CardActionButton>Bookmark</CardActionButton>
        </CardActionButtons>

        <CardActionIcons>
          <CardActionIcon>favorite</CardActionIcon>
          <CardActionIcon>share</CardActionIcon>
          <CardActionIcon>more_vert</CardActionIcon>
        </CardActionIcons>
      </CardActions>
    </Card>
  </Fragment>
);

export default CardDemo;
