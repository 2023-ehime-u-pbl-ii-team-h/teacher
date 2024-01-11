import { ReactNode } from "react";
import styles from "./button.module.css";

export interface ButtonProps {
  onClick?: () => void;
  leadingIcon?: ReactNode;
  label: string;
}

export function FilledButton({
  onClick,
  leadingIcon,
  label,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`primary on-primary-text ${styles.button} ${styles.fullCorner} ${styles.hoverElevation}`}
    >
      <div className={styles.stateLayer}>
        <div className={styles.content}>
          {leadingIcon && <span>{leadingIcon}</span>}
          <span className="label-large">{label}</span>
        </div>
      </div>
    </button>
  );
}
