import Image from "next/image";
import { ToggleColorModeButton } from "@mcfu/ui";
import { ua } from "../../locales/ua";
import logo from "../../public/logo-transparent.png";

export const LogoAndTitle = () => (
  <>
    <Image
      className="mx-auto h-24 w-auto"
      width={96}
      height={96}
      src={logo}
      alt={ua.common.logoAlt}
    />
    <h2 className="mt-6 flex items-center justify-center text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
      {ua.common.title}
      <div className="ml-2 rounded bg-white p-1.5 shadow dark:bg-slate-700">
        <ToggleColorModeButton />
      </div>
    </h2>
  </>
);
