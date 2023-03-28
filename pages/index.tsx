import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { MARKETPLACE_ADDRESS } from '../const/contractAddresses';
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from '@thirdweb-dev/react';
import { useRouter } from 'next/router';

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  
  const router = useRouter();
  const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS, 'marketplace');
  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);
  return (
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
          <div className={styles.heroAssetFrame}>
            <Image
              src='/hero-asset.png'
              width={360}
              height={340}
              alt='Hero asset, NFT marketplace'
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  <span className={styles.typingText}>Melo Inu</span>
                  <span className={styles.cursor}></span>
                </span>
              <br/>
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href='https://meloinu.netlify.app'
                  target='_blank'
                >
                 What if
                </Link>{' '}
                 <b> the roles were reversed and Shiba Inu was a cat Meet MELO INU  a clone of Shiba Inu created with a twist he's a cat
The only difference between the two is the fact that they belong to two completely different breeds of animals. Our founder Shittoshi loves dogs just as much as the next person does However he noticed that a majority of homes around the world have both cats and dogs. So why just love dogs Cats need love too.
From that inception, the thought became clear that the only way to instill balance around the world would be to make sure that both cats and dogs run the world So Shittoshi did what any sane mad scientist would do to start this movement he cloned Shiba Inu using the DNA strands of the code written by him. The particles and functions were merged to change Shiba\'s primal instinct just enough to have features of and resemble a Shiba tabby cat, whom he decided to name after his real-life tabby cat, Melo.
MELO INU was created to help bring back peace and balance by providing what we call a safe haven to the meme investing world through ecosystem building charity and utility There are no fees associated with the MELO INU contract, and the liquidity has been locked away fo 8 months.</b> <i></i>
              </p>
            
              <div className={styles.heroCtaContainer}>
                <Link
                  className={styles.secondaryCta}
                  href="/dashboard"
                  target="_blank"
                >
                  Dashboard | Home
                </Link>
              </div>
              <div className="main">

                
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`} className={styles.name}>
                        {listing.asset.name}
                      </Link>
                    </h2>

                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;

