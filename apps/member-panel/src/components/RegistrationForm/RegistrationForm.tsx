import { useRouter } from "next/router";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button, InfoBox, Spinner, toast } from "@mcfu/ui";
import { FeeTitle } from "./FeeTitle";
import {
  type RegistrationFormInputs,
  days,
  months,
  registrationFormSchema,
  setFocusOnFirstErrorField,
  years,
} from "./form";
import {
  redirectToLoginPageWithToast,
  redirectToPaymentPageWithToast,
} from "./utils";
import { env } from "../../env.mjs";
import { ua } from "../../locales/ua";
import { uniqueId } from "../../utils/cuid";
import { getMembershipFee, getRegistrationFee } from "../../utils/fees";
import { capitalize } from "../../utils/helpers";
import { api } from "../../utils/trpc";
import { TextField } from "../TextField/TextField";

const queryOpts = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
};

type RegistrationFormProps = {
  defaultValues: Partial<RegistrationFormInputs>;
};

export const RegistrationForm = ({ defaultValues }: RegistrationFormProps) => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<RegistrationFormInputs>({
    mode: "onTouched",
    defaultValues: { ...defaultValues, phone: "+380", subdivision: "1" },
    resolver: zodResolver(registrationFormSchema),
    shouldFocusError: false,
  });

  // Create payment
  const { mutateAsync: createPayment } = api.payment.create.useMutation();

  // Check email
  const {
    isFetching: isCheckingUserByEmail,
    refetch: checkUser,
    remove: reset,
  } = api.user.check.useQuery(
    {
      email: watch("email"),
    },
    { enabled: false, refetchOnWindowFocus: false }
  );

  // Subdivisions
  const { data: subdivisions } = api.subdivision.getAll.useQuery(
    undefined,
    queryOpts
  );
  const selectedSubdivisionId = watch("subdivision");
  const selectedSubdivision = subdivisions?.find(
    (s) => `${s.id}` === selectedSubdivisionId
  );
  const selectedSubdivisionFeeAmount = selectedSubdivision?.feeAmount || 0;

  // Activity types
  const { data: activityTypes } = api.activityType.getAll.useQuery(
    undefined,
    queryOpts
  );

  const birthDateYear = watch("birthDateYear");
  // Age that will become actual this year (eg. if you were born on 31.12.2000, you will become 23 in 2023)
  const yearAge = new Date().getFullYear() - Number(birthDateYear);

  // Fees
  const registrationFeeAmount = getRegistrationFee(yearAge);
  const membershipFeeAmount = getMembershipFee(yearAge);
  const totalFeeAmount =
    registrationFeeAmount + membershipFeeAmount + selectedSubdivisionFeeAmount;

  // Submit
  const onSubmit: SubmitHandler<RegistrationFormInputs> = async (values) => {
    console.log(values);
    reset();

    const existenceId = toast.loading({
      title:
        ua.pages.register.registrationForm.notifications.checkingUserExistence
          .title,
      message:
        ua.pages.register.registrationForm.notifications.checkingUserExistence
          .message,
    });

    const { data } = await checkUser();

    if (data.status === "active_member") {
      redirectToLoginPageWithToast({
        title: ua.pages.register.checkForm.notifications.emailExists.title,
        message: ua.pages.register.checkForm.notifications.emailExists.message,
        push,
      });
    }

    if (data.status === "not_member") {
      toast.dismiss(existenceId);
      toast.loading({
        title:
          ua.pages.register.registrationForm.notifications.creatingPaymentLink
            .title,
        message:
          ua.pages.register.registrationForm.notifications.creatingPaymentLink
            .message,
      });

      const payment = await createPayment({
        orderNumber: uniqueId(),
        description: `Вступ до ФАіСУ | ${values.firstName} ${values.lastName} ${values.middleName}, вступ: ${registrationFeeAmount}, членський: ${membershipFeeAmount}, ВП: ${selectedSubdivisionFeeAmount}`,
        amount: totalFeeAmount,
        returnUrl: env.NEXT_PUBLIC_SITE_URL,
      });

      toast.success({
        title:
          ua.pages.register.registrationForm.notifications.createdPaymentLink
            .title,
      });

      if (payment.formUrl) {
        redirectToPaymentPageWithToast({ formUrl: payment.formUrl, push });
      }
    }
  };

  return (
    <div className="mx-auto my-4 max-w-2xl">
      <h1 className="mb-1 mt-6 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        {ua.pages.register.content.title}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          setFocusOnFirstErrorField(errors, setFocus);
        })}
      >
        <div className="space-y-6">
          <div className="border-b border-gray-900/10 pb-6 dark:border-white/10">
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {ua.pages.register.registrationForm.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
              <TextField
                containerClassName="col-span-6 sm:col-span-2"
                fieldName="firstName"
                label={
                  ua.pages.register.registrationForm.fields.firstName.label
                }
                placeholder={
                  ua.pages.register.registrationForm.fields.firstName
                    .placeholder
                }
                autoComplete="given-name"
                register={register}
                onBlur={() => {
                  setValue("firstName", capitalize(watch("firstName")));
                }}
                error={errors.firstName}
              />

              <TextField
                containerClassName="col-span-6 sm:col-span-2"
                fieldName="lastName"
                label={ua.pages.register.registrationForm.fields.lastName.label}
                placeholder={
                  ua.pages.register.registrationForm.fields.lastName.placeholder
                }
                autoComplete="family-name"
                register={register}
                onBlur={() => {
                  setValue("lastName", capitalize(watch("lastName")));
                }}
                error={errors.lastName}
              />

              <TextField
                containerClassName="col-span-6 sm:col-span-2"
                fieldName="middleName"
                label={
                  ua.pages.register.registrationForm.fields.middleName.label
                }
                placeholder={
                  ua.pages.register.registrationForm.fields.middleName
                    .placeholder
                }
                autoComplete="middle-name"
                register={register}
                onBlur={() => {
                  setValue("middleName", capitalize(watch("middleName")));
                }}
                error={errors.middleName}
              />

              <TextField
                containerClassName="col-span-6 sm:col-span-4"
                fieldName="email"
                label={ua.pages.register.registrationForm.fields.email.label}
                placeholder={
                  ua.pages.register.registrationForm.fields.email.placeholder
                }
                autoComplete="email"
                register={register}
                error={errors.email}
                isLoading={isCheckingUserByEmail}
              />

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="birth-date-day"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  {ua.pages.register.registrationForm.fields.birthDate.label}
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
                    {months.map((month, i) => (
                      <option key={`month-${month}`} value={i + 1}>
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

              <div className="col-span-6 -mt-4 sm:col-span-4">
                <InfoBox
                  content={
                    <p>
                      Реєстрація доступна для осіб віком{" "}
                      <strong>від 14 років</strong>
                    </p>
                  }
                  noMargin
                />
              </div>

              <TextField
                containerClassName="col-span-6 sm:col-start-1 sm:col-end-4"
                type="tel"
                fieldName="phone"
                label={ua.pages.register.registrationForm.fields.phone.label}
                placeholder={
                  ua.pages.register.registrationForm.fields.phone.placeholder
                }
                autoComplete="tel"
                register={register}
                error={errors.phone}
              />

              <div className="col-span-6 sm:col-start-1 sm:col-end-4">
                <label
                  htmlFor="subdivision"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  {ua.pages.register.registrationForm.fields.subdivision.label}
                </label>
                <div className="mt-1">
                  <select
                    id="subdivision"
                    name="subdivision"
                    {...register("subdivision")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-sky-600 sm:text-sm sm:leading-6"
                  >
                    {subdivisions?.map(({ id, name }) => (
                      <option key={`subdivision-${id}`} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-6 -mt-4">
                <InfoBox
                  content={
                    <>
                      {
                        ua.pages.register.registrationForm
                          .subdivisionNotInTheList.description
                      }{" "}
                      <a
                        className="font-semibold leading-6 text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                        href={
                          ua.pages.register.registrationForm
                            .subdivisionNotInTheList.link
                        }
                      >
                        {
                          ua.pages.register.registrationForm
                            .subdivisionNotInTheList.linkText
                        }
                        <ArrowTopRightOnSquareIcon
                          className="mb-0.5 ml-0.5 inline-block h-4 w-4"
                          aria-hidden="true"
                        />
                      </a>
                    </>
                  }
                  noMargin
                />
              </div>
            </div>
          </div>

          <div className="pb-2">
            <h2 className="mb-2 text-base font-semibold leading-4 text-gray-900 dark:text-white">
              {ua.pages.register.registrationForm.activityTypes.title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {ua.pages.register.registrationForm.activityTypes.description}
            </p>

            <div className="mb-4">
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
                          className={clsx(
                            "h-6 w-6 cursor-pointer rounded border text-sky-600 checked:bg-sky-600 dark:bg-white/5 dark:text-sky-600 dark:checked:bg-sky-600 dark:focus:ring-offset-gray-900 sm:h-4 sm:w-4",
                            !errors.activityTypes
                              ? "border-gray-300 focus:ring-sky-600 dark:border-white/10 dark:focus:ring-sky-600"
                              : "border-red-400 focus:ring-red-500 dark:border-red-500/75 dark:focus:ring-red-500"
                          )}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor={`activity-type-${id}`}
                          className="cursor-pointer pl-2 text-gray-900 dark:text-gray-200"
                        >
                          {name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              {!!errors.activityTypes && (
                <p className="absolute mt-3 text-sm text-red-600 dark:text-red-500">
                  {errors.activityTypes.message}
                </p>
              )}
            </div>
          </div>

          <InfoBox
            content={
              <>
                <p className="pb-1">В залежності від віку розміри внесків:</p>
                <ul role="list" className="list-disc space-y-1 pl-5">
                  <li>повний - 250 грн, особи від 16 до 64 років включно</li>
                  <li>
                    пільговий - 100 грн, особи від 14 до 15 років та від 65
                    включно
                  </li>
                  <li>
                    якщо в даному календарному році ваша категорія внеску
                    змінюється, за цей рік ви сплачуєте відповідний внесок для
                    нової категорії (наприклад, якщо у даному році вам
                    виповнюється 16, значить внесок за цей рік буде повним)
                  </li>
                </ul>
              </>
            }
          />

          <div className="pb-6">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="col-span-6 rounded-lg bg-gray-100 px-4 py-6 dark:border dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8">
                <dl className="mt-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="mcfu-tooltip-container text-sm text-gray-600 dark:text-gray-300">
                      <FeeTitle
                        title={
                          ua.pages.register.registrationForm.payment
                            .registrationFee.title
                        }
                        tooltip={
                          ua.pages.register.registrationForm.payment
                            .registrationFee.tooltip
                        }
                        tooltipId="registration-fee-tooltip"
                      />
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {`${registrationFeeAmount} ₴`}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                    <dt className="mcfu-tooltip-container text-sm text-gray-600 dark:text-gray-300">
                      <FeeTitle
                        title={
                          ua.pages.register.registrationForm.payment
                            .membershipFee.title
                        }
                        tooltip={
                          ua.pages.register.registrationForm.payment
                            .membershipFee.tooltip
                        }
                        tooltipId="membership-fee-tooltip"
                      />
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {`${membershipFeeAmount} ₴`}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                    <dt className="mcfu-tooltip-container text-sm text-gray-600 dark:text-gray-300">
                      <FeeTitle
                        title={`${ua.pages.register.registrationForm.payment.subdivisionFee.titlePart} ${selectedSubdivision?.name}`}
                        tooltip={
                          ua.pages.register.registrationForm.payment
                            .subdivisionFee.tooltip
                        }
                        tooltipId="subdivision-fee-tooltip"
                      />
                    </dt>
                    <dd className="min-w-fit text-sm font-medium text-gray-900 dark:text-gray-300">
                      {`${selectedSubdivisionFeeAmount} ₴`}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                    <dt className="text-base font-medium text-gray-900 dark:text-white">
                      {ua.pages.register.registrationForm.payment.total}
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {`${totalFeeAmount} ₴`}
                    </dd>
                  </div>
                  <InfoBox
                    darker
                    content={
                      <>
                        <p>
                          Дана сума сплачується під час вступу до федерації.
                          Після вступу щорічний внесок буде складати:
                        </p>
                        <p>
                          Членський внесок ФАіСУ ={" "}
                          <strong>{membershipFeeAmount} грн</strong> + внесок до{" "}
                          {selectedSubdivision?.name} ={" "}
                          <strong>{selectedSubdivisionFeeAmount} грн</strong>,
                          разом ={" "}
                          <strong>
                            {membershipFeeAmount + selectedSubdivisionFeeAmount}{" "}
                            грн
                          </strong>
                        </p>
                      </>
                    }
                  />
                </dl>

                <div className="mcfu-tooltip-container mt-6">
                  <Button type="submit" textSize="base" block>
                    {ua.pages.register.registrationForm.submit}
                    {isCheckingUserByEmail && (
                      <Spinner
                        className="absolute left-[50%] top-[50%] ml-[3.25rem] mt-[-11px]"
                        size={5}
                        darkColor="text-gray-200"
                      />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
