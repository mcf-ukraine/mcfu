import { Toaster as RHTToaster } from "react-hot-toast";
import { useMediaQuery } from "usehooks-ts";

export const Toaster = () => {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const tosterPosition = isMobile ? "top-right" : "bottom-right";

  return (
    <RHTToaster
      position={tosterPosition}
      reverseOrder={false}
      toastOptions={{ custom: { duration: 6000 } }}
    />
  );
};
