import templates from './templates.hbs';
import menu from './menu.json';
import './styles.css';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const switchTheme = document.querySelector('.js-switch-input');
const takeThemeInLocalStorage = localStorage.getItem('Theme');
const restartTheme = () => {
  if (JSON.parse(takeThemeInLocalStorage) === Theme.LIGHT) {
    body.classList.add(Theme.LIGHT);
    switchTheme.checked = false;
  } else {
    body.classList.add(Theme.DARK);
    switchTheme.checked = true;
  }
};
restartTheme();

const handlerSwitchTheme = event => {
  if (event.target.checked === true) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
  const addThemeInLocalStarage = localStorage.setItem(
    'Theme',
    JSON.stringify(body.className),
  );
};
switchTheme.addEventListener('change', handlerSwitchTheme);
//
const menuItems = document.querySelector('.js-menu');
const addMenuItems = elements => {
  const markup = elements.map(element => templates(element));
  menuItems.insertAdjacentHTML('beforeend', markup.join(''));
};
addMenuItems(menu);
