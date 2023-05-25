import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Particle from "../Particle";
import InputComponent from "./InputComponent";

function Tools() {
  const [ethPrice, setEthPrice] = useState(null);
  const [btcPrice, setBtcPrice] = useState(null);
  const [ip, setIP] = useState('');
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Fetch Ethereum price
        const ethResponse = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const ethData = await ethResponse.json();
        setEthPrice(ethData.ethereum.usd);

        // Fetch Bitcoin price
        const btcResponse = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const btcData = await btcResponse.json();
        setBtcPrice(btcData.bitcoin.usd);
      } catch (error) {
        console.error(error);
      }
    };

    
    const fetchJsonData = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error(error);
      }
    };


    fetchJsonData(); // Fetch JSON data

    const intervalId = setInterval(fetchPrices, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const renderJsonData = () => {
    if (jsonData) {
      return Object.entries(jsonData).map(([key, value]) => (
        <h1 className="heading-name" key={key}>
          {key}: <strong className="main-name">{value}</strong>
        </h1>
      ));
    }
    return null;
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <section>
          <Container className="home-content">
            {renderJsonData()}
            <h1 className="heading-name">Bitcoin Price: <strong className="main-name">${btcPrice}</strong></h1>
            <h1 className="heading-name">Ethereum Price: <strong className="main-name">${ethPrice}</strong></h1>
          </Container>
        </section>
      </Container>
      <InputComponent />
    </section>
  );
}

export default Tools;
