import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

class App extends React.Component {
  state = {
    options: []
  }

  addOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    }

    this.setState(prev => ({ options: prev.options.concat(option) }));
  }

  handleDelete = (e) => {
    const { id } = e.target;
    this.setState(prevState => {
      return { options: prevState.options.filter((option, index) => index != id) };
    })
  }

  handleDeleteAll = () => {
    this.setState({ options: [] });
  }

  handleDecision = () => {
    const { options } = this.state;
    const randomNumber = Math.floor(Math.random() * options.length);
    const randomOption = options[randomNumber];
    alert(randomOption);
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (this.state.options !== options && options) {
        this.setState({ options });
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const { options } = this.state;
      localStorage.setItem("options", JSON.stringify(options));
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action length={this.state.options.length} makeDecision={this.handleDecision} />
        <Options options={this.state.options} handleDelete={this.handleDelete} handleDeleteAll={this.handleDeleteAll} />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

export default App;
