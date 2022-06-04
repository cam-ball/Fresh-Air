Game.registerMod("fresh air", {
  init: function () {
    let grandmas = Game.Objects["Grandma"];
    if (!grandmas) return false;
    grandmas.art.bg = this.dir + "/backgroundWithWindow.png";
  },
});
