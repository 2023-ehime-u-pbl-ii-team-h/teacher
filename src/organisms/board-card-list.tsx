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
import { putBoard } from "@/commands/put-board";
import Link from "next/link";
import { StandardIconButton } from "@/atoms/icon-button";
import { MdInfoOutline, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

function BoardCard({
  now,
  onClickEdit,
  onClickDelete,
  subjectId,
  board,
}: {
  now: number;
  onClickEdit: () => void;
  onClickDelete: () => void;
  subjectId: string;
  board: AttendanceBoards[number];
}): JSX.Element {
  const { id, startFrom, secondsFromBeLateToEnd, secondsFromStartToBeLate } =
    board;
  return (
    <div className={`surface on-surface-text ${styles.card}`}>
      <div>
        <p>{new Date(startFrom).toLocaleString()}</p>
        <p> 〜 </p>
        <p>
          {new Date(
            new Date(startFrom).valueOf() +
              (secondsFromBeLateToEnd + secondsFromStartToBeLate) * 1000,
          ).toLocaleString()}{" "}
        </p>
      </div>
      <Link href={`/attendances?subject=${subjectId}&board=${id}`}>
        <StandardIconButton icon={<MdInfoOutline />} alt="開く" />
      </Link>
      <StandardIconButton
        icon={<MdOutlineEdit />}
        alt="編集"
        disabled={new Date(startFrom).valueOf() <= now}
        onClick={onClickEdit}
      />
      <StandardIconButton
        icon={<MdOutlineDelete />}
        alt="削除"
        disabled={new Date(startFrom).valueOf() <= now}
        onClick={onClickDelete}
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

    if (!accessToken || !subjectId || !editTarget) {
      return;
    }

    const startFrom = (
      event.currentTarget.elements.namedItem("start_from") as HTMLInputElement
    ).value;
    const betweenStartAndBeLate = (
      event.currentTarget.elements.namedItem(
        "between_start_and_be_late",
      ) as HTMLInputElement
    ).value;
    const betweenBeLateAndEnd = (
      event.currentTarget.elements.namedItem(
        "between_be_late_and_end",
      ) as HTMLInputElement
    ).value;
    const shiftAllAfter = (
      event.currentTarget.elements.namedItem(
        "shift_all_after",
      ) as HTMLInputElement
    ).value;
    putBoard(
      accessToken,
      subjectId,
      {
        id: editTarget.id,
        startFrom,
        secondsFromBeLateToEnd: +betweenStartAndBeLate,
        secondsFromStartToBeLate: +betweenBeLateAndEnd,
      },
      shiftAllAfter === "true",
    ).then(console.error);
  }
  function onDeleteBoard(board: AttendanceBoards[number]) {
    if (!accessToken || !subjectId) {
      return;
    }
    deleteBoard(accessToken, subjectId, board.id).then(console.error);
  }

  return (
    <>
      <div className={styles.cardList}>
        {boards?.map((board) => (
          <BoardCard
            key={board.id}
            now={now}
            subjectId={subjectId}
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
