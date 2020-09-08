const { testPartTwoB } = require("../test_cases/3.test_case_part_two_B/testCasePartTwo");

module.exports = {
  tags: ["testPartTwoB"],
  "Test Part Two B": function(browser) {
    testPartTwoB(browser, 3)
  }
};