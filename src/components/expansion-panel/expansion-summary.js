import React from 'react';
import ButtonIcon from '../button-icon';

const ExpansionSummary = ({ onOpen, children, style, buttonStyle }) => (
  <div className="panel-summary" onClick={onOpen}  style={style}>
    {children}
    <ButtonIcon style={buttonStyle}>expand_more</ButtonIcon>
  </div>
);

export default ExpansionSummary;
