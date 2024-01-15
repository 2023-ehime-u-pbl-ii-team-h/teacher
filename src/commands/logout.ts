const BACKEND_LOGOUT_ENDPOINT = "https://backend.mikuroxina.workers.dev/logout";

export const logoutAndReload = async () => {
  try {
    const response = await fetch(BACKEND_LOGOUT_ENDPOINT, {
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
