var result = 0;
// the process areguments start out at index 0 and will track all the files leaig up to that, if we want just the arguments supplied we start at index 2
for(var i=2; i<process.argv.length;i++){
  //loops through the  arguments supplied and converts it into a numvet and that does error handling if somethgin isnt a num
  result +=Number(process.argv[i])
}
console.log(result);
