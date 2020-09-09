const path = "../Automation_Task/reports/screenShots";
module.exports = (browser, res, cell) => {
  return new Promise(resolve => {
    if (res) {
      browser.saveScreenshot(
        `${path}/${cell}.png`
      );
      browser.pause(300, () => {
        resolve();
      });
    }
  });
};
