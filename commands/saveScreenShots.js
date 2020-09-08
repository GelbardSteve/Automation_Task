const path = "../automations_project/reports/screenShots";
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
