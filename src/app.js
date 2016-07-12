"use strict";

const BattleBots = require("./main");

let Dragon = new BattleBots.Robot.DragonBot();

let robot1;
let robot2;

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
  
      console.log("robot1", robot1);
      console.log("robot2", robot2);
}

let fightReady = $("#fightReady").click(fillPlayers);
// let attackButton = $("#attackButton").click(fillPlayers);
