import { ReactNode } from "react";
import styles from "./menu.module.css";

export type MenuProps = {
  children: ReactNode;
};

export const Menu = ({ children }: MenuProps): JSX.Element => (
  <ul
    className={`surface-container on-surface-text label-large ${styles.menu}`}
  >
    {children}
  </ul>
);

export const MenuLabel = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => <li className={styles.label}>{children}</li>;

export const MenuButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: ReactNode;
}): JSX.Element => (
  <li className={styles.button} onClick={onClick}>
    <div className={styles.stateLayer}></div>
    {children}
  </li>
);
