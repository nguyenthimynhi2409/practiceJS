const fs = require("fs");

// Cách 2: Sử dụng map
function sleep(ms, index) {
  return new Promise((resolve) => setTimeout(resolve, ms * index));
}

function getPath(index, filename) {
  let path = __dirname + "\\folder\\" + index + "\\" + filename + ".txt";
  return path;
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const timeoutScheduled = Date.now();

const getContent = async () => {
  let sum = 0;
  list.map(async (i, index) => {
    await sleep(1000, index + 1).then(() => {
      return new Promise((resolve) => {
        const content1 = fs.readFileSync(getPath(i, "file1"), "utf-8");
        const content2 = fs.readFileSync(getPath(i, "file2"), "utf-8");
        resolve(Number(content1) + Number(content2));
        sum += Number(content1) + Number(content2);
        //console.log(sum);
        // const delay = Date.now() - timeoutScheduled;
        // console.log(delay);
      });
    });
  });
  sleep(1000, 10).then(() => console.log(sum));
};

getContent();