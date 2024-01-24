import { ComponentProps, ReactNode } from "react";
import styles from "./floating-action-button.module.css";

export type FABProps = {
  label: string;
  leadingIcon?: ReactNode;
  innerProps?: ComponentProps<"button">;
};

export function ExtendedFAB({
  label,
  leadingIcon,
  innerProps,
}: FABProps): JSX.Element {
  return (
    <button
      {...innerProps}
      className={`primary-container on-primary-container-text ${styles.button}`}
    >
      <span className={styles.stateLayer}></span>
      <span className={styles.content}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <span className="label-large">{label}</span>
      </span>
    </button>
  );
}
