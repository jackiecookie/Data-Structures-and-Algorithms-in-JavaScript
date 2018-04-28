function Queue(capacity) {
  this._storage = {};
  this._capacity = capacity || 0;
  this._count = 0;
  this.oldestIndex = 0;
}

Queue.prototype.enqueue = function (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
  }
  return this._count;
};

Queue.prototype.dequeue = function () {
  var value = this.peek();
  delete this._storage[this.oldestIndex++];
  return value;

};

Queue.prototype.peek = function () {
  return this._storage[this.oldestIndex];
};

Queue.prototype.count = function () {
  return this._count - this.oldestIndex;
};

