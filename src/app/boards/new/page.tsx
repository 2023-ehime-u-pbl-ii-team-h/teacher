import { Metadata } from "next";
import { NewBoardForm } from "@/organisms/new-board-form";
import { Outlet } from "@/app/outlet";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "出席申請の新規作成",
};

export default function NewBoardsPage(): JSX.Element {
  return (
    <Suspense fallback={<p>読み込み中…</p>}>
      <Outlet title="出席申請の新規作成">
        <NewBoardForm />
      </Outlet>
    </Suspense>
  );
}
