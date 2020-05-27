import React, { useState } from "react";

function WordChange() {
  const [inputWord, setInputWord] = useState("");
  const [updatedWord, setUpdatedWord] = useState("");

  return (
    <div className="App">
      <h1>Crazy Word Changer!!</h1>
      <input
        type="text"
        placeholder="Your word..."
        id="word-input"
        value={inputWord}
        onChange={(e) => {
          setInputWord(e.target.value);
        }}
      />
      <button type="submit" id="btn" onClick={() => setUpdatedWord(inputWord)}>
        Update
      </button>

      <div id="your-word">{updatedWord}</div>
    </div>
  );
}

export default WordChange;
