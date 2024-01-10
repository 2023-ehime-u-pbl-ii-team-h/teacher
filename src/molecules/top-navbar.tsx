import React, { useState } from "react";
import styles from "./top-navbar.module.css";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbar}>
            <span className={styles.icon}><AiOutlineUnorderedList /></span>
            <span className={styles.subjectname}>科目名</span>
            <span className={styles.icon}><AiOutlineUser onClick={toggleMenu} /></span>
            {isMenuOpen && (
                <div className="accountmenu">
                    <ul>
                        <li>menu item</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;