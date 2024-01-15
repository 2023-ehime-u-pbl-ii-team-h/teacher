import { FilledButton } from "@/atoms/button";
import { Navbar } from "@/molecules/top-navbar";
import { AttendanceTable } from "@/organisms/attendance-table";
import { TbDatabaseExport } from "react-icons/tb";
import { MdOutlineEditCalendar } from "react-icons/md";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "打刻一覧",
};

function Controls(): JSX.Element {
  return (
    <div className={styles.controls}>
      <FilledButton
        label="受付スケジュールの編集"
        leadingIcon={<MdOutlineEditCalendar />}
      />
      <FilledButton
        label="CSV エクスポート"
        leadingIcon={<TbDatabaseExport />}
      />
    </div>
  );
}

export default function Attendances(): JSX.Element {
  return (
    <main>
      <Navbar title="打刻一覧" />
      <Controls />
      <AttendanceTable />
    </main>
  );
}
