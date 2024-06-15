"use client"

import Link from "next/link";
import { cn } from "../../utils/cn";
import Section from "../skill/section";
import localFont from "next/font/local";

export const Nudica = localFont({
  src: [
    {
      weight: "300",
      path: "../../(skill2)/skill2/Nudica-Light.otf",
      style: "normal",
    },
    {
      weight: "400",
      path: "../../(skill2)/skill2/Nudica-Regular.otf",
      style: "normal",
    },
    {
      weight: "500",
      path: "../../(skill2)/skill2/Nudica-Medium.otf",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function Page() {
  return (
    <html className={cn("bg-whiteexport ", Nudica.className)}>
      <body>
        <Section
          className="
            flex flex-col items-center bg-white py-24 lg:py-48
          "
        >
          <h1 className="max-w-[18ch] pb-4 text-center text-4xl font-medium text-black lg:pb-6 lg:text-6xl">
            Career ladder to focus on your next growth step
          </h1>
          <p className="mb-6 max-w-[50ch] text-center text-lg text-gray-500 lg:text-xl">
            Based on Figmas Design ladder. My addition is the guidance what
            level you are based on the skills you have. Go through all section
            to see what level you are.
          </p>
          <span>
            <Link
              href="/skill3/question"
              className={cn(
                "mb-2 block h-12 rounded-xl border-b border-white/20 bg-green-500 px-4 text-xl font-medium leading-[48px] text-white shadow-green-700 drop-shadow-[0_8px_0_#15803d] duration-75 hover:mb-1 hover:mt-1  hover:drop-shadow-[0_4px_0_#15803d]"
              )}
            >
              Get started
            </Link>
          </span>
        </Section>
      </body>
    </html>
  );
}
