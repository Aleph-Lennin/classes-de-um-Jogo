class hero {
  constructor(name, age, ninja, atacou, boss) {
    this.name = name;
    this.age = age;
    this.type = ninja;
    this.atacou = atacou;
    this.boss = boss;
  }
  atacar() {
    for (let hp = 6; hp > 0; hp--) {
      console.log(`O ${this.type} atacou usando ${this.atacou}`);
      console.log(`Dano aplicado... HP restante: ${hp}`);
    }
  }
  derrotou() {
    if (win === true) {
      console.log(
        `O jogador ${this.name} de ${this.age} anos, derrotou o ${this.boss}`
      );
    } else if (win === false) {
      console.log(
        `O jogador ${this.name} de ${this.age} anos, foi derrotado pelo ${this.boss}`
      );
    }
  }
}

let win = true;
let player = new hero("Aleph", 25, "ninja", "shuriken", "Ogro do Pantano");
player.atacar();
player.derrotou();
