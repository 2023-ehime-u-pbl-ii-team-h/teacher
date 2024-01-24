"use client";

import styles from "./top-navbar.module.css";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { StandardIconButton } from "@/atoms/icon-button";

export type NavbarProps = {
  title: string;
  onClickSideMenuIcon: () => void;
  onClickAccountMenuIcon: () => void;
};

export const Navbar = ({
  title,
  onClickSideMenuIcon,
  onClickAccountMenuIcon,
}: NavbarProps) => {
  return (
    <div className={`${styles.navbar} surface on-surface-text`}>
      <StandardIconButton
        icon={<AiOutlineUnorderedList />}
        alt="サイドメニューを開く"
        onClick={onClickSideMenuIcon}
      />
      <span className={styles.subjectName}>{title}</span>
      <StandardIconButton
        icon={<AiOutlineUser />}
        alt=""
        onClick={onClickAccountMenuIcon}
      />
    </div>
  );
};
