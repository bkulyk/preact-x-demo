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
import PageTitle from '../page-title'
import Example from '../example';

const CardDemo = () => (
  <Fragment>
    <PageTitle>Cards</PageTitle>
    <Typography component="h3" use="headline5">Simple</Typography>
    <Example>
      <Card
        width="21rem"
        title="Our Changing Planet"
        subtitle="by Kurt Wagner"
        content="Visit ten places on our planet that are undergoing the biggest changes today."
      />
    </Example>

    <Typography component="h3" use="headline5">With Media</Typography>
    <Example>
      <Card
        title="Our Changing Planet"
        subtitle="by Kurt Wagner"
        content="Visit ten places on our planet that are undergoing the biggest changes today."
        media={(<CardMedia url="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />)}
      />
    </Example>

    <Typography component="h3" use="headline5">With Media and actions</Typography>
    <Example>
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
    </Example>
  </Fragment>
);

export default CardDemo;
