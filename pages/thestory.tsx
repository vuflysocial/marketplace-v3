import { NextPage } from "next";
import styles from '../styles/melonomics.module.css';
import Container from "../components/Container/Container";
import Link from 'next/link';
import Image from 'next/image';

function thestory() {
  return (
    <Container maxWidth="lg">
      <div>
        <h1>The Original Story</h1>
        <h4>
        What if the roles were reversed and Shiba Inu was a cat?
         Meet MELO INU, a clone of Shiba Inu, created with a twist,
         he's a cat!...
        to continue reading the story of Melo Inu 
        </h4>
        <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href='https://melo-inu.gitbook.io/whitepaper/'
                  target='_blank'
                >
                 CLICK HERE
                </Link>{' '}
                 <b></b> <i></i>.
              </p>

        <br />
        <h4>
           Melo Inu CANTO
        </h4>
        <div className={styles.heroAssetFrame}>
            <Image
              src='/favicon (2).ico'
              width={360}
              height={340}
              alt='Hero asset, NFT marketplace'
              quality={100}
              className={styles.heroAsset}
            />
            <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href='https://www.dextools.io/app/en/canto/pair-explorer/0x0958093f4bbf679e5898a46215d2ecb400ce4c67'
                  target='_blank'
                >
                Click Me 0x0958093f4bbf679e5898a46215d2ecb400ce4c67
                </Link>{' '}
                 <b></b> <i></i>.
              </p>
           </div>

      
  <h5>
    Melo Inu was birthed on Canto Blockchain originally with a renounced contract and burned liquidity. 
    We chose Canto because it was a new private blockchain that encouraged developer building to help expand the network.
    After 3 weeks of trading, the community suggested moving over to BSC for more volume, seeing as though Canto was a new chain, we decided to do so for the community.
    Now, because the contract was renounced and liquidity burned with no-upgradability, we were forced to launch the same contract on BSC and airdrop CANTO holders the new BSC Address. So yes, at this moment, there is a Melo Inu Canto
    contract as well as a BSC Contract.
  </h5>
  <h5>
    MAI was the AI token in our ecosystem on CANTO that the community agreed upon sacrificing the liquidity to help us start the Melo Liquid Protocol,
    the Kami Shinto. All 15 original OG Holders from launch of MAI were snapshotted and will be Airdropped the Equivalent amount in SHINTO by 4&apos;/15.
    Melo AI Dapp is Still live as Utility and can be accessed on the dashboard.
  </h5>
  <h5>
    As The Melo And Canto Ecosystem grow, eventually so will Melo Canto. Melo Inu Canto will remain live on Canto as a safe meme to turn to in the early stages of the Canto network. We will find ways to innovate in every place we are.
  </h5>
</div>

    </Container>
  );
}

export default thestory;
