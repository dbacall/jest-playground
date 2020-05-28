import React from "react";

function MultipleWords() {
  return (
    <div>
      <h1>Add many words!</h1>
      <input
        type="text"
        placeholder="Your word..."
        className="input"
        value=""
      />
      <button>Add</button>
    </div>
  );
}

export default MultipleWords;
