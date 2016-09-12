var Connection = require('./connection')

var Node = function(title, text) {
  this.title = title;
  this.text = text;
  this.connections = [];
  this.conditions = {};
}

Node.prototype.connect = function(node, text){
  var connection = new Connection(node, text);
  if(!this.conditions[text]){
      this.connections.push(connection);
      this.conditions[text] = connection;
  } else{
    throw new Error();
  }
}

module.exports = Node
