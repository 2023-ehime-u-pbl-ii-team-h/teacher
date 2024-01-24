import useSWR, { Fetcher } from "swr";
import { fetcher } from "./config";

export type Subjects = {
  id: string;
  name: string;
  boards: {
    id: string;
    subject: string;
    startFrom: string;
    secondsFromStartToBeLate: number;
    secondsFromBeLateToEnd: number;
  }[];
}[];

export const useSubjects = (props: { accessToken: string } | null) =>
  useSWR<Subjects>(
    props ? ["/me/subjects", props.accessToken] : null,
    fetcher as Fetcher<Subjects>,
  );
