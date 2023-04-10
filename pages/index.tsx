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
              
            
              <div className={styles.heroCtaContainer}>
                <Link
                  className={styles.secondaryCta}
                  href="/dashboard"
                  target="_blank"
                >
                  Dashboard | Home
                </Link>
              </div>
              <div className={styles.heroCtaContainer}>
                <Link
                  className={styles.secondaryCta}
                  href="/dashboard"
                  target="_blank"
                >
                  V1 Site | Home
                </Link>
              </div>
              <div className="main">
              <div>
                <h1>Voltichange</h1>
                <div className={styles.heroAssetFrame}>
            <Image
              src='/volt.png'
              width={360}
              height={340}
              alt='Hero asset, NFT marketplace'
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <h5>0x5c12C812794B874fe4Fdea9A4960df599C89b8E5</h5>
                <h6>Change Network to BSC</h6>
                <h6>Copy and paste CA in Token Search</h6>
                <h6>Burn Melo And Volt On every Transaction</h6>
              </div>
              
              <div className={styles.widgetContainer}>
                <link rel="stylesheet" href="https://voltichange.net/css/widget.css" />
                <iframe
                  src="https://voltichange.net/api/widget/?chain=56&darktheme=false&tokenin=Native&tokenout=0x5c12C812794B874fe4Fdea9A4960df599C89b8E5&slippage=0.5"
                  frameBorder="0"
                  className={styles.voltiChangeWidget}
                  width="400"
                  height="650"
                ></iframe>
              </div>

              

                
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

