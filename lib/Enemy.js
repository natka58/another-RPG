
const Potion = require('./Potion');
const Character = require('./Character');

// Enemy.js
class Enemy extends Character {
    constructor(name = '') {
      // call parent constructor here:
      super(name);
  
     
  this.weapon = weapon;
  this.potion = new Potion();

 }

 getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }

}
  module.exports = Enemy;

