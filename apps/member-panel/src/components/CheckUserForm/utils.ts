import { type NextRouter } from "next/router";
import { toast } from "@mcfu/ui";
import { ua } from "../../locales/ua";

type Status = "active_member" | "inactive_member" | "not_member";

export const showToastAndRedirect = ({
  status,
  push,
  query,
}: {
  status: Status;
  push: NextRouter["push"];
  query: Record<string, string>;
}) => {
  switch (status) {
    case "active_member":
      toast.success({
        title: ua.pages.register.form.notifications.accountExists.title,
        message: ua.pages.register.form.notifications.accountExists.message,
      });

      setTimeout(() => {
        toast.loading({
          title:
            ua.pages.register.form.notifications.redirectingToLoginPage.title,
          message:
            ua.pages.register.form.notifications.redirectingToLoginPage.message,
          duration: Infinity,
        });
      }, 500);

      setTimeout(() => {
        push("/login");
        toast.dismiss();
      }, 3000);

      break;

    case "inactive_member":
      toast.success({
        title: ua.pages.register.form.notifications.nameExists.title,
        message: ua.pages.register.form.notifications.nameExists.message,
      });

      setTimeout(() => {
        toast.loading({
          title:
            ua.pages.register.form.notifications.redirectingToRegistrationForm
              .title,
          message:
            ua.pages.register.form.notifications.redirectingToRegistrationForm
              .message,
          duration: Infinity,
        });
      }, 500);

      setTimeout(() => {
        push({ pathname: "/register/form", query });
      }, 3000);

      break;

    case "not_member":
      toast.error({
        title: ua.pages.register.form.notifications.nameDoesntExist.title,
        message: ua.pages.register.form.notifications.nameDoesntExist.message,
      });

      setTimeout(() => {
        toast.loading({
          title:
            ua.pages.register.form.notifications.redirectingToRegistrationForm
              .title,
          message:
            ua.pages.register.form.notifications.redirectingToRegistrationForm
              .message,
          duration: Infinity,
        });
      }, 500);

      setTimeout(() => {
        push({ pathname: "/register/form", query });
      }, 3000);

      break;
  }
};
