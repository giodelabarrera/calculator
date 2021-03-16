const fs = require("fs");
const { spawnSync } = require("./utils");

if (fs.existsSync("./dist")) spawnSync("rm -r ./dist");
spawnSync("mkdir -p ./dist");

spawnSync("cp -r ./src/* ./dist");
spawnSync("rm -r ./dist/__tests__");
