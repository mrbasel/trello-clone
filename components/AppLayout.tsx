import { ReactNode } from "react";
import { Board } from "./Board";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="grow bg-gray-50">{children}</main>
    </div>
  );
}
