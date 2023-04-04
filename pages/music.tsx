import { NextPage } from "next";
import styles from '../styles/music.module.css';
import Container from "../components/Container/Container";

import Link from "next/link"

function Music() {
  return (
    <Container maxWidth="lg">

      <div>
        <div>
          <h3>Melos Favorite Artists</h3>
        </div>
        <div>
      <Link href="/dashboard">
        <div className={styles.heroCta}>Back To Dashboard</div>
      </Link>
        </div>

        <div>
          <p>VIBE</p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BIqeykm6l_Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <audio controls>
          <source src="audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
     
      </div>
      <br />
      <div>
        <p>DOTTY CA$H</p>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/X3E_YmUNa90"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div>

      </div>
    
      
    </Container>
  );
}

export default Music;

