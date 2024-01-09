import styles from "./page.module.css";
import Navbar from "../molecules/top-navbar";

export default function Home() {
  return <main className={styles.main}>
    <Navbar/>
  </main>;
}
