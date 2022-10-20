import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import filter from 'lodash.filter';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  filter(contacts, contactType.value === 'all' ? {} : { type: contactType.value })
    .forEach(renderContact);
});
