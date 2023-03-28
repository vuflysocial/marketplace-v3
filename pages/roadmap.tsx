import { NextPage } from "next";
import styles from "../styles/tokenomics.module.css";
import Container from "../components/Container/Container";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className={styles.progress}>
      <div
        className={styles.progressBar}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const Roadmap: NextPage = () => {
  const completion = 25; // set completion percentage

  return (
    <Container maxWidth="lg">
      <div>
      <div className={styles.attentionContainer}>
          <p className={styles.attentionMessage}>
            Attention: The roadmap Will Update accordingly and or change based on community feedback and other factors. Welcome To V1! 
          </p>
        </div>
        <h1>Token Roadmap 🚵</h1>

        <h4>Q2 2023: Melo inu shiba inu clone fair launch 😼</h4>
        <ProgressBar percentage={58} />
        <ul>
          <li>MeloGPT/AI Release</li>
          <li>Staking Dapp Release!</li>
          <li>Minting Dapp!</li>
          <li>BNB chain launch</li>
          <li>Whitepaper/medium Release</li>
          <li>Contest/giveaways</li>
          <li>First Phase of NFT Drops</li>
          <li>Community building</li>
          <li>Chat/twitter AMAs</li>
          <li>Merchandise Drop</li>
          <li>TOKEN BURNINGS</li>
          <li>NFTGame Development</li>
          <li>Ecosystem Development</li>
        </ul>

        <h4>Q3 2023: Secure partnerships/Collabs/OG Market 🔥</h4>
        <ProgressBar percentage={0} />
        <ul>
          <li>Branch and connect</li>
          <li>AMAs</li>
          <li>Social Media Push /tiktok,insta,youtube,snap etc..</li>
          <li>Sponsorships</li>
          <li>Branding Awarness</li>
          <li>Blog posts/interviews</li>
          <li>Voting Token Release</li>
          <li>Building with Melo</li>
          <li>Surprise Releases</li>
          <li>IRL Events Networking</li>
        </ul>

        <h4>Q4 2023: NFT GAME Release! 🎮</h4>
        <ProgressBar percentage={0} />
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>

        <h4>Q1 2024: Release of Metaverse</h4>
        <ProgressBar percentage={0} />
        <ul>
          <li>Melo Inu Blockchain ⛓️</li>
        </ul>
      </div>
      <div>
        <iframe
          src="https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc1155.html?contract=0x3f4f45A4C71030F5A1fd2B4cBA5F93fe308Fc8d1&chain=%7B%22name%22%3A%22Binance+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Binance+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%7D&tokenId=0"
          width="600px"
          height="600px"
          style={{ maxWidth: "100%" }}
          frameBorder="0"
        ></iframe>
      </div>
    </Container>
  );
};

export default Roadmap;


