import { ReactNode, Ref, forwardRef } from "react";
import styles from "./menu.module.css";

export type MenuProps = {
  isOpen: boolean;
  children: ReactNode;
};

const MenuInner = (
  { isOpen, children }: MenuProps,
  ref: Ref<HTMLUListElement>,
): JSX.Element => (
  <ul
    ref={ref}
    className={`surface-container on-surface-text label-large ${styles.menu}`}
    data-open={isOpen}
  >
    {children}
  </ul>
);
export const Menu = forwardRef(MenuInner);

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
