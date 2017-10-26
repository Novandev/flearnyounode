//sentinel variable for the for loop set to zero so itmes may be added to it
var nodeex = 0;
//for loop tp loop through the aruments passed 
for (i = 2; i < process.argv.length; i++) {
  //denotes that the input will be converted to numbers then proccesed, then added to nodeex
  nodeex += Number(process.argv[i]);
}

// logs the example out to the console
console.log(nodeex);
