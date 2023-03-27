import { NextPage } from "next";
import styles from "../styles/tokenomics.module.css";
import Container from "../components/Container/Container";

const Roadmap: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <div>
        <iframe
          src="https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc1155.html?contract=0x3f4f45A4C71030F5A1fd2B4cBA5F93fe308Fc8d1&chain=%7B%22name%22%3A%22Binance+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Binance+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%7D&tokenId=0"
          width="600px"
          height="600px"
          style={{ maxWidth: "100%" }}
          frameBorder="0"
        ></iframe>
      </div>
    </Container>
  );
};

export default Roadmap;
