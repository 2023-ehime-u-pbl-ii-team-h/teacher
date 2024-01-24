"use client";

import { Menu, MenuButton, MenuLabel } from "@/atoms/menu";
import { logoutAndReload } from "@/commands/logout";
import { SideMenu } from "@/molecules/side-menu";
import { Navbar } from "@/molecules/top-navbar";
import { InteractionType } from "@azure/msal-browser";
import { useAccount, useMsalAuthentication } from "@azure/msal-react";
import { ReactNode, useEffect, useRef, useState } from "react";

export type OutletProps = {
  title: string;
  children: ReactNode;
};

export function Outlet({ title, children }: OutletProps): JSX.Element {
  const {
    result,
    login: reLogin,
    acquireToken,
  } = useMsalAuthentication(InteractionType.Redirect, {
    scopes: ["User.Read"],
  });
  const account = useAccount(result?.account ?? {});
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as HTMLElement)
      ) {
        setIsOpenAccountMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const login = async () => {
    if (account) {
      return;
    }
    await reLogin(InteractionType.Redirect, {
      scopes: ["User.Read"],
      prompt: "select_account",
      redirectUri: new URL("/", location.href).toString(),
    });
  };

  const logout = async () => {
    if (!account) {
      return;
    }
    const tokenRes = await acquireToken(InteractionType.Redirect, {
      account,
      scopes: ["User.Read"],
    });
    if (!tokenRes) {
      return;
    }
    await logoutAndReload(tokenRes.accessToken);
  };

  const accountMenu = result?.account ? (
    <Menu isOpen={isOpenAccountMenu} ref={menuRef}>
      <MenuLabel>
        <div>
          <div className="label-large">{result.account.name}</div>
        </div>
      </MenuLabel>
      <MenuButton onClick={logout}>
        <span>ログアウト</span>
      </MenuButton>
    </Menu>
  ) : (
    <Menu isOpen={isOpenAccountMenu} ref={menuRef}>
      <MenuLabel>
        <div>ログインしていません</div>
      </MenuLabel>
      <MenuButton onClick={login}>
        <span>ログイン</span>
      </MenuButton>
    </Menu>
  );

  return (
    <main>
      <Navbar
        title={title}
        onClickSideMenuIcon={() => setIsOpenSideMenu(true)}
        onClickAccountMenuIcon={() => setIsOpenAccountMenu(true)}
      />
      {children}
      {accountMenu}
      <SideMenu
        title={title}
        isOpen={isOpenSideMenu}
        onClose={() => setIsOpenSideMenu(false)}
      />
    </main>
  );
}
