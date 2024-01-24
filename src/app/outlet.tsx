"use client";

import { Menu, MenuButton, MenuLabel } from "@/atoms/menu";
import { SideMenu } from "@/molecules/side-menu";
import { Navbar } from "@/molecules/top-navbar";
import { ReactNode, useEffect, useRef, useState } from "react";

export type OutletProps = {
  title: string;
  children: ReactNode;
};

export function Outlet({ title, children }: OutletProps): JSX.Element {
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

  return (
    <main>
      <Navbar
        title={title}
        onClickSideMenuIcon={() => setIsOpenSideMenu(true)}
        onClickAccountMenuIcon={() => setIsOpenAccountMenu(true)}
      />
      {children}
      <Menu ref={menuRef} isOpen={isOpenAccountMenu}>
        <MenuLabel>
          <div>
            <div className="label-large">TEST Teacher</div>
            <div className="label-medium">test.teacher@example.com</div>
          </div>
        </MenuLabel>
        <MenuButton>
          <span>ログイン</span>
        </MenuButton>
      </Menu>
      <SideMenu
        title={title}
        isOpen={isOpenSideMenu}
        onClose={() => setIsOpenSideMenu(false)}
      />
    </main>
  );
}
