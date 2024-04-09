"use client";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Flag, FlagIcon } from "lucide-react";
import * as React from "react";

const frameworks = [
  { value: "urgent", label: "URGENT", color: "#B13A41" },
  { value: "high", label: "HIGH", color: "#CF940A" },
  { value: "normal", label: "NORMAL", color: "#4466FF" },
  { value: "low", label: "LOW", color: "#87909E" },
];

export default function PriorityBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  const priority = (
    <>
      <Flag className="h-4 w-4" />
      <span className="">Priority</span>
    </>
  );

  const selectedFramework = frameworks.find(
    (framework) => framework.value === value,
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-auto"
        >
          {selectedFramework && (
            <FlagIcon
              size="12"
              strokeWidth="2"
              stroke={selectedFramework?.color}
              color={selectedFramework?.color}
              fill={selectedFramework?.color}
              className="mr-1"
            />
          )}
          {value ? selectedFramework?.label : priority}
          {selectedFramework && " priority"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue: any) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <div
                // style={{
                //   border: `1px solid ${framework.color}`,
                //   borderRadius: "50%",
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                //   padding: "2px",
                //   marginRight: "4px",
                // }}
                >
                  <FlagIcon
                    size="12"
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
