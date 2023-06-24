import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mcfu/ui";
import { ua } from "../../locales/ua";
import { api } from "../../utils/trpc";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
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
const MIN_AGE = 14;
const years = Array.from(
  { length: 120 },
  (_, i) => new Date().getFullYear() - MIN_AGE - i
);

type FormInputs = {
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

type RegistrationFormProps = {
  defaultValues: Partial<FormInputs>;
};

export const RegistrationForm = ({ defaultValues }: RegistrationFormProps) => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: { ...defaultValues, phone: "+380" },
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  const { data: subdivisions } = api.subdivision.getAll.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const { data: activityTypes } = api.activityType.getAll.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="mx-auto my-4 max-w-2xl">
      <h1 className="mb-1 mt-6 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        {ua.pages.register.content.title}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="border-b border-gray-900/10 pb-8 dark:border-white/10">
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {ua.pages.register.registrationForm.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Ім&apos;я
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Тарас"
                    {...register("firstName")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Прізвище
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Шевченко"
                    {...register("lastName")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="middle-name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  По батькові
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="middle-name"
                    id="middle-name"
                    autoComplete="middle-name"
                    placeholder="Григорович"
                    {...register("middleName")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="taras.shevchenko@ukraine.com"
                    {...register("email")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="birth-date-day"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Дата народження
                </label>
                <div className="mt-1 flex gap-4">
                  <select
                    id="birth-date-day"
                    name="birth-date-day"
                    autoComplete="bday-day"
                    {...register("birthDateDay")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {days.map((day) => (
                      <option key={`day-${day}`} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    id="birth-date-month"
                    name="birth-date-month"
                    autoComplete="bday-month"
                    {...register("birthDateMonth")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {months.map((month) => (
                      <option key={`month-${month}`} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    id="birth-date-year"
                    name="birth-date-year"
                    autoComplete="bday-year"
                    {...register("birthDateYear")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {years.map((year) => (
                      <option key={`year-${year}`} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Телефон
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+38 050 123 45 67"
                    {...register("phone")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-4">
                <label
                  htmlFor="subdivision"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Підрозділ
                </label>
                <div className="mt-1">
                  <select
                    id="subdivision"
                    name="subdivision"
                    {...register("subdivision")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {subdivisions?.map(({ id, name }) => (
                      <option key={`subdivision-${id}`} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12 dark:border-white/10">
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Активності
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Виберіть активності, якими ви плануєте займатись у рамках членства
              ФАіСУ
            </p>

            <div>
              <fieldset>
                <div className="mt-6 space-y-2">
                  {activityTypes?.map(({ id, name }) => (
                    <div
                      key={`activity-type-${id}`}
                      className="relative flex items-start"
                    >
                      <div className="flex h-6 items-center">
                        <input
                          id={`activity-type-${id}`}
                          name={`activity-type-${id}`}
                          type="checkbox"
                          value={id}
                          {...register("activityTypes")}
                          className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-sky-600 dark:focus:ring-sky-600 dark:focus:ring-offset-gray-900"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor={`activity-type-${id}`}
                          className="text-gray-900 dark:text-gray-200"
                        >
                          {name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button type="submit" textSize="md">
            Перейти до оплати
          </Button>
        </div>
      </form>
    </div>
  );
};
