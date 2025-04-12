"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { mockData, privateEvents, timeLineEvents } from "./data";
import { LifeSections } from "./LifeSections";
import Today from "./today";
import PrivateEvents from "./privateEvents";

export type ScaleContextType = {
  start: Date;
  end: Date;
  scale: number;
  offset: number;
  sWidth: number;
};
export const ScaleContext = createContext<ScaleContextType | undefined>(
  undefined
);

// Custom hook to use the scale context
export const useScale = () => {
  const context = useContext(ScaleContext);
  if (!context) {
    throw new Error("useScale must be used within a ScaleProvider");
  }
  return context;
};

export default function Page() {
  const [scale, setScale] = useState<ScaleContextType | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const startYear = 1982;
      const endYear = 2102;
      const sWidth = window.innerWidth;
      const scale = sWidth / (endYear - startYear);

      setScale({
        start: new Date(startYear.toString()),
        end: new Date(endYear.toString()),
        scale: scale,
        offset: startYear * scale,
        sWidth: sWidth,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScaleContext.Provider value={scale}>
      <div className="flex h-screen w-screen flex-col justify-center bg-stone-100">
        {scale && (
          <>
            <PrivateEvents type="private" events={privateEvents} />
            <div className="relative h-2 bg-stone-200">
              <LifeSections sections={mockData} />
              <Today date={new Date()} />
            </div>
            <PrivateEvents type="public" events={timeLineEvents} />
          </>
        )}
      </div>
    </ScaleContext.Provider>
  );
}
