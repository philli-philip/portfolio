"use client";
import { data } from "./data";
import Chip from "./Chip";
import { useState } from "react";
import { linkStyle, H2Style } from "./styles";
import clsx from "clsx";
import { buttonStyle } from "./page";
import { mapStateToColor } from "./helper";
import MoreIcon from "../../../components/icons/more";

export default function List() {
  const [grid, setGrid] = useState(false);
  const [showList, toggleList] = useState(false);
  const [showHead, toggleHead] = useState(false);
  const [showControl, toggleControl] = useState(false);
  const [showChip, toggleChip] = useState(true);
  const [showDepartment, toggleDepartment] = useState(true);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-x-4 rounded-md p-4">
        <button
          onClick={() => {
            toggleList(!showList);
            setGrid(false);
          }}
        >
          <h2 className={H2Style}>List</h2>
        </button>

        {showList && (
          <button
            className={clsx(
              buttonStyle,
              "inline flex flex-shrink",
              grid && "bg-gray-100"
            )}
            onClick={() => {
              setGrid(!grid);
              toggleChip(true);
              toggleDepartment(true);
              toggleControl(false);
            }}
          >
            Grid
          </button>
        )}

        {grid && (
          <button
            className={clsx(
              buttonStyle,
              "inline flex flex-shrink",
              showHead && "bg-gray-100"
            )}
            onClick={() => toggleHead(!showHead)}
          >
            Header row
          </button>
        )}
        {!grid && showList && (
          <button
            className={clsx(
              buttonStyle,
              "inline flex flex-shrink",
              showControl && "bg-gray-100"
            )}
            onClick={() => toggleControl(!showControl)}
          >
            Control
          </button>
        )}
      </div>
      {showList && (
        <>
          {showHead && grid && (
            <div className="flex flex-row gap-x-4 border-b border-gray-200 bg-white p-4 text-sm text-gray-900/60">
              <span className="flex-1">Name</span>
              <span className="flex-1">Department</span>
              <span className="flex-1">Status</span>
              <span className="flex-1">Created at</span>
              <span className="hidden flex-1 lg:flex">Updated at</span>
              <span className="flex-1">Actions</span>
            </div>
          )}
          <>
            {showControl && (
              <div className="flex flex-row justify-end gap-x-4 px-4">
                <button
                  className={clsx(
                    buttonStyle,
                    "inline flex flex-shrink",
                    showChip && "bg-gray-200"
                  )}
                  onClick={() => toggleChip(!showChip)}
                >
                  Status
                </button>
                <button
                  className={clsx(
                    buttonStyle,
                    "inline flex flex-shrink",
                    showDepartment && "bg-gray-200"
                  )}
                  onClick={() => toggleDepartment(!showDepartment)}
                >
                  Department
                </button>
              </div>
            )}
            <ul className="flex flex-1 flex-col bg-white">
              {data.map((data) => (
                <li
                  className="flex flex-row items-center gap-x-4 border-b border-gray-200 p-4 hover:bg-gray-100"
                  key={data.id}
                >
                  <span
                    className={clsx(
                      grid
                        ? "flex-[1] items-center"
                        : "flex-col items-start justify-start gap-x-4 gap-y-0",
                      "flex "
                    )}
                  >
                    {data.name}
                    {!grid && showDepartment && (
                      <span className="text-xs font-normal text-gray-900/60">
                        {data.department}
                      </span>
                    )}
                  </span>
                  {grid && (
                    <span className="flex flex-1">{data.department}</span>
                  )}
                  {showChip && (
                    <span
                      className={clsx(grid && "flex-1", "flex justify-start")}
                    >
                      <Chip color={mapStateToColor(data.status)}>
                        {data.status}
                      </Chip>
                    </span>
                  )}

                  <span
                    className={clsx(grid ? "hidden" : "flex flex-1")}
                  ></span>
                  <span className={clsx(grid && "flex-1", "flex items-center")}>
                    {new Intl.DateTimeFormat("de-de", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(data.createdAt)}
                  </span>
                  <span
                    className={clsx(
                      grid && "flex-1",
                      "hidden items-center lg:flex"
                    )}
                  >
                    {data.updatedAt ? (
                      new Intl.DateTimeFormat("de-de", {
                        dateStyle: "short",
                        timeStyle: "short",
                      }).format(data.updatedAt)
                    ) : (
                      <span className="text-gray-900/60">Not updated yet</span>
                    )}
                  </span>
                  <span
                    className={clsx(
                      grid && "flex-1",
                      "flex items-center justify-start gap-x-4"
                    )}
                  >
                    <a href="#" className={clsx(linkStyle, "hidden md:flex")}>
                      Assign case
                    </a>
                    <a href="#" className={clsx(linkStyle, "hidden md:flex")}>
                      Snooze
                    </a>
                  </span>
                  <button className="block md:hidden">
                    <MoreIcon />
                  </button>
                </li>
              ))}
            </ul>
          </>
        </>
      )}
    </div>
  );
}
