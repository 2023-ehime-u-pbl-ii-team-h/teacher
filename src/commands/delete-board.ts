import { API_ROOT } from "@/queries/config";

export async function deleteBoard(
  accessToken: string,
  subjectId: string,
  boardId: string,
) {
  const res = await fetch(
    `${API_ROOT}/subjects/${subjectId}/board/${boardId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error(await res.text());
  }
}
