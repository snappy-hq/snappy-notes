"use client";

import React from "react";

export const useScreenWidth = () => {
  const [width, setWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
