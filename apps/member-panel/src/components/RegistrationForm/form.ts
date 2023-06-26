import { type FieldErrors, type UseFormSetFocus } from "react-hook-form";
import isMobilePhone from "validator/lib/isMobilePhone";
import { z } from "zod";
import { MIN_REGISTRATION_AGE } from "../../constants/fees";
import { ua } from "../../locales/ua";

export const days = Array.from({ length: 31 }, (_, i) => i + 1);
export const months = [
  "Січня",
  "Лютого",
  "Березня",
  "Квітня",
  "Травня",
  "Червня",
  "Липня",
  "Серпня",
  "Вересня",
  "Жовтня",
  "Листопада",
  "Грудня",
];
export const years = Array.from(
  { length: 120 },
  (_, i) => new Date().getFullYear() - MIN_REGISTRATION_AGE - i
);

export type RegistrationFormInputs = {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  birthDateDay: string;
  birthDateMonth: string;
  birthDateYear: string;
  phone: string;
  subdivision: string;
  activityTypes: string[];
};

const errorsOrder: Array<keyof RegistrationFormInputs> = [
  "firstName",
  "lastName",
  "middleName",
  "email",
  "phone",
  "activityTypes",
];

export const setFocusOnFirstErrorField = (
  errors: FieldErrors<RegistrationFormInputs>,
  setFocus: UseFormSetFocus<RegistrationFormInputs>
) => {
  const firstError = errorsOrder.find((field) => !!errors[field]);

  if (firstError) {
    setFocus(firstError);
  }
};

export const registrationFormSchema = z.object({
  firstName: z
    .string()
    .min(1, ua.pages.register.registrationForm.fields.firstName.error),
  lastName: z
    .string()
    .min(1, ua.pages.register.registrationForm.fields.lastName.error),
  middleName: z
    .string()
    .min(1, ua.pages.register.registrationForm.fields.middleName.error),
  email: z
    .string()
    .email(ua.pages.register.registrationForm.fields.email.error),
  phone: z
    .string()
    .refine(
      isMobilePhone,
      ua.pages.register.registrationForm.fields.phone.error
    ),
  activityTypes: z
    .array(z.string(), {
      invalid_type_error:
        ua.pages.register.registrationForm.fields.activityTypes.error,
    })
    .nonempty(ua.pages.register.registrationForm.fields.activityTypes.error),
});
