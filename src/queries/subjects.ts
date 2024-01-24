import useSWR, { Fetcher } from "swr";
import { API_ROOT } from "./config";

export interface Subject {
  id: string;
  name: string;
  boards: {
    id: string;
    subject: string;
    startFrom: string;
    secondsFromStartToBeLate: number;
    secondsFromBeLateToEnd: number;
  }[];
}

const fetcher: Fetcher<Subject[], Record<string, never>> = () =>
  fetch(`${API_ROOT}/me/subjects`).then(
    (res) =>
      res.json() as Promise<
        {
          id: string;
          name: string;
          boards: {
            id: string;
            subject: string;
            startFrom: string;
            secondsFromStartToBeLate: number;
            secondsFromBeLateToEnd: number;
          }[];
        }[]
      >,
  );

export const useSubjects = () => useSWR({}, fetcher);
