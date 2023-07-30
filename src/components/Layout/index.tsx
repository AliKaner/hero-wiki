import React from "react";
import { useTheme } from "../../context/useTheme";

export function Layout(props: React.PropsWithChildren<unknown>) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col w-full${
        theme ? "bg-secondary" : "bg-darkSecondary"
      }`}
    >
      {props.children}
    </div>
  );
}
