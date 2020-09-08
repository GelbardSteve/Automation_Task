//get text/////////////////////////////////////
module.exports = (browser, getText) => {
  return new Promise((resolve) => {
    browser
      .waitForElementVisible(getText[1], 10000, false)
      .getText(getText[1], async (res) => {
        console.log(
          `
**
${res.value}
**
  `
        );
        browser.pause(300, () => {
          resolve();
        });
      });
  });
};
/////////////////////////////////////////////////////////////
