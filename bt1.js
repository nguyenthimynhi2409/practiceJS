const timeoutScheduled = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(delay);
  console.log("Hello!!!");
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;

// Add second to timer
while (endDate < startDate + 4000) {
  endDate = new Date().getTime();
}
