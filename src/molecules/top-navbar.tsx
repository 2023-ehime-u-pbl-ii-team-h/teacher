import React from "react";
import styles from "./top-navbar.css";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <span className={styles.icon}><AiOutlineUnorderedList /></span>
            <span className={styles.subjectname}>科目名</span>
            <span className={styles.icon}>アバターアイコン</span>
        </div>
    );
};

export default Navbar;