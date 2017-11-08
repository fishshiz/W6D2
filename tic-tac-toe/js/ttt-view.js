class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  bindEvents() {
    this.el.on("click", "li", (event =>{
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    let pos = $square.attr("pos").split(",").map(function(el) {
      return parseInt(el);
    });
    if(this.game.board.isEmptyPos(pos)) {
      this.game.playMove(pos);
      $square.append(`<p>${this.game.currentPlayer}</p>`);
      $square.css("background-color", "white");
    }
    if(this.game.isOver()){
      // alert(`${this.game.board.winner()} lost!`);
      this.el.append(`<h1>${this.game.board.winner()} lost!</h1>`);
    }
  }

  setupBoard() {
    let el = this.el;
    let str = "<ul>";
    let i = 0;
    this.game.board.grid.forEach(function(row){
      let j = 0;
      row.forEach(function(square){
        let posArr = [i, j];
        str += `<li pos="${posArr}"></li>`;
        j+= 1;
      });
      i += 1;
    });
    str += "</ul>";
    el.append($(str));
  }
}

module.exports = View;
