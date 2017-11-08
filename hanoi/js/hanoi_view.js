class View{
  constructor(game, el){
    this.game = game;
    this.el = el;

    this.setupTowers();
    this.render();

  }


  setupTowers() {
    this.game.towers.forEach((tower) =>{
      let ul = "<ul>";
      for(var i = tower.length-1; i>=0; i--){
        let el = tower[i];
        ul += `<li size="${el}">${el}</li>`;
      }
      ul += "</ul>";
      console.log(ul);
      this.el.append(ul);
    });
  }

  render() {
    this.el.empty();
    this.setupTowers();
  }
}

module.exports = View;
