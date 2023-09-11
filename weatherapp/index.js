const http = require("http");
const fs = require("fs");
const axios = require("axios");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempval, orgval) => {
  let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
  temperature = temperature.replace("{%location%}", orgval.name);
  temperature = temperature.replace("{%country%}", orgval.sys.country);
  return temperature;
};
const server = http.createServer(async (req, res) => {
  if (req.url == "/") {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=3613d2ed74df892dc8669a15d104286b"
    );
    // console.log(response.data);
    const stream = response.data;

    // stream.on("data", (chunk) => {
    // const objdata = JSON.parse(stream);
    const arrdata = [response.data];
    // console.log(arrdata);
    const realTimeData = arrdata
      .map((val) => replaceVal(homeFile, val))
      .join("");
    console.log(realTimeData);
    return res.write(realTimeData);

    // });

    // stream.on("end", (err) => {
    //   console.log("stream done");
    //   if (err) return console.log("connection closed due to errors", err);
    //   res.end();
    // });
    // requests("")
    //   .on("data", (chunk) => {
    //     // res.end();
    //     // console.log(realTimeData);
    //   })
    //   .on("end", (err) => {
    //
    //     res.end();
    //   });
  }
});

server.listen(8000, "127.0.0.1");
