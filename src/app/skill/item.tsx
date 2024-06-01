"use client";

export default function Item({
  description,
  id,
  update,
  checked,
}: {
  description?: string;
  id: string;
  update: (id: string, attribute: string, value: boolean) => void;
  checked: boolean;
}) {
  return (
    <label className="-mx-4 flex flex-1 cursor-pointer flex-row justify-start gap-4 rounded-md p-4 align-top duration-75 hover:bg-black/5 dark:hover:bg-white/5">
      <input
        className="h-4 w-4 pl-4 pt-4"
        type="checkbox"
        id={id}
        onChange={() => {
          update(id, "checked", !checked);
        }}
        checked={checked}
      />
      <span>{description}</span>
    </label>
  );
}
