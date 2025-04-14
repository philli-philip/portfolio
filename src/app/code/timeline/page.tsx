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
    <div className="flex h-screen w-screen flex-col justify-center bg-stone-100">
      <PrivateEvents type="private" events={state.private} />
      <div className="relative h-2 bg-stone-200">
        <Marker />
        <LifeSections sections={mockData} />
        <Today date={new Date()} />
      </div>
      <PrivateEvents type="public" events={timeLineEvents} />
    </div>
  );
}
