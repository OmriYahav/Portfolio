import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';




function InputComponent() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleButtonClick() {
    setOutputText(inputText);
  }

  return (
    <Container>
<Button onClick={handleButtonClick} variant="secondary">Enter</Button>{' '}    
  <input type="text" value={inputText} onChange={handleInputChange} />
      <p>{outputText}</p>
      <h1><strong className="main-name"> {outputText}</strong></h1>
    </Container>
  );
}

export default InputComponent;



