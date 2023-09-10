const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("your name is Dhruv");
// });
// event.on("sayMyName", () => {
//   console.log("your name is Singh");
// });
// event.on("sayMyName", () => {
//   console.log("your name is Chauhan");
// });

// event.emit("sayMyName");

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");
