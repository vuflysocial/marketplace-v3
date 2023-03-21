import { NextPage } from "next";

import styles from '../styles/Home.module.css';

import Link from 'next/link'
import Container from "../components/Container/Container";

function Chart() {
  return (
    <Container maxWidth="lg">
      <Link className={styles.heroCta} href="https://www.dextools.io/app/en/bnb/pair-explorer/0x82c6390b7a5a62a2ecf88116b34dda7a1f82d411">
        <div>BSC | Melo Inu</div>
      </Link>
      <Link className={styles.heroCta} href="https://www.dextools.io/app/en/canto/pair-explorer/0x0958093f4bbf679e5898a46215d2ecb400ce4c67">
        <div>CANTO | Melo Inu</div>
      </Link>
    </Container>
  )
}


export default Chart;
