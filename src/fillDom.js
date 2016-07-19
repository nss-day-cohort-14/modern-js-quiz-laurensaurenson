"use strict";

let Robot = require("./Robot");
let viewChange = require("./viewChange");

let fightRobot1 = $("#fightRobot1"),
    fightRobot2 = $("#fightRobot2"),
    typeSelects = $(".robot-types"),
    nameInput1 = $("#name1"),
    nameInput2 = $("#name2");

let fillSelectOptions = () => {
  for ( let key in Robot) {
    let newTypeOption = $("<option>").attr("id", `${key}`).html(`${key}`);
    typeSelects.append(newTypeOption);
  }
};

// announce the winner //
let winnerAnnouncement = (robot) => {
  $("#attackButton").attr("disabled", true);
  $("#winner").html(`The winner is ${robot.playerName} with the ${robot.name} using ${robot.attack}`);
  $("#reset").removeClass("hidden");
};

let fillAttackScreen = (robot, robotBox) => {
  robotBox.empty();
  let playerName = $("<h4>").html(`Player Name: ${robot.playerName}`);
  let robotType = $("<h4>").html(`Robot Type: ${robot.name}`);
  let robotHealth = $("<h4>").html(`Health: ${robot.health}`);
  let robotAttack = $("<h5>").html(`Attack: ${robot.attack}`);
  let robotDamage = $("<h5>").html(`Damage: ${robot.damage}`);
  robotBox.append(playerName, robotType, robotHealth, robotAttack, robotDamage);
};

module.exports = {
  fillAttackScreen, fillSelectOptions, winnerAnnouncement
};