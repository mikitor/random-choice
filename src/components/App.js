import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import ChoiceModal from './ChoiceModal';

class App extends React.Component {
  state = {
    options: [],
    modalIsOpen: false,
    randomOption: undefined
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
    this.setState({ modalIsOpen: true, randomOption });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
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
        <ChoiceModal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          randomOption={this.state.randomOption}
        />
        <Options options={this.state.options} handleDelete={this.handleDelete} handleDeleteAll={this.handleDeleteAll} />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

export default App;
