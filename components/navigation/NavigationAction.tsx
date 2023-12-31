"use client"
import { Plus } from "lucide-react";
import React from "react";
import { ActionTooltip } from "@/components/ActionTooltip";
import { useModal } from "@/hooks/useModalStore";
export const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button className="flex items-center group" onClick={()=>onOpen("createServer")}>
          <div
            className="flex mx-3 h-[48px] w-[48px] rounded-[24px] 
          group-hover:rounded-[16px] transition-all overflow-hidden 
          items-center justify-center bg-background dark:bg-neutral-700
         group-hover:bg-emerald-500"
          >
            <Plus
              className="transition group-hover:text-white text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
