Hooks.once("init", () => {
  if (game.system.id !== "dnd5e") {
    ui.notifications?.error("This module requires the official dnd5e system.");
    return;
  }

  console.log("[foundryvtt-dnd5e55-lang-de] Initialized.");
});
