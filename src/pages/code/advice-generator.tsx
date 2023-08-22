import type { Task } from ".";
import ChallengeInfo from "../../components/challengeInfo";
import { useEffect, useState } from "react";
import Head from "next/head";

type Advice = {
  slip: {
    id: string;
    advice: string;
  };
};

export default function AdviceGenerator(): React.JSX.Element {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [loading, setLoading] = useState(true);

  const getAdvice = () => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data: Advice) => setAdvice(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => getAdvice(), []);

  const AdviceBlock = (): React.JSX.Element => (
    <>
      <span className="mb-6 text-xs font-bold uppercase tracking-[0.3rem] text-green-300">
        Advice #{advice?.slip.id}
      </span>
      <p className="text-center text-2xl font-semibold  leading-8 tracking-wide text-slate-300">
        {"''"}
        {advice?.slip.advice}
        {"''"}
      </p>
      <div className="mb-4  mt-6 flex w-full flex-row items-center gap-2">
        <div className="mr-2 h-px w-max flex-grow bg-slate-300 opacity-30"></div>
        <div className="h-4 w-[6px] rounded bg-slate-300 opacity-60"></div>
        <div className="h-4 w-[6px] rounded bg-slate-300 opacity-60"></div>
        <div className="ml-2 h-px flex-grow bg-slate-300 opacity-30"></div>
      </div>
      <button
        onClick={getAdvice}
        aria-label="Generate Advice"
        className="group absolute -bottom-8 flex h-16 w-16 items-center justify-center rounded-full bg-green-300 duration-75 hover:shadow-[0px_0px_32px_0px_rgba(134,239,172,0.8)]"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="duration-200 group-hover:rotate-45"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </>
  );

  const Skeleton = (): React.JSX.Element => (
    <div className="flex animate-pulse flex-col items-center space-y-4">
      <div className="mb-4 h-2 w-12 rounded bg-slate-600"></div>
      <div className="h-6 w-60 rounded bg-slate-600"></div>
      <div className="h-6 w-64 rounded bg-slate-600"></div>
      <div className="h-6 w-32 rounded bg-slate-600"></div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Code Challenges | Advice Generator</title>
        <meta
          name="description"
          content="The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice."
        />
      </Head>
      <div
        role="main"
        className="flex h-screen w-screen items-center justify-center bg-slate-900"
      >
        <div className="min-w-md relative m-4 flex max-w-lg flex-col items-center rounded-2xl bg-slate-700 p-12 shadow-2xl">
          {loading ? <Skeleton /> : <AdviceBlock />}
        </div>
        <ChallengeInfo task={adviceGenerator} />
      </div>
    </>
  );
}

export const adviceGenerator: Task = {
  id: 2,
  name: "Advice Generator",
  link: "advice-generator",
  difficulty: "Beginner",
  completed: new Date("07 Jun 2023"),
};
