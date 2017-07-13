
const injectorCache = [];
const injector = args => {
  let length = args.length;

  let dependencies = args.slice(0, length);
  let callback = args[length];

  if (length > 1) {
    let params = [];
    dependencies.each( dependency => {
      let p = injectorCache.find( item => {
        return dependency === item.name;
      });
      if (p) {
        params.push(p.func);
      } else {
        throw `cann't find ${dependency}`;
      }
    });
    return callback(...params);
  } else {
    return callback();
  }
};

const inject = (name, arr) => {
  let p = injectorCache.find( item => {
    return name === item.name;
  });
  if (p) {
    throw `cann't inject duplacated ${name}`;
  } else {
    injectorCache.push({
      name: name,
      func: injector(arr)
    });
  }
};

export default {
  injector: injector,
  inject: inject
};