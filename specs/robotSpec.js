"use strict";

// works in the console not in the specRunner

let Robot = require('../src/Robot');

// can't test other files because of jquery

describe("Robot Functions", function () {

  let robotTest = new Robot.Bear();

  it("should have a required Robot file", function () {
    expect(Robot).toBeDefined();
  });

  it("should should define the test as an object", function () {
    expect(robotTest).toBeDefined();
  });

  it("should have a player name value before user name inserted", function () {
    expect(robotTest.playerName).toMatch("No Name Entered");
  });
  
  it("should have have an assigned attack name", function () {
    expect(robotTest.attack).toBe("Bear Hugs");
  });

  it("should have a damage between two previously assigned numbers", function () {
    expect(robotTest.damage).toBeGreaterThan(5);
    expect(robotTest.damage).toBeLessThan(15);
  })

});