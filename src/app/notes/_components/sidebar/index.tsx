"use client";

import { ChevronsLeft } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { initialNotes } from "../tiptap/utils/demoNotes";
import { Button } from "~/components/ui/button";
import NoteItem from "./note-item";

//! Don't change this values unless its necessary
const MIN_SIDEBAR_WIDTH = 300 as const;
const MAX_SIDEBAR_WIDTH = 500 as const;

const Sidebar: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(Number(MIN_SIDEBAR_WIDTH));

  const startResizing = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      setIsResizing(true);
    },
    [],
  );

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const handleResize = useCallback((clientX: number) => {
    setSidebarWidth((_prevWidth) => {
      const newWidth = Math.min(
        Math.max(clientX, MIN_SIDEBAR_WIDTH),
        MAX_SIDEBAR_WIDTH,
      );
      return newWidth;
    });
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        handleResize(e.clientX);
      }
    },
    [isResizing, handleResize],
  );

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isResizing && e.touches.length === 1) {
        handleResize(e.touches[0].clientX);
      }
    },
    [isResizing, handleResize],
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stopResizing);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", stopResizing);
      window.addEventListener("touchcancel", stopResizing);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopResizing);
      window.removeEventListener("touchcancel", stopResizing);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopResizing);
      window.removeEventListener("touchcancel", stopResizing);
    };
  }, [isResizing, onMouseMove, onTouchMove, stopResizing]);

  return (
    <div
      className={cn("border-r overflow-hidden flex bg-background")}
      style={
        {
          "--height_offset": "4rem",
          height: "100dvh",
          width: `${sidebarWidth}px`,
          backgroundColor: "hsl(from var(--foreground) h s l / 0.05)",
          // height: "calc(100vh - var(--height_offset))",
          // marginBlock: "calc(var(--height_offset) / 2)",
          // borderRadius:
          //   "0 calc(var(--height_offset) / 4) calc(var(--height_offset) / 4) 0",
        } as React.CSSProperties
      }
      role="tree"
      aria-label="Sidebar Navigation"
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8 w-full">
            <span className="flex-1 h-full font-semibold text-gray-800 text-lg dark:text-gray-200">
              Notes
            </span>
            <Button
              variant={"ghost"}
              asChild
              size={"icon"}
              className="w-[1.5rem] h-[1.5rem] cursor-pointer aspect-square"
            >
              <ChevronsLeft />
            </Button>
          </div>
          {initialNotes.map((item) => (
            <NoteItem key={item.id} item={item} depth={0} />
          ))}
        </div>
      </div>
      <div
        className={cn(
          "w-[3px] bg-transparent cursor-col-resize select-none hover:bg-gray-300 dark:hover:bg-gray-600",
          isResizing && "bg-accent",
        )}
        onMouseDown={startResizing}
        onTouchStart={startResizing}
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={sidebarWidth}
        aria-valuemin={MIN_SIDEBAR_WIDTH}
        aria-valuemax={MAX_SIDEBAR_WIDTH}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
            setSidebarWidth((prev) =>
              e.key === "ArrowLeft"
                ? Math.max(prev - 10, MIN_SIDEBAR_WIDTH)
                : Math.min(prev + 10, MAX_SIDEBAR_WIDTH),
            );
          }
        }}
      />
    </div>
  );
};

export { Sidebar };
