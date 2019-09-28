import React, { Fragment, useState } from 'react';
import {
  ImageList,
  ImageListItem,
  Typography,
  Select,
} from '@bitchin/react-material-web';
import PageTitle, { SectionTitle } from '../page-title';

const makeKey = i => `image-${i}`;

const labels = [
  'Croissant marshmallow cake',
  'Powder cake chupa chups',
  'Lollipop danish candy',
  'Dragée bear claw',
  'Brownie muffin tart cheesecake',
  'Jelly jelly icing marzipan',
  'Cake croissant cupcake ice',
  'Tart ice cream tart',
  'Carrot cake sweet roll',
];

const standardStyle = {
  width: '176px',
  height: '117px',
  overflow: 'hidden',
  margin: '2px',
};

const ImageListPage = () => {
  const [columns, setColumns] = useState(6);
  return (
    <Fragment>
      <PageTitle>Image Lists</PageTitle>

      <section>
        <SectionTitle>With Text Protection</SectionTitle>
        <ImageList textProtection>
          {labels.map((label, i) => (
            <ImageListItem
              key={makeKey(i)}
              src={`/images/${i + 1}.jpg`}
              label={label}
              alt={label}
              style={standardStyle}
            />
          ))}
        </ImageList>
      </section>

      <section>
        <SectionTitle>Masonry Style</SectionTitle>
        <Select
          id="column-control"
          value={`${columns}`}
          onChange={v => setColumns(parseInt(v, 10))}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => `${v}`)}
          label="Columns"
        />

        <ImageList masonry columnCount={columns}>
          {labels.map((label, i) => (
            <ImageListItem
              key={makeKey(i)}
              src={`/images/${i + 1}.jpg`}
              label={label}
              alt={label}
            />
          ))}
        </ImageList>
      </section>

      <Typography component="p">
        Images from:
        {' '}
        <a href="https://unsplash.com/search/photos/sample">
          https://unsplash.com/search/photos/sample
        </a>
      </Typography>
    </Fragment>
  );
};

export default ImageListPage;
