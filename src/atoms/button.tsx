import { ReactNode } from "react";
import styles from "./button.module.css";

export interface ButtonProps {
  onClick?: () => void;
  value?: string;
  leadingIcon?: ReactNode;
  label: string;
}

export function FilledButton({
  onClick,
  value,
  leadingIcon,
  label,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`on-primary-text ${styles.button} ${styles.filled} ${styles.fullCorner} ${styles.hoverElevation}`}
      onClick={onClick}
      value={value}
    >
      <div className={styles.stateLayer}>
        <div className={styles.content}>
          {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
          <span className="label-large">{label}</span>
        </div>
      </div>
    </button>
  );
}

export function TextButton({
  onClick,
  value,
  leadingIcon,
  label,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`primary-text ${styles.button} ${styles.fullCorner} `}
      onClick={onClick}
      value={value}
    >
      <div className={styles.stateLayer}>
        <div className={styles.content}>
          {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
          <span className="label-large">{label}</span>
        </div>
      </div>
    </button>
  );
}
