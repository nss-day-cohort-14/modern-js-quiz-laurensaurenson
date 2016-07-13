"use strict";

// const $ = require("jQuery");

let fightRobot1 = $("#fightRobot1");
let fightRobot2 = $("#fightRobot2");

let nameInput1 = $("#name1");
let nameInput2 = $("#name2");

// switches to Attack View //
let showAttackScreen = () => {
  $("#attackButton").removeClass("hidden");
  $("#fightReady").addClass("hidden");
  $("#makeRobot1").addClass("hidden");
  $("#makeRobot2").addClass("hidden");
  $("#attackButton").attr("disabled", false);
};

// reset to choose robot screen //
let reset = () => {
  $("#fightReady").removeClass("hidden");
  $("#makeRobot1").removeClass("hidden");
  $("#makeRobot2").removeClass("hidden");
  $("#attackButton").addClass("hidden");
  $("#reset").addClass("hidden");
  nameInput1.val("");
  nameInput2.val("");
  fightRobot1.empty();
  fightRobot2.empty();
  $("#winner").empty();
};

module.exports = {
  showAttackScreen, reset
};