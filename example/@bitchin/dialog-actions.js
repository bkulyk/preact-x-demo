import React, { Fragment } from 'react';
import {
  string as str,
  shape,
  arrayOf,
  oneOfType,
} from 'prop-types';

const isDefaultAction = (key, defaultAction) => (
  key === defaultAction
    ? {
      'data-mdc-dialog-button-default': true,
      'data-mdc-dialog-initial-focus': true,
    }
    : {}
);

const actionsToArray = actions => (Array.isArray(actions)
  ? actions.map(action => [action, action])
  : Object.keys(actions).map(
    key => [key, actions[key]],
  )
);

const DialogActions = ({ actions, defaultAction = null }) => (
  <Fragment>
    {actionsToArray(actions).map(([key, label]) => (
      <button
        type="button"
        className="mdc-button mdc-dialog__button"
        key={key}
        data-mdc-dialog-action={key}
        {...isDefaultAction(key, defaultAction)}
      >
        {label || key}
      </button>
    ))}
  </Fragment>
);

DialogActions.propTypes = {
  actions: oneOfType([
    arrayOf(str),
    shape(),
  ]).isRequired,
  defaultAction: str,
};

export default DialogActions;
