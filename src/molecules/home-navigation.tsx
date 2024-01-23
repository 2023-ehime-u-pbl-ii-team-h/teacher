"use client";

import { useIsAuthenticated } from "@azure/msal-react";
import styles from "./home-navigation.module.css";

export function HomeNavigation(): JSX.Element {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className={styles.centered}>
      {isAuthenticated ? (
        <p className="body-medium">
          ようこそ！左上のメニューから科目を作成・選択しましょう
        </p>
      ) : (
        <p className="body-large">
          まだログインされていません。右上のメニューからログインしましょう
        </p>
      )}
    </div>
  );
}
