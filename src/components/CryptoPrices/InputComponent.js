import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




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
<InputGroup className="mb-3">
  <Button onClick={handleButtonClick} variant="primary" id="button-addon1">
    Button
  </Button>
  <Form.Control
    value={inputText}
    onChange={handleInputChange}
    aria-label="Example text with button addon"
    aria-describedby="basic-addon1"
    style={{ backgroundColor: 'transparent', color: '#33B0FF', fontWeight: "bold" }}
  />
</InputGroup>

      <h1><strong className="main-name"> {outputText}</strong></h1>
      
    </Container>
  );
}

export default InputComponent;



