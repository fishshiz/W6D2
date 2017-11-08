class View{
  constructor(game, el){
    this.game = game;
    this.el = el;

    this.setupTowers();

  }


  setupTowers() {
    this.game.towers.forEach((tower) =>{
      let ul = "<ul>";
      for(var i = tower.length-1; i>=0; i--){
        let el = tower[i];
        ul += `<li>${el}</li>`;
      }
      ul += "</ul>";
      console.log(ul);
      this.el.append(ul);
    });
  }
}

module.exports = View;
