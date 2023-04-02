import { NextPage } from "next";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Container from "../components/Container/Container";
import heroGradient from './../public/hero-gradient.png';

const Dashboard: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                <Image
                  src='/hero-gradient.png'
                  width={1390}
                  height={1390}
                  alt='Background gradient from red to blue'
                  quality={100}
                  className={styles.gradient}
                />
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <div className={styles.buttons}>
                <Link href="https://meloai.netlify.app/">
                  <div className={styles.heroCta}>Generate AI Images & use MeloGPT</div>
                </Link>
                <Link href="https://like-melo-mint.netlify.app/">
                  <div className={styles.heroCta}>Like Melo MINT</div>
                </Link>
                <Link href="https://like-melo-nft-gate.vercel.app/login">
                  <div className={styles.heroCta}>NFT GATED DAPP</div>
                </Link>
                <Link href="https://staking-app-melo.herokuapp.com/">
                  <div className={styles.heroCta}>STAKING DAPP</div>
                </Link>
                <Link href="https://twitter.com/meloinu">
                  <div className={styles.heroCta}>Twitter</div>
                </Link>
                <Link href="https://t.me/meloinuofficial">
                  <div className={styles.heroCta}>Telegram</div>
                </Link>
                <Link href="https://melo-inu.gitbook.io/whitepaper/">
                  <div className={styles.heroCta}>WhitePaper V2</div>
                </Link>
                <Link href="/melonomics">
                  <div className={styles.heroCta}>Melonomics</div>
                </Link>
                <Link href="/music">
                  <div className={styles.heroCta}>Music</div>
                </Link>
              </div>
              <div className={styles.video}>
                <video width="400" height="300" controls>
                  <source src="meloshi.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Dashboard;
