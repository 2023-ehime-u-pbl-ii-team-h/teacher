import styles from "./page.module.css";
import { Navbar } from "../molecules/top-navbar";
import { HomeNavigation } from "@/molecules/home-navigation";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar title="ホーム" />
      <Suspense>
        <HomeNavigation />
      </Suspense>
    </main>
  );
}
