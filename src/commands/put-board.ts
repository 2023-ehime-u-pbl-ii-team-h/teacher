import { AttendanceBoards } from "@/queries/boards";
import { API_ROOT } from "@/queries/config";

export async function putBoard(
  accessToken: string,
  subjectId: string,
  board: AttendanceBoards[number],
  changeAllAfter: boolean,
) {
  const res = await fetch(
    `${API_ROOT}/subjects/${subjectId}/board/${board.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start_from: board.startFrom,
        seconds_from_start_to_be_late: board.secondsFromStartToBeLate,
        seconds_from_be_late_to_end: board.secondsFromBeLateToEnd,
        change_all_after: changeAllAfter,
      }),
    },
  );
  if (!res.ok) {
    throw new Error(await res.text());
  }
}
