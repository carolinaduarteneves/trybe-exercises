class Character {
    name = "";
    life = 0;
    strength = 0;

    constructor(name, life, strength) {
        this.name = name;
        this.life = life;
        this.strength = strength;
    }

    showStatus() {
        console.log(
            `Name: ${this.name} | Life: ${this.life} | Strength: ${this.strength}`,
        );
    }
    attack() {
        console.log(`${this.name} attacked!`);
    }
}

const character1 = new Character("Arthas", 100, 80);
character1.showStatus();
character1.attack();

const character2 = new Character("Glacius", 200, 100);
character2.showStatus();
character2.attack();
