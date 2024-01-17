"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./top-navbar.module.css";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { SideMenu } from "./side-menu";
import { StandardIconButton } from "@/atoms/icon-button";
import { Menu, MenuButton, MenuLabel } from "@/atoms/menu";

export type NavbarProps = {
  title: string;
};

export const Navbar = ({ title }: NavbarProps) => {
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
    <>
      <SideMenu
        title={title}
        isOpen={isOpenSideMenu}
        onClose={() => setIsOpenSideMenu(false)}
      />
      <div className={`${styles.navbar} surface on-surface-text`}>
        <StandardIconButton
          icon={<AiOutlineUnorderedList />}
          alt="サイドメニューを開く"
          onClick={() => setIsOpenSideMenu(true)}
        />
        <span className={styles.subjectName}>{title}</span>
        <span className={styles.icon}>
          <AiOutlineUser onClick={() => setIsOpenAccountMenu(true)} />
        </span>
        {isOpenAccountMenu && (
          <Menu ref={menuRef}>
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
        )}
      </div>
    </>
  );
};
