import { type ChangeEvent, type HTMLInputTypeAttribute } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { type FieldError, type UseFormRegister } from "react-hook-form";
import { Spinner } from "@mcfu/ui";
import { type RegistrationFormInputs } from "../RegistrationForm/form";

type TextFieldProps = {
  containerClassName?: string;
  textSize?: "sm" | "base" | "lg";
  type?: HTMLInputTypeAttribute;
  fieldName: keyof RegistrationFormInputs;
  label: string;
  placeholder?: string;
  autoComplete?: string;
  register?: UseFormRegister<RegistrationFormInputs>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: FieldError;
  isLoading?: boolean;
};

export const TextField = ({
  containerClassName,
  textSize = "sm",
  type = "text",
  fieldName,
  label,
  placeholder,
  autoComplete,
  register,
  onChange,
  onBlur,
  error,
  isLoading,
}: TextFieldProps) => (
  <div className={containerClassName}>
    <label
      htmlFor={fieldName}
      className={`block text-${textSize} font-medium leading-6 text-gray-900 dark:text-white`}
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
        {...(register
          ? register(fieldName, { onBlur, onChange })
          : { onBlur, onChange })}
        className={clsx(
          `block w-full rounded-md border-0 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset dark:bg-white/5 sm:text-${textSize} sm:leading-6`,
          textSize === "sm" && "py-1.5",
          textSize === "base" && "py-2.5",
          textSize === "lg" && "py-3.5",
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
      {isLoading && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Spinner size={5} color="text-sky-600" darkColor="text-sky-500" />
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
