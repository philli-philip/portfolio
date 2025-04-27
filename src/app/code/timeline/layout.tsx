"use client";
import { TimelineProvider } from "./useTimelineReducer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <TimelineProvider>{children}</TimelineProvider>;
}
