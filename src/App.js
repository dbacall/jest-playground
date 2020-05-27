import React, { Component } from "react";
import WordChange from "./comonents/WordChange";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWord: "",
      updatedWord: "",
    };
  }

  handleChange = (event) => {
    this.setState({ inputWord: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({
      updatedWord: this.state.inputWord,
    });
  };

  render() {
    return (
      <div className="App">
        <WordChange />
        <h1>Crazy Word Changer!!</h1>
        <input
          type="text"
          placeholder="Your word..."
          id="word-input"
          value={this.state.inputWord}
          onChange={this.handleChange}
        />
        <button type="submit" id="btn" onClick={this.handleSubmit}>
          Update
        </button>

        <div id="your-word">{this.state.updatedWord}</div>
      </div>
    );
  }
}

export default App;
