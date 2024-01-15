import { StandardIconButton } from "@/atoms/icon-button";
import styles from "./side-menu.module.css";
import { AiOutlineClose, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FilledButton } from "@/atoms/button";
import { Dialog } from "./dialog";
import { FormEvent, useState } from "react";
import { OutlinedTextField } from "@/atoms/text-field";
import { useSubjects } from "@/queries/subjects";

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
  const subjects = useSubjects();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  function onSubmitNewSubject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem(
      "subject_name",
    ) as HTMLInputElement;
    console.log(input.value);
    setIsOpenDialog(false);
  }

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
          {subjects?.map(({ id, name, lastOpenDate }) => (
            <div key={id} className={styles.item}>
              <div className={styles.labels}>
                <div className={styles.stateLayer}>
                  <p className="body-large">{name}</p>
                  <p className="body-medium">{lastOpenDate.toLocaleString()}</p>
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
              innerProps={{ onClick: () => setIsOpenDialog(true) }}
            />
          </div>
        </div>
      </div>
      {isOpen && <div className={styles.scrim} onClick={onClose} />}
      {isOpenDialog && (
        <Dialog
          title="科目の新規追加"
          submitLabel="追加"
          closeLabel="キャンセル"
          onCancel={() => setIsOpenDialog(false)}
          onSubmit={onSubmitNewSubject}
        >
          <OutlinedTextField
            label="科目名"
            inputProps={{
              name: "subject_name",
              type: "text",
              defaultValue: "",
              required: true,
            }}
          />
        </Dialog>
      )}
    </>
  );
}
