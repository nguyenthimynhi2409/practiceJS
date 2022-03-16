const fs = require("fs");

const timeoutScheduled = Date.now();

function getPath(index, filename) {
  let path = __dirname + "\\folder\\" + index + "\\" + filename + ".txt";
  return path;
}

async function getAllFile() {
  let promises = [];
  for (let i = 0; i < 10; i++) {
    const content1 = await new Promise((resolve) =>
      setTimeout(() => {
        fs.readFile(getPath(i + 1, "file1"), "utf-8", (err, data) => {
          if (err) reject(err);
          resolve(data);
          // console.log(data);
        });
      }, 500)
    );
    const content2 = await new Promise((resolve) =>
      setTimeout(() => {
        fs.readFile(getPath(i + 1, "file2"), "utf-8", (err, data) => {
          if (err) reject(err);
          resolve(data);
          // console.log(data);
        });
      }, 500)
    );
    promises.push(content1);
    promises.push(content2);
  }
  return Promise.all(promises);
}

function getResult() {
  let sum = 0;
  getAllFile().then((res) => {
    res.forEach((result) => (sum += parseInt(result)));
    const delay = Date.now() - timeoutScheduled;
    console.log(delay);
    console.log(sum);
  });
}

getResult();