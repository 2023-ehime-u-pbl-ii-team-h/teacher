export interface AttendanceBoard {
  id: string;
  startFrom: Date;
  secondsFromStartToBeLate: number;
  secondsFromBeLateToEnd: number;
}

export const useBoards = (subjectId: string): AttendanceBoard[] | null => {
  const boards = [
    {
      id: "board01",
      startFrom: new Date("2024-01-12T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
    {
      id: "board02",
      startFrom: new Date("2024-01-18T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
    {
      id: "board03",
      startFrom: new Date("2024-01-18T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
    {
      id: "board04",
      startFrom: new Date("2024-01-18T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
    {
      id: "board05",
      startFrom: new Date("2024-01-18T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
    {
      id: "board06",
      startFrom: new Date("2024-01-18T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
    {
      id: "board07",
      startFrom: new Date("2024-01-18T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
    {
      id: "board08",
      startFrom: new Date("2024-01-18T08:30:00Z"),
      secondsFromStartToBeLate: 30 * 60,
      secondsFromBeLateToEnd: 60 * 60,
    },
  ];
  return boards;
};
