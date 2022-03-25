import { ReactNode } from "react";

interface TagProps {
  color: "red" | "orange" | "cyan" | "blue";
  children: ReactNode;
}

export function Tag({ children, color }: TagProps) {
  return (
    <span className={`px-2 text-sm rounded-md text-center bg-${color}-600 text-white`}>
      {children}
    </span>
  );
}
