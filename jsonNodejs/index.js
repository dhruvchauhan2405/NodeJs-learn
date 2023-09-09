const fs = require("fs");
const bioData = {
  name: "Dhruv",
  age: 21,
  channel: "Dhruv Singh Chauhan",
};

// console.log(bioData.channel);

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  const objData = JSON.parse(data);
  console.log(objData);
});

// console.log(objData);
