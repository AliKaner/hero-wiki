import React from "react";
import { useTheme } from "../../context/useTheme";

export function Body(props: React.PropsWithChildren<unknown>) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex min-w-full flex-col w-full p-4 items-center ${
        theme ? "bg-secondary" : "bg-darkSecondary"
      }`}
    >
      {props.children}
    </div>
  );
}
