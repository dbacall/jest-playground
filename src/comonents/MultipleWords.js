import React, { Component } from "react";

class MultipleWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWord: "",
      printedWords: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputWord: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      printedWords: this.state.inputWord,
    });
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
        <button onClick={this.handleSubmit}>Add</button>
        <p>{this.state.printedWords}</p>
      </div>
    );
  }
}

export default MultipleWords;
