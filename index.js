const Before = require("./Before");
const After = require("./After");

function Main(cnf, deps) {
  // 这一行代码是为了避免eslint错误, 真实项目不需要保留
  console.warn("After hook: %s", Object.keys(deps));
  // TODO your code
}

Main.Deps = ["logger", "utils"];
Main.Before = Before;
Main.After = After;

module.exports = Main;
