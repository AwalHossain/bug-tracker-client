import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AssigneUser({
  photoURL,
}: {
  photoURL: string | undefined;
}) {
  return (
    <Avatar className="m-0 w-6 h-6">
      <AvatarImage className="" src={photoURL} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
