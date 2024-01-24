import { API_ROOT } from "@/queries/config";

export async function postSubject(
  meId: string,
  subjectName: string,
  accessToken: string,
): Promise<void> {
  const res = await fetch(`${API_ROOT}/subjects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      name: subjectName,
      assignees: [meId],
    }),
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
}
