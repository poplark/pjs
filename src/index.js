// import watcher from './watcher';
import { inject } from './injector';

const ppk = {};

ppk.controller = (name, arr) => {
  inject(name, arr);
};

window.ppk = ppk;

export default ppk;

