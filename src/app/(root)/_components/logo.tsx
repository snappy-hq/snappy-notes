"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { cn } from "~/lib/utils";

export enum ThemeType {
  DARK = "dark",
  LIGHT = "light",
}

const Logo = ({ cname, theme }: { cname?: string; theme?: ThemeType }) => {
  const { resolvedTheme } = useTheme();
  return (
    <div className={cn("left__logo justify-between items-center", cname)}>
      <Image
        src={
          !theme
            ? resolvedTheme === "dark"
              ? "/icons/Text_Logo_dark.png"
              : "/icons/Text_Logo.png"
            : theme === "dark"
              ? "/icons/Text_Logo_dark.png"
              : "/icons/Text_Logo.png"
        }
        alt="documents image"
        height={150}
        width={150}
        className="pointer-events-none select-none object-contain"
      />
    </div>
  );
};

export default Logo;
