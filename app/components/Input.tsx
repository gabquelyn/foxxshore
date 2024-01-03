import React from "react";

export default function Input({
  label,
  type,
  onChange,
  value
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1 w-full text-[.8rem] mb-4">
      <label className="capitalize font-semibold">{label}</label>
      <input
        type={type || "text"}
        className="outline-0 w-full bg-[#f8f9f9] focus:ring-1 ring-[#faeaa6] p-2 rounded-md transition-all"
        onChange={onChange}
        name={label}
        value={value}
      />
    </div>
  );
}
