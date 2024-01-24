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
      <span className={styles.stateLayer}></span>
      <span className={styles.content}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <span className="label-large">{label}</span>
      </span>
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
      <span className={styles.stateLayer}></span>
      <span className={styles.content}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <span className="label-large">{label}</span>
      </span>
    </button>
  );
}
