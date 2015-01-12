var Player = (function () {
    function Player() {
        this.strength = 10;
    }
    Player.prototype.fights = function () {
        console.log("He Fights");
    };
    return Player;
})();

var tom = new Player();
tom.fights();
