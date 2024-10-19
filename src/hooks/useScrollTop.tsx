import React, { useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
		
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isScrolled;
};
