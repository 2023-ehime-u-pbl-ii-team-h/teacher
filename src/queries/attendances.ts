export interface Attendance {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export function useAttendances(): Attendance[] | null {
  const attendances = [
    {
      id: "0001",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0002",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0003",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0004",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
  ];
  return attendances;
}
