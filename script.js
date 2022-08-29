class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(`Ninja name: - ${this.name}`);
  }

  showStats() {
    console.log(`Ninja name: - ${this.name}`);
    console.log(`Ninja strength: - ${this.strength}`);
    console.log(`Ninja speed: - ${this.speed}`);
    console.log(`Ninja health: - ${this.health}`);
  }

  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name, health, wisdom = 10) {
    super(name, health);
    this.wisdom = wisdom;
  }

  showStats() {
    super.showStats();
    console.log(`Ninja wisdom: - ${this.wisdom}`);
  }

  speakWisdom() {
    console.log("I don't know why its working.");
  }
}

let Sasuke = new Sensei("Sasuke", 3000);
Sasuke.showStats();
Sasuke.speakWisdom();
