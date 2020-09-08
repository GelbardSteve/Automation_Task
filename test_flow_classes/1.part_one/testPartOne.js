class PartOne {
  constructor(browser, f, selector, insertStatusRepo, testName) {
    this.browser = browser;
    this.f = f;
    this.selector = selector;
    this.insertStatusRepo = insertStatusRepo;
    this.testName = testName;
  }
  test() {
    return new Promise(async (done) => {
      await this.f.openWindow(
        this.browser,
        this.selector.url,
        this.insertStatusRepo,
        this.f.saveScreenShots,
        this.testName
      );
      await this.f.clickOnElement(
        this.browser,
        this.selector.searchBox,
        this.insertStatusRepo,
        this.f.saveScreenShots,
        this.testName
      );
      await this.f.insertValue(
        this.browser,
        this.selector.searchBoxInput,
        this.selector.searchBoxValue[1],
        this.insertStatusRepo,
        this.f.saveScreenShots,
        this.testName
      );
      await this.f.clickOnElement(
        this.browser,
        this.selector.productPage,
        this.insertStatusRepo,
        this.f.saveScreenShots,
        this.testName
      );
      await this.f.logToConsole(
        this.browser, 
        this.selector.getPrice
      );
      await this.f.logToConsole(
        this.browser, 
        this.selector.getDescription
      );
      await this.f.verifyHigherNumber(
        this.browser,
        this.selector.getPrice,
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
exports.PartOne = PartOne;
