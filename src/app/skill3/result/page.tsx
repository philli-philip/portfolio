"use client"

import { useLocalStorage } from "@react-hooks-library/core";
import { useEffect, useState } from "react";
import type { tLevels } from "../../skill/page";
import { Card } from "../card";

type Response = {
  title: string,
  description: string,
}

type Item = { id: number, result: boolean, lvl: string }

const responses = {
  L1: { title: "Junior Designer", description: "classic Junior Designer." },
  L2: { title: "Mid level", description: "Do you even know how to spell design?" },
  L3: { title: "Senior designer", description: "Do you even know how to spell design?" },
  L4: { title: "Lead designer", description: "Do you even know how to spell design?" },
  L5: { title: "Head of Design", description: "Do you even know how to spell design?" },
  L6: { title: "Director of Design", description: "Do you even know how to spell design?" },
}


export default function Page() {

  const [results] = useLocalStorage<Item[]>("results", [])
  const [rLvl] = useLocalStorage<tLevels | undefined>("resultLVL", undefined)
  const [response, setResponse] = useState<Response | undefined>(undefined)

  useEffect(() => {

    rLvl && setResponse(responses[rLvl])

  }, [rLvl, results])

  return (
    <main>
      <>
        <Card className="p-12 w-full flex flex-col items-center gap-y-8">
          {!response ? <p>Loading...</p> :
            <>
              <span className="text-center text-lg uppercase tracking-widest text-orange-600">
                Congratulations!
              </span>
              <span className="text-center">
                <h1 className="text-5xl font-medium leading-relaxed">
                  {response?.title}
                </h1>
                <p className="f ont-normal text-lg leading-relaxed text-gray-600">
                  {response?.description}
                </p>
              </span>
            </>
          }
        </Card>
        {response &&
          <Card className="p-12">
            <h2>Your next skills to learn</h2>
          </Card>
        }
      </>
    </main>
  );
}
