import type { Attendances } from "@/queries/attendances";

export function exportCsv(attendances: Attendances) {
  const rows = attendances
    .map(({ id, who: { name, email }, created_at }) =>
      [id, name, email, new Date(created_at * 1000).toISOString()].join(","),
    )
    .join("\n");
  const csv = `ID,名前,メールアドレス,時刻\n${rows}\n`;

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.click();
}
