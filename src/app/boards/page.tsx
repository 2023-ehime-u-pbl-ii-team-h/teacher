import { ExtendedFAB } from "@/atoms/floating-action-button";
import Navbar from "@/molecules/top-navbar";
import { BoardCardList } from "@/organisms/board-card-list";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

export default function BoardsPage(): JSX.Element {
  return (
    <main>
      <Navbar />
      <BoardCardList />
      <Link href="/boards/new">
        <ExtendedFAB label="新規出席申請受付" leadingIcon={<AiOutlinePlus />} />
      </Link>
    </main>
  );
}
