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
    <div className="flex flex-1 flex-row justify-between rounded-md p-4 hover:bg-black/5">
      <p>
        {description ? description : "no desciption provided"} : {checked}
      </p>
      <input
        type="checkbox"
        onChange={() => {
          console.log("update", id);
          update(id, "checked", !checked);
        }}
        checked={checked}
      />
    </div>
  );
}
