
var args = process.argv.slice(2);
const result = args.filter(args => args > 0);
for (let timer of result) {
  setTimeout(() => {
    process.stdout.write(`it peep at ${timer} seconds`);
    console.log('\n');
  }, timer * 1000) 
}

