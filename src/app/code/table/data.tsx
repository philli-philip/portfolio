type Data = {
  id: number;
  name: string;
  department?: string;
  status: "open" | "warning" | "closed";
  createdAt: Date;
  updatedAt?: Date;
};

export const data: Data[] = [
  {
    id: 1,
    name: "James T.",
    status: "closed",
    createdAt: new Date("29 Mar 2024 10:16"),
    updatedAt: new Date("1 Apr 2024 20:44"),
    department: "Human resources",
  },
  {
    id: 2,
    name: "Pamela G.",
    status: "warning",
    createdAt: new Date("30 Mar 2024 20:15"),
    updatedAt: new Date("1 Apr 2024 20:44"),
    department: "Product Design",
  },
  {
    id: 3,
    name: "Thommas Z.",
    status: "open",
    createdAt: new Date("30 Mar 2024 20:16"),
    department: "Software engineering",
  },
];
