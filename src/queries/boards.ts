import useSWR, { Fetcher } from "swr";
import { API_ROOT } from "./config";

export interface AttendanceBoard {
  id: string;
  startFrom: Date;
  secondsFromStartToBeLate: number;
  secondsFromBeLateToEnd: number;
}

const fetcher: Fetcher<AttendanceBoard[], { subjectId: string }> = ({
  subjectId,
}) =>
  fetch(`${API_ROOT}/subjects/${subjectId}`)
    .then(
      (res) =>
        res.json() as Promise<
          {
            id: string;
            startFrom: string;
            secondsFromStartToBeLate: number;
            secondsFromBeLateToEnd: number;
          }[]
        >,
    )
    .then((values) =>
      values.map((value) => ({
        ...value,
        startFrom: new Date(value.startFrom),
      })),
    );

export const useBoards = (props: { subjectId: string }) =>
  useSWR(props, fetcher);
