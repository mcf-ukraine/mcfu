import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Spinner, toast } from "@mcfu/ui";
import { ua } from "../../locales/ua";
import { api } from "../../utils/trpc";

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const { firstName, lastName } = {
    firstName: name.split(" ")[0],
    lastName: name.split(" ")[1],
  };

  const {
    data,
    isFetching,
    refetch: checkUser,
    remove: reset,
  } = api.user.check.useQuery(
    { firstName, lastName },
    { enabled: false, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (data?.isRegistered) {
      toast.success({
        // title: "Чудова новина",
        message: ua.pages.register.form.notifications.nameChecked,
      });
    }

    if (data?.isRegistered === false) {
      toast.error({
        // title: ":(",
        message: ua.pages.register.form.notifications.nameCheckFailed,
      });
    }
  }, [data]);

  return (
    <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="rounded-md bg-white px-4 pb-8 pt-6 shadow dark:bg-slate-800 sm:rounded-lg sm:px-10 md:pb-10 md:pt-8">
        <div>
          <div className="mt-2 rounded-md bg-blue-50 p-4 dark:bg-slate-700">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon
                  className="h-5 w-5 text-blue-400 dark:text-sky-500"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-sky-700 dark:text-gray-300">
                  {ua.pages.register.form.content.nameCheckingInfo}
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="mt-5 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-md block font-medium leading-6 text-gray-900 dark:text-white"
            >
              {ua.pages.register.form.fields.name.label}
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={ua.pages.register.form.fields.name.placeholder}
                onChange={(e) => {
                  reset();
                  setName(e.target.value);
                }}
                required
                className="text-md block w-full rounded-md border-0 border-gray-300 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:ring-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                reset();
                checkUser();
              }}
              disabled={!name}
              className="text-md relative flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {ua.pages.register.form.checkName}
              {isFetching && (
                <Spinner
                  className="absolute left-[50%] top-[50%] ml-[3.25rem] mt-[-11px]"
                  size={5}
                  darkColor="text-gray-200"
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
