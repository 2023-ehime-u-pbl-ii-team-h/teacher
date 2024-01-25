import { API_ROOT } from "@/queries/config";

export async function deleteSubject(
  subjectId: string,
  accessToken: string,
): Promise<void> {
  const res = await fetch(`${API_ROOT}/subjects/${subjectId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
}
