"use client";

import { AccountMenu } from "@/molecules/account-menu";
import { SideMenu } from "@/molecules/side-menu";
import { Navbar } from "@/molecules/top-navbar";
import { InteractionType } from "@azure/msal-browser";
import { useAccount, useMsal, useMsalAuthentication } from "@azure/msal-react";
import { ReactNode, useState } from "react";

export type OutletProps = {
  title: string;
  children: ReactNode;
};

export function Outlet({ title, children }: OutletProps): JSX.Element {
  const { login: reLogin, acquireToken } = useMsalAuthentication(
    InteractionType.Redirect,
    {
      scopes: ["User.Read"],
      prompt: "select_account",
    },
  );
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] ?? {});
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);

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
    await instance.logout();
  };

  return (
    <main>
      <Navbar
        title={title}
        onClickSideMenuIcon={() => setIsOpenSideMenu(true)}
        onClickAccountMenuIcon={() => setIsOpenAccountMenu(true)}
      />
      {children}
      <AccountMenu
        account={account}
        isOpen={isOpenAccountMenu}
        onClose={() => setIsOpenAccountMenu(false)}
        onLogin={login}
        onLogout={logout}
      />
      <SideMenu
        title={title}
        isOpen={isOpenSideMenu}
        onClose={() => setIsOpenSideMenu(false)}
      />
    </main>
  );
}
