const watcher = {
  watch: function(obj, item, callback) {
    const p = {
      old: JSON.stringify(obj.item),
      obj: obj,
      item: item,
      callback: callback
    }
    this.watches.push(p);
  },
  watches: [],
  check: function() {
    this.watches.forEach(function(item) {
      if(item.old !== JSON.stringify(item.obj['item'])) {
        item.callback(JSON.parse(item.old), item.obj['item']);
        item.old = JSON.stringify(item.obj['item']);
      }
    });
  }
}

export default watcher;