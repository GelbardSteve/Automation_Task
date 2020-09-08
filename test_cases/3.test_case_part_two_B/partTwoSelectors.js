module.exports = {
    partTwoSelectorsB: {
      url: ["Login URL", "https://skinnyties.com/"],
  
      ClickOnNavElemnent: [
        "Click On Nav Elemnent",
        "#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(6) > a",
      ],
  
      hoverOnNavElemnent: [
        "Scroll Down",
        "#shopify-section-collection-template > section > div.CollectionMain > div.CollectionInner > div.CollectionInner__Products > div > div > div:nth-child(14)"
      ],

      checkSumOfProduct: [
        "Check Sum Of Product Size larger than $20",
        "#shopify-section-collection-template > section > div.CollectionMain > div.CollectionInner > div.CollectionInner__Products > div > div",
        '$',
        1,
        0,
        20,
      ],
    },
  };
  