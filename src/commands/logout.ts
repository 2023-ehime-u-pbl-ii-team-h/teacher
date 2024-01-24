const BACKEND_LOGOUT_ENDPOINT = "https://backend.mikuroxina.workers.dev/logout";

export const logoutAndReload = async (accessToken: string) => {
  try {
    const response = await fetch(BACKEND_LOGOUT_ENDPOINT, {
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
