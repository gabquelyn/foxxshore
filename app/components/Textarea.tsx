import React from "react";

export default function Textarea({
  label,
  onChange,
  value
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string
}) {
  return (
    <div className="flex flex-col gap-1 w-full text-[.8rem] mb-4">
      <label className="capitalize font-semibold">{label}</label>
      <textarea
        className="outline-0 w-full bg-[#f8f9f9] focus:ring-1 ring-[#faeaa6] py-1 px-2 rounded-md transition-all"
        rows={5}
        name={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
