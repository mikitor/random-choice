import React from 'react';

const Action = props => (
  <button
    className="main-button"
    type="button"
    onClick={props.makeDecision}
    disabled={!props.length}
  >
    What should I do?
  </button>
);

export default Action;
