"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useGetOneWorkspaceQuery } from "@/redux/api/workspace/workspaceApi";
import { Check, Users } from "lucide-react";
import { useParams } from "next/navigation";
import * as React from "react";
import AssigneUser from "./AssigneUser";

export default function AssigneBox() {
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const { workspaceId } = useParams();
  const { isLoading, data } = useGetOneWorkspaceQuery(workspaceId as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const users = data?.data?.users as User[];

  const assigne = (
    <>
      <Users className="h-4 w-4 " />
      <span className="">Assignee</span>
    </>
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between"
        >
          {selectedUser ? selectedUser.name : assigne}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {users?.map((user) => (
              <CommandItem
                key={user.id}
                value={user.name}
                onSelect={() => {
                  setSelectedUser(user);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedUser?.id === user.id ? "opacity-100" : "opacity-0",
                  )}
                />
                <AssigneUser photoURL={user.photoUrl} />
                {user.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
