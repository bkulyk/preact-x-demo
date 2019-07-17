import React from 'react';

const Link = ({ children, onClick }) => (
  <a href="#" onClick={onClick} className="linky">{children}</a>
);

export default Link;
