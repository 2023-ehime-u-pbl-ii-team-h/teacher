"use client";

import { TextButton } from "@/atoms/button";
import styles from "./attendance-table.module.css";
import { AiOutlineEdit } from "react-icons/ai";
import { Dialog } from "@/molecules/dialog";
import { FormEvent, useState } from "react";
import { OutlinedTextField } from "@/atoms/text-field";
import { useAttendances } from "@/queries/attendances";
import { useSearchParams } from "next/navigation";
import { useAccessToken } from "@/queries/access-token";

export function AttendanceTable(): JSX.Element {
  const params = useSearchParams();
  const accessToken = useAccessToken();
  const subjectId = params.get("subject");
  const boardId = params.get("board");
  const { data: attendances } = useAttendances(
    accessToken && subjectId && boardId
      ? {
          subjectId,
          boardId,
          accessToken,
        }
      : null,
  );
  const [editTarget, setEditTarget] = useState<{
    id: string;
    createdAt: Date;
  } | null>(null);

  function onSubmitAttendanceTime(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(editTarget);
    const input = event.currentTarget.elements.namedItem(
      "created_at",
    ) as HTMLInputElement;
    console.log(input.value);
  }

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className="label-medium">
            <td>名前</td>
            <td>メールアドレス</td>
            <td>出席時刻</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {attendances?.map(({ id, who: { name, email }, created_at }) => (
            <tr className={`label-large ${styles.row}`} key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{new Date(created_at * 1000).toLocaleString()}</td>
              <td>
                <TextButton
                  label="編集"
                  leadingIcon={<AiOutlineEdit />}
                  innerProps={{
                    onClick: () =>
                      setEditTarget({
                        id,
                        createdAt: new Date(created_at * 1000),
                      }),
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editTarget && (
        <Dialog
          title="打刻時刻の編集"
          closeLabel="キャンセル"
          submitLabel="保存"
          onCancel={() => setEditTarget(null)}
          onSubmit={onSubmitAttendanceTime}
        >
          <OutlinedTextField
            label="時刻"
            inputProps={{
              type: "datetime-local",
              name: "created_at",
              required: true,
              defaultValue: editTarget.createdAt.toISOString().slice(0, 16),
            }}
          />
        </Dialog>
      )}
    </>
  );
}
