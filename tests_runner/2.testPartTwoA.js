const { testPartTwo } = require("../test_cases/2.test_case_part_two_A/testCasePartTwo");

module.exports = {
  tags: ["testPartTwoA"],
  "Test Part Two A": function(browser) {
    testPartTwo(browser, 2)
  }
};