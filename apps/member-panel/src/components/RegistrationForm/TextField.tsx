import { type HTMLInputTypeAttribute } from "react";
import { type UseFormRegister } from "react-hook-form";
import { type RegistrationFormInputs } from "./RegistrationForm";

type TextFieldProps = {
  containerClassName?: string;
  type?: HTMLInputTypeAttribute;
  fieldName: keyof RegistrationFormInputs;
  label: string;
  placeholder?: string;
  autoComplete?: string;
  register: UseFormRegister<RegistrationFormInputs>;
};

export const TextField = ({
  containerClassName,
  type = "text",
  fieldName,
  label,
  placeholder,
  autoComplete,
  register,
}: TextFieldProps) => (
  <div className={containerClassName}>
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <div className="mt-1">
      <input
        type={type}
        name={fieldName}
        id={fieldName}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(fieldName)}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
);
