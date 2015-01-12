var Player = (function () {
    function Player() {
        this.strength = 10;
    }
    Player.prototype.fights = function () {
        console.log("He Fights");
    };
    return Player;
})();

function main() {
    var tom = new Player();
    tom.fights();
}
