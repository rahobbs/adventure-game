var Node = require('./node');

var Game = function() {
  this.nodes = {};
  this.startingPoint = null;
}

Game.prototype.addNode = function(title, text){
  var node = new Node(title, text);

  if(this.startingPoint === null){
    this.startingPoint = node;
  }

  if(!this.nodes[node.title]){
    this.nodes[title] = node;
   } else {
     throw new Error();
   }
  return node;

}

Game.prototype.getNode = function(name){
    return this.nodes[name];
}

Game.prototype.connect = function(node1, node2, condition){
  this.nodes[node1].connect(this.nodes[node2], condition);
}

module.exports = Game
