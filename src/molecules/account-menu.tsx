"use client";

import { AccountInfo } from "@azure/msal-browser";
import { useEffect, useRef } from "react";
import { Menu, MenuButton, MenuLabel } from "@/atoms/menu";

export type AccountMenuProps = {
  isOpen: boolean;
  account: AccountInfo | null;
  onClose?: () => void;
  onLogin?: () => void;
  onLogout?: () => void;
};

export function AccountMenu({
  isOpen,
  account,
  onClose,
  onLogin,
  onLogout,
}: AccountMenuProps): JSX.Element {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as HTMLElement)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (account) {
    return (
      <Menu isOpen={isOpen} ref={menuRef}>
        <MenuLabel>
          <span className="label-large">{account.name}</span>
          <span className="label-medium">{account.username}</span>
        </MenuLabel>
        <MenuButton onClick={onLogout}>
          <span className="label-large">ログアウト</span>
        </MenuButton>
      </Menu>
    );
  } else {
    return (
      <Menu isOpen={isOpen} ref={menuRef}>
        <MenuLabel>
          <span className="label-large">ログインしていません</span>
          <span className="label-medium"></span>
        </MenuLabel>
        <MenuButton onClick={onLogin}>
          <span className="label-large">ログイン</span>
        </MenuButton>
      </Menu>
    );
  }
}
