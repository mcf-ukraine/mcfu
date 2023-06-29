import { type NextRouter } from "next/router";
import { toast } from "@mcfu/ui";
import { ua } from "../../locales/ua";

export const redirectToLoginPageWithToast = ({
  title,
  message,
  push,
}: {
  title: string;
  message: string;
  push: NextRouter["push"];
}) => {
  toast.success({
    title,
    message,
  });

  setTimeout(() => {
    toast.loading({
      title:
        ua.pages.register.checkForm.notifications.redirectingToLoginPage.title,
      message:
        ua.pages.register.checkForm.notifications.redirectingToLoginPage
          .message,
      duration: Infinity,
    });
  }, 500);

  setTimeout(() => {
    push("/login");
    toast.dismiss();
  }, 3000);
};

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
      redirectToLoginPageWithToast({
        title: ua.pages.register.checkForm.notifications.accountExists.title,
        message:
          ua.pages.register.checkForm.notifications.accountExists.message,
        push,
      });

      break;

    case "inactive_member":
      toast.success({
        title: ua.pages.register.checkForm.notifications.nameExists.title,
        message: ua.pages.register.checkForm.notifications.nameExists.message,
      });

      setTimeout(() => {
        toast.loading({
          title:
            ua.pages.register.checkForm.notifications
              .redirectingToRegistrationForm.title,
          message:
            ua.pages.register.checkForm.notifications
              .redirectingToRegistrationForm.message,
          duration: Infinity,
        });
      }, 500);

      setTimeout(() => {
        push({ pathname: "/register/form", query });
      }, 3000);

      break;

    case "not_member":
      toast.error({
        title: ua.pages.register.checkForm.notifications.nameDoesntExist.title,
        message:
          ua.pages.register.checkForm.notifications.nameDoesntExist.message,
      });

      setTimeout(() => {
        toast.loading({
          title:
            ua.pages.register.checkForm.notifications
              .redirectingToRegistrationForm.title,
          message:
            ua.pages.register.checkForm.notifications
              .redirectingToRegistrationForm.message,
          duration: Infinity,
        });
      }, 500);

      setTimeout(() => {
        push({ pathname: "/register/form", query });
      }, 3000);

      break;
  }
};
