export interface Subject {
  id: string;
  name: string;
  lastOpenDate: Date;
}

export function useSubjects(): Subject[] | null {
  const subjects = [
    {
      id: "sub01",
      name: "Lorem ipsum",
      lastOpenDate: new Date("2024-01-12T08:30Z"),
    },
    {
      id: "sub02",
      name: "Lorem ipsum",
      lastOpenDate: new Date("2024-01-12T10:20Z"),
    },
  ];
  return subjects;
}
