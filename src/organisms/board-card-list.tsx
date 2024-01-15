"use client";

import { TextButton } from "@/atoms/button";
import styles from "./board-card-list.module.css";
import { FormEvent, useState } from "react";
import { AttendanceBoard, useBoards } from "@/queries/boards";
import { Dialog } from "@/molecules/dialog";
import { OutlinedTextField } from "@/atoms/text-field";
import { useSearchParams } from "next/navigation";

export function BoardCardList() {
  const now = Date.now();

  const params = useSearchParams();
  const boards = useBoards(params.get("subject") ?? "");
  const [editTarget, setEditTarget] = useState<AttendanceBoard | null>(null);

  function onSubmitEditBoard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <div className={styles.cardList}>
        {boards ? (
          boards.map((board) => {
            const {
              id,
              startFrom,
              secondsFromBeLateToEnd,
              secondsFromStartToBeLate,
            } = board;
            return (
              <div
                key={id}
                className={`surface on-surface-text ${styles.card}`}
              >
                <span>{startFrom.toLocaleString()}</span>
                {" → "}
                <span>
                  {new Date(
                    startFrom.valueOf() +
                      (secondsFromBeLateToEnd + secondsFromStartToBeLate) *
                        1000,
                  ).toLocaleString()}
                </span>
                <TextButton
                  label="編集"
                  innerProps={{
                    disabled: startFrom.valueOf() <= now,
                    onClick: () => setEditTarget(board),
                  }}
                />
              </div>
            );
          })
        ) : (
          <p>読み込み中…</p>
        )}
      </div>
      {editTarget && (
        <Dialog
          title="出席申請受付の訂正"
          submitLabel="訂正"
          closeLabel="キャンセル"
          onCancel={() => setEditTarget(null)}
          onSubmit={onSubmitEditBoard}
        >
          <div className={styles.formBody}>
            <OutlinedTextField
              label="開始時刻"
              inputProps={{
                type: "datetime-local",
                name: "start_from",
                defaultValue: editTarget.startFrom.toISOString().slice(0, 16),
              }}
            />
            <OutlinedTextField
              label="開始から遅刻扱いまでの秒数"
              inputProps={{
                type: "number",
                name: "between_start_and_be_late",
                defaultValue: editTarget.secondsFromStartToBeLate,
              }}
            />
            <OutlinedTextField
              label="遅刻扱いから欠席扱いまでの秒数"
              inputProps={{
                type: "number",
                name: "between_be_late_and_end",
                defaultValue: editTarget.secondsFromBeLateToEnd,
              }}
            />
            <label>
              <input
                type="checkbox"
                name="shift_all_after"
                defaultChecked={true}
              ></input>
              これ移行の出席申請受付の開始日時もあわせてずらす
            </label>
          </div>
        </Dialog>
      )}
    </>
  );
}
