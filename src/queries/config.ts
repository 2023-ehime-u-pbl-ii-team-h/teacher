import { Fetcher } from "swr";

export const API_ROOT = "https://backend-staging.mikuroxina.workers.dev";

export const fetcher: Fetcher<any, [path: string, accessToken: string]> = ([
  path,
  accessToken,
]) =>
  fetch(API_ROOT + path, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
