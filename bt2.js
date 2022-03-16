const fs = require("fs");

function getPath(index, filename) {
  let path = __dirname + "\\folder\\" + index + "\\" + filename + ".txt";
  return path;
}

async function getAllFile() {
  let promises = [];
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const content1 = await new Promise((resolve) =>
      setTimeout(() => {
        fs.readFile(getPath(i + 1, "file1"), "utf-8", (err, data) => {
          if (err) reject(err);
          resolve(parseInt(data));
        });
      }, 500)
    );
    const content2 = await new Promise((resolve) =>
      setTimeout(() => {
        fs.readFile(getPath(i + 1, "file2"), "utf-8", (err, data) => {
          if (err) reject(err);
          resolve(parseInt(data));
        });
      }, 500)
    );
    let content = content1 + content2;
    promises.push(content);
    Promise.all(promises).then((res) => {
      sum += res.pop();
    });
  }
  setTimeout(()=>console.log(sum),0);
}

getAllFile();