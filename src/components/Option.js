import React from 'react';

const Option = props => (
  <div className="option">
    <span className="option-title">
      {props.id + 1}. {props.text}
    </span>
    <button
      className="button button--delete"
      type="button"
      id={props.id}
      onClick={props.handleDelete}
    >
      delete
    </button>
  </div>
);

export default Option;
