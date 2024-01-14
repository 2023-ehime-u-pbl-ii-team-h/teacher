"use client";

import { FilledButton } from "@/atoms/button";
import { OutlinedTextField } from "@/atoms/text-field";
import Navbar from "@/molecules/top-navbar";
import { FormEvent } from "react";
import styles from "./page.module.css";

export default function NewBoardsPage(): JSX.Element {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main>
      <Navbar />
      <form className={styles.form} onSubmit={onSubmit}>
        <OutlinedTextField
          label="開始時刻"
          inputProps={{
            type: "datetime-local",
            name: "start_from",
            defaultValue: new Date().toISOString().slice(0, 16),
          }}
        />
        <OutlinedTextField
          label="開始から遅刻扱いまでの秒数"
          inputProps={{
            type: "number",
            name: "between_start_and_be_late",
            defaultValue: 30 * 60,
          }}
        />
        <OutlinedTextField
          label="遅刻扱いから欠席扱いまでの秒数"
          inputProps={{
            type: "number",
            name: "between_be_late_and_end",
            defaultValue: 60 * 60,
          }}
        />
        <FilledButton label="作成" />
      </form>
    </main>
  );
}
