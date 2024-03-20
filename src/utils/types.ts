import type { difficultyValue } from "../app/code/page";

export type Task = {
  id: number;
  name: string;
  link: string;
  difficulty: difficultyValue;
  completed?: Date;
};
