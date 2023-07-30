import React from "react";

export function SearchBar({
  value,
  onChange,
  onClear,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}) {
  return (
    <div className="flex flex-row xs:ml-4  w-1/2 items-center align-middle justify-items-center">
      <input
        className="text-action outline-none font-comic justify-self-start xs:pl-4 xs:p-2 flex-auto rounded-l-full border border-action"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
      {onClear && (
        <button
          className="flex-none font-comic text-left border border-action rounded-r-full xs:pr-4 xs:p-2 text-white bg-action"
          onClick={onClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}
