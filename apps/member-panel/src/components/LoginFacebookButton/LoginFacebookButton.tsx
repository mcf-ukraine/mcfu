import { type FC } from "react";
import { ua } from "../../locales/ua";

export type LoginFacebookButtonProps = {
  onClick?: () => void;
};

export const LoginFacebookButton: FC<LoginFacebookButtonProps> = ({
  onClick,
}) => (
  <button
    className="inline-flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 dark:bg-slate-800 dark:text-white dark:ring-gray-600 dark:hover:bg-slate-700"
    onClick={onClick}
  >
    <span className="mr-2 text-blue-600 dark:text-blue-400">
      <svg
        className="h-5 w-5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    {ua.pages.login.form.loginWithFacebook}
  </button>
);
