import { ComponentProps } from "react";
import styles from "./text-field.module.css";

export type TextFieldProps = {
  label: string;
  supportingText?: string;
  inputProps: ComponentProps<"input">;
};

export function OutlinedTextField({
  label,
  supportingText,
  inputProps,
}: TextFieldProps): JSX.Element {
  return (
    <label className={styles.outlined}>
      <div className={styles.container}>
        <input
          className={`body-large on-surface-text ${styles.field}`}
          {...inputProps}
        />
        <span className={`body-large on-surface-variant-text ${styles.label}`}>
          {label}
        </span>
      </div>
      {supportingText && (
        <span className={`on-surface-variant-text ${styles.supporting}`}>
          {supportingText}
        </span>
      )}
    </label>
  );
}
