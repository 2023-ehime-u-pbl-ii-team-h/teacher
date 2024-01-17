import { ComponentProps, ReactNode } from "react";
import styles from "./button.module.css";

export interface ButtonProps {
  innerProps?: ComponentProps<"button">;
  leadingIcon?: ReactNode;
  label: string;
}

export function FilledButton({
  innerProps,
  leadingIcon,
  label,
}: ButtonProps): JSX.Element {
  return (
    <button
      {...innerProps}
      className={`on-primary-text ${styles.button} ${styles.filled} ${styles.fullCorner} ${styles.hoverElevation}`}
    >
      <div className={styles.stateLayer}></div>
      <div className={styles.content}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <span className="label-large">{label}</span>
      </div>
    </button>
  );
}

export function TextButton({
  innerProps,
  leadingIcon,
  label,
}: ButtonProps): JSX.Element {
  return (
    <button
      {...innerProps}
      className={`primary-text ${styles.button} ${styles.fullCorner}`}
    >
      <div className={styles.stateLayer}></div>
      <div className={styles.content}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <span className="label-large">{label}</span>
      </div>
    </button>
  );
}
