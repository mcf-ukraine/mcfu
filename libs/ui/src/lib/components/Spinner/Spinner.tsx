import { type FC } from "react";
import { type TextColor } from "../../types";

type SpinnerSize =
  | "small"
  | "medium"
  | "large"
  | (number & Record<never, never>);
const spinnerSizes: Record<SpinnerSize, string> = {
  small: "h-4 w-4",
  medium: "h-8 w-8",
  large: "h-12 w-12",
} as const;
const getSize = (size: SpinnerSize) =>
  typeof size === "number" ? `h-${size} w-${size}` : spinnerSizes[size];

export type SpinnerProps = {
  className?: string;
  color?: TextColor;
  darkColor?: TextColor;
  size?: SpinnerSize;
  screenReaderText?: string;
};

export const Spinner: FC<SpinnerProps> = ({
  className,
  color = "text-gray-200",
  darkColor = "text-gray-600",
  size = "medium",
  screenReaderText,
}) => (
  <span
    role="status"
    aria-label="Завантаження..."
    className={`inline-block ${getSize(
      size
    )} animate-spin rounded-full border-[2px] border-current border-t-transparent ${color} dark:${darkColor}${
      className ? ` ${className}` : ""
    }`}
  >
    <span className="sr-only">{screenReaderText ?? "Завантаження..."}</span>
  </span>
);

export default Spinner;
