const Potion = require('../lib/Potion');
const Character = require('./Character');
// Player.js
class Player extends Character {
  constructor(name = '') {
    // call parent constructor here:
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
  }

  // other methods...

getStats(){
  return{
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
}

getInventory() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
}

addPotion(potion) {
  this.inventory.push(potion);
}

usePotion(index) {
  const potion = this.inventory.splice(index, 1) [0];
  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      breakl
      case 'health':
      this.health += potion.value;
      break;
      case 'strength':
        this.strength += potion.value;
        break;
  }

  }
}
  
  module.exports = Player;