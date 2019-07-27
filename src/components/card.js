import React from 'react';
import PropTypes from 'prop-types';

const CardMedia = ({ title, subtitle, content, media, height, width, children }) => (
  <div className="mdc-card" style={{ height, width }}>
    <div className="mdc-card__primary-action">
      {media}
    </div>
    <div className="demo-card__primary" style={{ padding: '0px 16px' }}>
      <h2 className="demo-card__title mdc-typography mdc-typography--headline6">{title}</h2>
      <h3 className="demo-card__subtitle mdc-typography mdc-typography--subtitle2">{subtitle}</h3>
    </div>
    <div className="demo-card__secondary mdc-typography mdc-typography--body2" style={{ padding: '0px 16px 8px 16px' }}>
      {content}
    </div>
    {children}
  </div>
);

CardMedia.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
  media: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  media: PropTypes.node,
  children: PropTypes.node,
};

CardMedia.defaultProps = {
  media: null,
  title: '',
  subtitle: '',
  content: '',
  width: 350,
  height: 'auto',
  media: '',
  children: '',
};

export default CardMedia;
