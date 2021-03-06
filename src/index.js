import './styles.css';
import menu from './menu.json';
import menuTemplate from './menu-items.hbs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const recepies = { menu: menu };
console.log(recepies);


const refs = {
  body: document.querySelector('body'),
  menuList: document.querySelector('.js-menu'),
  themeCheckbox: document.querySelector('#theme-switch-control'),
};

const setInitialTheme = () => {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    refs.themeCheckbox.checked = false;
    refs.body.classList.add(Theme.LIGHT);
  }
  else{
    refs.themeCheckbox.checked = true;
    refs.body.classList.add(Theme.DARK);
  }
};

refs.menuList.insertAdjacentHTML('beforeend', menuTemplate(recepies));
setInitialTheme();

const themeChange = () => {
  if (refs.themeCheckbox.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
refs.themeCheckbox.addEventListener('change', themeChange);

