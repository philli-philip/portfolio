"use client";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { data } from "./data";
import Chip from "./Chip";
import clsx from "clsx";
import { H2Style, linkStyle } from "./styles";
import MoreIcon from "../../../components/icons/more";
import { useState } from "react";
import { buttonStyle } from "./page";
import { mapStateToColor } from "./helper";

const CustomCell = () => {
  return (
    <span className={clsx("flex items-center justify-start gap-x-4")}>
      <a href="#" className={clsx(linkStyle, "hidden md:flex")}>
        Assign case
      </a>
      <a href="#" className={clsx(linkStyle, "hidden md:flex")}>
        Snooze
      </a>
      <button className="block md:hidden">
        <MoreIcon />
      </button>
    </span>
  );
};

const columns: GridColDef<(typeof data)[number]>[] = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: false,
  },
  {
    field: "department",
    headerName: "Department",
    width: 140,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <Chip color={mapStateToColor(params.value)}>{params.value}</Chip>
    ),
  },
  {
    field: "createdAt",
    headerName: "Created",
    type: "dateTime",
    width: 180,
  },
  {
    field: "updatedAt",
    headerName: "Updated",
    type: "dateTime",
    width: 180,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 180,
    align: "left",
    headerAlign: "left",
    renderCell: CustomCell,
  },
];

export default function MuiGrid() {
  const [showMUI, toggleMUI] = useState(false);
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <div className="flex flex-row items-center gap-x-4 rounded-md p-4">
        <button
          onClick={() => {
            toggleMUI(!showMUI);
            setCollapse(false);
          }}
        >
          <h2 className={H2Style}>Mui Grid</h2>
        </button>

        {showMUI && (
          <button
            className={clsx(
              buttonStyle,
              "inline flex flex-shrink",
              collapse && "bg-gray-200"
            )}
            onClick={() => setCollapse(!collapse)}
          >
            Collapse Feature
          </button>
        )}
      </div>
      {showMUI && (
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      )}
    </div>
  );
}
