import React from 'react';

const Option = props => (
  <div>
    <p>{props.text}</p>
    <button id={props.id} onClick={props.handleDelete}>Remove option</button>
  </div>
);

export default Option;
