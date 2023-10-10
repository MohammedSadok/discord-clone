"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "center" | "start" | "end";
}
export const ActionTooltip = ({
  children,
  label,
  align,
  side,
}: ActionTooltipProps) => {
  return <TooltipProvider>
    <Tooltip delayDuration={50}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent side={side} align={align}>
        <p className="text-sm font-semibold capitalize">
          {label.toLocaleLowerCase()}
        </p>

      </TooltipContent>
    </Tooltip>
  </TooltipProvider>;
};
