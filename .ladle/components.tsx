import type { GlobalProvider } from "@ladle/react";
import "../src/app/globals.css";
import React from "react";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>{children}</>
);
