import { NextPage } from "next";
import styles from '../styles/tokenomics.module.css';
import Container from "../components/Container/Container";

function melonomics() {
  return (
    <Container maxWidth="lg">
      <div>
        <h1>Melonomics</h1>
        <p>Welcome to our Tokenomics.</p>
        <h2>Token Information</h2>
        <ul>
          <li>Name: Melo Inu</li>
          <li>Symbol: MELO</li>
          <li>Total Supply: 420000000000</li>
        </ul>

        <h2>Liquidity</h2>
        <p>Locked for 8 Months</p>
        
        <h2>TAX</h2>
        <p>The token will be distributed as follows:</p>
        <ul>
          <li>0% - Sale Tax</li>
          
        </ul>
        <h2>Token Usage</h2>
        <p>Melo Inu is The Main Token of the Ecosytem:</p>
        <ul>
          
          <li>Burning</li>
          <li>Staking</li>
          <li>Rewards</li>


        </ul>
      </div>
    </Container>
  );
}

export default melonomics;

