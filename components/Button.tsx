import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button className="px-3 rounded-lg bg-blue-400 text-white">{children}</button>;
}
