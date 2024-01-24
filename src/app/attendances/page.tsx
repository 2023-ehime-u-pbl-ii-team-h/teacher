import { AttendanceTable } from "@/organisms/attendance-table";
import { Metadata } from "next";
import { Suspense } from "react";
import { AttendanceControls } from "@/molecules/attendance-controls";
import { Outlet } from "../outlet";

export const metadata: Metadata = {
  title: "打刻一覧",
};

export default function Attendances(): JSX.Element {
  return (
    <Suspense fallback={<p>読み込み中…</p>}>
      <Outlet title="打刻一覧">
        <AttendanceControls />
        <AttendanceTable />
      </Outlet>
    </Suspense>
  );
}
