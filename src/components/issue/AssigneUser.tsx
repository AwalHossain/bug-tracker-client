import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AssigneUser({
  photoURL,
}: {
  photoURL: string | undefined;
}) {
  return (
    <Avatar>
      <AvatarImage src={photoURL} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
