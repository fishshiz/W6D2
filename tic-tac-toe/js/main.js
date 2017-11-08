const View = require("./ttt-view.js");
const Game = require("../solution/game.js");

$( () => {
  // Your code here
  let game = new Game();
  let $view = $($('.ttt')[0]);
  let view = new View(game, $view);
  view.setupBoard();
  view.bindEvents();

});
