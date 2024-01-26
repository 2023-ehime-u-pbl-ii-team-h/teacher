"use client";

import { TextButton } from "@/atoms/button";
import styles from "./board-card-list.module.css";
import { FormEvent, useState } from "react";
import { AttendanceBoards, useBoards } from "@/queries/boards";
import { Dialog } from "@/molecules/dialog";
import { OutlinedTextField } from "@/atoms/text-field";
import { useRouter, useSearchParams } from "next/navigation";
import { useAccessToken } from "@/queries/access-token";
import { deleteBoard } from "@/commands/delete-board";

function BoardCard({
  now,
  onClickEdit,
  onClickDelete,
  board,
}: {
  now: number;
  onClickEdit: () => void;
  onClickDelete: () => void;
  board: AttendanceBoards[number];
}): JSX.Element {
  const { startFrom, secondsFromBeLateToEnd, secondsFromStartToBeLate } = board;
  return (
    <div className={`surface on-surface-text ${styles.card}`}>
      <span>{startFrom.toLocaleString()}</span>
      {" → "}
      <span>
        {new Date(
          startFrom.valueOf() +
            (secondsFromBeLateToEnd + secondsFromStartToBeLate) * 1000,
        ).toLocaleString()}
      </span>
      <TextButton
        label="編集"
        innerProps={{
          disabled: new Date(startFrom).valueOf() <= now,
          onClick: onClickEdit,
        }}
      />
      <TextButton
        label="削除"
        innerProps={{
          disabled: new Date(startFrom).valueOf() <= now,
          onClick: onClickDelete,
        }}
      />
    </div>
  );
}

export function BoardCardList() {
  const now = Date.now();

  const params = useSearchParams();
  const router = useRouter();
  const subjectId = params.get("subject");
  const accessToken = useAccessToken();
  const { data: boards } = useBoards(
    accessToken && subjectId
      ? {
          subjectId,
          accessToken,
        }
      : null,
  );
  const [editTarget, setEditTarget] = useState<AttendanceBoards[number] | null>(
    null,
  );

  if (!subjectId) {
    router.replace("/");
    return null;
  }

  function onSubmitEditBoard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  function onDeleteBoard(board: AttendanceBoards[number]) {
    if (!accessToken || !subjectId) {
      return;
    }
    deleteBoard(accessToken, subjectId, board.id);
  }

  return (
    <>
      <div className={styles.cardList}>
        {boards?.map((board) => (
          <BoardCard
            key={board.id}
            now={now}
            board={board}
            onClickEdit={() => setEditTarget(board)}
            onClickDelete={() => onDeleteBoard(board)}
          />
        )) || <p>読み込み中…</p>}
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
                defaultValue: new Date(editTarget.startFrom)
                  .toISOString()
                  .slice(0, 16),
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
