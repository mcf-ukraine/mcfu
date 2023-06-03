import { type FC } from "react";
import clsx from "clsx";

const baseClassName =
  "rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all";

const variants = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-500 focus-visible:outline-sky-600 dark:bg-sky-700 dark:hover:bg-sky-600 dark:focus-visible:outline-sky-700",
  secondary:
    "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20",
  soft: "bg-sky-50 text-sky-600 hover:bg-sky-100 dark:bg-sky-800/30 dark:text-white dark:hover:bg-sky-800/20",
} as const;

export type ButtonProps = {
  onClick?: () => void;
  variant?: keyof typeof variants;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ onClick, variant, children }) => (
  <button
    type="button"
    className={clsx(baseClassName, variants[variant ?? "primary"])}
    onClick={onClick}
  >
    {children}
  </button>
);
