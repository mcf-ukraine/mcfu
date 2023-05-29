import { useEffect, useState } from "react";
import {
  MoonIcon as MoonIconOutlined,
  SunIcon as SunIconOutlined,
} from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
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

  const sunIconProps = {
    className: `h-6 w-6 text-${colorDark ?? "white"} dark:hover:text-${
      colorHoverDark ?? "white"
    }`,
    role: "button",
    onClick: () => setTheme("light"),
  };

  const moonIconProps = {
    className: `h-6 w-6 text-${colorLight ?? "slate-600"} hover:text-${
      colorHoverLight ?? "slate-600"
    }`,
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
