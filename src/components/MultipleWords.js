import React, { Component, useState } from 'react';

class MultipleWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWord: '',
      printedWords: [],
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      inputWord: e.target.value,
    });
  };

  handleSubmit = () => {
    if (/\d/.test(this.state.inputWord)) {
      this.setState({
        error: 'No numbers allowed.',
      });
    } else {
      this.setState({
        printedWords: this.state.printedWords.concat(this.state.inputWord),
        inputWord: '',
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Add many words!</h1>
        <input
          type="text"
          placeholder="Your word..."
          className="input"
          value={this.state.inputWord}
          onChange={this.handleChange}
        />
        <p id="error">{this.state.error}</p>
        <button onClick={this.handleSubmit}>Add</button>
        <p id="words">{this.state.printedWords.join(', ')}</p>
      </div>
    );
  }
}

export default MultipleWords;
