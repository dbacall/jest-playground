import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WordChange({ intro }) {
  const [inputWord, setInputWord] = useState('');
  const [updatedWord, setUpdatedWord] = useState('');

  function handleChange(e) {
    setInputWord(e.target.value);
  }

  return (
    <div className="App">
      <h1>Crazy Word Changer!!</h1>
      <p id="intro">{intro}</p>
      <input
        type="text"
        placeholder="Your word..."
        id="word-input"
        value={inputWord}
        onChange={handleChange}
      />
      <button type="submit" id="btn" onClick={() => setUpdatedWord(inputWord)}>
        Update
      </button>

      <div id="your-word">{updatedWord}</div>
    </div>
  );
}

WordChange.propTypes = {
  intro: PropTypes.string,
};

WordChange.defaultProps = {
  intro: 'oh herroooo',
};

export default WordChange;
