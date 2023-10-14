import React, { useState } from 'react';
import './WordC.css'
function WordCounter() {
  const [text, setText] = useState('');
  const countWords = () => {
    let words=0;
    text.trim()? words=text.trim().split(/\s+/):words=0;
    return words.length;
  };
  return (
    <div className="word-counter">
      <h2>Responsive Paragraph Word Counter</h2>
      <div className="textarea-container">
        <textarea
          className='text'
          rows="4"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="word-count">
        <p>Word Count: {countWords()}</p>
      </div>
    </div>
  );
}
export default WordCounter;