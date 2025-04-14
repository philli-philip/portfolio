import { TimeLineEvent, TimeLinePhase } from "./timelineTypes";

export const scale = 10; // 1px = 1years

export const mockData: TimeLinePhase[] = [
  {
    start: {
      day: 27,
      month: 2,
      year: 1992,
    },
    type: "childhood",
  },
  {
    start: {
      day: 27,
      month: 2,
      year: 2007,
    },
    type: "adolescence",
  },
  {
    start: {
      day: 27,
      month: 2,
      year: 2012,
    },
    type: "adulthood",
  },
  {
    start: {
      day: 27,
      month: 2,
      year: 2077,
    },
    type: "retirement",
  },
  {
    start: {
      day: 27,
      month: 2,
      year: 2092,
    },
    type: "death",
  },
];

export const timeLineEvents: TimeLineEvent[] = [
  {
    day: {
      day: 11,
      month: 9,
      year: 2001,
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "9-11",
  },
  {
    day: {
      day: 1,
      month: 1,
      year: 1999,
    },
    title: "Introduction Euro",
    description: "The Euro is introduced",
  },
  {
    day: {
      day: 30,
      month: 1,
      year: 2022,
    },
    title: "COVID-19",
    description: "The world is facing a new pandemic",
  },
  {
    day: {
      day: 9,
      month: 11,
      year: 1989,
    },
    title: "Berlin Wall demolished",
    description: "The Berlin Wall is demolished",
  },
];

export const privateEvents: TimeLineEvent[] = [
  {
    day: {
      day: 1,
      month: 11,
      year: 2017,
    },
    title: "Moving to Zurich",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 7,
      month: 10,
      year: 2022,
    },
    title: "Roman's birth",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 28,
      month: 8,
      year: 2024,
    },
    title: "Vic's birth",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 10,
      month: 9,
      year: 2021,
    },
    title: "Bought Ederstraße",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 10,
      month: 7,
      year: 2021,
    },
    title: "Met Nina 💕",
    description: "3550g 53cm",
  },
];
