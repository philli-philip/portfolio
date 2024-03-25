import type { difficultyValue } from "../app/code/page";

export type TaskStatus = "open" | "completed" | "canceled";

export type Task = {
  id: number;
  name: string;
  link: string;
  difficulty: difficultyValue;
  completedAt?: Date;
  status: TaskStatus;
};
