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
      
    </Container>
  );
};

export default Roadmap;


