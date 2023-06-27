import { type ReactNode } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@mcfu/ui";

type FeeTitleProps = {
  title: ReactNode;
  tooltip: ReactNode;
  tooltipId: string;
};

export const FeeTitle = ({ title, tooltip, tooltipId }: FeeTitleProps) => (
  <>
    {title}{" "}
    <span
      className="group relative inline-block cursor-pointer align-bottom text-gray-400 hover:text-gray-500"
      data-tooltip-id={tooltipId}
    >
      <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
    </span>
    <Tooltip id={tooltipId}>{tooltip}</Tooltip>
  </>
);
