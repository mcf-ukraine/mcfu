import { type ReactNode } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

type InfoBoxProps = {
  content: ReactNode;
  noMargin?: boolean;
};

export const InfoBox = ({ content, noMargin }: InfoBoxProps) => (
  <div
    className={clsx(
      !noMargin && "mt-4",
      "rounded-md bg-blue-50 p-4 dark:bg-slate-700"
    )}
  >
    <div className="flex">
      <div className="flex-shrink-0">
        <InformationCircleIcon
          className="h-5 w-5 text-blue-400 dark:text-sky-500"
          aria-hidden="true"
        />
      </div>
      <div className="ml-3 flex-1 md:flex md:justify-between">
        <p className="text-sm text-sky-700 dark:text-gray-300">{content}</p>
      </div>
    </div>
  </div>
);
