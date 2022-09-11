const { format, createLogger, transports } = require("winston");
const { combine, timestamp, label, printf, prettyPrint } = format;
const CATEGORY = "winston custom format";

const timezoned = () => {
  return new Date().getTime()
};

const logger = createLogger({
  level: "error",
  format: combine(
    timestamp({
      format: timezoned
    }),
    prettyPrint(),
    format.colorize(),
      ),
  transports: [new transports.Console()],
});

module.exports = logger;
