import React from 'react';

class AddOption extends React.Component {
  state = {
    value: '',
    error: undefined
  };

  handleChange = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.input;
    const error = this.props.addOption(value);
    this.setState({ value: '', error });
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input" value={this.state.value} onChange={this.handleChange} />
          <button className="button" type="submit">
            Add option
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
