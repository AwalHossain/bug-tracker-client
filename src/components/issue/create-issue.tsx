"use client";

import { StickyNote } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { DialogContent, DialogFooter } from "../ui/dialog";
import AssigneBox from "./AssigneBox";
import CalendarBox from "./CalenderBox";
import PriorityBox from "./PriorityBox";
import TodoBox from "./TodoBox";

export default function CreateIssue() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleDescriptionToggle = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DialogContent className="sm:max-w-[625px]">
      <div className="mt-10 w-full">
        <input
          className="bg-transparent border-none outline-none placeholder:text-gray-400 w-full placeholder:font-normal placeholder:text-lg"
          placeholder={"Input your task name"}
        />
        {open ? (
          <>
            <textarea
              className="w-full h-32 mt-4 p-2 border border-gray-300 rounded-md outline-none border-none resize-none placeholder:text-gray-400 placeholder:font-normal placeholder:text-lg"
              placeholder="Enter task description"
            />
          </>
        ) : (
          <button
            onClick={handleOpen}
            className="bg-slate-200 mt-2 w-full text-left rounded-md"
          >
            <span className="mx-2 flex items-center gap-x-1 p-1 ">
              <StickyNote className="h-4 w-4 inline-block align-middle " />
              Add a description
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center  p-2 gap-x-3">
        <TodoBox />
        {/* <button className=" flex items-center justify-center gap-x-1 rounded-md bg-gray-200 px-2 py-1 hover:bg-blue-600">
        </button> */}
        <AssigneBox />
        <CalendarBox />
        <PriorityBox />

        {/* Add more buttons or elements as needed */}
      </div>
      {/* <CreateIssue /> */}
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
}
