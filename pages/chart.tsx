import { NextPage } from "next";

import styles from '../styles/Home.module.css';

import Link from 'next/link'
import Container from "../components/Container/Container";

function Chart() {
  return (
    <Container maxWidth="lg">
      <Link className={styles.heroCta} href="/">
        <div>BSC | Melo Inu</div>
      </Link>
      <Link className={styles.heroCta} href="/">
        <div>CANTO | Melo Inu</div>
      </Link>
    </Container>
  )
}


export default Chart;
