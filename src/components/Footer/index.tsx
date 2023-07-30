import React from "react";

export function Footer(props: React.PropsWithChildren<unknown>) {
  return (
    <div className="flex min-w-fit flex-col w-full bg-action text-white font-comic pl-4 gap-4 p-6">
      {props.children}
    </div>
  );
}
