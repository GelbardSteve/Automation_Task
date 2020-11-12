const { partOneSelectors } = require("./partOneSelectors");
const f = require("../../exportsFunction");
const { PartOne } = require("../../test_flow_classes/1.part_one/testPartOne");

const reports = require("../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

const deleteFolder = "../checkSumOfSizeAndCostAutomation/reports/screenShots";

module.exports = {
  testPartOne: async function (browser, testNum) {
    const test_name = `${testNum}. testPartOne`;
    f.deleteFromFolder(deleteFolder);
    createNewRepo(test_name);

    const startTestPartOne = new PartOne(
      browser,
      f,
      partOneSelectors,
      insertStatusRepo,
      test_name
    );
    await startTestPartOne.test();
  },
};
