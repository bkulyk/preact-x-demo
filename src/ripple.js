import { useRef, useEffect, cloneElement } from 'react';
import { node } from 'prop-types';
import { MDCRipple } from '@material/ripple';

const Ripple = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    /* eslint no-new: off */
    new MDCRipple(ref.current);
  });

  return cloneElement(children, { ref });
};

Ripple.propTypes = {
  children: node.isRequired,
};

export default Ripple;
