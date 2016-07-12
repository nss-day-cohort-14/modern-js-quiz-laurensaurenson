"use strict";

const BattleBots = require("./main");

let Dragon = new BattleBots.Robot.DragonBot();

let robot1;
let robot2;

let fightRobot1 = $("#fightRobot1");
let fightRobot2 = $("#fightRobot2");

let nameInput1 = $("#name1");
let nameInput2 = $("#name2");
let typeSelects = $(".robot-types");

for (let i = 0; i < BattleBots.Robot.botArray.length; i++ ) {
  let newTypeOption = $("<option>").attr("id", `${BattleBots.Robot.botArray[i].type}`).html(`${BattleBots.Robot.botArray[i].name}`);
  typeSelects.append(newTypeOption);
}

let fillPlayers = () => {
  let selectRobot1 = $("#select1 option:selected").attr("id");
  for ( let key in BattleBots.Robot) {
    if ( key === selectRobot1 ) {
      robot1 = new BattleBots.Robot[key]();
    }
  }
  robot1.playerName = nameInput1.val();
  let selectRobot2 = $("#select2 option:selected").attr("id");
  for ( let key in BattleBots.Robot) {
    if ( key === selectRobot2 ) {
      robot2 = new BattleBots.Robot[key]();
    }
  }
  robot2.playerName = nameInput2.val();

  showAttackScreen();
  fillAttackScreen(robot1, fightRobot1);
  fillAttackScreen(robot2, fightRobot2);
};

let attack = () => {
  robot1.health = robot1.health - robot2.damage;
  robot2.health = robot2.health - robot1.damage;
  fillAttackScreen(robot1, fightRobot1);
  fillAttackScreen(robot2, fightRobot2);
  if ( robot1.health <= 0 ) {
    winnerAnnouncement(robot2);
  } else if ( robot2.health <= 0 ) {
    winnerAnnouncement(robot1);
  }
};

// announce the winner //
let winnerAnnouncement = (robot) => {
  $("#attackButton").attr("disabled", true);
  $("#winner").html(`The winner is ${robot.playerName} with the ${robot.name} using ${robot.attack}`);
}

// fill attack screen information //
let fillAttackScreen = (robot, robotBox) => {
  robotBox.empty();
  let playerName = $("<h4>").html(`Player Name: ${robot.playerName}`);
  let robotType = $("<h4>").html(`Robot Type: ${robot.name}`);
  let robotHealth = $("<h4>").html(`Health: ${robot.health}`);
  let robotAttack = $("<h5>").html(`Attack: ${robot.attack}`);
  let robotDamage = $("<h5>").html(`Damage: ${robot.damage}`);
  robotBox.append(playerName, robotType, robotHealth, robotAttack, robotDamage);
};

// switches to Attack View //
let showAttackScreen = () => {
  $("#attackButton").removeClass("hidden");
  $("#fightReady").addClass("hidden");
  $("#makeRobot1").addClass("hidden");
  $("#makeRobot2").addClass("hidden");
};

let fightReady = $("#fightReady").click(fillPlayers);
let attackButton = $("#attackButton").click(attack);
