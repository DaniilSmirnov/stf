var syrup = require('@devicefarmer/stf-syrup')
var deviceClient = require('@devicefarmer/adbkit').DeviceClient

var logger = require('../../../util/logger')

module.exports = syrup.serial()
  .dependency(require('./adb'))
  .define(function(options, adb) {
    var log = logger.createLogger('device:support:properties')

    function load() {
      log.info('Loading properties')
      var client = deviceClient(adb, options.serial)
      return client.getProperties()
        .timeout(10000)
    }

    return load()
  })
