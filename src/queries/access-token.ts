import { useAccount, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

export function useAccessToken(): string | null {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] ?? {});
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (!account) {
      return;
    }

    (async () => {
      await instance.initialize();
      const tokenRes = await instance.acquireTokenSilent({
        scopes: ["User.Read"],
        account,
      });
      setAccessToken(tokenRes.accessToken);
    })();
  }, [instance, account]);

  return accessToken;
}
