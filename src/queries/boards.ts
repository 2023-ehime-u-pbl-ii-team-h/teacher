import useSWR, { Fetcher } from "swr";
import { fetcher } from "./config";

export type AttendanceBoards = {
  id: string;
  startFrom: string;
  secondsFromStartToBeLate: number;
  secondsFromBeLateToEnd: number;
}[];

export const useBoards = (
  props: { subjectId: string; accessToken: string } | null,
) =>
  useSWR<AttendanceBoards>(
    props ? [`/subjects/${props.subjectId}`, props.accessToken] : null,
    fetcher as Fetcher<AttendanceBoards>,
  );
