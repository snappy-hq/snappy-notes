import React from "react";
import { Sidebar } from "./_components/sidebar";

const RootLayout  = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      {children}
    </div>
  );
};

export default RootLayout;
