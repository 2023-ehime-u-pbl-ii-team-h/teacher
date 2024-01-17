import useSWR, { Fetcher } from "swr";
import { API_ROOT } from "./config";

export interface Subject {
  id: string;
  name: string;
  lastOpenDate: Date;
}

const fetcher: Fetcher<Subject[], Record<string, never>> = () =>
  fetch(`${API_ROOT}/me/subjects/`)
    .then(
      (res) =>
        res.json() as Promise<
          {
            id: string;
            name: string;
            lastDate: string;
          }[]
        >,
    )
    .then((values) =>
      values.map((value) => ({
        id: value.id,
        name: value.name,
        lastOpenDate: new Date(value.lastDate),
      })),
    );

export const useSubjects = () => useSWR({}, fetcher);
