Game.registerMod("fresh air", {
  init: function () {
    this.grandmas = Game.Objects["Grandma"];
    if (!this.grandmas) return false;
    const MOD = this;

    Game.registerHook("check", function () {
      MOD.updateGrandmaBackground();
    });
  },
  updateGrandmaBackground: function () {
    if (Game.elderWrath > 0) {
      this.grandmas.art.bg = this.dir + "/backgroundWithFallingCookies.png";
    } else {
      this.grandmas.art.bg = this.dir + "/backgroundWithWindow.png";
    }
  },
});
