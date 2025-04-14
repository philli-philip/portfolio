"use client";
import { createContext, useContext, useReducer } from "react";
import { Day, ScaleContextType, TimeLineEvent } from "./timelineTypes";
import { privateEvents } from "./data";

export type TimeLineContext = {
  state: TimelineState;
  dispatch: React.Dispatch<TimelineAction>;
};

export const TimelineContext = createContext<TimeLineContext | null>(null);

export function useTimelineContext() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error(
      "useTimelineContext must be used within a TimelineProvider"
    );
  }
  return context;
}

// Define action types
export type TimelineAction =
  | {
      type: "addEvent";
      payload: {
        type: "private";
        title: string;
        day?: Day;
      };
    }
  | {
      type: "setScale";
      payload: ScaleContextType;
    };

// Define reducer state type
export type TimelineState = {
  context: ScaleContextType;
  private: TimeLineEvent[];
};

const initialState: TimelineState = {
  private: privateEvents,
  context: {
    start: new Date("1982"),
    end: new Date("2102"),
    scale: 0,
    offset: 0,
    sWidth: 0,
  },
};

// Define reducer with action type
export function timeLineReducer(state: TimelineState, action: TimelineAction) {
  switch (action.type) {
    case "addEvent":
      const { type } = action.payload;
      const newEvent: TimeLineEvent = {
        day: action.payload.day || {
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
        },
        title: action.payload.title,
      };
      const result = {
        ...state,
        [type]: [...state[type], newEvent],
      };
      return result;
    case "setScale":
      console.log("setScale", action.payload);
      return {
        ...state,
        context: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export function TimelineProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(timeLineReducer, initialState);
  return (
    <TimelineContext.Provider value={{ state, dispatch }}>
      {children}
    </TimelineContext.Provider>
  );
}
