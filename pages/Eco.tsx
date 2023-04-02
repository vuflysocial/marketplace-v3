import { useState, useEffect } from 'react';
import Container from '../components/Container/Container';
import NextLink from 'next/link';
import Image from 'next/image';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(14400); // in seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progress = ((14400 - timeLeft) / 14400) * 100; // percentage

  return (
    <div>
      <div>{timeLeft} seconds left</div>
      <progress value={progress} max="100" />
    </div>
  );
}

function Eco() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API or database and update state
    // For example:
    fetch('https://api.example.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container maxWidth="lg">
      <div><h1>Token Ecosytem</h1></div>
      <NextLink href="https://poocoin.app/tokens/0x5c12c812794b874fe4fdea9a4960df599c89b8e5">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "10px" }}>Melo Inu</button>
          <Image src="https://i.postimg.cc/BQFMZ0XJ/favicon.png" alt="Melo Inu" width={100} height={100} />
        </div>
      </NextLink>
      <br />
      <NextLink href="/">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "10px" }}>Kami Shinto</button>
          <Image src="https://i.postimg.cc/MHqPg3my/BINK-2.png" alt="Melo Inu" width={100} height={100} />
        </div>
      </NextLink>
      <br />
      <NextLink href="/">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "10px" }}>...</button>
          <Image src="" alt="Melo Inu" width={100} height={100} />
        </div>
      </NextLink>
      <br />
      <NextLink href="/">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "10px" }}>...</button>
          <Image src="" alt="Melo Inu" width={100} height={100} />
        </div>
      </NextLink>
      <br />
      <CountdownTimer /> {/* added countdown timer */}
      <br />
      
        <h1>KAMI SHINTO | SPIRIT</h1>
      <button style={{ fontSize: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#FF0000', color: 'white' }} onClick={() => window.location.href='https://www.example.com'}>
        Chart
      </button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/R.gif" alt="Your Image Description" />
      </div>
      
      <div>
        
      </div>
      <br />
      <div>
      <h1>The concept of kami is hard to explain.</h1>
    <p>Shintoists would say that this is because human beings are simply incapable of forming a true understanding of the nature of kami. To make understanding easier kami are often described as divine beings, as spirits or gods. But kami are not much like the gods of other faiths:</p>
    
<h5>Kami are not divine like the transcendent and omnipotent deities found in many religions.</h5>
<h5>Kami are not omnipotent.</h5>
<h5>Kami are not perfect - they sometimes make mistakes and behave badly.</h5>
<h5>Kami are not inherently different in kind from human beings or nature - they are just a higher manifestation of the life energy... an extraordinary or awesome version.</h5>
<h5>Kami don&apos;t exist in a supernatural universe - they live in the same world as human beings and the world of nature. Kami include the gods that created the universe, but can also include:</h5>
<h5>The spirits that inhabit many living beings.</h5>
<h5>Some beings themselves.</h5>
<h5>Elements of the landscape, like mountains and lakes.</h5>
<h5>Powerful forces of nature, like storms and earthquakes.</h5>
      </div>
      <br />
      <div>

      <div>
        <h1>Shintonomics </h1>
        
        <h2>Token Information</h2>
        <ul>
          <li>Name: The Kami Shinto</li>
          <li>Symbol: SHINTO</li>
          <li>Total Supply: 1000000000</li>
        </ul>
        
        <h2>TAX</h2>
        <p>The token will be distributed as follows:</p>
        <ul>
          <li>10% - Buy Tax</li>
          <li>20% - Sale Tax</li>
          
        </ul>
        <h2>Token Usage</h2>
        <p>Melo Inu is The Main Token of the Ecosytem:</p>
        <p>SHINTO will be used as Liquid control. Taxes from buys and sell will funnel 
          into Melo liquid and marketing
        </p>
        <ul>
          


        </ul>
      </div>
      <div>
        <h1>SHINTO LIQUID REWARD PROTOCOL 🔥</h1>
        <br />
        <h2>The Kami Shinto was designed to be the spirit of the ecosytem. At a sell tax of 20% and buy tax of 10% it allows us to incorporate our Rewards and donations aspect of the Melo inu
          ecosystem. Thus this action funnels more Liquid, Rewards tokens to give to holders for staking SHINTO, as well as a additional liquid for Donations and marketing. SHINTO will be the stream of water from 
          which melo will drink. Shinto will hold all staking vaults for the melo inu ecosystem, The Kami Spirit Vault.
        </h2>
        <h3>The Liquid Protocol with Spirit vaults 🏦</h3>
        <div>
          <h3>where</h3>
          <br />
          <h4>Rewards 💰</h4>
          <h4>tax will be used to buy back shiba/BONE/melo and distribute to those that stake there shinto in the The Kami Shinto Vaults of there choice </h4>
          <br />
          <h3>Marketing/development 📈</h3>
          <h3>tax will be used to go into marketing/development/awareness, until melo can push is self sustainable, then Liquid rewards and buy back will increase</h3>
          <h4>Shiba Rewards</h4>
          <br />
          <h4>Liquidity 🌊</h4>
          <h4>tax will be used to add to Melo inu Liquidity</h4>
          <h4>tax will be used to add back to Shinto Liquidity</h4>
          <br />
          <h3>Donations 💸</h3>
          <h3>tax will be used to donate to different charity events that will be updated periodically</h3>
        </div>
      </div>
      </div>
    </Container>
  );
}

export default Eco;




