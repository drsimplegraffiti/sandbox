const cron = require("node-cron");
let shell = require("shelljs");

cron.schedule("* * * * * *", () => {
  console.log("Scheduled");
  if (shell.exec("dir").code !== 0) {
    console.log("Something went wrong");
  }
});
