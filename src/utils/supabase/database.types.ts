import type { Database as Database_gen } from "./database_gen.types.ts";

export type Row<T extends keyof Database_gen["public"]["Tables"]> =
  Database_gen["public"]["Tables"][T]["Row"];
export type Enums<T extends keyof Database_gen["public"]["Enums"]> =
  Database_gen["public"]["Enums"][T];

export type Database = Database_gen;
