import Navbar from "@/molecules/top-navbar";
import { BoardCardList } from "@/organisms/board-card-list";

export default function BoardsPage(): JSX.Element {
  return (
    <main>
      <Navbar />
      <BoardCardList />
    </main>
  );
}
