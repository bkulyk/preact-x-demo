import React from 'react';
import {
  string as str,
  node,
  object as obj,
} from 'prop-types';
import Typography from '../typography';

const Card = ({
  title = '',
  subtitle = '',
  content = '',
  media = '',
  height = 'auto',
  width = '350px',
  children = '',
  style = {},
}) => (
  <div className="mdc-card" style={{ height, width, ...style }}>
    <div className="mdc-card__primary-action">
      {media}
    </div>
    <div className="demo-card__primary" style={{ padding: '0px 16px' }}>
      <Typography use="headline6" className="card__title" component="h2">{title}</Typography>
      <Typography use="subtitle2" className="card__subtitle" component="h3">{subtitle}</Typography>
    </div>
    <Typography className="demo-card__secondary" use="body2" style={{ padding: '0px 16px 8px 16px' }} component="div">
      {content}
    </Typography>
    {children}
  </div>
);

Card.propTypes = {
  title: str,
  subtitle: str,
  content: node,
  width: str,
  height: str,
  media: node,
  children: node,
  style: obj,
};

export default Card;
