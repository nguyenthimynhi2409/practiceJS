function doA(ms) {
  let startDate = new Date().getTime();
  while (new Date().getTime() < startDate + ms) {}
}
function doB(ms) {
  return new Promise((resolve) => setTimeout(() => resolve()), ms);
}
const controller = async (mess) => {
  const timeoutScheduled = Date.now();
  doA(10000);
  await doB(1000);
  console.log(mess + String(new Date().getTime() - timeoutScheduled));
};

// Call 3 requests
controller("1 "); // 30s
controller("2 "); // 20s
controller("3 "); // 11s
