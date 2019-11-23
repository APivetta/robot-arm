const debug = require('debug');

module.exports = (moduleName) => ({
  error: debug(`robot-arm:error:${moduleName}`),
  warn: debug(`robot-arm:warn:${moduleName}`),
  info: debug(`robot-arm:info:${moduleName}`),
  debug: debug(`robot-arm:debug:${moduleName}`)
});
