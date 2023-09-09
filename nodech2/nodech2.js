const fs = require("fs");

// fs.mkdir("Dhruv", (err) => {
//   console.log("Task completed");
// });

// fs.writeFile(
//   "Dhruv/bio.txt",
//   "Hello bois i will get a good placement",
//   (err) => {
//     console.log("File created");
//   }
// );

// fs.appendFile("Dhruv/bio.txt", " Sahi kaha na boiss", (err) => {
//   console.log("Ho gaya task");
// });

// fs.readFile("Dhruv/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rename("Dhruv/bio.txt", "Dhruv/mybio.txt", (err) => {
//   console.log("file renamed");
// });

// fs.unlink("Dhruv/mybio.txt", (err) => {
//   console.log("file deleted");
// });

fs.rmdir("Dhruv", (err) => {
  console.log("folder deleted");
});
