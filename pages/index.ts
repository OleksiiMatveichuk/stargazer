import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage/HomePage";
// import { GameScreen } from "../src/components/GameScreen";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
