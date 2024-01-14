"use client";

import React, { useState } from "react";
import styles from "./top-navbar.module.css";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { SideMenu } from "./side-menu";
import { StandardIconButton } from "@/atoms/icon-button";

const Navbar = () => {
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

  const title = "科目名";
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
        <span className={styles.subjectname}>{title}</span>
        <span className={styles.icon}>
          <AiOutlineUser />
        </span>
      </div>
    </>
  );
};

export default Navbar;
