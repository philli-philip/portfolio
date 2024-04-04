"use client";

import Chip from "./Chip";
import { data } from "./data";
import { H2Style, linkStyle } from "./styles";
import { mapStateToColor } from "./helper";
import { useState } from "react";
import { buttonStyle } from "./page";
import clsx from "clsx";
import MoreIcon from "../../../components/icons/more";

export default function Table() {
  const [styling, toggleStyling] = useState(false);
  const [showTable, toggleTable] = useState(false);

  return (
    <div className="relative w-full  overflow-auto">
      <div className="flex flex-row items-center gap-x-4 rounded-md p-4">
        <button
          onClick={() => {
            toggleTable(!showTable);
            toggleStyling(false);
          }}
        >
          <h2 className={H2Style}>Table</h2>
        </button>

        {showTable && (
          <button
            className={clsx(
              buttonStyle,
              "inline flex flex-shrink",
              styling && "bg-gray-200"
            )}
            onClick={() => toggleStyling(!styling)}
          >
            Toggle styling
          </button>
        )}
      </div>
      {showTable && (
        <table className="w-full bg-white">
          <tr key="head" className="border-b border-gray-200 text-left">
            <th className="min-w-32 p-4">Name</th>
            <th className="min-w-32 p-4">Status</th>
            <th className="min-w-32 p-4">Created</th>
            <th className="min-w-32 p-4">Updated</th>
            <th className="min-w-32 p-4">Actions</th>
          </tr>
          {data.map((data) => (
            <tr
              key={data.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="min-w-32 p-4">{data.name}</td>
              <td className="min-w-32 p-4">
                {styling ? (
                  <Chip color={mapStateToColor(data.status)}>
                    {data.status}
                  </Chip>
                ) : (
                  <span>{data.status}</span>
                )}
              </td>
              <td className="min-w-32 p-4">
                {new Intl.DateTimeFormat("de-de", {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(data.createdAt)}
              </td>
              <td className="min-w-32 p-4">
                {new Intl.DateTimeFormat("de-de", {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(data.updatedAt)}
              </td>
              <td className="flex min-w-24 gap-x-4 p-4">
                <button className="block md:hidden">
                  <MoreIcon />
                </button>
                <a href="#" className={clsx(linkStyle, "hidden md:flex")}>
                  Assign case
                </a>
                <a href="#" className={clsx(linkStyle, "hidden md:flex")}>
                  Snooze
                </a>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
