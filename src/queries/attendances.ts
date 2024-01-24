import useSWR, { Fetcher } from "swr";
import { fetcher } from "./config";

export type Attendances = {
  id: string;
  created_at: number;
  who: {
    id: string;
    name: string;
    email: string;
  };
}[];

export const useAttendances = (
  props: {
    subjectId: string;
    boardId: string;
    accessToken: string;
  } | null,
) =>
  useSWR<Attendances>(
    props
      ? [
          `/subjects/${props.subjectId}/boards/${props.boardId}/attendances`,
          props.accessToken,
        ]
      : null,
    fetcher as Fetcher<Attendances>,
  );
