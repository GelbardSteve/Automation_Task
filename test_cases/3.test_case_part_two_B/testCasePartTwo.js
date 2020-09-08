const { partTwoSelectorsB } = require("./partTwoSelectors");
const f = require("../../exportsFunction");
const { PartTwo } = require("../../test_flow_classes/2.part_two/testPartTwo");

const reports = require("../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

const deleteFolder = "../automation_task/reports/screenShots";

module.exports = {
  testPartTwoB: async function (browser, testNum) {
    const test_name = `${testNum}. testPartTWOB`;
    f.deleteFromFolder(deleteFolder);
    createNewRepo(test_name);

    class PartTwoContinue extends PartTwo {
      
      constructor(browser, f, selector, insertStatusRepo, testName) {
        super(browser, f, selector, insertStatusRepo, testName);
      }
      async executeTestCase() {
        await this.openBrowser();

        await this.f.clickOnElement(
          this.browser,
          this.selector.ClickOnNavElemnent,
          this.insertStatusRepo,
          this.f.saveScreenShots,
          this.testName
        );

        await this.moveToDOMElement();

        await this.checkSumOfProduct();
      }
    }
    const partTwoB = new PartTwoContinue(
      browser,
      f,
      partTwoSelectorsB,
      insertStatusRepo,
      test_name
    );
    partTwoB.executeTestCase();
  },
};
