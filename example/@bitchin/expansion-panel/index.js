import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Transition from '../transition';
import ExpansionSummary from './expansion-summary'
import {
  panelStyles,
  buttonStyles,
  summaryStyles,
  detailsStyles,
} from './style';

const ExpansionPanel = ({
  onChange = () => {},
  summary,
  details = '',
  disabled = false,
  open,
  children = '',
}) => {
  const [opened, setOpened] = useState(open);
  const wrapperRef = useRef();
  const [height, setHeight] = useState();

  const handleOpened = () => {
    if (!disabled) {
      setOpened(!opened);
      onChange(opened);
    }
  };

  useEffect(() => {
    setHeight(wrapperRef.current.clientHeight);
  });

  useEffect(() => {
    setOpened(open);
  }, [open]);

  const mainPanelStyles = disabled
    ? panelStyles.disabled
    : panelStyles.default;

  return (
    <Transition on={!opened}>
      {state => (
        <div className="expansionPanel mdc-elevation--z1" style={{ ...mainPanelStyles, ...panelStyles[state] }}>
          <ExpansionSummary
            onOpen={handleOpened}
            buttonStyle={{ ...buttonStyles.default, ...buttonStyles[state] }}
            style={{ ...summaryStyles.default, ...summaryStyles[state] }}
          >
            {summary}
          </ExpansionSummary>
          <div
            className="expansionDetails"
            style={{ ...detailsStyles.default, ...detailsStyles.transition(height)[state] }}
          >
            <div ref={wrapperRef}>{details}{children}</div>
          </div>
       </div>
      )}
    </Transition>
  )
};

ExpansionPanel.propTypes = {
  summary: PropTypes.node.isRequired,
  details: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default ExpansionPanel;
