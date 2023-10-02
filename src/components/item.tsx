"use client";

import type { Task } from "../pages/code";
import format from "date-fns-tz/format";
import Status from "./completed";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "./icons/close";

type Props = {
  task: Task;
};

export default function Item(props: Props) {
  const { name, difficulty, completed, id, link } = props.task;
  const [open, setOpen] = useState(false);

  function closeDetails() {
    console.log("details");
    setOpen(false);
  }

  function openDetails() {
    setOpen(true);
  }

  return (
    <>
      <button
        onClick={() => openDetails()}
        key={id}
        className="flex h-12 w-full flex-row items-center justify-between gap-2 border-b border-gray-200 px-4 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 md:gap-4"
      >
        <span className="text-secondary w-8">{`P-` + id}</span>
        <span className="text-primary font-semibold">{name}</span>
        <Status completed={completed} />
        <span className="text-secondary flex w-24 flex-1 justify-end text-right">
          {completed ? format(completed, "dd MMM YYY") : "--"}
        </span>
      </button>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDetails}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="translate-x-12"
                enterTo="translate-x-0"
                leave="duration-200 ease-in"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-12"
              >
                <Dialog.Panel className="right-0 h-screen w-full max-w-md transform overflow-hidden border-l border-transparent bg-white text-left align-middle shadow-xl backdrop-blur-lg transition-all dark:border-gray-600 dark:bg-gray-700/20">
                  <Dialog.Title
                    as="h3"
                    className="p-8 text-lg font-medium leading-6 text-gray-800  dark:text-gray-100"
                  >
                    {name}
                  </Dialog.Title>
                  <button
                    aria-label="close"
                    onClick={() => closeDetails()}
                    className="absolute right-6 top-6 rounded  p-1 text-gray-800 shadow hover:bg-gray-100  dark:text-gray-300  hover:dark:bg-gray-700"
                  >
                    <CloseIcon />
                  </button>
                  <ul className="flex flex-col gap-y-6 px-8 py-8">
                    <li className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="mr-8 inline-block w-24">ID</span>
                      <span className="text-gray-800 dark:text-gray-200">
                        {id}
                      </span>
                    </li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="mr-8 inline-block w-24">Completed</span>
                      <span className="text-gray-800 dark:text-gray-200">
                        {completed === undefined ? (
                          <span className="text-gray-500">unfinished</span>
                        ) : (
                          format(completed, "dd MMMM YYY")
                        )}
                      </span>
                    </li>

                    <li className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="mr-8 inline-block w-24">Difficulty</span>
                      <span className="text-gray-800 dark:text-gray-200">
                        {difficulty}
                      </span>
                    </li>
                  </ul>

                  <ul className="border-t border-gray-200 px-8 py-8 dark:border-gray-600">
                    <li className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="mr-8 inline-block w-24">Link</span>
                      <a
                        href={link}
                        target="_blank"
                        className="text-gray-800 underline underline-offset-2 dark:text-gray-200"
                      >
                        Visit project
                      </a>
                    </li>
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
