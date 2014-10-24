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
   * @param  {[type]} key  [description]
   * @param  {[type]} value [description]
   * @param  {Function} f(err, value)
   * @return {[type]}       [description]
   */
  read: function (key, f) {},

  /**
   * [write description]
   * @param  {[type]} key  [description]
   * @param  {[type]} value [description]
   * @param  {Function} f(err)
   * @return {[type]}       [description]
   */
  write: function (key, value, f) {}
});