import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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

    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIP(data.ip);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchJsonData = async () => {
      try {
        const response = await fetch('https://api.ipbase.com/v1/json/');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIP(); // Fetch client IP address

    const intervalId = setInterval(fetchPrices, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const renderKeyValuePairs = () => {
    if (!jsonData) return null;

    return Object.entries(jsonData).map(([key, value]) => (
      <h1 className="heading-name" key={key}>
        {key}: <strong className="main-name">{value}</strong>
      </h1>
    ));
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <section>
          <Container className="home-content">
            {renderKeyValuePairs()}
            <h1 className="heading-name">Bitcoin Price: <strong className="main-name">${btcPrice}</strong></h1>
            <h1 className="heading-name">Ethereum Price: <strong className="main-name">${ethPrice}</strong></h1>
            <h1 className="heading-name">Client IP Address: <strong className="main-name">{ip}</strong></h1>
          </Container>
        </section>
      </Container>
      <InputComponent />
    </section>
  );
}

export default Tools;
