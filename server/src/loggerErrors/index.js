const fs = require("fs");
const util = require("util");
const moment = require("moment");



let timeout = null;
let allObjects = [];
let ownTimestamp = new Date().getTime();
let logPath = __dirname + "/server.log";
let timeBackUp = "4:41:00"

function addTimestampLog () {
  let arr = [];
  allObjects.forEach((el) => {
    let { message, code, time } = el;
    arr.push({ message, code, time });
  });
  fs.writeFile(
    __dirname + `/${ownTimestamp}` + ".log",
    JSON.stringify(arr),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  allObjects = [];
}


export const logTimeout = () => {
  let reg = /\b\d{13}.log\b/m;

  if (!timeout) {
    timeout = setInterval(() => {
      let now = moment();
      if (now.format("h:mm:ss") === timeBackUp) {
        fs.readdir(__dirname, (err, elems) => {
          if (elems.find((el) => {return reg.test(el) === true})) {
            const timestampLog = elems.filter((item) => reg.test(item));

            fs.unlink(__dirname + `/${timestampLog}`, function () {
              console.log("file deleted " + timestampLog);
            });
           
            addTimestampLog()
           

            fs.truncate(logPath, 0, function () {
                console.log("file deleted");
            });
            clearInterval(timeout);
          } else {
            fs.truncate(logPath, 0, function () {
              console.log("file deleted");
          });
            addTimestampLog()
            clearInterval(timeout);
          }
        });
      }
    }, 1000);
  } else return;
};

export const addLogToFile = (err) => {
  const logger = fs.createWriteStream(logPath, { flags: "a" });
  const subObj = {
    message: err.message,
    time: new Date().getTime(),
    code: err.code,
    stackTrace: { stack: err.stack },
  };
  allObjects.push(subObj);
  logger.write(util.format(subObj));
  logger.end();
};
