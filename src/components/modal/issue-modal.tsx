"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import CreateIssue from "../issue/create-issue";

export default function IssueModal() {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isConfirmingClose, setIsConfirmingClose] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => !isOpen && handleCloseModal()}
    >
      <DialogOverlay className="" />
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleOpenModal}>
          Edit Profile
        </Button>
      </DialogTrigger>
      <CreateIssue />
      <DialogOverlay />
    </Dialog>
  );
}
