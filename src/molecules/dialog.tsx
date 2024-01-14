import { ReactNode } from "react";
import styles from "./dialog.module.css";
import { TextButton } from "@/atoms/button";

export type DialogProps = {
  children?: ReactNode;
  title: string;
  description?: string;
  icon?: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  onSubmit: (isConfirmed: boolean) => void;
};

export function Dialog({
  children,
  title,
  description = "",
  icon,
  confirmLabel,
  cancelLabel,
  onSubmit,
}: DialogProps): JSX.Element {
  return (
    <div className={styles.dialog}>
      <div className={`surface on-surface-text ${styles.container}`}>
        {icon && <div className={styles.leadingIcon}>{icon}</div>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.body}>{children}</div>
        <div className={styles.controls}>
          <TextButton
            value="confirm"
            label={confirmLabel}
            onClick={() => onSubmit(true)}
          />
          {cancelLabel && (
            <TextButton
              value="cancel"
              label={cancelLabel}
              onClick={() => onSubmit(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
