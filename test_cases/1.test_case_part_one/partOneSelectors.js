module.exports = {
  partOneSelectors: {
    url: [
      "Login URL", 
      "https://skinnyties.com/"
    ],

    searchBox: [
      "Search Box", 
      "#section-header > div > div:nth-child(3) > nav > ul > li:nth-child(1) > a"
    ],
    searchBoxInput: [
      "Search Box", 
      "#Search > div > div.Search__SearchBar > form > input.Search__Input.Heading"
    ],
    searchBoxValue: [
      "Search Box Value", 
      "BLACK POPLIN SKINNY TIE"
    ],

    productPage: [
      "Product Page", 
      "#Search > div > div.Search__Results > div > div.Segment__Content > div > div > div > div > a"
    ],

    getPrice: [
      "Check If Price Larger Than $10", 
      "#shopify-section-product-template > section > div.Product__Wrapper > div.Product__InfoWrapper > div > div > div > div.ProductMeta__PriceList.Heading > span",
      "$10"
    ],
    getDescription: [
      "Check If Price Larger Than $10", 
      "#shopify-section-product-template > section > div.Product__Wrapper > div.Product__InfoWrapper > div > div > div > div.ProductMeta__Description > div.Rte",
    ],
  },
};
