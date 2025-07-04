import Link from "next/link";

const filters = [
  {
    name: "All projects",
    value: "",
  },
  {
    name: "Industrial design",
    value: "industrial",
  },
  {
    name: "Programming",
    value: "code",
  },
];

export default function FilterBar({ filter }: { filter: string }) {
  return (
    <div className="flex flex-row gap-2 pb-4">
      {filters.map((item) => (
        <Link
          key={item.value}
          href={{ query: { cat: item.value } }}
          className={`rounded-full px-3 py-1 text-sm font-light duration-75 ${
            filter === item.value
              ? "bg-orange-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
