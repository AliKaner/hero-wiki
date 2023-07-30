import React from "react";
import { useTheme } from "../../context/useTheme";

export function Header(props: React.PropsWithChildren<unknown>) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-between min-w-full flex-col xs:flex-row p-4 border-b-2 border-action ${
        theme === "light"
          ? "bg-primary text-black"
          : "bg-darkPrimary text-white"
      }`}
    >
      {props.children}
    </div>
  );
}
