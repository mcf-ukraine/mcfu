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
            "Акаунти соціальних мереж - швидкий та безпечний спосіб входу в систему",
        },

        fields: {
          email: {
            label: "Email",
            placeholder: "Введіть email",
            errors: {
              invalid: {
                title: "Помилка",
                message: "Неправильний формат email",
              },
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
            title: "Помилка при вході",
            message: "Будь-ласка, перевірте правильність введення email",
          },
          unknown: {
            title: "Помилка при вході",
            message: "Невідома помилка, будь-ласка, спробуйте ще раз",
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
            "Введіть своє ім'я та прізвище (наприклад: Тарас Шевченко), щоб ми могли перевірити чи ви вже зареєстровані в системі",
        },

        fields: {
          name: {
            label: "Ім'я та прізвище",
            placeholder: "Введіть ім'я та прізвище",
          },
        },
        checkName: "Перевірити",

        notifications: {
          nameIsRequired: {
            title: "Помилка",
            message: "Будь-ласка, введіть ім'я та прізвище",
          },
          nameExists: {
            title: "Перевірка імені",
            message:
              "Ваше ім'я та прізвище знайдено у системі, ми заповнимо за вас частину інформації для реєстрації",
          },
          nameDoesntExist: {
            title: "Даних не знайдено",
            message: "Ім'я та прізвище не знайдено у системі",
          },
          accountExists: {
            title: "Перевірка імені",
            message: "Ви вже зареєстровані в системі",
          },
          redirectingToRegistrationForm: {
            title: "Перенаправлення",
            message:
              "Будь-ласка, зачекайте, вас буде перенаправлено на сторінку реєстрації...",
          },
          redirectingToLoginPage: {
            title: "Перенаправлення",
            message:
              "Будь-ласка, зачекайте, вас буде перенаправлено на сторінку входу...",
          },
        },
      },

      registrationForm: {
        description: "Будь-ласка, заповніть форму реєстрації",

        fields: {
          firstName: {
            label: "Ім'я",
            placeholder: "Тарас",
          },
          lastName: {
            label: "Прізвище",
            placeholder: "Шевченко",
          },
          middleName: {
            label: "По батькові",
            placeholder: "Григорович",
          },
          email: {
            label: "Email",
            placeholder: "taras.shevchenko@ukraine.com",
          },
          phone: {
            label: "Телефон",
            placeholder: "+380 00 000 00 00",
          },
        },

        subdivisionNotInTheList: {
          description:
            "Вашого підрозділу немає у списку? Це означає, що він не підтримує оплату онлайн. Вам необхідно звернутись безпосередньо до підрозділу:",
          linkText: "Контакти",
          link: "http://fais.org.ua/index.php?do=page&name=divisions",
        },

        activityTypes: {
          title: "Активності",
          description:
            "Виберіть активності, якими ви плануєте займатись у рамках членства ФАіСУ",
        },

        payment: {
          registrationFee: {
            title: "Вступний внесок ФАіСУ",
          },
          membershipFee: {
            title: "Членський внесок ФАіСУ",
          },
          total: "Сума внесків",
        },

        submit: "Перейти до оплати",
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
