function Stack(capacity) {
  this._storage = {};
  this._capacity = capacity || 0;
  this._count = 0;
}

// O(1)
Stack.prototype.push = function (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
};

// O(1)
Stack.prototype.pop = function () {
  if (this._count > 0) {
    var result = this.peek();
    delete this._storage[--this._count];
    return result;
  }
};

// O(1)
Stack.prototype.peek = function () {
  return this._storage[this._count - 1]
};

// O(1)
Stack.prototype.count = function () {
  return _count;
};