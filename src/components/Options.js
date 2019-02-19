import React from 'react';

import Option from './Option';

const Options = props => (
  <div>
    <div className="main-header">
      <h3 className="main-header__title">Your Options</h3>
      <button className="button button--delete" type="button" onClick={props.handleDeleteAll}>
        Delete All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="main-message">Please get an option to get started! :)</p>
    )}
    {props.options.map((option, index) => {
      return <Option key={index} id={index} text={option} handleDelete={props.handleDelete} />;
    })}
  </div>
);

export default Options;
