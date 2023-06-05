import clsx from "clsx";
import { FeesTable } from "./FeesTable";
import { MembershipStatusBadge } from "./MembershipStatusBadge";
import { type User } from "../../utils/user";

type HomePageContentProps = {
  user: User;
};

export const HomePageContent = ({
  user: {
    fullName,
    email,
    phone,
    birthday,
    isMembershipActive,
    separatedSubdivision,
    activityTypes,
    fees,
  },
}: HomePageContentProps) => {
  const birthdayDate = new Date(birthday);
  const feesArePresent = fees.length > 0;

  return (
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5 lg:gap-8">
      <div
        className={clsx(
          "grid grid-cols-1 gap-4",
          feesArePresent ? "lg:col-span-3" : "lg:col-span-5"
        )}
      >
        <div className="overflow-hidden bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:rounded-lg">
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <div>
              <h3 className="mb-1 text-base font-semibold leading-7 text-gray-900 dark:text-white sm:mb-0">
                Інформація про члена
              </h3>
              <p className="mt-1 hidden max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:block">
                Дані з профілю
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Статус членства:{" "}
                <MembershipStatusBadge
                  isMembershipActive={isMembershipActive}
                />
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200/75 dark:border-gray-700">
            <dl className="divide-y divide-gray-200/75 dark:divide-gray-700">
              <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  ПІБ
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:mt-0">
                  {fullName}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:mt-0">
                  {email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Телефон
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:mt-0">
                  {phone ?? "-"}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Дата народження
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:mt-0">
                  {birthdayDate.toLocaleDateString("uk-UA")}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Підрозділ
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:mt-0">
                  {separatedSubdivision.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Активності
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:mt-0">
                  <ul>
                    {activityTypes.map((activityType) => (
                      <li
                        key={activityType.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex w-0 flex-1 items-center">
                          <span className="dark inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-sm font-medium text-sky-700 ring-1 ring-inset ring-sky-700/10 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-700/30">
                            {activityType.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {feesArePresent && (
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-2-title">
            <div className="overflow-hidden rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800">
              <div className="px-6 pb-3 pt-6">
                <h3 className="mb-1 text-base font-semibold leading-7 text-gray-900 dark:text-white sm:mb-0">
                  Внески
                </h3>
                <p className="mt-1 hidden max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:block">
                  Історія оплати внесків
                </p>
              </div>
              <div>
                <FeesTable fees={fees} />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
