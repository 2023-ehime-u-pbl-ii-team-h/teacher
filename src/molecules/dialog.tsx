import { FormEvent, ReactNode } from "react";
import styles from "./dialog.module.css";
import { TextButton } from "@/atoms/button";

export type DialogProps = {
  children?: ReactNode;
  title: string;
  description?: string;
  icon?: ReactNode;
  submitLabel: string;
  closeLabel?: string;
  onCancel: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function Dialog({
  children,
  title,
  description = "",
  icon,
  submitLabel: confirmLabel,
  closeLabel: cancelLabel,
  onCancel,
  onSubmit,
}: DialogProps): JSX.Element {
  return (
    <div className={styles.dialog}>
      <div className={`surface on-surface-text ${styles.container}`}>
        {icon && <div className={styles.leadingIcon}>{icon}</div>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <form onSubmit={onSubmit}>
          <div className={styles.body}>{children}</div>
          <div className={styles.controls}>
            {cancelLabel && (
              <TextButton
                innerProps={{ value: "cancel", onClick: onCancel }}
                label={cancelLabel}
              />
            )}
            <TextButton
              innerProps={{ value: "confirm" }}
              label={confirmLabel}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
