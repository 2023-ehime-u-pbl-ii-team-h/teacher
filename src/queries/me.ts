import useSWR, { Fetcher } from "swr";
import { fetcher } from "./config";

export type Account = {
  id: string;
  name: string;
  email: string;
  role: "STUDENT" | "TEACHER";
  subscriptions: string[];
};

export const useMe = (props: { accessToken: string } | null) =>
  useSWR<Account>(
    props ? ["/me", props.accessToken] : null,
    fetcher as Fetcher<Account>,
  );
