const { partTwoSelectorsA } = require("./partTwoSelectors");
const f = require("../../exportsFunction");
const { PartTwo } = require("../../test_flow_classes/2.part_two/testPartTwo");

const reports = require("../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

const deleteFolder = "../checkSumOfSizeAndCostAutomation/reports/screenShots";

module.exports = {
  testPartTwo: async function (browser, testNum) {
    const test_name = `${testNum}. testPartTWOA`;
    f.deleteFromFolder(deleteFolder);
    createNewRepo(test_name);

    class PartTwoContinue extends PartTwo {
      constructor(browser, f, selector, insertStatusRepo, testName) {
        super(browser, f, selector, insertStatusRepo, testName);
      }
      
      async executeTestCase() {

        await this.openBrowser();
        await this.moveToDOMElement();

        await this.f.clickOnElement(
          this.browser,
          this.selector.clickOnNavChlidElemnent,
          this.insertStatusRepo,
          this.f.saveScreenShots,
          this.testName
        );

        await this.checkSumOfProduct();
      }
    }
    const partTwoA = new PartTwoContinue(
      browser,
      f,
      partTwoSelectorsA,
      insertStatusRepo,
      test_name
    );
    partTwoA.executeTestCase();
  },
};
