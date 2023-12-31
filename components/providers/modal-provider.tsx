"use client";

import CreateServerModal from "@/components/modals/CreateServerModal";
import { useEffect, useState } from "react";
import InviteModal from "@/components/modals/InviteModal";
import { EditServerModal } from "@/components/modals/EditServerModal";
import { MembersModal } from "@/components/modals/MembersModal";
import { CreateChannelModal } from "@/components/modals/CreateChannelModal";
import { LeaveServerModal } from "../modals/LeaveServerModal";
import { DeleteChannelModal } from "../modals/DeleteChannelModal";
import { EditChannelModal } from "../modals/EditChannelModal";
import { MessageFileModal } from "../modals/MessageFileModal";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
    </>
  );
};
