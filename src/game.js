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

Game.prototype.connect = function(nodeName1, nodeName2, condition){
  this.getNode(nodeName1).connect(this.getNode(nodeName2), condition);
}

module.exports = Game
