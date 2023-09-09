const path = require("path");

// console.log(path.dirname("C:/Users/Dhruv/Documents/NodeJs/PathModule/path.js"));
// console.log(path.extname("C:/Users/Dhruv/Documents/NodeJs/PathModule/path.js"));
// console.log(
//   path.basename("C:/Users/Dhruv/Documents/NodeJs/PathModule/path.js")
// );

const myPath = path.parse("C:/Users/Dhruv/Documents/NodeJs/PathModule/path.js");
console.log(myPath.name);
