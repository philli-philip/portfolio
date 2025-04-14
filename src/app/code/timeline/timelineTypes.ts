export type TimeLinePhase = {
  start: Day;
  type: "childhood" | "adolescence" | "adulthood" | "retirement" | "death";
};

export type Day = {
  day: number;
  month: number;
  year: number;
};

export type TimeLineEvent = {
  day: Day;
  title: string;
  description?: string;
};

export type ScaleContextType = {
  start: Date;
  end: Date;
  scale: number;
  offset: number;
  sWidth: number;
};
