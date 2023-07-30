import React from "react";
import { useTheme } from "../../context/useTheme";

export function Header(props: React.PropsWithChildren<unknown>) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-row w-full p-4 border-b-2 border-action ${
        theme ? "bg-primary text-black" : "bg-darkPrimary text-white"
      }`}
    >
      {props.children}
    </div>
  );
}