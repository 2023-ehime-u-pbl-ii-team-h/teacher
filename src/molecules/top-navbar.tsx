"use client";

import React, { useState } from "react";
import styles from "./top-navbar.module.css";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const [isaccountMenuOpen, setIsaccountMenuOpen] = useState(false);
    const toggleaccountMenu = () => {
        setIsaccountMenuOpen(flag => !flag);
    }

    return (
        <div className={styles.navbar}>
            <span className={styles.icon}><AiOutlineUnorderedList /></span>
            <span className={styles.subjectname}>科目名</span>
            <span className={styles.icon}><AiOutlineUser onClick={toggleaccountMenu} /></span>
            {isaccountMenuOpen && (
                <div className={styles.accountmenu}>
                    <a className={styles.accountmenuitem}>menu item</a><br></br><br></br>
                    <button className={styles.accountmenuitem}>ログイン</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;