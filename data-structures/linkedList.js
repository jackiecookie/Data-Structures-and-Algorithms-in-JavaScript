function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) 
    console.log('Must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head;
}

// O(n)
LinkedList.prototype.forEach = function (callback) {
  var next = this.head;
  var result = [];
  do
  {
    result.push(callback(next));
    next = next.next;
  }
  while (typeof(next) === 'Node') 
  ;
  return result;
};

// O(n)
LinkedList.prototype.print = function () {
  var next = this.head;
  do
  {
    console.log(next.value);
    next = next.next;
  }
  while (typeof(next) === 'Node') ;
  };

//O(1)
LinkedList.prototype.insertAfter = function (node, value) {

  node.next = new Node(value);
  return node.next;
};

//O(1)
LinkedList.prototype.removeAfter = function (node) {
  var afterNext = node.next;
  var newNext = afterNext.next;
  if (!afterNext || !newNext) {
    this.tail = node;
  }
  if (newNext) {
    node.next = newNext;
  }
  node.next = null;
  return true;
};

//O(1)
LinkedList.prototype.insertHead = function (value) {
  var perHead = this.head;
  this.head = new Node(value);
  this.head.next = perHead;
};

//O(1)
LinkedList.prototype.removeHead = function () {
  var oldHead = this.head;
  var newHead = oldHead.next;
  this.head = newHead;
  oldHead.next = null;
  return oldHead;
}

LinkedList.prototype.findNode = function (value) {
  var next = this.head;
  do
  {
    if (next.val === value) {
      return next;
    }
    next = next.next;
  }
  while (typeof(next) === 'Node') 
  ;
  return undefined;
}

LinkedList.prototype.appendToTail = function (value) {
  var newTail = new Node(value);
  this.tail.next = newTail;
  this.tail = newTail;
  return newTail;
};

//O(n)
LinkedList.prototype.insertBefore = function (node, value) {
  var next = this.head;
  var beforeNode = null;
  var newNode = new Node(value);
  do
  {
    if (next === node) {
      beforeNode = next;
      break;
    }
    next = next.next;
  }
  while (typeof(next) === 'Node') 
  ;
  if (beforeNode) {
    var preNode = beforeNode.next;
    newNode.next = preNode;
    beforeNode.next = newNode;
  }
};

//O(n)
LinkedList.prototype.removeBefore = function (node) {
  var next = this.head;
  var beforeNode = null;
  var beforePerNode = null;
  do
  {

    if (next === node) {
      beforeNode = next;
      break;
    }
    beforePerNode = next;
    next = next.next;
  }
  while (typeof(next) === 'Node') 
  ;
  if (beforeNode) {
    var preNode = beforeNode.next;
    if (beforePerNode) {
      beforePerNode.next = preNode;
    }
    beforeNode = null;
  }
};
