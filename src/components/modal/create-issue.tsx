import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CreateIssue() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [description, setDescription] = useState("");

  const handleDescriptionToggle = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Task Name</h2>
        <Button variant="outline">Create Task</Button>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Add description</AccordionTrigger>
          <AccordionContent>
            <Input
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter task description"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Add other task fields here */}
    </div>
  );
}
