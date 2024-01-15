import { ExtendedFAB } from "@/atoms/floating-action-button";
import { Navbar } from "@/molecules/top-navbar";
import { BoardCardList } from "@/organisms/board-card-list";
import { Metadata } from "next";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

export const metadata: Metadata = {
  title: "出席申請受付一覧",
};

export default function BoardsPage(): JSX.Element {
  return (
    <main>
      <Navbar title="出席申請受付一覧" />
      <BoardCardList />
      <Link href="/boards/new">
        <ExtendedFAB label="新規出席申請受付" leadingIcon={<AiOutlinePlus />} />
      </Link>
    </main>
  );
}
