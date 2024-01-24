import { ReactNode, Ref, forwardRef } from "react";
import styles from "./menu.module.css";

export type MenuProps = {
  isOpen: boolean;
  children: ReactNode;
};

const MenuInner = (
  { isOpen, children }: MenuProps,
  ref: Ref<HTMLDivElement>,
): JSX.Element => (
  <div
    ref={ref}
    className={`surface-container on-surface-text label-large ${styles.menu}`}
    data-open={isOpen}
  >
    {children}
  </div>
);
export const Menu = forwardRef(MenuInner);

export const MenuLabel = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => <div className={styles.label}>{children}</div>;

export const MenuButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: ReactNode;
}): JSX.Element => (
  <div className={styles.button} onClick={onClick}>
    <span className={styles.stateLayer}></span>
    {children}
  </div>
);
