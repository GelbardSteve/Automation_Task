//get text/////////////////////////////////////
module.exports = (
  browser,
  getText,
  insertNewRepo,
  screenShotsFail,
  testName
) => {
  return new Promise((resolve) => {
    browser
      .waitForElementVisible(getText[1], 10000, false)
      .getText(getText[1], async (res) => {
        //Check with assertion of nightwatch
        await browser.verify.ok(
          parseInt(res.value.slice(1)) > parseInt(getText[2].slice(1))
        );
        insertNewRepo(
          getText[0],
          res.status == 0 &&
            parseInt(res.value.slice(1)) > parseInt(getText[2].slice(1)),
          `${getText[0]} | ${getText[1]}`,
          testName
        );
        screenShotsFail(
          browser,
          res.value.slice(1) > getText[2].slice(1),
          getText[0]
        );
        browser.pause(300, () => {
          resolve();
        });
      });
  });
};
/////////////////////////////////////////////////////////////
