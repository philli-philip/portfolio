export type TimeLinePhase = {
  start: Day;
  type: "childhood" | "adolescence" | "worklife" | "retirement" | "death";
};

export type Day = {
  day: number;
  month: number;
  year: number;
};

export type TimeLineEvent = {
  day: Day;
  title: string;
  description: string;
};
