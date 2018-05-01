
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      this
        .left
        .insert(value)
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else if (value > this.value) {
    if (this.right) {
      this
        .right
        .insert(value)
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
  return this;
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true
  } else if (value < this.value) {
    if (this.left) {
      return this
        .left
        .contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right) {
      return this
        .right
        .contains(value);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function (fn) {
  var traverse = function (treeNode) {
    if (!treeNode.left && !treeNode.right) {
      fn(treeNode)
      return
    }
    treeNode.left && traverse(treeNode.left)
    fn(treeNode)
    treeNode.right && traverse(treeNode.right)
  }
  traverse(this);
};

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function (fn) {
  fn(this)
  treeNode.left && treeNode
    .left
    .traverseDepthFirst_preOrder(fn)
  treeNode.right && treeNode
    .right
    .traverseDepthFirst_preOrder(fn)
};

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function (fn) {
  this.left && this
    .left
    .traverseDepthFirst_postOrder(fn);
  this.right && this
    .right
    .traverseDepthFirst_postOrder(fn);
  fn(this);
};

BinarySearchTree.prototype.deleteMin = function () {
  var findMinAndDel = function (treeNode) {
    if (!treeNode.left) {
      return true;
    }
    if (findMinAndDel(treeNode.left)) {
      treeNode.left = null;
    }
  }
  findMinAndDel(this);
  return true;
}


BinarySearchTree.prototype.checkIfFull = function () {
  var recurse = function (treeNode) {
    var hasLeft = !!treeNode.left;
    var hasRight = !!treeNode.right;
    if (!hasLeft && !hasRight) {
      return true;
    } else if (hasLeft && hasRight) {
      return traverse(treeNode.left) && traverse(treeNode.right);
    } else {
      return false;
    }
  }
  return recurse(this);
};



var bsTree = new BinarySearchTree(11);
bsTree
  .insert(7)
  .insert(15)
  .insert(5)
  .insert(9)
  .insert(13)
  .insert(20)
  .insert(3)
  .insert(6)
  .insert(8)
  .insert(10)
  .insert(12)
  .insert(14)
  .insert(18)
  .insert(25);

console.log(bsTree.checkIfFull())
