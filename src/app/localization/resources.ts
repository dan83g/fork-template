// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  en: {
    translation: {
      errors: {
        unexpected_error: 'Unexpected error. We automatically register errors and will fix everything soon',
        'Failed to fetch': 'Connection error. Go to the server directory and start the server using the start script',
        ERR_IS_REQUIRED: 'Required field',
        too_short_password: 'The password is too short',
        ERR_NOT_SAME_PASSWORD: "Passwords don't match",
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Incorrect password or email',
        ERR_NOT_FOUND: 'An entity with this id was not found',
        ERR_USER_NOT_REGISTER: 'Register to access this feature',
        ERR_INCORRECT_PASSWORD: 'Invalid password',
        ERR_ACCOUNT_ALREADY_EXIST: 'An account with this email already exists',
        ERR_INVALID_PASSWORD: 'The password must contain at least 8 characters',
        ERR_INVALID_EMAIL: 'Invalid email',
        ERR_TOKEN_REQUIRED_ERROR:
          'Server token error. We automatically register all errors and will fix everything soon',
        ERR_AUTH_ERROR: 'You are not logged in, log in to your account and try again',
        ERR_DATA_BASE_ERROR: 'Database server error. We automatically register all errors and will fix everything soon',
        INTERNAL_SERVER_ERROR: 'Server error. We automatically register all errors and will fix everything soon',
        ERR_INVALID_NICKNAME:
          'The alias must be at least 7 characters and can contain only numbers, letters and an underscore',
      },
      screens: {
        ProfileScreen: {
          title: 'Profile',
          updateProfile: {
            title: 'Change profile',
            success: 'Profile changed successfully',
            save: 'Save',
          },
          changePassword: {
            title: 'Change password',
            success: 'Password changed successfully',
            save: 'Change',
          },
        },
        ExamplesScreen: {
          title: 'Examples',
        },
        LessonsScreen: {
          title: 'Lessons',
        },
        auth: {
          title: 'Authentication',
          signIn: {
            title: 'Sign in',
            submit: 'Sign in',
          },
          signUp: {
            title: 'Sign out',
            submit: 'Sign out',
          },
        },
      },
      forms: {
        LoginForm: {
          email: {
            title: 'Email',
            placeholder: 'Enter email',
          },
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          submitButton: {
            title: 'Sign in',
          },
        },
        ChangePasswordForm: {
          title: 'Changing Password',
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          newPassword: {
            title: 'New password',
            placeholder: 'Enter new password',
          },
          repeatPassword: {
            title: 'Repeat password',
            placeholder: 'Repeat password',
          },
          submitButton: {
            title: 'Change password',
          },
        },
        UserForm: {
          title: 'User',
          name: {
            title: 'Nickname',
            placeholder: 'Come up with a pseudonym for yourself',
          },
          about: {
            title: 'About',
            placeholder: 'Write something about yourself',
          },
          submitButton: {
            title: 'Save',
          },
        },
        ProductForm: {
          title: 'Product',
          name: {
            title: 'Name',
            placeholder: 'Enter product name',
          },
          description: {
            title: 'Description',
            placeholder: 'Enter product description',
          },
          price: {
            title: 'Price',
            placeholder: 'Enter product price',
          },
          oldPrice: {
            title: 'Old Price',
            placeholder: 'Enter old product price',
          },
          image: {
            title: 'Image',
            placeholder: 'Enter product image URL',
          },
          category: {
            title: 'Product category',
            placeholder: 'Enter product category',
          },
          submitButton: {
            title: 'Save',
          },
        },
      },
      fields: {
        string: 'String value',
      },
      components: {
        Basket: {
          title: 'Add to cart',
        },
        RemoveButton: {
          title: 'Data will be lost, delete?',
          ok: 'Remove',
          cancel: 'Cancel',
        },
        RangeInputs: {
          from: 'From',
          to: 'To',
        },
        InputIntRangeList: {
          title: 'Range',
        },
        NumberInput: {
          float: {
            placeholder: 'Fractional number',
          },
          integer: {
            placeholder: 'Integer',
          },
        },
        login: {
          enter: 'Login',
          leave: 'Logout',
        },
        header: {
          nav: 'Navigation',
          root: 'Home',
          profile: 'Profile',
          'home-works': 'Home works',
          examples: 'Examples',
          lessons: 'Lessons',
          teachers: 'Teachers',
        },
      },
      enums: {
        ExampleKey: {
          modal: 'Modal',
          movable: 'Movable',
          sortableList: 'Sortable List',
          waveSlider: 'Wave Slider',
          inputs: 'Inputs',
        },
        LessonKey: {
          generator: 'Generators iterators',
          patterns: 'Patterns',
          solid: 'Solid',
          functionalProgramming: 'Functional Programming',
          babel: 'Babel + typescript',
          socketsAndWorkers: 'Web sockets & Web workers',
          graphql: 'Graphql',
        },
      },
    },
  },
  ru: {
    translation: {
      errors: {
        unexpected_error: 'Неожиданная ошибка. Мы автоматически регистрируем ошибки и скоро все исправим',
        'Failed to fetch':
          'Ошибка соединения. Перейдите в директорию server и запустите сервер с помощью скрипта start',
        ERR_IS_REQUIRED: 'Обязательное поле',
        too_short_password: 'Слишком короткий пароль',
        ERR_NOT_SAME_PASSWORD: 'Пароли не совпадают',
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Некорректный пароль или email',
        ERR_NOT_FOUND: 'Сущность с таким id не найдена',
        ERR_USER_NOT_REGISTER: 'Зарегистрируйтесь, чтобы получить доступ к этой функции',
        ERR_INCORRECT_PASSWORD: 'Некорректный пароль',
        ERR_ACCOUNT_ALREADY_EXIST: 'Аккаунт с таким email уже существует',
        ERR_INVALID_PASSWORD: 'Пароль должен содержать от 8 символов',
        ERR_INVALID_EMAIL: 'Некорректный email',
        ERR_TOKEN_REQUIRED_ERROR:
          'Серверная ошибка токена. Мы автоматически регистрируем все ошибки и скоро все исправим',
        ERR_AUTH_ERROR: 'Вы не авторизованы, войдите в учетную запись и повторите попытку',
        ERR_DATA_BASE_ERROR:
          'Серверная ошибка базы данный. Мы автоматически регистрируем все ошибки и скоро все исправим',
        INTERNAL_SERVER_ERROR: 'Серверная ошибка. Мы автоматически регистрируем все ошибки и скоро все исправим',
        ERR_INVALID_NICKNAME:
          'Псевдоним должен быть от 7 символов и может содержать только числа, буквы и символ нижнего подчеркивания',
      },
      screens: {
        ProfileScreen: {
          title: 'Профиль',
          updateProfile: {
            title: 'Изменить профиль',
            success: 'Профиль успешно изменен',
            save: 'Сохранить',
          },
          changePassword: {
            title: 'Изменить пароль',
            success: 'Пароль успешно изменен',
            save: 'Изменить',
          },
        },
        ExamplesScreen: {
          title: 'Примеры',
        },
        LessonsScreen: {
          title: 'Уроки',
        },
        auth: {
          title: 'Аутентификация',
          signIn: {
            title: 'Войти',
            submit: 'Войти',
          },
          signUp: {
            title: 'Зарегистрироваться',
            submit: 'Зарегистрироваться',
          },
        },
      },
      forms: {
        LoginForm: {
          email: {
            title: 'Email',
            placeholder: 'Укажите email',
          },
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          submitButton: {
            title: 'Войти',
          },
        },
        ChangePasswordForm: {
          title: 'Изменение пароля',
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          newPassword: {
            title: 'Новый пароль',
            placeholder: 'Укажите новый пароль',
          },
          repeatPassword: {
            title: 'Повторите пароль',
            placeholder: 'Повторите пароль',
          },
          submitButton: {
            title: 'Изменить пароль',
          },
        },
        UserForm: {
          title: 'Пользователь',
          name: {
            title: 'Псевдоним',
            placeholder: 'Придумайте себе псевдоним',
          },
          about: {
            title: 'О себе',
            placeholder: 'Напишите что-нибудь о себе',
          },
          submitButton: {
            title: 'Сохранить',
          },
        },
        ProductForm: {
          title: 'Продукт',
          name: {
            title: 'Название',
            placeholder: 'Введите название продукта',
          },
          description: {
            title: 'Описание',
            placeholder: 'Введите описание',
          },
          price: {
            title: 'Цена',
            placeholder: 'Введите цену',
          },
          oldPrice: {
            title: 'Старая цена',
            placeholder: 'Введите старую цену',
          },
          image: {
            title: 'Описание',
            placeholder: 'Введите описание',
          },
          category: {
            title: 'Кстегория',
            placeholder: 'Введите категорию',
          },
          submitButton: {
            title: 'Сохранить',
          },
        },
      },
      fields: {
        string: 'Строковое значение',
      },
      components: {
        Basket: {
          title: 'Добавить в корзину',
        },
        RemoveButton: {
          title: 'Данные будут потеряны, удалить?',
          ok: 'Удалить',
          cancel: 'Отмена',
        },
        RangeInputs: {
          from: 'От',
          to: 'До',
        },
        InputIntRangeList: {
          title: 'Диапазон',
        },
        NumberInput: {
          float: {
            placeholder: 'Дробное число',
          },
          integer: {
            placeholder: 'Целое число',
          },
        },
        login: {
          enter: 'Вход',
          leave: 'Выход',
        },
        header: {
          nav: 'Навигация',
          root: 'Главная',
          profile: 'Профиль',
          'home-works': 'Домашние работы',
          examples: 'Примеры',
          lessons: 'Уроки',
          teachers: 'Преподаватели',
        },
      },
      enums: {
        ExampleKey: {
          modal: 'Модальное окно',
          movable: 'Перемещаемый',
          sortableList: 'Сортируемый список',
          waveSlider: 'Слайдер',
          inputs: 'Инпуты',
        },
        LessonKey: {
          generator: 'Генераторы итераторы',
          patterns: 'Паттерны',
          restApi: 'Rest Api',
          solid: 'Solid',
          functionalProgramming: 'Функциональное программирование',
          babel: 'Babel + typescript',
          socketsAndWorkers: 'Web sockets & Web workers',
          graphql: 'Graphql',
        },
      },
    },
  },
};
