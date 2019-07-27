import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import ExpansionSummary from './expansion-summary'
import {
  panelStyles,
  buttonStyles,
  summaryStyles,
  detailsStyles,
} from './style';

const ExpansionPanel = ({ onChange, summary, details }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef();
  const [height, setHeight] = useState();

  const handleOpen = () => {
    setOpen(!open);
    onChange(open);
  };

  useEffect(() => {
    setHeight(wrapperRef.current.clientHeight);
  });

  return (
    <Transition in={!open}>
      {state => (
        <div className="expansionPanel mdc-elevation--z1" style={{ ...panelStyles.default, ...panelStyles[state] }}>
          <ExpansionSummary
            onOpen={handleOpen}
            buttonStyle={{ ...buttonStyles.default, ...buttonStyles[state] }}
            style={{ ...summaryStyles.default, ...summaryStyles[state] }}
          >
            {summary}
          </ExpansionSummary>
          <div
            className="expansionDetails"
            style={{ ...detailsStyles.default, ...detailsStyles.transition(height)[state] }}
          >
            <div ref={wrapperRef}>{details}</div>
          </div>
       </div>
      )}
    </Transition>
  )
};

ExpansionPanel.propTypes = {
  summary: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

ExpansionPanel.defaultProps = {
  onChange: () => undefined,
};

export default ExpansionPanel;
