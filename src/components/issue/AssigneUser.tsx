import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function AssigneUser({
  photoURL,
  name,
}: {
  photoURL: string | undefined;
  name: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0] + n[1])
    .join("");

  return (
    <Avatar className="m-0 w-5 h-5">
      <AvatarImage className="" src={photoURL} alt="@shadcn" />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
