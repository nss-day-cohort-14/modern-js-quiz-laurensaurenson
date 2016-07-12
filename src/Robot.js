"use strict";

// General Robots

var Robot = function () {
  this.robot = true;
  this.model = null;
  this.type = null;
};

// Type of Robot //

var FireBots = function () {
  this.model = "Fire Bot";
  this.attack = "Burninating Things";
};

FireBots.prototype = new Robot();

var WaterBots = function () {
  this.model = "Water Bot";
  this.attack = "Watering Things";
};

WaterBots.prototype = new Robot();

var TankBots = function () {
  this.model = "Tank Bot";
  this.attack = "Exploding Things";
};

TankBots.prototype = new Robot();

// // // Robot Types // // //

// Types of Fire Bot //

var WeldingBot = function () {
  this.type = "WeldingBot";
  this.name = "Welding Bot";
  this.attack = "Welding";
  this.health = Math.floor(Math.random() * (100 - 80) + 80);
  this.damage = Math.floor(Math.random() * (20 - 10) + 10);
};

WeldingBot.prototype = new FireBots();
let weldingBot = new WeldingBot();

var DragonBot = function() {
  this.type = "DragonBot";
  this.name = "Dragon Bot";
  this.attack = "Breathing Fire";
  this.health = Math.floor(Math.random() * (110 - 90) + 80);
  this.damage = Math.floor(Math.random() * (25 - 15) + 15);
};

DragonBot.prototype = new FireBots();
let dragonBot = new DragonBot();

// Types of Water Bots //

var DolphinBot = function () {
  this.type = "DolphinBot";
  this.name = "Dolphin Bot";
  this.attack = "Splash";
  this.health = Math.floor(Math.random() * (90 - 70) + 70);
  this.damage = Math.floor(Math.random() * (30 - 20) + 20);
};

DolphinBot.prototype = new WaterBots();
let dolphinBot = new DolphinBot();

var CrabBot = function () {
  this.type = "CrabBot";
  this.name = "Crab Bot";
  this.attack = "Pinchy Claws";
  this.health = Math.floor(Math.random() * (80 - 60) + 60);
  this.damage = Math.floor(Math.random() * (35 - 23) + 23);
};

CrabBot.prototype = new WaterBots();
let crabBot = new CrabBot();

// Types of Tank Bots //

var BearBot = function () {
  this.type = "BearBot";
  this.name = "Bear Bot";
  this.attack = "Bear Hugs";
  this.health = Math.floor(Math.random() * (130 - 100) + 100);
  this.damage = Math.floor(Math.random() * (15 - 5) + 5);
};

BearBot.prototype = new TankBots();
let bearBot = new BearBot();

var OptimusBot = function () {
  this.type = "OptimusBot";
  this.name = "Optimus Bot";
  this.attack = "Trucking";
  this.health = Math.floor(Math.random() * (120 - 115) + 115);
  this.damage = Math.floor(Math.random() * (20 - 5) + 5);
};

OptimusBot.prototype = new TankBots();
let optimusBot = new OptimusBot();

let botArray = [ weldingBot, dragonBot, dolphinBot, crabBot, bearBot, optimusBot ];

module.exports = {
  WeldingBot, DragonBot, DolphinBot, CrabBot, BearBot, OptimusBot, botArray
};