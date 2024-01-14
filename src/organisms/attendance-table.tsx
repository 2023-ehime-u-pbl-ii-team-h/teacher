"use client";

import { TextButton } from "@/atoms/button";
import styles from "./attendance-table.module.css";
import { AiOutlineEdit } from "react-icons/ai";
import { Dialog } from "@/molecules/dialog";
import { FormEvent, useState } from "react";
import { OutlinedTextField } from "@/atoms/text-field";

export function AttendanceTable(): JSX.Element {
  const attendances = [
    {
      id: "0001",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0002",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0003",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0004",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
  ];

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
          {attendances.map(({ id, name, email, createdAt }) => (
            <tr className={`label-large ${styles.row}`} key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{createdAt.toLocaleString()}</td>
              <td>
                <TextButton
                  label="編集"
                  leadingIcon={<AiOutlineEdit />}
                  onClick={() => setEditTarget({ id, createdAt })}
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
