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
      year: 2015,
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
    id: "9-11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "9-11",
  },
  {
    day: {
      day: 1,
      month: 1,
      year: 1999,
    },
    id: "euro",
    title: "Introduction Euro",
    description: "The Euro is introduced",
  },
  {
    day: {
      day: 30,
      month: 1,
      year: 2022,
    },
    id: "covid",
    title: "COVID-19",
    description: "The world is facing a new pandemic",
  },
  {
    day: {
      day: 9,
      month: 11,
      year: 1989,
    },
    id: "berlin-wall",
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
    id: "move-to-zurich",
    title: "Moving to Zurich",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 7,
      month: 10,
      year: 2022,
    },
    id: "roman",
    title: "Roman's birth",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 28,
      month: 8,
      year: 2024,
    },
    id: "vic",
    title: "Vic's birth",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 10,
      month: 9,
      year: 2021,
    },
    id: "ederstrasse",
    title: "Bought Ederstraße",
    description: "3550g 53cm",
  },
  {
    day: {
      day: 10,
      month: 7,
      year: 2021,
    },
    id: "nina",
    title: "Met Nina 💕",
    description: "3550g 53cm",
  },
];
