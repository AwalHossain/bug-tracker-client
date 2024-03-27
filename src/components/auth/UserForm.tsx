import { UseFormRegister } from "react-hook-form";

type UserFormProps = {
  register: UseFormRegister<any>;
  onSubmit: (data: any) => void;
  children: React.ReactNode;
};

export const UserForm = ({ register, onSubmit, children }: UserFormProps) => (
  <form
    onSubmit={onSubmit}
    className="mx-6 flex w-full flex-col space-y-6 rounded-lg border bg-white px-7 py-10 shadow-lg lg:w-2/5"
  >
    {children}
  </form>
);
