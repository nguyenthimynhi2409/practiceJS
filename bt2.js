const fs = require("fs");

const timeoutScheduled = Date.now();

function getPath(index, filename) {
  let path = __dirname + "\\folder\\" + index + "\\" + filename + ".txt";
  return path;
}

async function getAllFile() {
  let promises = [];
  let sum=0;
  for (let i = 0; i < 10; i++) {
    const content1 = await new Promise((resolve) =>
      setTimeout(() => {
        fs.readFile(getPath(i + 1, "file1"), "utf-8", (err, data) => {
          if (err) reject(err);
          sum += parseInt(data);
          resolve(sum);
          // console.log(data);
        });
      }, 500)
    );
    const content2 = await new Promise((resolve) =>
      setTimeout(() => {
        fs.readFile(getPath(i + 1, "file2"), "utf-8", (err, data) => {
          if (err) reject(err);
          sum += parseInt(data);
          resolve(sum);
          // console.log(data);
        });
      }, 500)
    );
    promises.push(content1);
    promises.push(content2);
  }
  return Promise.all(promises).then((res) => {
    console.log(res[res.length-1]);
  });
}

getAllFile();