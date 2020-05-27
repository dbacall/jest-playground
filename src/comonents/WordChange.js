import React from "react";

function WordChange() {
  return (
    <div className="App">
      <h1>Crazy Word Changer!!</h1>
      <input
        type="text"
        placeholder="Your word..."
        id="word-input"
        // value={this.state.inputWord}
        // onChange={this.handleChange}
      />
      <button type="submit" id="btn">
        Update
      </button>

      {/* <div id="your-word">{this.state.updatedWord}</div> */}
    </div>
  );
}

export default WordChange;
