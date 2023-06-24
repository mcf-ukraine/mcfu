export const ua = {
  common: {
    loading: "Завантаження...",
    title: "Кабінет ФАіСУ",
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
          "Кабінет ФАіСУ - особистий кабінет з інформацією про членство в ФАіСУ, оплати, та інші послуги.",
      },

      form: {
        title: "Кабінет ФАіСУ",
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

        register: {
          title: "Ще не зареєстровані?",
          link: "Зареєструватися",
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
      meta: {
        title: "Реєстрація - Кабінет ФАіСУ",
        description:
          "Кабінет ФАіСУ - особистий кабінет з інформацією про членство в ФАіСУ, оплати, та інші послуги.",
      },

      content: {
        title: "Реєстрація",
      },

      form: {
        content: {
          nameCheckingInfo:
            "Введіть своє ім'я та прізвище (наприклад: Тарас Шевченко), щоб ми могли перевірити чи ви вже зареєстровані в системі.",
        },

        fields: {
          name: {
            label: "Ім'я та прізвище",
            placeholder: "Введіть ім'я та прізвище",
          },
        },
        checkName: "Перевірити",

        notifications: {
          nameChecked: "Ім'я та прізвище знайдено у базі.",
          nameCheckFailed: "Ім'я та прізвище не знайдено.",
        },
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
