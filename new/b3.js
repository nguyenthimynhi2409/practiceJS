function doA(ms) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + ms);
}
async function doB(ms) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + ms);
}
const controller = async (mess) => {
  const timeoutScheduled = Date.now();
  
  queueMicrotask(() => {
    doA(10000);
  });
  await doB(1000);
  console.log(mess + String(new Date().getTime() - timeoutScheduled));
};

controller("1 "); // 13s
controller("2 "); // 22s
controller("3 "); // 31s