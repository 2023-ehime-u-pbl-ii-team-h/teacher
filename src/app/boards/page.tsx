import { BoardCardList } from "@/organisms/board-card-list";
import { Metadata } from "next";
import { Suspense } from "react";
import { Outlet } from "../outlet";
import { NewBoardButton } from "@/molecules/new-board-button";

export const metadata: Metadata = {
  title: "出席申請受付一覧",
};

export default function BoardsPage(): JSX.Element {
  return (
    <Suspense fallback={<p>読み込み中…</p>}>
      <Outlet title="出席申請受付一覧">
        <BoardCardList />
        <NewBoardButton />
      </Outlet>
    </Suspense>
  );
}
