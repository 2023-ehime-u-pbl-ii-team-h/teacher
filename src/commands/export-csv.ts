import type { Attendance } from "@/queries/attendances";

export function exportCsv(attendances: readonly Attendance[]) {
  const rows = attendances
    .map(({ id, name, email, createdAt }) =>
      [id, name, email, createdAt.toISOString()].join(","),
    )
    .join("\n");
  const csv = `ID,名前,メールアドレス,時刻\n${rows}\n`;

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.click();
}
