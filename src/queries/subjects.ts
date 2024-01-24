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

const fetcher: Fetcher<Subject[], { accessToken: string }> = ({
  accessToken,
}) =>
  fetch(`${API_ROOT}/me/subjects`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(
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

export const useSubjects = (props: { accessToken: string } | null) =>
  useSWR(props, fetcher);
