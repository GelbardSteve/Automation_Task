//insert value to element/////////////////////////////////////
module.exports = (browser, data, insertNewRepo, screenShotsFail, testName) => {
  return new Promise((resolve) => {
    browser.pause(1000, () => {
      browser.getLocation(data[1], (res) => {
        browser.pause(500).moveToElement(data[1], res.value.x, res.value.y, (res) => {
          insertNewRepo("Move To Element", res.status == 0, data, testName);
          screenShotsFail(browser, res.status !== 0, data[0]);
          browser.pause(400, () => {
            resolve();
          });
        });
      });
    });
  });
};
/////////////////////////////////////////////////////////////
