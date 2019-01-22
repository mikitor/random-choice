import React from 'react';

import Option from './Option';

function Options(props) {
  return (
    <div>
      {props.options.length === 0 && <p>Please get an option to get started! :)</p>}
      <button onClick={props.handleDeleteAll}>Remove All</button>
      {props.options.map((option, index) => {
        return <Option key={index} id={index} text={option} handleDelete={props.handleDelete} />
      })}
    </div>
  );
}

export default Options;
