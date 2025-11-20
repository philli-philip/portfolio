"use client";
import { useEffect } from "react";
import { mockData, privateEvents, timeLineEvents } from "./data";
import { LifeSections } from "./LifeSections";
import Today from "./today";
import PrivateEvents from "./privateEvents";
import Marker from "./marker";
import { useTimelineContext } from "./useTimelineReducer";

export default function Page() {
  const { state, dispatch } = useTimelineContext();

  useEffect(() => {
    const handleResize = () => {
      const startYear = 1982;
      const endYear = 2102;
      const sWidth = window.innerWidth;
      const scale = sWidth / (endYear - startYear);

      dispatch({
        type: "setScale",
        payload: {
          start: new Date(startYear.toString()),
          end: new Date(endYear.toString()),
          scale: scale,
          offset: startYear * scale,
          sWidth: sWidth,
        },
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col justify-center bg-stone-100">
      <div className="group absolute left-8 top-8 max-w-sm text-gray-800">
        <h1 className="text-2xl font-light">Timeline</h1>
        <p className="h-4 overflow-clip text-ellipsis text-balance text-sm opacity-30 duration-150 group-hover:h-32 group-hover:opacity-100">
          An attempt to visualise my whole life, to have a different perspective
          on how much time I have left, and what milestones I have achieved.
          <br /> <br /> Some private events are hidden for not logged-in users.
        </p>
      </div>
      <PrivateEvents type="private" events={state.private} />
      <div className="relative h-2 bg-stone-200">
        <LifeSections sections={mockData} />
        <Today date={new Date()} />
      </div>
      <div className="relative h-0">
        <Marker />
      </div>
      <PrivateEvents type="public" events={timeLineEvents} />
    </div>
  );
}
