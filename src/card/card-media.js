import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  url,
  title = '',
  ratio = '16-9',
}) => (
  <div className="mdc-card__primary-action">
    <div className={`mdc-card__media mdc-card__media--${ratio}`} style={{ backgroundImage: `url(${url})` }}>
      <div className="mdc-card__media-content">{title}</div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  ratio: PropTypes.oneOf(['square', '16-9']),
};

export default Card;
