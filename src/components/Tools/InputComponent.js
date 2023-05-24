import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



function InputComponent() {
  const [inputText, setInputText] = useState('');
  const [outputData, setOutputData] = useState([
    { type: 'Number -> Base64 Encode', value: 'Temp Base64' },
    { type: 'Number -> Binary Number', value: 'Temp Binary' },
    { type: 'Number -> Hexadecimal', value: 'Temp Hex' },
    { type: 'Number -> Words', value: 'Temp Words' }
  ]);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleButtonClick() {
    if (inputText.trim() === '') {
      setOutputData([]);
      return;
    }

    const base64Text = btoa(inputText); // Convert inputText to base64
    const binaryText = convertToBinary(inputText); // Convert inputText to binary
    const hexText = convertToHex(inputText); // Convert inputText to hex
    const numberWords = convertToWords(inputText); // Convert inputText to words

    const newData = [
      { type: 'Number -> Base64 Encode', value: base64Text },
      { type: 'Number -> Binary Number', value: binaryText },
      { type: 'Number -> Hexadecimal', value: hexText },
      { type: 'Number -> Words', value: numberWords }
    ];

    setOutputData(newData);
  }

  function convertToBinary(text) {
    let binary = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const binaryChar = charCode.toString(2);
      binary += binaryChar.padStart(8, '0');
    }
    return binary;
  }

  function convertToHex(text) {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const hexChar = charCode.toString(16);
      hex += hexChar;
    }
    return hex;
  }

  function convertToWords(text) {
    const singleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const largeNumbers = ['', 'thousand', 'million', 'billion'];

    let number = parseInt(text, 10);
    if (isNaN(number)) {
      return 'Invalid number';
    }

    if (number === 0) {
      return 'zero';
    }

    let words = '';
    let index = 0;

    while (number > 0) {
      const hundreds = number % 1000;
      if (hundreds !== 0) {
        let hundredWords = '';
        const ones = hundreds % 10;
        const tensDigit = Math.floor((hundreds % 100) / 10);
        const hundredsDigit = Math.floor(hundreds / 100);

        if (hundredsDigit !== 0) {
          hundredWords += singleDigits[hundredsDigit] + ' hundred ';
        }

        if (tensDigit === 1) {
          hundredWords += teens[ones];
        } else {
          if (tensDigit !== 0) {
            hundredWords += tens[tensDigit] + ' ';
          }
          if (ones !== 0) {
            hundredWords += singleDigits[ones];
          }
        }

        words = hundredWords.trim() + ' ' + largeNumbers[index] + ' ' + words;
      }

      index++;
      number = Math.floor(number / 1000);
    }

    return words.trim();
  }

  return (
    <Container>
      <div className="input-group mb-3">
        <Button onClick={handleButtonClick} variant="primary" id="button-addon1">
          Convert
        </Button>
        <Form.Control
          value={inputText}
          onChange={handleInputChange}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          style={{ backgroundColor: 'transparent', color: '#33B0FF', fontWeight: 'bold' }}
          placeholder='Enter a Number'
        />
      </div>

      <div className="table-container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="th">Convert Type</th>
              <th className="th">Value</th>
            </tr>
          </thead>
          <tbody>
            {outputData.map((data, index) => (
              <tr key={index}>
                <td>{data.type}</td>
                <td>{data.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default InputComponent;
