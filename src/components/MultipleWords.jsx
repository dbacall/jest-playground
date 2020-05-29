import React, { Component } from 'react';

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
    const { inputWord, printedWords } = this.state;
    if (/\d/.test(inputWord)) {
      this.setState({
        error: 'No numbers allowed.',
      });
    } else {
      this.setState({
        printedWords: printedWords.concat(inputWord),
        inputWord: '',
      });
    }
  };

  render() {
    const { inputWord, printedWords, error } = this.state;
    return (
      <div>
        <h1>Add many words!</h1>
        <input
          type="text"
          placeholder="Your word..."
          className="input"
          value={inputWord}
          onChange={this.handleChange}
        />
        <p id="error">{error}</p>
        <button type="button" onClick={this.handleSubmit}>
          Add
        </button>
        <p id="words">{printedWords.join(', ')}</p>
      </div>
    );
  }
}

export default MultipleWords;
