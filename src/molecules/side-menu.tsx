import { StandardIconButton } from "@/atoms/icon-button";
import styles from "./side-menu.module.css";
import { AiOutlineClose, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FilledButton } from "@/atoms/button";
import { Dialog } from "./dialog";
import { FormEvent, useState } from "react";
import { OutlinedTextField } from "@/atoms/text-field";
import { Subject, useSubjects } from "@/queries/subjects";
import Link from "next/link";
import { useAccessToken } from "@/queries/access-token";

export type SideMenuProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const SubjectMenuItem = ({
  subject: { id, name, boards },
}: {
  subject: Subject;
}) => (
  <div className={styles.item}>
    <Link href={`/attendances?subject=${id}`} className={styles.labels}>
      <div className={styles.stateLayer}>
        <p className="body-large">{name}</p>
        {boards.length !== 0 && (
          <p className="body-medium">
            {new Date(boards[0].startFrom).toLocaleString()}
          </p>
        )}
      </div>
    </Link>
    <div className={styles.leadingButton}>
      <StandardIconButton icon={<AiOutlineDelete />} alt="削除" />
    </div>
  </div>
);

export function SideMenu({
  title,
  isOpen,
  onClose,
}: SideMenuProps): JSX.Element {
  const accessToken = useAccessToken();
  const { data: subjects } = useSubjects(accessToken ? { accessToken } : null);
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
        data-open={isOpen}
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
          <div className={styles.item}>
            <Link href="/" className={styles.labels}>
              <div className={styles.stateLayer}>
                <p className="body-large">ホーム</p>
              </div>
            </Link>
          </div>
          {subjects?.map((subject) => (
            <SubjectMenuItem key={subject.id} subject={subject} />
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
      <div className={styles.scrim} onClick={onClose} data-open={isOpen} />
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
