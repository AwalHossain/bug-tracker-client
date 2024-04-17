"use client";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Circle, Tag } from "lucide-react";
import * as React from "react";

const frameworks = [
  { value: "bug", label: "bug", color: "#d73a4a" },
  { value: "feature", label: "feature", color: "#7057ff" },
  { value: "help wanted", label: "help wanted", color: "#008672" },
  { value: "enhancement", label: "enhancement", color: "#a2eeef" },
  { value: "documentation", label: "documentation", color: "#0075ca" },
];

type LabelProps = {
  value: string;
  label: string;
  color: string;
};

interface LabelBoxProps {
  setLabel: (label: string) => void;
}

export default function LabelBox({ setLabel }: LabelBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState<LabelProps | null>(
    null,
  );
  const [value, setValue] = React.useState("todo");

  const Label = (
    <>
      <Tag className="h-4 w-4" />
      <span className="ml-1">Label</span>
    </>
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-auto"
          style={{
            backgroundColor: selectedLabel?.color,
            // color: value ? "white" : "inherit",
          }}
        >
          {selectedLabel ? selectedLabel?.label : Label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={() => {
                  setSelectedLabel(framework);
                  setOpen(false);
                  setLabel(framework.value);
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
