
const args = process.argv;
let inputArray = args.slice(2);

const beep = function() {
  
  for (let el of inputArray) {
    if (!Number(el) || Number(el) < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write("beep\n");
    }, el * 1000);
  }
    
};
beep();
