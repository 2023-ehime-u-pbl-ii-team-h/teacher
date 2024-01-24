"use client";

import { useIsAuthenticated } from "@azure/msal-react";
import styles from "./home-navigation.module.css";
import { useAccessToken } from "@/queries/access-token";
import { useMe } from "@/queries/me";

export function HomeNavigation(): JSX.Element {
  const isAuthenticated = useIsAuthenticated();
  const accessToken = useAccessToken();
  const { data: me } = useMe(accessToken ? { accessToken } : null);

  const message =
    me?.role === "STUDENT" ? (
      <p className="body-large">
        学生アカウントではこのアプリは利用できません。右上のメニューからログアウトして切り替えましょう
      </p>
    ) : isAuthenticated ? (
      <p className="body-medium">
        ようこそ！左上のメニューから科目を作成・選択しましょう
      </p>
    ) : (
      <p className="body-large">
        まだログインされていません。右上のメニューからログインしましょう
      </p>
    );

  return <div className={styles.centered}>{message}</div>;
}
