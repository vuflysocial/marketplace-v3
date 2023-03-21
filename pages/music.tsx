import { NextPage } from "next";
import styles from '../styles/music.module.css';
import Container from "../components/Container/Container";

function Music() {
  return (
    <Container maxWidth="lg">
      <div>
        <div>
          <h3>Trending Melo Artists</h3>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <audio controls>
        <source src="audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </Container>
  );
}

export default Music;
