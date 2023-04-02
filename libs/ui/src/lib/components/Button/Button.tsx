import { type FC } from "react";

export type ButtonProps = {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button
    type="button"
    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    onClick={onClick}
  >
    {children || "Button"}
  </button>
);

export default Button;
