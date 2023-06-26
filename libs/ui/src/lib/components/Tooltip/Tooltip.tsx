import { type ReactNode } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styles from "./Tooltip.module.css";

type TooltipProps = {
  id: string;
  children: ReactNode;
};

export const Tooltip = ({ id, children }: TooltipProps) => (
  <ReactTooltip id={id} className={styles.tooltip}>
    {children}
  </ReactTooltip>
);
