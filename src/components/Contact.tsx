"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "../utils/cn";
import { debounce } from "lodash";
import Image from "next/image";

export default function Contact() {
  const i = useCallback(function i(...s: string[]): boolean {
    return s.some((s) => message.includes(s));
  }, []);

  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [thinking, setThinking] = useState(true);
  const [state, setState] = useState<"sent" | "writing">("writing");
  const [disabled, setDisabled] = useState(true);
  useRef;

  function handleSubmit() {
    if (disabled) {
    } else {
      fetch(`${window.location.origin}/api/send/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });
      setState("sent");
      setFeedback("");
      setThinking(false);
      setMessage("");
    }
  }

  useEffect(() => {
    const delayedResponse = debounce(() => {
      if (i("interested", "interest") && i("crypto", "Crypto")) {
        response("I am not interested in Crypto projects.");
      } else if (i("how are you")) {
        response(
          "Thanks for asking. I am doing well at the moment. How are you?"
        );
      } else if (message.length > 12 && message.length < 72) {
        response("That is a bit short to start a conversation.");
      } else if (i("Hi Philip") || i("Hello Philip")) {
        response("Hi Stranger! 👋");
      } else {
        setFeedback("");
        setDisabled(false);
      }
    }, 1000);

    delayedResponse();

    return () => {
      delayedResponse.cancel();
    };
  }, [message, i]);

  function response(m: string) {
    setThinking(true);
    setFeedback(m);
    setTimeout(() => {
      setThinking(false);
    }, 800);
  }

  return (
    <section className="mx-auto my-32 flex w-full max-w-6xl flex-1">
      <div className="flex w-full flex-col">
        <div className={cn("flex flex-row", state === "sent" ? "hidden" : "")}>
          <div className="flex w-full flex-col gap-y-2">
            <div className="flex h-6 flex-row items-center justify-end gap-x-2">
              <span
                className={cn(
                  thinking ? "hidden" : "inline-block",
                  "text-sm text-gray-600 dark:text-gray-400"
                )}
              >
                {feedback}
              </span>
              <span
                className={cn(
                  thinking && feedback ? "inline-block" : "hidden",
                  "text-sm text-gray-600 dark:text-gray-400"
                )}
              >
                Thinking
              </span>
              <Image
                src="/img/philip-tiny.jpg"
                alt="Philip"
                height="24"
                width="24"
                className={cn(
                  feedback === "" ? "hidden" : "inline-block",
                  "rounded-full"
                )}
              />
            </div>
            <div
              className={cn(
                state === "writing" ? "" : "hidden",
                "flex-1 items-stretch rounded-lg bg-black/5 text-xs text-gray-800 dark:bg-white/10 dark:text-gray-300"
              )}
            >
              <textarea
                className="block min-h-[150px] w-full appearance-none rounded-lg bg-transparent px-6 py-4 text-xl leading-6 focus:outline focus:outline-gray-400"
                placeholder="Drop me a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={cn("mt-8 duration-100")}>
            <button
              className={cn(
                "w-32 rounded border-t bg-gray-950 py-4 text-white transition-all duration-100 dark:border-white/20 dark:bg-gray-800 dark:shadow-sm dark:shadow-black/20 dark:hover:bg-white/5 dark:hover:shadow-xl",
                message === "" ? "-mr-32 opacity-0" : "mr-0 opacity-100 md:ml-8"
              )}
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
        <div
          className={cn(
            "mr-6 flex min-h-[150px] items-center justify-center rounded-md text-xl dark:bg-white/10 dark:text-gray-300",
            state === "sent" ? "" : "hidden"
          )}
        >
          <span className="text-gray-700 dark:text-gray-300">
            Thank you. I&apos;ll get back to you.
          </span>
        </div>
      </div>
    </section>
  );
}
