import { useState } from 'react';
import Container from '../components/Container/Container';
import NextLink from 'next/link';
import styles from '../styles/tokenomics.module.css';

const Rpc = () => {
  const [rpcEndpoint, setRpcEndpoint] = useState('https://node-01-eba5.settlemint.com'); // Replace with your JSON-RPC endpoint
  const [chainId, setChainId] = useState('40000'); // Replace with your chain ID

  return (
    
    <Container maxWidth="lg">
        <div>

        </div>
        <div>
            <br />
            
        </div>
      <div>
        <h2>Network Information</h2>
        <p>JSON-RPC Endpoint: {rpcEndpoint}</p>
        <p>Chain ID: {chainId}</p>
        <button onClick={() => {
          navigator.clipboard.writeText(`${rpcEndpoint},${chainId}`);
          alert('Network information copied to clipboard!');
        }}>Copy to Clipboard</button>
      </div>
    </Container>
  );
};

export default Rpc;
