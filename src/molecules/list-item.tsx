import styles from "./list-item.module.css";

export interface ListItemProps {
  checked: boolean;
  iconLabel: string;
  primaryLabel: string;
  secondaryLabel?: string;
  onClick?: () => void;
}

export const ListItem = ({
  checked,
  iconLabel,
  primaryLabel,
  secondaryLabel,
  onClick,
}: ListItemProps): JSX.Element => (
  <label
    className={`${styles.container} ${
      checked
        ? "tertiary-container on-tertiary-container-text"
        : "primary-container on-primary-container-text"
    }`}
    onClick={onClick}
  >
    <div className={styles.state}>
      <div className={`${styles.icon} scrim`}>
        <span className="title-small">{iconLabel}</span>
      </div>
      <div className={styles.labelSet}>
        <span className="title-medium">{primaryLabel}</span>
        <span className="title-small">{secondaryLabel}</span>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" checked={checked}></input>
      </div>
    </div>
  </label>
);
