import { ReactNode } from "react";
import styles from "./icon-button.module.css";
import { PlainTooltip } from "./tooltip";

export type IconButtonProps = {
  icon: ReactNode;
  alt: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function StandardIconButton({
  icon,
  alt,
  disabled,
  onClick,
}: IconButtonProps): JSX.Element {
  return (
    <div>
      <button className={styles.touch} disabled={disabled} onClick={onClick}>
        <div className={styles.stateLayer}>
          <div className={styles.icon} aria-label={alt}>
            {icon}
          </div>
        </div>
      </button>
      {alt !== "" && (
        <div className={styles.tooltip}>
          {" "}
          <PlainTooltip text={alt} />
        </div>
      )}
    </div>
  );
}
