import styles from "./tooltip.module.css";

export type TooltipProps = { text: string };

export function PlainTooltip({ text }: TooltipProps): JSX.Element {
  return (
    <div
      className={`inverse-surface inverse-on-surface-text body-small ${styles.container}`}
    >
      {text}
    </div>
  );
}
