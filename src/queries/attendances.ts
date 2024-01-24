import useSWR, { Fetcher } from "swr";
import { API_ROOT } from "./config";

export interface Attendance {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

const fetcher: Fetcher<
  Attendance[],
  { subjectId: string; boardId: string; accessToken: string }
> = ({ subjectId, boardId, accessToken }) =>
  fetch(`${API_ROOT}/subjects/${subjectId}/boards/${boardId}/attendances`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(
      (res) =>
        res.json() as Promise<
          {
            id: string;
            created_at: number;
            who: {
              id: string;
              name: string;
              email: string;
            };
          }[]
        >,
    )
    .then((values) =>
      values.map((value) => ({
        id: value.id,
        name: value.who.name,
        email: value.who.email,
        createdAt: new Date(value.created_at * 1000),
      })),
    );

export const useAttendances = (
  props: {
    subjectId: string;
    boardId: string;
    accessToken: string;
  } | null,
) => useSWR(props, fetcher);
