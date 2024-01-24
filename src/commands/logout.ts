import { API_ROOT } from "@/queries/config";

export const logoutAndReload = async (accessToken: string) => {
  try {
    const response = await fetch(`${API_ROOT}/logout`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
    });

    if (response.ok) {
      window.location.reload();
    } else {
      response.text().then(console.error);
    }
  } catch (error) {
    console.error("An error occurred during logout", error);
  }
};
