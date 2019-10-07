import React, { useEffect, useRef, useState } from 'react';
import {
  string as str,
  oneOfType,
  node,
  func,
  bool,
  shape,
  arrayOf,
} from 'prop-types';
import { MDCDialog } from '@material/dialog';
import DialogActions from './dialog-actions';

const isCustomActions = actions => actions && actions.$$typeof;

const Dialog = ({
  title,
  body = '',
  open = false,
  onClose = () => {},
  onOpen = () => {},
  actions = { ok: 'OK' },
  defaultAction = null,
  className = '',
  ...props
}) => {
  const ref = useRef();
  const [mdcDialog, setMDCDialog] = useState();

  const handleClose = event => onClose(event.detail, event);
  const handleOpen = event => onOpen(event.detail, event);

  useEffect(
    () => {
      const dialog = MDCDialog.attachTo(ref.current);
      dialog.listen('MDCDialog:closed', handleClose);
      dialog.listen('MDCDialog:opened', handleOpen);
      setMDCDialog(dialog);
    },
    [],
  );

  useEffect(
    () => {
      if (mdcDialog) {
        if (open && !mdcDialog.isOpen) {
          mdcDialog.open();
        } else if (mdcDialog.isOpen) {
          mdcDialog.close();
        }
      }
    },
    [open],
  );

  const renderTitle = () => (
    <h2 className="mdc-dialog__title" id="my-dialog-title">{title}</h2>
  );

  return (
    <div
      className={`mdc-dialog ${className}`.trim()}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-content"
      ref={ref}
      {...props}
    >
      <div className="mdc-dialog__container">
        <div className="mdc-dialog__surface">
          {title && renderTitle(title)}
          <div className="mdc-dialog__content" id="my-dialog-content">
            {body}
          </div>
          <footer className="mdc-dialog__actions">
            {
              isCustomActions(actions)
                ? actions
                : <DialogActions actions={actions} defaultAction={defaultAction} />
            }
          </footer>
        </div>
      </div>
      <div className="mdc-dialog__scrim" />
    </div>
  );
};

Dialog.propTypes = {
  title: oneOfType([str, node]),
  body: oneOfType([str, node]),
  open: bool,
  onClose: func,
  onOpen: func,
  actions: oneOfType([
    arrayOf(str),
    shape(),
    node,
  ]),
  defaultAction: str,
  className: str,
};

export default Dialog;
