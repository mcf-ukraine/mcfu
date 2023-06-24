import { type ReactNode } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { toast as reactHotToast } from "react-hot-toast";
import { Spinner, Toast as ToastComponent } from "../components";

type ToastParams = {
  title?: ReactNode;
  message?: ReactNode;
  duration?: number;
};

type Toast = {
  success: (params: ToastParams) => void;
  error: (params: ToastParams) => void;
  loading: (params: ToastParams) => void;
  dismiss: (toastId?: string) => void;
};

export const toast: Toast = {
  success: ({ title, message, duration }) =>
    reactHotToast.custom(
      (t) => (
        <ToastComponent
          t={t}
          icon={
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          }
          title={title}
          message={message}
        />
      ),
      { duration }
    ),
  error: ({ title, message, duration }) =>
    reactHotToast.custom(
      (t) => (
        <ToastComponent
          t={t}
          icon={
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          }
          title={title}
          message={message}
        />
      ),
      { duration }
    ),
  loading: ({ title, message, duration }) =>
    reactHotToast.custom(
      (t) => (
        <ToastComponent
          t={t}
          icon={<Spinner size={6} />}
          title={title}
          message={message}
        />
      ),
      { duration }
    ),
  dismiss: reactHotToast.dismiss,
};
