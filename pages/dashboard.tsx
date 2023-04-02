import { NextPage } from "next";
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Container from "../components/Container/Container";


function Dashboard() {
  return (
    <Container maxWidth="lg">
      <div className={styles.buttonsContainer}>
        <div className={styles.buttons}>
          <Link className={styles.heroCta} href="https://meloai.netlify.app/">
            <div>Generate AI Images & use MeloGPT</div>
          </Link>
          <Link className={styles.heroCta} href="https://like-melo-mint.netlify.app/">
            <div>Like Melo MINT</div>
          </Link>
          <Link className={styles.heroCta} href="https://like-melo-nft-gate.vercel.app/login">
            <div>NFT GATED DAPP</div>
          </Link>
          <Link className={styles.heroCta} href="https://staking-app-melo.herokuapp.com/">
            <div>STAKING DAPP</div>
          </Link>
          <Link className={styles.heroCta} href="https://twitter.com/meloinu">
            <div>Twitter</div>
          </Link>
          <Link className={styles.heroCta} href="https://t.me/meloinuofficial">
            <div>Telegram</div>
          </Link>
          <Link className={styles.heroCta} href="https://melo-inu.gitbook.io/whitepaper/">
            <div>WhitePaper V2</div>
          </Link>
          <Link className={styles.heroCta} href="/melonomics">
            <div>Melonomics</div>
          </Link>
          <Link className={styles.heroCta} href="/music">
            <div>Music</div>
          </Link>
          
        
        </div>
        <div className={styles.video}>
          <video width="400" height="300" controls>
            <source src="meloshi.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </Container>
  )
}

export default Dashboard;

