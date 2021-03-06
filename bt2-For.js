const fs = require("fs");

// Cách 1: Sử dụng for
function getPath(index, filename) {
  let path = __dirname + "\\folder\\" + index + "\\" + filename + ".txt";
  return path;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getAllFile() {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    await sleep(1000).then(() => {
      return new Promise((resolve) => {
        const content1 = fs.readFileSync(getPath(i + 1, "file1"), "utf-8");
        const content2 = fs.readFileSync(getPath(i + 1, "file2"), "utf-8");
        resolve(Number(content1) + Number(content2));
        sum += Number(content1) + Number(content2);
      });
    });
  }
  console.log(sum);
}

getAllFile();