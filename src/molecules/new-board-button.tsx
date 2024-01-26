"use client";

import { ExtendedFAB } from "@/atoms/floating-action-button";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

export function NewBoardButton(): JSX.Element {
  const params = useSearchParams();
  const subjectId = params.get("subject");

  return (
    <Link href={`/boards/new?subject=${subjectId}`}>
      <ExtendedFAB label="新規出席申請受付" leadingIcon={<AiOutlinePlus />} />
    </Link>
  );
}
