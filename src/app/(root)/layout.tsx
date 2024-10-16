import React from "react";
import Navbar from "./_components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col bg-background min-w-full min-h-screen scrollbar-thin">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
