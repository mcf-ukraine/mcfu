export const ua = {
  common: {
    loading: "Завантаження...",
    title: "Кабінет члена ФАіСУ",
    logoAlt: "Логотип ФАіСУ",
  },
  pages: {
    home: {
      titleTag: "Кабінет ФАіСУ",
      content: {
        title: "Кабінет",
      },
    },
    login: {
      meta: {
        title: "Вхід - Кабінет ФАіСУ",
        description:
          "Кабінет члена ФАіСУ - особистий кабінет з інформацією про членство в ФАіСУ, оплати, та інші послуги.",
      },

      form: {
        title: "Кабінет члена ФАіСУ",
        loginWithFacebook: "Увійти з Facebook",
        loginWithGoogle: "Увійти з Google",
        submit: "Увійти",

        content: {
          or: "або",
          socialLoginInfo:
            "Акаунти соціальних мереж - швидкий та безпечний спосіб входу в систему.",
        },

        fields: {
          email: {
            label: "Email",
            placeholder: "Введіть email",
            errors: {
              empty: "Будь-ласка введіть email",
            },
          },
        },

        notifications: {
          emailSent:
            "Будь-ласка перевірте електронну пошту, ми надіслали вам посилання для входу.",
          loginSuccess: "Дякуємо, Ви успішно увійшли до кабінету ФАіСУ!",
          loginLinkExpired:
            "Посилання для входу застаріло, будь-ласка, спробуйте ще раз.",
        },

        errors: {
          emailNotFound: {
            title: "Помилка при вході!",
            message: "Будь-ласка, перевірте правильність введення email.",
          },
        },
      },
    },
    register: {
      titleTag: "Реєстрація - Кабінет ФАіСУ",

      content: {
        title: "Реєстрація",
      },
    },
    verifyEmail: {
      titleTag: "Верифікація email - Кабінет ФАіСУ",
      content: {
        verificationSuccess: "Ви успішно увійшли до кабінету ФАіСУ.",
        verificationFailed:
          "Помилка при верифікації. Будь-ласка, спробуйте ще раз.",
        verificationExpired:
          "Посилання для входу застаріло, будь-ласка, поверніться на сторінку входу і спробуйте ще раз.",
      },
    },
  },
};
