import { func, bool } from 'prop-types';

const Transition = ({
  on = false,
  children,
}) => children(on ? 'entered' : 'exited');

Transition.propTypes = {
  on: bool,
  children: func,
}

export default Transition;
