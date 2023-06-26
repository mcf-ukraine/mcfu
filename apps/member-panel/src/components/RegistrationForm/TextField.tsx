import { type HTMLInputTypeAttribute } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { type FieldError, type UseFormRegister } from "react-hook-form";
import { type RegistrationFormInputs } from "./form";

type TextFieldProps = {
  containerClassName?: string;
  type?: HTMLInputTypeAttribute;
  fieldName: keyof RegistrationFormInputs;
  label: string;
  placeholder?: string;
  autoComplete?: string;
  register: UseFormRegister<RegistrationFormInputs>;
  error?: FieldError;
};

export const TextField = ({
  containerClassName,
  type = "text",
  fieldName,
  label,
  placeholder,
  autoComplete,
  register,
  error,
}: TextFieldProps) => (
  <div className={containerClassName}>
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <div className="relative mt-1">
      <input
        type={type}
        name={fieldName}
        id={fieldName}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(fieldName)}
        className={clsx(
          "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-sm sm:leading-6",
          !error
            ? "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-600 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-600"
            : "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500 dark:text-red-600 dark:ring-red-500/75 dark:placeholder:text-red-400/50 dark:focus:ring-red-600"
        )}
      />
      {!!error && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
    {!!error && (
      <p className="absolute mt-1 text-sm text-red-600 dark:text-red-500">
        {error.message}
      </p>
    )}
  </div>
);
