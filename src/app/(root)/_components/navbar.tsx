"use client";

import React from "react";
import { useScrollTop } from "~/hooks/useScrollTop";
import { cn } from "~/lib/utils";
import Logo from "./logo";
import { ThemeToggle } from "~/components/ui/themeToggle";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <nav
      className={cn(
        "top-0 z-50 sticky flex items-center justify-between p-6 w-full transition-all duration-300",
        scrolled && "shadow-2xl backdrop-blur-[2px]",
      )}
    >
      <Logo />
      <div className="theme-swithcer">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
