class PartTwo {
  constructor(browser, f, selector, insertStatusRepo, testName) {
    this.browser = browser, 
    this.f = f;
    this.selector = selector,
    this.insertStatusRepo = insertStatusRepo,
    this.testName = testName;
  }
  openBrowser() {
    return new Promise(async (done) => {
      await this.f.openWindow(
        this.browser,
        this.selector.url,
        this.insertStatusRepo,
        this.f.saveScreenShots,
        this.testName
      );
      this.browser.pause(400, () => {
        done();
      });
    });
  }

  checkSumOfProduct() {
    return new Promise(async (done) => {
      await this.f.checkSum(
        this.browser,
        this.selector.checkSumOfProduct,
        this.insertStatusRepo,
        this.testName
      );
      this.browser.pause(400, () => {
        done();
      });
    });
  }

  moveToDOMElement() {
    return new Promise(async (done) => {
      await this.f.moveToElement(
        this.browser,
        this.selector.hoverOnNavElemnent,
        this.insertStatusRepo,
        this.f.saveScreenShots,
        this.testName
      );
      this.browser.pause(400, () => {
        done();
      });
    });
  }
}
exports.PartTwo = PartTwo;
