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
        loginWithGoogle: "Увійти з Google",
        loginWithFacebook: "Увійти з Facebook",
        loginWithApple: "Увійти з Apple",
        loginWithTikTok: "Увійти з TikTok",
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
                message: "Введіть коректний email",
              },
            },
          },
        },

        register: {
          title: "Ще не зареєстровані?",
          link: "Зареєструватися",
        },

        notifications: {
          emailSent: {
            title: "Посилання для входу надіслано",
            message:
              "Будь-ласка перевірте електронну пошту, ми надіслали вам посилання для входу",
          },
          loginSuccess: "Дякуємо, Ви успішно увійшли до кабінету ФАіСУ!",
          loginLinkExpired:
            "Посилання для входу застаріло, будь-ласка, спробуйте ще раз",
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

      checkForm: {
        content: {
          nameCheckingInfo:
            "Введіть свої ім'я та прізвище українською (наприклад: Тарас Шевченко), щоб ми могли перевірити чи ви вже зареєстровані в системі",
        },

        fields: {
          firstName: {
            label: "Ім'я",
            placeholder: "Тарас",
          },
          lastName: {
            label: "Прізвище",
            placeholder: "Шевченко",
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
          emailExists: {
            title: "Перевірка email",
            message: "Ваш email вже зареєстрований в системі",
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
            error: "Введіть ім'я",
          },
          lastName: {
            label: "Прізвище",
            placeholder: "Шевченко",
            error: "Введіть прізвище",
          },
          middleName: {
            label: "По батькові",
            placeholder: "Григорович",
            error: "Введіть по батькові",
          },
          email: {
            label: "Email",
            placeholder: "taras.shevchenko@ukraine.com",
            error: "Введіть коректний email",
          },
          birthDate: {
            label: "Дата народження",
          },
          phone: {
            label: "Телефон",
            placeholder: "+380501234567",
            error: "Введіть коректний номер телефону",
          },
          subdivision: {
            label: "Відокремлений підрозділ",
          },
          activityTypes: {
            error: "Виберіть хоча б один вид активності",
          },
        },

        ageInfo:
          "Реєстрація доступна для осіб віком від 14 років, в залежності від віку встановлюються розміри внесків: повний - 250 грн, пільговий - 100 грн. Пільговий внесок - особи 14-15 років та від 65 включно. Повний внесок - особи 16-64 років. Якщо в даному році ваш 16-й або 65-й день народження, ви оплачуєте відповідно вже повний або вже пільговий внесок.",

        subdivisionNotInTheList: {
          description:
            "Вашого відокремленого підрозділу (ВП) немає у списку? Це означає, що він не підтримує оплату онлайн. Вам необхідно звернутись безпосередньо до підрозділу:",
          linkText: "Контакти",
          link: "http://fais.org.ua/index.php?do=page&name=divisions",
        },

        activityTypes: {
          title: "Активності",
          description:
            "Виберіть активності, якими ви плануєте займатись в рамках членства у ФАіСУ",
        },

        payment: {
          registrationFee: {
            title: "Вступний внесок ФАіСУ",
            tooltip:
              "Вступний внесок ФАіСУ: 250 грн - повний, 100 грн - пільговий; оплачується одноразово",
          },
          membershipFee: {
            title: "Членський внесок ФАіСУ",
            tooltip:
              "Членський внесок ФАіСУ: 250 грн - повний, 100 грн - пільговий; оплачується щорічно",
          },
          subdivisionFee: {
            titlePart: "Внесок до",
            tooltip:
              "Внесок підрозділу (ВП) - кожен підрозділ має власний розмір внеску, оплачується щорічно",
          },
          total: "Сума до сплати",
        },

        notifications: {
          checkingUserExistence: {
            title: "Перевірка імені",
            message:
              "Будь-ласка, зачекайте, ми перевіряємо чи ви вже зареєстровані в системі...",
          },
          creatingPaymentLink: {
            title: "Створення посилання для оплати",
            message:
              "Будь-ласка, зачекайте, ми створюємо посилання для оплати...",
          },
          createdPaymentLink: {
            title: "Посилання для оплати створено",
          },
          redirectingToPaymentPage: {
            title: "Перенаправлення",
            message:
              "Будь-ласка, зачекайте, вас буде перенаправлено на сторінку оплати...",
          },
        },

        submit: "Сплатити",
        submitDisabledTooltip: "Будь-ласка, заповніть усі необхідні поля",
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
