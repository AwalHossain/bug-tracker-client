"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { cn } from "../../../lib/utils";

import { Workspace } from "@/types/common";
import { useParams } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

interface ComBoProps {
  workspaces: Workspace[];
  onWorkspaceSelect: (arg: Workspace) => void;
  getWorkspace?: Workspace;
}

export default function ComboBoxComponent({
  workspaces,
  onWorkspaceSelect,
  getWorkspace,
}: ComBoProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleWorkspaceSelect = (workspace: Workspace) => {
    onWorkspaceSelect(workspace);
    setOpen(false);
  };

  React.useEffect(() => {
    if (getWorkspace) {
      setValue(getWorkspace.name);
    }
  }, [getWorkspace]);

  const params = useParams();

  const get = workspaces.find((workspace) => {
    console.log("workspace", workspace.id, "parms", params);
    return workspace.id === (params.workspaceId as string);
  });
  console.log(
    "workspaces details from compo",
    get,
    "workspace",
    workspaces,
    "check ig",
    params,
  );

  React.useEffect(() => {
    if (!value && get) {
      console.log("workspaces details", get);
      setValue(get.name);
    }
  }, [value, get]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[100px] md:w-[200px] text-xs md:text-sm  justify-between text-white  hover:bg-[#3e4066] hover:text-white transition-colors duration-200 ease-in-out rounded-md cursor-pointer`}
        >
          {value ? value : "Select Project..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No worksapce found.</CommandEmpty>
          <CommandGroup>
            {workspaces &&
              workspaces.map((workspace) => (
                <CommandItem
                  className="cursor-pointer"
                  key={workspace.id}
                  value={workspace.name}
                  onSelect={() => handleWorkspaceSelect(workspace)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === workspace.name ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {workspace.name}
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
