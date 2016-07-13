"use strict";

// const $ = require("jQuery");

let fillDOM = require("./fillDom");
let viewChange = require("./viewChange");
let Robot = require("./Robot");

let fightRobot1 = $("#fightRobot1");
let fightRobot2 = $("#fightRobot2");
let nameInput1 = $("#name1");
let nameInput2 = $("#name2");

let robot1;
let robot2;

function attack () {
  robot1.health = robot1.health - robot2.damage;
  robot2.health = robot2.health - robot1.damage;
  fillDOM.fillAttackScreen(robot1, fightRobot1);
  fillDOM.fillAttackScreen(robot2, fightRobot2);
  if ( robot1.health <= 0 ) {
    fillDOM.winnerAnnouncement(robot2);
  } else if ( robot2.health <= 0 ) {
    fillDOM.winnerAnnouncement(robot1);
  }
}

let fillPlayers = () => {
  let selectRobot1 = $("#select1 option:selected").attr("id");
  for ( let key in Robot) {
    if ( key === selectRobot1 ) {
      robot1 = new Robot[key]();
    }
  }
  robot1.playerName = nameInput1.val();
  
  let selectRobot2 = $("#select2 option:selected").attr("id");
  for ( let key in Robot) {
    if ( key === selectRobot2 ) {
      robot2 = new Robot[key]();
    }
  }
  robot2.playerName = nameInput2.val();

  viewChange.showAttackScreen();
  fillDOM.fillAttackScreen(robot1, fightRobot1);
  fillDOM.fillAttackScreen(robot2, fightRobot2);
};

let setEvents = () => {
  let fightReady = $("#fightReady").click(fillPlayers);
  let attackButton = $("#attackButton").click(attack);
  let resetButton = $("#reset").click(viewChange.reset);
};

module.exports = {
  attack, setEvents, fillPlayers
};