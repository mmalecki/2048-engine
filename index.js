var 2048Engine = module.exports = function (options) {
  var size = options.size || { width: 4, height: 4 };

  this.table = new Array(size.height);
  for (var i = 0; i < size.height; i++) {
    this.table[i] = new Array(size.width);
  }
};
