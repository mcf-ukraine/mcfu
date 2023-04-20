import { type ReactNode, type FC } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { toast, type Toast as ToastType } from "react-hot-toast";

export type ToastProps = {
  t: ToastType;
  icon?: ReactNode;
  title?: ReactNode;
  message?: ReactNode;
};

export const Toast: FC<ToastProps> = ({
  t,
  icon = (
    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
  ),
  title,
  message,
}) => (
  <div
    className={`${
      t.visible ? "animate-enter" : "animate-leave"
    } pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800`}
  >
    <div className="p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {title}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
            {message}
          </p>
        </div>
        <div className="ml-4 flex flex-shrink-0">
          <button
            type="button"
            className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-slate-800"
            onClick={() => toast.dismiss(t.id)}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
