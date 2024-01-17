"use client";

import { FilledButton } from "@/atoms/button";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbDatabaseExport } from "react-icons/tb";
import styles from "./attendance-controls.module.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export function AttendanceControls(): JSX.Element {
  const params = useSearchParams();

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
      />
    </div>
  );
}
