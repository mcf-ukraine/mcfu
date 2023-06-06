import { useEffect, useState } from "react";
import {
  MoonIcon as MoonIconOutlined,
  SunIcon as SunIconOutlined,
} from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { type Color } from "../../types";

type ToggleColorModeButtonProps = {
  outlined?: boolean;
  colorLight?: Color;
  colorHoverLight?: Color;
  colorDark?: Color;
  colorHoverDark?: Color;
};

export const ToggleColorModeButton = ({
  outlined,
  colorLight,
  colorHoverLight,
  colorDark,
  colorHoverDark,
}: ToggleColorModeButtonProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  const commonClassName = "h-6 w-6 transition-all";

  const sunIconColor = colorDark ?? "white";
  const sunIconHoverColor = colorHoverDark ?? "white";
  const sunIconProps = {
    className: clsx(
      commonClassName,
      `text-${sunIconColor} dark:hover:text-${sunIconHoverColor}`
    ),
    role: "button",
    onClick: () => setTheme("light"),
  };

  const moonIconColor = colorLight ?? "slate-600";
  const moonIconHoverColor = colorHoverLight ?? "slate-600";
  const moonIconProps = {
    className: clsx(
      commonClassName,
      `text-${moonIconColor} hover:text-${moonIconHoverColor}`
    ),
    role: "button",
    onClick: () => setTheme("dark"),
  };

  const sunIcon = !outlined ? (
    <SunIcon {...sunIconProps} />
  ) : (
    <SunIconOutlined {...sunIconProps} />
  );

  const moonIcon = !outlined ? (
    <MoonIcon {...moonIconProps} />
  ) : (
    <MoonIconOutlined {...moonIconProps} />
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-6 bg-white dark:bg-slate-700"></div>;
  }

  return currentTheme === "dark" ? sunIcon : moonIcon;
};
