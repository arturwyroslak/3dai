```javascript
import React, { useState } from 'react';
import './TextInput.css';

const TextInput = ({ onTextChange }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    onTextChange(event.target.value);
  };

  return (
    <div className="text-input-container">
      <input
        id="textInput"
        type="text"
        placeholder="Enter geometric shape description"
        value={inputText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInput;
```