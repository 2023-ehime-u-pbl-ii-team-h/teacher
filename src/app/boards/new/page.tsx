import { Metadata } from "next";
import { NewBoardForm } from "@/organisms/new-board-form";
import { Outlet } from "@/app/outlet";

export const metadata: Metadata = {
  title: "出席申請の新規作成",
};

export default function NewBoardsPage(): JSX.Element {
  return (
    <Outlet title="出席申請の新規作成">
      <NewBoardForm />
    </Outlet>
  );
}
