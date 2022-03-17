const fs = require("fs");

function getPath(index, filename) {
  let path = __dirname + "\\folder\\" + index + "\\" + filename + ".txt";
  return path;
}

async function getAllFile() {
  let promises = [];
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        const content1 = fs.readFileSync(
          getPath(i + 1, "file1"),
          "utf-8",
          (err, data) => {
            if (err) throw err;
          }
        );
        const content2 = fs.readFileSync(
          getPath(i + 1, "file2"),
          "utf-8",
          (err, data) => {
            if (err) throw err;
          }
        );
        resolve(Number(content1) + Number(content2));
        sum += Number(content1) + Number(content2);
      }, 1000)
    );
  }
  console.log(sum);
}

getAllFile();
