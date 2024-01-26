"use client";

import { FilledButton } from "@/atoms/button";
import { OutlinedTextField } from "@/atoms/text-field";
import { FormEvent } from "react";
import styles from "./new-board-form.module.css";
import { postBoard } from "@/commands/post-board";
import { useAccessToken } from "@/queries/access-token";
import { useSearchParams, useRouter } from "next/navigation";

export function NewBoardForm(): JSX.Element {
  const accessToken = useAccessToken();
  const params = useSearchParams();
  const router = useRouter();

  if (!params.has("subject")) {
    router.replace("/");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessToken) {
      return;
    }

    const startFrom = (
      event.currentTarget.elements.namedItem("start_from") as HTMLInputElement
    ).value;
    const startToBeLate = (
      event.currentTarget.elements.namedItem(
        "between_start_and_be_late",
      ) as HTMLInputElement
    ).value;
    const beLateToEnd = (
      event.currentTarget.elements.namedItem(
        "between_be_late_and_end",
      ) as HTMLInputElement
    ).value;
    postBoard(accessToken, params.get("subject") ?? "", [
      {
        startFrom,
        secondsFromStartToBeLate: +startToBeLate,
        secondsFromBeLateToEnd: +beLateToEnd,
      },
    ]);
  }

  return (
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
  );
}
