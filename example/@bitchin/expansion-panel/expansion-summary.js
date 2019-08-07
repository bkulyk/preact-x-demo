import React from 'react';
import { func, node, shape } from 'prop-types';
import ButtonIcon from '../button-icon';
import Typography from '../typography';

const ExpansionSummary = ({
  onOpen = () => {},
  children,
  style = {},
  buttonStyle = {},
}) => (
  <div className="panel-summary" onClick={onOpen} style={style}>
    <Typography use="body1">
      {children}
    </Typography>
    <ButtonIcon style={buttonStyle}>expand_more</ButtonIcon>
  </div>
);

ExpansionSummary.propTypes = {
  onOpen: func,
  children: node.isRequired,
  style: shape(),
  buttonStyle: shape(),
};

export default ExpansionSummary;
