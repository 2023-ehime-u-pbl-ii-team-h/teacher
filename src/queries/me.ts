import useSWR, { Fetcher } from "swr";
import { API_ROOT } from "./config";

export interface Account {
  id: string;
  name: string;
  email: string;
  charges: string[];
}

const fetcher: Fetcher<Account, { accessToken: string }> = ({ accessToken }) =>
  fetch(`${API_ROOT}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json() as Promise<Account>);

export const useMe = (props: { accessToken: string } | null) =>
  useSWR(props, fetcher);
