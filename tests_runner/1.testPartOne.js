const { testPartOne } = require("../test_cases/1.test_case_part_one/testCasePartOne");

module.exports = {
  tags: ["testPartOne"],
  "Test Part One": function(browser) {
    testPartOne(browser, 1);
  }
};