import { useState } from 'react';
import Container from '../components/Container/Container';
import NextLink from 'next/link';
import styles from "../styles/tokenomics.module.css";

const RpcContainer = () => {
  const [rpcEndpoint, setRpcEndpoint] = useState('https://node-01-eba5.settlemint.com'); // Replace with your JSON-RPC endpoint
  const [chainId, setChainId] = useState('40000'); // Replace with your chain ID
  const [currencySymbol, setCurrencySymbol] = useState('MELO');

  return (
    <Container maxWidth="lg">
      <div style={{ backgroundColor: 'green', color: 'black', padding: '20px', borderRadius: '10px', fontFamily: 'Nunito Sans Bold' }}>
        <h2>Add Meloreum Test Network Information</h2>
        <p>JSON-RPC Endpoint: {rpcEndpoint}</p>
        <p>Chain ID: {chainId}</p>
        <p>Currency Symbol: {currencySymbol}</p>
        <button onClick={() => {
          navigator.clipboard.writeText(`${rpcEndpoint},${chainId},${currencySymbol}`);
          alert('Network information copied to clipboard!');
        }}>Copy to Clipboard</button>
      </div>
    </Container>
  );
};

export default RpcContainer;

