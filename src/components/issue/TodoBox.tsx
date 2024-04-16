"use client";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Circle } from "lucide-react";
import * as React from "react";

const frameworks = [
  { value: "todo", label: "TO DO", color: "#bdc2c9" },
  { value: "inprogress", label: "IN PROGRESS", color: "#5F55EE" },
  { value: "review", label: "REVIEW", color: "#0F9D9F" },
  { value: "complete", label: "COMPLETE", color: "#008844" },
];

export default function TodoBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("todo");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-auto"
          style={{
            backgroundColor: frameworks.find(
              (framework) => framework.value === value,
            )?.color,
            color: value ? "white" : "inherit",
          }}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "TO DO"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <div
                  style={{
                    border: `1px solid ${framework.color}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2px",
                    marginRight: "4px",
                  }}
                >
                  <Circle
                    size="8"
                    strokeWidth="2"
                    stroke={framework.color}
                    color={framework.color}
                    fill={framework.color}
                  />
                </div>

                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
