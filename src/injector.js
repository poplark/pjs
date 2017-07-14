const isArray = arg => {
  return arg instanceof Array;
};
const isFunc = arg => {
  return 'function' === typeof arg;
};
// const noop = () => {};

const injectorCache = [];
const injector = args => {
  if (!isArray(args)) {
    if (isFunc(args)) {
      return args();
    } else {
      throw 'cann\'t resolve args';
    }
  }
  let length = args.length;

  if (length > 1) {
    let dependencies = args.slice(0, length-1);
    let callback = args[length-1];

    let params = [];
    dependencies.every( dependency => {
      let p = injectorCache.find( item => {
        return dependency === item.name;
      });
      if (p) {
        params.push(p.func);
      } else {
        throw `cann't find ${dependency}`;
      }
    });
    if (isFunc(callback)) {
      return callback(...params);
    } else {
      throw 'cann\'t resolve args';
    }
  } else {
    let callback = args[0];
    if (isFunc(callback)) {
      return callback();
    } else {
      throw 'cann\'t resolve args';
    }
  }
};

export function inject(name, arr) {
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
}

