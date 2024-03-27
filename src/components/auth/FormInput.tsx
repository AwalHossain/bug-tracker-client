import { UseFormRegister } from "react-hook-form";

type FormInputProps = {
  register: UseFormRegister<any>;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
};

export const FormInput = ({
  register,
  type,
  name,
  placeholder,
  required = true,
}: FormInputProps) => (
  <input
    className="rounded-lg border-gray-300  py-4 text-sm shadow transition hover:shadow-lg"
    type={type}
    required={required}
    placeholder={placeholder}
    {...register(name)}
  />
);
