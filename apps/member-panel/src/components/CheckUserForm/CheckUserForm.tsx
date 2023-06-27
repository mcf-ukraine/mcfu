import { useRouter } from "next/router";
import { type MouseEvent, useEffect, useState } from "react";
import { Button, InfoBox, Spinner, toast } from "@mcfu/ui";
import { showToastAndRedirect } from "./utils";
import { ua } from "../../locales/ua";
import { capitalize } from "../../utils/helpers";
import { api } from "../../utils/trpc";
import { TextField } from "../TextField/TextField";

export const CheckUserForm = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const capitalizedFirstName = capitalize(firstName.toLowerCase());
  const capitalizedLastName = capitalize(lastName.toLowerCase());

  const {
    data,
    isFetching,
    refetch: checkUser,
    remove: reset,
  } = api.user.check.useQuery(
    {
      firstName: capitalizedFirstName,
      lastName: capitalizedLastName,
    },
    { enabled: false, refetchOnWindowFocus: false }
  );

  const handleCheck = (e: MouseEvent) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      toast.error({
        title: ua.pages.register.checkForm.notifications.nameIsRequired.title,
        message:
          ua.pages.register.checkForm.notifications.nameIsRequired.message,
      });
      return;
    }

    toast.dismiss();
    reset();
    checkUser();
  };

  useEffect(() => {
    if (data?.status) {
      showToastAndRedirect({
        status: data.status,
        push: router.push,
        query: {
          firstName: capitalizedFirstName,
          lastName: capitalizedLastName,
        },
      });
      reset();
    }
  }, [data, router.push, reset, capitalizedFirstName, capitalizedLastName]);

  return (
    <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="rounded-md bg-white px-4 pb-8 pt-6 shadow dark:bg-slate-800 sm:rounded-lg sm:px-10 md:pb-10 md:pt-8">
        <InfoBox
          content={ua.pages.register.checkForm.content.nameCheckingInfo}
        />

        <form className="mt-5 space-y-5">
          <TextField
            fieldName="firstName"
            label={ua.pages.register.checkForm.fields.firstName.label}
            placeholder={
              ua.pages.register.checkForm.fields.firstName.placeholder
            }
            autoComplete="given-name"
            onChange={(e) => {
              reset();
              setFirstName(e.target.value);
            }}
            textSize="base"
          />
          <TextField
            fieldName="lastName"
            label={ua.pages.register.checkForm.fields.lastName.label}
            placeholder={
              ua.pages.register.checkForm.fields.lastName.placeholder
            }
            autoComplete="family-name"
            onChange={(e) => {
              reset();
              setLastName(e.target.value);
            }}
            textSize="base"
          />
          <div>
            <Button onClick={handleCheck} block textSize="base">
              {ua.pages.register.checkForm.checkName}
              {isFetching && (
                <Spinner
                  className="absolute left-[50%] top-[50%] ml-[3.25rem] mt-[-11px]"
                  size={5}
                  darkColor="text-gray-200"
                />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
