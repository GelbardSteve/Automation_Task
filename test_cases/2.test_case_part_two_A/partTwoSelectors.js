module.exports = {
  partTwoSelectorsA: {
    url: ["Login URL", "https://skinnyties.com/"],

    hoverOnNavElemnent: [
      "Hover On Nav Elemnent",
      "#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(5) > a",
    ],

    clickOnNavChlidElemnent: [
      "Click On Nav Chlid Elemnent",
      "#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(5) > div > ul > li:nth-child(3) > a",
    ],

    checkSumOfProduct: [
      "Check Sum Of Product Size larger than 4",
      "#shopify-section-collection-template > section > div.CollectionMain > div.CollectionInner > div.CollectionInner__Products > div > div",
      '"',
      0,
      1,
      4,
      "#shopify-section-collection-template > section > div.CollectionMain > div.CollectionInner > div.CollectionInner__Products > div > div > div:nth-child(1)"
    ],
  },
};
