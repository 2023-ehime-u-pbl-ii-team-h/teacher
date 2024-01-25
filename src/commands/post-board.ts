import { AttendanceBoards } from "@/queries/boards";
import { API_ROOT } from "@/queries/config";

export async function postBoard(
  accessToken: string,
  subjectId: string,
  boards: readonly Omit<AttendanceBoards[number], "id">[],
) {
  const res = await fetch(`${API_ROOT}/subjects/${subjectId}/board`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ boards }),
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
}
