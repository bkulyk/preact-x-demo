import React, { Fragment } from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcon,
  CardActionIcons,
  Typography,
} from '@bitchin/react-material-web';

const CardDemo = () => (
  <Fragment>
    <Typography component="h2" use="headline4">Cards</Typography>
    <Typography component="h3" use="headline5">Simple</Typography>
    <Card
      width="21rem"
      title="Our Changing Planet"
      subtitle="by Kurt Wagner"
      content="Visit ten places on our planet that are undergoing the biggest changes today."
    />

    <Typography component="h3" use="headline5">With Media</Typography>
    <Card
      title="Our Changing Planet"
      subtitle="by Kurt Wagner"
      content="Visit ten places on our planet that are undergoing the biggest changes today."
      media={(<CardMedia url="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />)}
    />

    <Typography component="h3" use="headline5">With Media and actions</Typography>
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
