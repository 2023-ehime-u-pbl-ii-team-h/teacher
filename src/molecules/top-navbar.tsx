import React from "react";
import styles from "./top-navbar.css";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <span className={styles.icon}><AiOutlineUnorderedList /></span>
            <span className={styles.subjectname}>aa</span>
            <span className={styles.icon}>bb</span>
        </div>
    );
};

export default Navbar;