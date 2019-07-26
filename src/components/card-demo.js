import React from 'react';
import { Typography } from '@rmwc/typography';
import { Card, CardActionButton, CardActionIcons, CardActionIcon, CardActions, CardActionButtons, CardPrimaryAction, CardMedia } from '@rmwc/card';

const CardDemo = () => (
  <Card style={{ width: '21rem' }}>
    <CardPrimaryAction>
      <CardMedia
        sixteenByNine
        style={{
          backgroundImage: 'url(https://rmwc.io/images/backgrounds/mb-bg-fb-16.png)'
        }}
      />
      <div style={{ padding: '0 1rem 1rem 1rem' }}>
        <Typography use="headline6" tag="h2">
          Our Changing Planet
        </Typography>
        <Typography
          use="subtitle2"
          tag="h3"
          theme="textSecondaryOnBackground"
          style={{ marginTop: '-1rem' }}
        >
          by Kurt Wagner
        </Typography>
        <Typography
          use="body1"
          tag="div"
          theme="textSecondaryOnBackground"
        >
          Visit ten places on our planet that are undergoing the biggest
          changes today.
        </Typography>
      </div>
    </CardPrimaryAction>
    <CardActions>
      <CardActionButtons>
        <CardActionButton>Read</CardActionButton>
        <CardActionButton>Bookmark</CardActionButton>
      </CardActionButtons>
      <CardActionIcons>
        <CardActionIcon onIcon="favorite" icon="favorite_border" />
        <CardActionIcon icon="share" />
        <CardActionIcon icon="more_vert" />
      </CardActionIcons>
    </CardActions>
  </Card>
);

export default CardDemo;
