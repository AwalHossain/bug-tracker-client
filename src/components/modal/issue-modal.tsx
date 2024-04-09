import { Button } from "@/components/ui/button";
import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import CreateIssue from "../issue/create-issue";

export default function IssueModal() {
  return (
    <Dialog>
      <DialogOverlay className=" " />
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <CreateIssue />
      <DialogOverlay />
    </Dialog>
  );
}
