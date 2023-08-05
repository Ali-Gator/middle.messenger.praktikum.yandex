import { Context } from 'vm';

export const pageData: Context = {
  '/index.html': {
    title: 'Главная',
    cssFile: '/index.css',
    links: [
      {
        href: '/pages/login/login.html',
        text: 'Login'
      },
      {
        href: '/pages/register/register.html',
        text: 'Register'
      },
      {
        href: '/pages/profile/profile.html',
        text: 'Profile'
      },
      {
        href: '/pages/500/500.html',
        text: 'Error 500'
      },
      {
        href: '/pages/400/400.html',
        text: 'Error 400'
      },
    ]
  },
  '/pages/login/login.html': {
    title: 'Вход',
    cssFile: '/pages/login/login.css',
    h1: {
      classPrefix: 'login',
      text: 'Вход'
    },
    form: {
      class: 'auth-form login__form',
      inputs: [
        {
          name: 'login',
          labelText: 'Логин',
          errorText: 'Неверный логин',
          placeholder: 'Введите логин',
          value: 'ivanivanov',
          classPrefix: 'auth-form',
        },
        {
          name: 'password',
          labelText: 'Пароль',
          placeholder: 'Введите пароль',
          classPrefix: 'auth-form',
          type: 'password'
        },
      ],
      button: {
        class: 'button_form auth-form__button',
        text: 'Войти'
      },
    },
    link: {
      href: '/pages/register/register.html',
      class: 'login__link',
      text: 'Ещё не зарегистрированы?'
    }
  },
  '/pages/register/register.html': {
    title: 'Регистрация',
    cssFile: '/pages/register/register.css',
    h1: {
      classPrefix: 'register',
      text: 'Регистрация'
    },
    form: {
      class: 'auth-form register__form',
      inputs: [
        {
          name: 'email',
          labelText: 'Почта',
          placeholder: 'Введите эл. адрес',
          value: 'pochta@yandex.ru',
          classPrefix: 'auth-form',
          type: 'email'
        },
        {
          name: 'login',
          labelText: 'Логин',
          placeholder: 'Введите логин',
          value: 'ivanivanov',
          classPrefix: 'auth-form',
        },
        {
          name: 'first_name',
          labelText: 'Имя',
          placeholder: 'Введите имя',
          value: 'Иван',
          classPrefix: 'auth-form',
        },
        {
          name: 'second_name',
          labelText: 'Фамилия',
          placeholder: 'Введите фамилию',
          value: 'Иванов',
          classPrefix: 'auth-form',
        },
        {
          name: 'phone',
          labelText: 'Телефон',
          placeholder: 'Введите телефон',
          value: '+7 (909) 967 30 30',
          classPrefix: 'auth-form',
          type: 'phone'
        },
        {
          name: 'password',
          labelText: 'Пароль',
          placeholder: 'Введите пароль',
          value: 'ivanivanov',
          classPrefix: 'auth-form',
          type: 'password',
        },
        {
          name: 'same_password',
          labelText: 'Пароль (ещё раз)',
          placeholder: 'Введите пароль еще раз',
          value: 'ivani',
          classPrefix: 'auth-form',
          type: 'password',
          errorText: 'Пароли не совпадают',
        },
      ],
      button: {
        class: 'button_form auth-form__button_type_register',
        text: 'Создать аккаунт'
      },
    },
    link: {
      href: '/pages/login/login.html',
      class: 'register__link',
      text: 'Уже есть аккаунт?'
    }
  },
  '/pages/profile/profile.html': {
    title: 'Иван',
    cssFile: '/pages/profile/profile.css',
    h1: {
      classPrefix: 'profile',
      text: 'Иван'
    },
    backLink: {
      href: '/index.html',
      class: 'side-back',
    },
    form: {
      class: 'profile-form profile__from',
      inputs: [
        {
          name: 'email',
          labelText: 'Почта',
          value: 'pochta@yandex.ru',
          classPrefix: 'profile-form',
          type: 'email'
        },
        {
          name: 'login',
          labelText: 'Логин',
          value: 'ivanivanov',
          classPrefix: 'profile-form',
        },
        {
          name: 'first_name',
          labelText: 'Имя',
          value: 'Иван',
          classPrefix: 'profile-form',
        },
        {
          name: 'second_name',
          labelText: 'Фамилия',
          value: 'Иванов',
          classPrefix: 'profile-form',
        },
        {
          name: 'phone',
          labelText: 'Телефон',
          value: '+7 (909) 967 30 30',
          classPrefix: 'profile-form',
          type: 'phone'
        }
      ],
      button: {
        class: 'button_form profile-form__button',
        text: 'Сохранить'
      },
    },
    buttons: [
      {
        class: 'profile__button',
        text: 'Изменить данные'
      },
      {
        class: 'profile__button',
        text: 'Изменить пароль'
      },
      {
        class: 'profile__button profile__button_type_danger',
        text: 'Выйти'
      },
    ],
    popup: {
      id: 'change_avatar',
      h2: {
        classPrefix: 'popup',
        text: 'Загрузите файл',
        h2: true,
      },
      form: {
        class: 'popup-form popup__form',
        inputs: [
          {
            name: 'avatar',
            labelText: 'Выбрать файл на компьютере',
            classPrefix: 'popup-form',
          }],
        button: {
          class: 'button_form popup-form__button',
          text: 'Поменять'
        },
      },
      error: 'Нужно выбрать файл'
    }
  },
  '/pages/500/500.html': {
    title: '500',
    cssFile: '/pages/500/500.css',
    h1: {
      class: 'error__title',
      text: '500'
    },
    text: 'Мы уже фиксим',
    link: {
      href: '/index.html',
      class: 'error__link',
      text: 'Назад к чатам'
    },
  },
  '/pages/400/400.html': {
    title: '400',
    cssFile: '/pages/400/400.css',
    h1: {
      class: 'error__title',
      text: '400'
    },
    text: 'Упс... Не туда попали',
    link: {
      href: '/index.html',
      class: 'error__link',
      text: 'Назад к чатам'
    },
  },
};
