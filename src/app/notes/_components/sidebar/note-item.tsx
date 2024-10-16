// components/NoteItem.tsx
"use client";

import React, { useState, useCallback } from "react";
import { ChevronRight, Folder, FileText } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { cn } from "~/lib/utils";
import { useTheme } from "next-themes";
import { NoteItem as NoteItemType, ItemType } from "~/lib/types/sidebar-types";

interface NoteItemProps {
  item: NoteItemType;
  depth: number;
}

const NoteItem: React.FC<NoteItemProps> = ({ item, depth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleToggle = useCallback(() => {
    if (item.type === ItemType.Directory) {
      setIsOpen((prev) => !prev);
    } else {
      console.log(`Note clicked: ${item.name}`);
      // Implement note opening logic here
    }
  }, [item]);

  return (
    <div>
      <Collapsible open={isOpen}>
        <div
          className={cn(
            "flex items-center py-1 px-2 cursor-pointer transition-colors duration-200",
            item.type === ItemType.Note && "pl-8",
          )}
          style={
            {
              paddingLeft: `${depth * 16}px`,
              "--accent-color": "var(--_theme_accent_color)",
            } as React.CSSProperties
          }
          onClick={handleToggle}
          role={item.type === ItemType.Directory ? "treeitem" : "none"}
          aria-expanded={item.type === ItemType.Directory ? isOpen : undefined}
        >
          {item.type === ItemType.Directory && (
            <CollapsibleTrigger asChild>
              <button
                className="focus:outline-none"
                aria-label={isOpen ? "Collapse directory" : "Expand directory"}
              >
                <ChevronRight
                  className={`mr-1 w-4 h-4 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </CollapsibleTrigger>
          )}
          {item.type === ItemType.Directory ? (
            <Folder
              className="mr-2 w-4 h-4"
              style={{ color: "var(--_theme_accent_color)" }}
              aria-hidden="true"
            />
          ) : (
            <FileText
              className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
            />
          )}
          <span className="text-gray-700 text-sm dark:text-gray-300">
            {item.name}
          </span>
        </div>
        {item.type === ItemType.Directory && item.children && (
          <CollapsibleContent>
            <div role="group">
              {item.children.map((child) => (
                <NoteItem key={child.id} item={child} depth={depth + 1} />
              ))}
            </div>
          </CollapsibleContent>
        )}
      </Collapsible>
    </div>
  );
};

export default NoteItem;
