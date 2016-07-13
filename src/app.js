"use strict";

// const $ = require("../node_modules/jquery");

const BattleBots = require("./main");

let testBot = new  BattleBots.Robot.BearBot();

console.log("robot", testBot);

BattleBots.fight.setEvents();
BattleBots.fillDOM.fillSelectOptions();
