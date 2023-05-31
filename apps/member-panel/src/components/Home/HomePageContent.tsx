import { MembershipStatusBadge } from "./MembershipStatusBadge";
// import { type User } from "../../utils/user";

type HomePageContentProps = {
  user: any;
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
  },
}: HomePageContentProps) => {
  const birthdayDate = new Date(birthday);

  return (
    <div className="overflow-hidden bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="mb-1 text-base font-semibold leading-7 text-gray-900 dark:text-white sm:mb-0">
            Інформація про члена
          </h3>
          <p className="mt-1 hidden max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:block">
            Дані з профілю
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Статус членства:{" "}
            <MembershipStatusBadge isMembershipActive={isMembershipActive} />
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200/75 dark:border-gray-700">
        <dl className="divide-y divide-gray-200/75 dark:divide-gray-700">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-white">
              Прізвище, ім&apos;я, по-батькові
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              {fullName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-white">
              Email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              {email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-white">
              Телефон
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              {phone ?? "-"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-white">
              Дата народження
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              {birthdayDate.toLocaleDateString("uk-UA")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-white">
              Підрозділ
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              {separatedSubdivision.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900 dark:text-white">
              Активності
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
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
  );
};
