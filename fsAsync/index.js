const fs = require("fs");

// fs.writeFile("read.txt", "Today is Awesome day", (err) => {
//   console.log("files is created");
//   console.log(err);
// });

// fs.appendFile("read.txt", " Hello bois", (err) => {
//   console.log("task completed");
// });

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
