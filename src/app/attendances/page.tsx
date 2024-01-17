import { Navbar } from "@/molecules/top-navbar";
import { AttendanceTable } from "@/organisms/attendance-table";
import { Metadata } from "next";
import { Suspense } from "react";
import { AttendanceControls } from "@/molecules/attendance-controls";

export const metadata: Metadata = {
  title: "打刻一覧",
};

export default function Attendances(): JSX.Element {
  return (
    <main>
      <Navbar title="打刻一覧" />
      <Suspense fallback={<p>読み込み中…</p>}>
        <AttendanceControls />
        <AttendanceTable />
      </Suspense>
    </main>
  );
}
