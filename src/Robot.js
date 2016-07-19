"use strict";

// General Robots

var Robot = function () {
  this.playerName = "No Name Entered";
  this.robot = true;
  this.model = null;
  this.type = null;
};

// Type of Robot //

var FireBots = function () {
  this.model = "Fire Bot";
  this.attack = "Burninating Things";
  this.health = 40;
};

FireBots.prototype = new Robot();

var WaterBots = function () {
  this.model = "Water Bot";
  this.attack = "Watering Things";
  this.health = 30;
};

WaterBots.prototype = new Robot();

var TankBots = function () {
  this.model = "Tank Bot";
  this.attack = "Exploding Things";
  this.health = 50;
};

TankBots.prototype = new Robot();

// // // Robot Types // // //

// Types of Fire Bot //

var Welding = function () {
  this.type = "Welding";
  this.name = "Welding Bot";
  this.attack = "Welding";
  this.health += Math.floor(Math.random() * (100 - 80) + 80);
  this.damage = Math.floor(Math.random() * (20 - 10) + 10);
};

Welding.prototype = new FireBots();

var Dragon = function() {
  this.type = "Dragon";
  this.name = "Dragon Bot";
  this.attack = "Breathing Fire";
  this.health += Math.floor(Math.random() * (110 - 90) + 80);
  this.damage = Math.floor(Math.random() * (25 - 15) + 15);
};

Dragon.prototype = new FireBots();

// Types of Water Bots //

var Dolphin = function () {
  this.type = "Dolphin";
  this.name = "Dolphin Bot";
  this.attack = "Splash";
  this.health += Math.floor(Math.random() * (90 - 70) + 70);
  this.damage = Math.floor(Math.random() * (30 - 20) + 20);
};

Dolphin.prototype = new WaterBots();

var Crab = function () {
  this.type = "Crab";
  this.name = "Crab Bot";
  this.attack = "Pinchy Claws";
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.damage = Math.floor(Math.random() * (35 - 23) + 23);
};

Crab.prototype = new WaterBots();

// Types of Tank Bots //

var Bear = function () {
  this.type = "Bear";
  this.name = "Bear Bot";
  this.attack = "Bear Hugs";
  this.health += Math.floor(Math.random() * (130 - 100) + 100);
  this.damage = Math.floor(Math.random() * (15 - 5) + 5);
};

Bear.prototype = new TankBots();

var Optimus = function () {
  this.type = "Optimus";
  this.name = "Optimus Bot";
  this.attack = "Trucking";
  this.health += Math.floor(Math.random() * (120 - 115) + 115);
  this.damage = Math.floor(Math.random() * (20 - 5) + 5);
};

Optimus.prototype = new TankBots();

module.exports = {
  Welding, Dragon, Dolphin, Crab, Bear, Optimus
};