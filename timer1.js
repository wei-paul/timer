// node timer1.js 10 3 5 15 9 

// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

//convert numbers to seconds

const alarm = function(delay) {
  delay = Number(delay) * 1000
  if (delay !== "" || delay !== 0 || delay == !isNaN) {
    
    setTimeout(() => {
      console.log('Beep')
    }, delay)
  }
}
const args = process.argv.slice(2);
  console.log(args);

for (let i = 0; i < args.length; i++) {
  alarm(args[i])
}
  