import React from 'react';
import propTypes from 'prop-types';
import ButtonIcon from '../button-icon';
import Typography from '../typography';

const ExpansionSummary = ({ onOpen, children, style, buttonStyle }) => (
  <div className="panel-summary" onClick={onOpen} style={style}>
    <Typography use="body1">
      {children}
    </Typography>
    <ButtonIcon style={buttonStyle}>expand_more</ButtonIcon>
  </div>
);

ExpansionSummary.propTypes = {
  onOpen: propTypes.func,
  children: propTypes.node.isRequired,
  style: propTypes.shape(),
  buttonStyle: propTypes.shape(),
};

ExpansionSummary.defaultProps = {
  style: {},
  buttonStyle: {},
  onOpen: () => {},
};

export default ExpansionSummary;
