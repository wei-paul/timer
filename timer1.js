const alarm = function(delay) {
  let parsed = parseInt(delay);
   if (isNaN(parsed)) {
    console.log("Please input a number")
    return;
  };
  delay = Number(delay) * 1000
    setTimeout(() => {
      console.log('Beep')
    }, delay)
};
const args = process.argv.slice(2);
  console.log(args);

for (let i = 0; i < args.length; i++) {
  alarm(args[i])
}