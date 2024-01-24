"use client";

import { FilledButton } from "@/atoms/button";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbDatabaseExport } from "react-icons/tb";
import styles from "./attendance-controls.module.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAttendances } from "@/queries/attendances";
import { exportCsv } from "@/commands/export-csv";
import { useContext } from "react";
import { SnackbarContext } from "@/atoms/snackbar";
import { useAccessToken } from "@/queries/access-token";

export function AttendanceControls(): JSX.Element {
  const params = useSearchParams();
  const subjectId = params.get("subject");
  const boardId = params.get("board");
  const snackbar = useContext(SnackbarContext);
  const accessToken = useAccessToken();
  const { data: attendances } = useAttendances(
    accessToken && subjectId && boardId
      ? {
          subjectId,
          boardId,
          accessToken,
        }
      : null,
  );

  async function onExport() {
    if (!attendances) {
      snackbar.push("エクスポートに失敗しました");
      return;
    }
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
