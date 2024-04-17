"use client";

import { StickyNote } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { DialogContent, DialogFooter } from "../ui/dialog";
import AssigneBox from "./AssigneBox";
import CalendarBox from "./CalenderBox";
import LabelBox from "./LabelBox";
import PriorityBox from "./PriorityBox";

export default function CreateIssue() {
  const { workspaceId } = useParams();
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [openDS, setOpenDS] = useState(false);

  const [assignee, setAssignee] = useState("");
  const [date, setDate] = useState<Date>();
  const [priority, setPriority] = useState("");
  const [label, setLabel] = useState("");

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleOpen = () => {
    setOpenDS(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const taskData = {
      title: taskName,
      description: description,
      assignedToId: assignee,
      deadline: date?.toISOString(),
      priority: priority,
      workspaceId: workspaceId,
      label: label,
    };

    console.log(taskData, "Task Data");
  };

  return (
    <DialogContent className="sm:max-w-[625px]">
      <div className="mt-10 w-full">
        <input
          type="text"
          onChange={handleTaskChange}
          className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full text-lg placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-600"
          placeholder={"Input your task name"}
        />
        {openDS ? (
          <textarea
            onChange={handleDescription}
            className="w-full h-32 mt-4 p-2 border border-gray-300 rounded-md outline-none resize-none placeholder-gray-500 text-lg focus:ring-2 focus:ring-blue-600"
            placeholder="Enter task description"
          />
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
        {/* <TodoBox /> */}
        {/* <button className=" flex items-center justify-center gap-x-1 rounded-md bg-gray-200 px-2 py-1 hover:bg-blue-600">
        </button> */}
        <AssigneBox setAssignee={setAssignee} />
        <CalendarBox setDate={setDate} />
        <PriorityBox setPriority={setPriority} />
        <LabelBox setLabel={setLabel} />
        {/* Add more buttons or elements as needed */}
      </div>
      {/* <CreateIssue /> */}
      <DialogFooter>
        <Button type="submit" onClick={handleSubmit}>
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
