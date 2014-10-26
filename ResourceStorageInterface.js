'use strict';

var Interface = require('spid-interface');

module.exports = Interface('ResourceStorageInterface', {
  /**
   * [init description]
   * @param  {Configuration} configuration
   * @param  {Function} f(err)
   */
  init: function (configuration, f) {},

  /**
   * [dispose description]
   * @param  {Function} f(err)
   */
  dispose: function (f) {},

  /**
   * [read description]
   * @param  {[type]} url  [description]
   * @param  {[type]} headers either {'content-encoding': 'gzip'} or {}
   * @param  {Function} f(err, value)
   * @return {[type]}       [description]
   */
  read: function (url, headers, f) {},

  /**
   * [write description]
   * @param  {[type]} url  [description]
   * @param  {[type]} headers  either {'content-encoding': 'gzip'} or {}
   * @param  {[type]} value [description]
   * @param  {Function} f(err)
   * @return {[type]}       [description]
   */
  write: function (url, headers, value, f) {}
});
