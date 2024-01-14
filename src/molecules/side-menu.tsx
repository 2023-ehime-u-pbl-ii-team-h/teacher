import { StandardIconButton } from "@/atoms/icon-button";
import styles from "./side-menu.module.css";
import { AiOutlineClose, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FilledButton } from "@/atoms/button";

export type SideMenuProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export function SideMenu({
  title,
  isOpen,
  onClose,
}: SideMenuProps): JSX.Element {
  const subjects = [
    {
      id: "sub01",
      name: "Lorem ipsum",
      lastOpenDate: "2024-01-12T08:30",
    },
    {
      id: "sub02",
      name: "Lorem ipsum",
      lastOpenDate: "2024-01-12T10:20",
    },
  ];

  return (
    <>
      <div
        className={`surface on-surface-text ${styles.container}`}
        data-is-open={isOpen}
      >
        <div className={styles.items}>
          <div className={styles.header}>
            <span className={`title-large ${styles.title}`}>{title}</span>
            <StandardIconButton
              icon={<AiOutlineClose />}
              alt="サイドメニューを閉じる"
              onClick={onClose}
            />
          </div>
          {subjects.map(({ id, name, lastOpenDate }) => (
            <div key={id} className={styles.item}>
              <div className={styles.labels}>
                <div className={styles.stateLayer}>
                  <p className="body-large">{name}</p>
                  <p className="body-medium">
                    {new Date(lastOpenDate).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className={styles.leadingButton}>
                <StandardIconButton icon={<AiOutlineDelete />} alt="削除" />
              </div>
            </div>
          ))}
          <div className={styles.footer}>
            <FilledButton
              label="科目を新規追加"
              leadingIcon={<AiOutlinePlus />}
            />
          </div>
        </div>
      </div>
      {isOpen && <div className={styles.scrim} onClick={onClose} />}
    </>
  );
}
