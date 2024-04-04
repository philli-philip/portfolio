"use client";

export function mapStateToColor(state: string) {
  switch (state) {
    case "open":
      return "gray";
    case "warning":
      return "red";
    case "closed":
      return "green";
  }
}
