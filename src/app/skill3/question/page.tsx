"use client";

import Link from "next/link";
import Revert from "../../../components/icons/revert";
import { Layout } from "../layoutComponent";
import CloseIcon from "../../../components/icons/close";
import Button from "../button";

import { type Skill, skills } from "../content";
import Question from "./question";
import Loading from "../loading";
import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "@react-hooks-library/core";
import { Card } from "../card";
import { type PanInfo, motion, useTransform, useMotionValue } from "framer-motion";
import { CheckMark } from "../../../components/icons/checkmark";
import { useRouter } from "next/navigation";
import type { tLevels } from "../../skill/page";


type Results = { [L in tLevels]?: string[] }

type LocalData = {
  version: number,
  current: number,
  ongoing: boolean
  results?: Results,
}

const defaultRating = { score: 0, max: 0, rating: 1 }

export default function Page() {
  const [index, setIndex] = useLocalStorage<number>("currentIndex", 0);
  const [result, setResult] = useLocalStorage<Results | undefined>("results", undefined)
  const [, setLVL] = useLocalStorage("resultLVL", "L1")
  const [localData, setLocalData] = useLocalStorage<LocalData>("ladder", { current: 0, ongoing: true, version: 1 })
  const [item, setItem] = useState<Skill | undefined>(undefined);
  const [nextItem, setNextItem] = useState<Skill | undefined>(undefined);
  const [rating, setRating] = useState(defaultRating)
  const router = useRouter()


  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-6, 6], { clamp: false });
  const opacity = useTransform(x, [-200, 0, 200], [0.9, 1, 0.9]);
  const checkOpacity = useTransform(x, [-200, 0, 200], [0, 0, 1]);
  const cancelOpacity = useTransform(x, [-200, 0, 200], [1, 0, 0]);
  const nextOpacity = useTransform(x, [-100, 0, 100], [1, 0.8, 1]);
  const marginTop = useTransform(x, [-100, 0, 100], [0, -32, 0])
  const scale = useTransform(x, [-100, 0, 100], [1, 0.90, 1])

  useEffect(() => {
    setItem(skills[localData.current + 1]);
    setNextItem(skills[localData.current + 2]);

    //eslint-disable-next-line
  }, []);




  const handleNext = (checked: boolean) => {
    const score = checked ? rating.score + 1 : rating.score
    const max = rating.max + 1
    const nRating = score / max
    const newRating = { score: score, max: max, rating: nRating }

    setRating(newRating)
    console.log(newRating)

    setLocalData({ ...localData, results: result, ongoing: true, version: localData.version, current: localData.current + 1 })

    if (!checked && item) {
      const lvl = item.level
      const old = result && result[lvl] || []
      setResult({ ...(result), [lvl]: [...old, item.id] });
      setLocalData({ results: { [lvl]: [...old, item.id] }, ongoing: true, version: localData.version, current: localData.current + 1 })

      if (newRating.rating < 0.85 && newRating.max >= 12) {
        item && setLVL(item.level)
        setLocalData({ ...localData, ongoing: false, version: localData?.version || 1, current: localData.current })
        router.push("result")
      }
    }

    setIndex(index + 1);
    setItem(skills[index + 1]);
    setNextItem(skills[index + 2]);
  };

  const backToStart = () => {
    setIndex(0);
    setItem(skills[0]);
    setNextItem(skills[1]);
  }



  const previousCard = (index: number) => {
    let newIndex
    if (index <= 0) {
      newIndex = 0
    } else {
      newIndex = index - 1
    }
    setIndex(newIndex)
    setItem(skills[newIndex]);
    setNextItem(skills[index + 1]);
  }

  const Header = () => (
    <div className="flex justify-between flex-row md:pb-8">
      <span >
        <button
          onClick={() => previousCard(index)}
          className="flex h-10 w-10 items-center dark:text-gray-400 dark:bg-gray-800 justify-center rounded-full bg-black/5 lg:h-12 lg:w-12"
        >
          <Revert strokeWeight={1.5} />
        </button>
      </span>
      <Link
        href="/skill3/"
        className="flex h-10 w-10 items-center dark:text-gray-400 dark:bg-gray-800 justify-center rounded-full bg-black/5 lg:h-12 lg:w-12"
      >
        <CloseIcon strokeWeight={2} />
      </Link>
    </div>
  );

  const Footer = () => (
    <div className="flex justify-center gap-x-4 flex-row">
      <Button color="red" size="large" onClick={() => handleNext(false)}>
        Not yet
      </Button>
      <Button color="green" size="large" onClick={() => handleNext(true)}>
        I do that
      </Button>
    </div>
  );


  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      console.log('right');
      handleNext(true)
    } else if (info.offset.x < -100) {
      console.log('left');
      handleNext(false)
    }
    console.log(rotate)
  }

  const handleReset = (reset: boolean) => {
    if (reset) {
      localStorage.removeItem("currentIndex")
      localStorage.removeItem("results")
      localStorage.removeItem("resultLVL")
      localStorage.removeItem("ladder")
      setLocalData({ ongoing: true, current: 0, version: localData?.version || 0 })
      backToStart()
    } else {
      setLocalData({ ongoing: true, current: localData?.current || 0, version: localData?.version || 0, results: localData?.results })
    }
  }

  const Overlay = () => (
    <div className="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-black/10">
          <Card className="relative rounded-3xl flex flex-col items-center gap-y-4 pt-6 px-6 pb-6 lg:p-12 transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
            <h3 className="text-center font-semibold text-2xl">
              Continue or Reset?
            </h3>
            <p className="text-center">You want to continue where you left off, or want to start from scratch?</p>
            <div className="flex flex-row gap-x-4 pt-4"><Button color="red" onClick={() => handleReset(true)}>From start</Button><Button color="green" onClick={() => handleReset(false)}>Continue</Button></div>
          </Card>
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <div className="h-[600px] lg:h-[700px] flex flex-col justify-between gap-y-4 md:gap-y-8">
        <Header />
        <div id="cards" className="relative max-w-4xl w-full">

          <motion.div
            style={{ top: marginTop, opacity: nextOpacity, scale, position: "absolute", width: "100%" }}>
            <Card className="-z-10 absolute lg:h-[460px] h-[400px] flex flex-col gap-y-6 p-6 lg:p-12 w-full">
              {nextItem ? <Question item={nextItem} /> : <Loading />}
            </Card  >
          </motion.div>

          <motion.div drag="x"
            style={{ rotate, x, }}
            dragTransition={{ bounceDamping: 100_000, bounceStiffness: 100_000 }}
            dragSnapToOrigin onDragEnd={handleDragEnd}
          >

            <motion.div style={{ opacity }}>
              <Card className="z-10 cursor-pointer relative md:w-[700px] lg:w-[800px] h-[400px] lg:h-[460px] flex flex-col gap-y-6 p-6 lg:p-12">
                {item ? <Question item={item} /> : <Loading />}
              </Card>
            </motion.div>

            <motion.div style={{ opacity: checkOpacity }} className="absolute z-40 top-[calc(50%-72px)] left-[calc(50%-72px)]"><CheckMark height={144} width={144} /></motion.div>
            <motion.div style={{ opacity: cancelOpacity }} className="absolute z-40 top-[calc(50%-72px)] left-[calc(50%-72px)]"><div className="bg-red-500 p-4 rounded-full text-white w-40 h-40"><CloseIcon height={132} width={132} /></div></motion.div>
          </motion.div>
        </div>
        <Footer />
        <button onClick={() => handleReset(true)}>Reset</button>
      </div>
      {localData && !localData?.ongoing && <Overlay />}
    </Layout >
  );
} 