import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, url, ratio }) => (
  <div className="mdc-card__primary-action">
    <div className={`mdc-card__media mdc-card__media--${ratio}`} style={{ backgroundImage: `url(${url})` }}>
      <div className="mdc-card__media-content">{title}</div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  ratio: PropTypes.oneOf(['square', '16-9'])
}

Card.defaultProps = {
  title: '',
  ratio: '16-9',
  width: 350,
  height: 380,
};

export default Card;
