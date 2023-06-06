import Image from "next/image";
import { ToggleColorModeButton } from "@mcfu/ui";
import { ua } from "../../locales/ua";

export const LogoAndTitle = () => (
  <>
    <Image
      className="mx-auto h-24 w-auto"
      width={96}
      height={96}
      src="/logo-transparent.png"
      alt={ua.common.logoAlt}
    />
    <h2 className="mt-6 flex items-center justify-center text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
      {ua.common.title}
      <div className="ml-1 p-1.5">
        <ToggleColorModeButton
          outlined
          colorHoverLight="gray-500"
          colorHoverDark="gray-300"
        />
      </div>
    </h2>
  </>
);
