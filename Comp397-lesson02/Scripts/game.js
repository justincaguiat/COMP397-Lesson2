var stage;
var helloText;
var canvas;
var scale;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}

function gameLoop() {
    stage.update();
    scale = 1;
    helloText.x += scale;

    helloText.rotation += 10;
}

function main() {
    helloText = new createjs.Text("Hello World!", "40px Consolas", "#000000");

    stage.addChild(helloText);
    helloText.x = 250;
    helloText.y = 210;
}
//# sourceMappingURL=game.js.map
