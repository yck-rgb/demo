const fs = require("fs-extra");
const dir = "./docs";
const sourceDir="./.vitepress/dist"

fs.ensureDirSync(dir);

fs.copySync(sourceDir, dir,{overwrite: true});
console.log("复制成功");
