import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export const ToggleColorModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-6 bg-white dark:bg-slate-700"></div>;
  }

  return currentTheme === "dark" ? (
    <SunIcon
      className="h-6 w-6 text-white"
      role="button"
      onClick={() => setTheme("light")}
    />
  ) : (
    <MoonIcon
      className="h-6 w-6 text-slate-600"
      role="button"
      onClick={() => setTheme("dark")}
    />
  );
};
