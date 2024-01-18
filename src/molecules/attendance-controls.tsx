"use client";

import { FilledButton } from "@/atoms/button";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbDatabaseExport } from "react-icons/tb";
import styles from "./attendance-controls.module.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { API_ROOT } from "@/queries/config";
import { Attendance } from "@/queries/attendances";
import { exportCsv } from "@/commands/export-csv";
import { useContext } from "react";
import { SnackbarContext } from "@/atoms/snackbar";

export function AttendanceControls(): JSX.Element {
  const params = useSearchParams();
  const snackbar = useContext(SnackbarContext);

  async function onExport() {
    let body;
    try {
      const res = await fetch(
        `${API_ROOT}/subjects/${params.get("subject")}/boards/${params.get(
          "board",
        )}/attendances`,
      );
      if (!res.ok) {
        console.error(await res.text());
        return;
      }
      body = (await res.json()) as {
        id: string;
        created_at: number;
        who: {
          id: string;
          name: string;
          email: string;
        };
      }[];
    } catch (error) {
      snackbar.push("エクスポートに失敗しました");
      console.error(error);
      return;
    }
    const attendances = body.map(
      ({ id, created_at, who: { name, email } }): Attendance => ({
        id,
        createdAt: new Date(created_at * 1000),
        name,
        email,
      }),
    );
    exportCsv(attendances);
  }

  return (
    <div className={styles.controls}>
      <Link href={`/boards?subject=${params.get("subject")}`}>
        <FilledButton
          label="受付スケジュールの編集"
          leadingIcon={<MdOutlineEditCalendar />}
        />
      </Link>
      <FilledButton
        label="CSV エクスポート"
        leadingIcon={<TbDatabaseExport />}
        innerProps={{
          onClick: onExport,
        }}
      />
    </div>
  );
}
