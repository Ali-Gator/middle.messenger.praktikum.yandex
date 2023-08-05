import { Context } from 'vm';

export const pageData: Context = {
  '/index.html': {
    title: 'Главная',
    cssFile: '',
    name: 'sad'
  },
  '/login.html': {
    title: 'Вход',
    // cssFile: './pages/login/login.css',
    form: [
      {
        name: 'login',
        label: 'Логин',
        errorText: 'Неверный логин'
      },
      {
        name: 'password',
        label: 'Пароль',
      }
    ]
  }
};
