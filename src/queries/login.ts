import useSWR, { Fetcher } from "swr";
import { API_ROOT } from "./config";

export interface Teacher {
  name: string;
  email: string;
  charges: readonly string[];
}

const fetcher: Fetcher<Teacher, Record<string, never>> = () =>
  fetch(`${API_ROOT}/me`).then(
    (res) =>
      res.json() as Promise<{
        name: string;
        email: string;
        charges: string[];
      }>,
  );

export const useLogin = () => useSWR({}, fetcher);
