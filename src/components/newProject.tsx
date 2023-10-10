"use client";

import { useMouse } from "@react-hooks-library/core";
import Link from "next/link";
import RightArrow from "./icons/right-arrow";

export default function NewProject() {
  const { x, y } = useMouse();
  return (
    <section className="px container pb-12 md:px-0 md:pb-48">
      <div className="relative mx-4 flex max-w-6xl flex-col justify-start overflow-hidden rounded-3xl bg-gray-100 px-8 py-8 shadow-2xl shadow-black/10 dark:bg-black/5 dark:shadow-none md:mx-auto md:px-12  md:py-8">
        <h3 className="block text-sm font-medium uppercase text-black/60  dark:text-white/60">
          New project
        </h3>
        <span className="mt-3 block text-4xl font-bold tracking-tight text-black/80 dark:text-white/80 md:text-5xl">
          PowerBank
        </span>
        <p className="mt-2 text-xl text-black/60 dark:text-white/60">
          The reference experience for corporate banking
        </p>
        <Link
          className="z-10 -ml-2 mt-6 flex flex-row items-center gap-x-2 self-start rounded-full bg-black/5 px-4 py-2 text-black/80 backdrop-saturate-200 duration-75 hover:bg-black/10 hover:backdrop-saturate-200 dark:text-white/80 md:absolute md:bottom-8 md:right-12"
          href="https://powerbank.vercel.app?rel=portfolio-mattha"
        >
          Check out
          <RightArrow />
        </Link>
        <div className="absolute -top-[320px] left-1/4 h-[500px] w-[500px] animate-random-walk-fast rounded-full bg-gradient-radial from-orange-500/30 to-60%" />
        <div className="absolute -bottom-32 -left-16 h-[300px] w-[300px] animate-random-walk-fast rounded-full bg-gradient-radial from-blue-400/30 to-60%" />
        <div className="absolute -bottom-[350px] -right-[200px] h-[600px] w-[600px] animate-random-walk-fast rounded-full bg-gradient-radial from-green-400/30 to-60%" />
        <div
          style={{
            transform: `translate(${x - 800}px, ${y - 800}px)`,
          }}
          className="absolute h-[800px] w-[800px] rounded-full bg-gradient-radial from-green-400/10 to-60%"
        />
      </div>
    </section>
  );
}
