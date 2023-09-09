const chalk = require("chalk");
var validator = require("validator");

// console.log(chalk.green.italic.inverse("hello world"));

const res = validator.isEmail("dhruingh2405@gail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
