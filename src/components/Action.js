import React from 'react';

const Action = props => (
  <button
    onClick={props.makeDecision}
    disabled={!props.length}
  >
    What should I do?
  </button>
);

export default Action;