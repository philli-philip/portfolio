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
        id?: string;
        isEditing?: boolean;
      };
    }
  | {
      type: "deleteEvent";
      payload: {
        id: string;
        type: "private";
      };
    }
  | {
      type: "toggleEdit";
      payload: {
        id: string;
        type: "private";
      };
    }
  | {
      type: "updateEventTitle";
      payload: {
        id: string;
        title: string;
        type: "private";
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
  console.log("timeLineReducer", action);
  switch (action.type) {
    case "addEvent":
      const { type, day } = action.payload;
      const newEvent: TimeLineEvent = {
        day: action.payload.day || {
          day: day?.day || new Date().getDate(),
          month: day?.month || new Date().getMonth() + 1,
          year: day?.year || new Date().getFullYear(),
        },
        title: action.payload.title,
        id: action.payload.id || `event-${Date.now()}`,
        isEditing: action.payload.isEditing || false,
      };
      const result = {
        ...state,
        [type]: [...state[type], newEvent],
      };
      return result;
    case "updateEventTitle":
      const { id, title, type: eventType } = action.payload;
      return {
        ...state,
        [eventType]: state[eventType].map((event) =>
          event.id === id ? { ...event, title, isEditing: false } : event
        ),
      };
    case "setScale":
      console.log("setScale", action.payload);
      return {
        ...state,
        context: {
          ...action.payload,
        },
      };
    case "deleteEvent":
      return {
        ...state,
        [action.payload.type]: state[action.payload.type].filter(
          (event) => event.id !== action.payload.id
        ),
      };
    case "toggleEdit":
      const { id: eventId, type: eventType2 } = action.payload;
      return {
        ...state,
        [eventType2]: state[eventType2].map((event) =>
          event.id === eventId ? { ...event, isEditing: true } : event
        ),
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
