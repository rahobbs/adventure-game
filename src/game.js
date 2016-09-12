var Node = require('./node');

var Game = function() {
  this.nodes = {};
  this.startingPoint = null;
}

Game.prototype.addNode = function(title, text){
  //var node = new Node(title, text);
  if(!this.nodes.includes(title)){
    this.nodes[title] = text;
  } else {
    throw new Error();
  }
  return ;
  // this.title = title;
  // this.text = text;
  // this.connections = [];
  // this.conditions = {};

}

module.exports = Game
