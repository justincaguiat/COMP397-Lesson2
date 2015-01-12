class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    fights() {
        console.log("He Fights");
    }

} 

function main() {
    var tom = new Player();
    tom.fights();
}