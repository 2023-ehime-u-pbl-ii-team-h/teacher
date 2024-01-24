import { HomeNavigation } from "@/molecules/home-navigation";
import { Outlet } from "./outlet";

export default function Home() {
  return (
    <Outlet title="ホーム">
      <HomeNavigation />
    </Outlet>
  );
}
