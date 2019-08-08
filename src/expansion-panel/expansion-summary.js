import React from 'react';
import { func, node, shape } from 'prop-types';
import ButtonIcon from '../button-icon';
import Typography from '../typography';

const ExpansionSummary = ({
  children,
  style = {},
  buttonStyle = {},
  ...props
}) => (
  <div
    className="panel-summary"
    style={style}
    {...props}
  >
    <Typography use="body1">
      {children}
    </Typography>
    <ButtonIcon style={buttonStyle}>expand_more</ButtonIcon>
  </div>
);

ExpansionSummary.propTypes = {
  children: node.isRequired,
  style: shape(),
  buttonStyle: shape(),
  onOpen: func,
  onKeyDown: func,
  onKeyUp: func,
  onKeyPress: func,
};

export default ExpansionSummary;
