import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Particle from "../Particle";
import InputComponent from "./InputComponent";

function CryptoPrices() {
  const [ethPrice, setEthPrice] = useState(null);
  const [btcPrice, setBtcPrice] = useState(null);

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

    // Fetch prices every 4 seconds
    const intervalId = setInterval(fetchPrices, 4000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <section>
        <Container className="home-content">
          
          <h1 className="heading-name">Bitcoin Price : <strong className="main-name"> ${btcPrice}</strong></h1>
          <h1 className="heading-name">Ethereum Price : <strong className="main-name">${ethPrice}</strong></h1>
          
        </Container>
        <InputComponent />
        </section>
      </Container>
    
    </section>
    
  );
}

export default CryptoPrices;
