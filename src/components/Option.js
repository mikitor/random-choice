import React from 'react';

function Option(props) {
  return (
    <div>
      <p>{props.text}</p>
      <button id={props.id} onClick={props.handleDelete}>Remove option</button>
    </div>
  );
}

export default Option;
