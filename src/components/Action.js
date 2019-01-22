import React from 'react';

function Action(props) {
  return (
    <button
      onClick={props.makeDecision}
      disabled={!props.length}
    >
      What should I do?
    </button>
  );
}

export default Action;