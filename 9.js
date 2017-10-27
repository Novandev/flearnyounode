//rewuires the http module
const http = require('http')
//imports the bl module
const bl = require('bl')
//sets an empty array
const results = []
// sentinel value fot counting
let count = 0
// function to print the results of the piping
function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}
// gettter function for the urls that wil be proccesed
function httpGet (index) {
  // checks the command line input and makes a call back based on response
  http.get(process.argv[2 + index], function (response) {
    // starts piping the data to the the results ,
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      // data is converted to a string  which is placed in the results array
      results[index] = data.toString()
      // after every interation the count is incremented
      count++
      // after the countis done the printResultsmethod is called to print the results of the loop
      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
