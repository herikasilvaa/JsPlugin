'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

var generateId = function () {
  var i = 0;
  return function () {
    return i++;
  };
}();

/**
 * Door locking system.
 *
 * @param {Object} [options]
 * @param {Function} [options.log]
 */

var DoorLock = function () {
  function DoorLock() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DoorLock);

    this._lockList = [];
    this._waitList = [];
    this._log = options.log || function () {};
  }

  /**
   * Register a lock.
   *
   * @return {Function} Callback for unlocking.
   */


  _createClass(DoorLock, [{
    key: 'lock',
    value: function lock() {
      var _this = this;

      var unlock = function unlock() {
        _this._unlock(unlock);
      };
      unlock.id = generateId();
      this._lockList.push(unlock);
      this._log('lock: ' + unlock.id);

      return unlock;
    }
  }, {
    key: '_unlock',
    value: function _unlock(fn) {
      var index = this._lockList.indexOf(fn);
      if (index === -1) {
        throw new Error('This function is not registered in the lock list.');
      }

      this._lockList.splice(index, 1);
      this._log('unlock: ' + fn.id);

      this._tryToFreeWaitList();
    }
  }, {
    key: '_tryToFreeWaitList',
    value: function _tryToFreeWaitList() {
      while (!this.isLocked() && this._waitList.length > 0) {
        this._waitList.shift()();
      }
    }

    /**
     * Register a callback for waiting unlocked door.
     *
     * @params {Function} callback Callback on unlocking the door completely.
     */

  }, {
    key: 'waitUnlock',
    value: function waitUnlock(callback) {
      if (!(callback instanceof Function)) {
        throw new Error('The callback param must be a function.');
      }

      if (this.isLocked()) {
        this._waitList.push(callback);
      } else {
        callback();
      }
    }

    /**
     * @return {Boolean}
     */

  }, {
    key: 'isLocked',
    value: function isLocked() {
      return this._lockList.length > 0;
    }
  }]);

  return DoorLock;
}();

exports.default = DoorLock;