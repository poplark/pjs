// import watcher from './watcher';
import { inject } from './injector';

var ppk         = window.ppk || (window.ppk = {});
// ppkModule;

ppk.controller = (name, arr) => {
  inject(name, arr);
};

export default ppk;
