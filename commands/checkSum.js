module.exports = (browser, data, insertNewRepo, testName) => {
  return new Promise((resolve) => {
    browser.pause(5000, () => {
      browser.execute(
        function (selector, splitCondition, splitNumber, sliceNumber) {
  
          const arrayOfNodesChildren = []
          const numbers = [];
          const parentDiv = document.querySelector(selector).childNodes;
      
          for(let i = 0; i < parentDiv.length; i++) {
            arrayOfNodesChildren.push(parentDiv[i].innerText)
          }
  
          arrayOfNodesChildren.forEach(num => {
          if (num.includes("SOLD OUT")) {
              let deleteSoldOut = num.replace("SOLD OUT", "");
              numbers.push(parseFloat(deleteSoldOut.split(splitCondition)[splitNumber].slice(sliceNumber)));
              } else {
              numbers.push(parseFloat(num.split(splitCondition)[splitNumber]));
              }
          }); 
  
          return numbers
        }, [data[1], data[2], data[3], data[4]], async (res) => {
  
          const sum = await res.value.reduce((a, b) => a + b, 0);
  
          insertNewRepo(data[0] ,sum > data[5], data, testName)
          console.log(`Sum: ${sum}`);
          browser.pause(500, ()=> {
            resolve()
          })
        }
      );
    })
  });
};