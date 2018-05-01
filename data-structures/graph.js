

function Graph() {
  this._nodes = {};
}

Graph.prototype.addNode = function (value) {
  this._nodes[value] = this._nodes[value] || [];
};

Graph.prototype.removeNode = function (value) {
  this.forEach(function (key, node) {
    node.splice(node.indexOf(value), 1);
  })
  delete this._nodes[value]
};

Graph.prototype.contains = function (value) {
  return !!this._nodes[value];
};

Graph.prototype.addEdge = function (value1, value2) {
  if (this._nodes[value1] && this._nodes[value2]) {
    this._nodes[value1].push(value2);
    this._nodes[value2].push(value1);
  }
};

Graph.prototype.removeEdge = function (value1, value2) {
  var value1Neighbors = this._nodes[value1];
  var value2Neighbors = this._nodes[value2];
  if (value1Neighbors && value2Neighbors) {
    value1Neighbors.splice(value1Neighbors.indexOf(value2), 1);
    value2Neighbors.splice(value2Neighbors.indexOf(value1), 1);
  }
};

Graph.prototype.hasEdge = function (value1, value2) {
  return this._nodes[value1].indexOf(value2) > -1;
};

Graph.prototype.forEach = function (fn) {
  for (const key in this._nodes) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      fn(key, element)
    }
  }

};

Graph.prototype.traverseDepthFirst = function (value, fn, visited, distance) {
  visited = visited || {};
  distance = distance || 0;
  fn(value, distance);
  visited[value] = true;
  this._nodes[value].forEach(function (neighbor) {
    if (visited[neighbor]) return;
    this.traverseDepthFirst(neighbor, fn, visited, distance + 1);
  }, this);
};

Graph.prototype.traverseBreadthFirst = function (value, fn) {
  var visited = {};
  var queue = [value];
  visited[value] = 0;
  while (queue.length) {
    var node = queue.shift();
    fn(node, visited[node]);
    var neighbors = this._nodes[node].filter(function (neighbor) {
      if (visited[neighbor] === undefined) {
        visited[neighbor] = visited[node] + 1;
        return true;
      }
    });
    queue = queue.concat(neighbors);
  }
};
