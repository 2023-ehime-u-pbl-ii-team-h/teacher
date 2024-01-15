import { Navbar } from "@/molecules/top-navbar";
import { Metadata } from "next";
import { NewBoardForm } from "@/organisms/new-board-form";

export const metadata: Metadata = {
  title: "出席申請の新規作成",
};

export default function NewBoardsPage(): JSX.Element {
  return (
    <main>
      <Navbar title="出席申請の新規作成" />
      <NewBoardForm />
    </main>
  );
}
