var nodeex = 0;
for (i = 2; i < process.argv.length; i++) {
  nodeex += Number(process.argv[i]);
}


console.log(nodeex);
