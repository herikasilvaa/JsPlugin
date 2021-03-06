'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _internal = require('../ons/internal');

var _internal2 = _interopRequireDefault(_internal);

var _modifierUtil = require('../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _pageLoader = require('../ons/page-loader');

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var rewritables = {
  /**
   * @param {Element} element
   * @param {Function} callback
   */
  ready: function ready(element, callback) {
    setImmediate(callback);
  }
};

/**
 * @element ons-splitter-content
 * @category menu
 * @description
 *  [en]
 *    The `<ons-splitter-content>` element is used as a child element of `<ons-splitter>`.
 *
 *    It contains the main content of the page while `<ons-splitter-side>` contains the list.
 *  [/en]
 *  [ja]ons-splitter-content????????????ons-splitter?????????????????????????????????????????????[/ja]
 * @codepen rOQOML
 * @tutorial vanilla/Reference/splitter
 * @guide fundamentals.html#managing-pages
 *  [en]Managing multiple pages.[/en]
 *  [ja]?????????????????????????????????[/ja]
 * @seealso ons-splitter
 *  [en]The `<ons-splitter>` component is the parent element.[/en]
 *  [ja]ons-splitter?????????????????????[/ja]
 * @seealso ons-splitter-side
 *  [en]The `<ons-splitter-side>` component contains the menu.[/en]
 *  [ja]ons-splitter-side?????????????????????[/ja]
 * @example
 * <ons-splitter>
 *   <ons-splitter-content>
 *     ...
 *   </ons-splitter-content>
 *
 *   <ons-splitter-side side="left" width="80%" collapse>
 *     ...
 *   </ons-splitter-side>
 * </ons-splitter>
 */

var SplitterContentElement = function (_BaseElement) {
  _inherits(SplitterContentElement, _BaseElement);

  /**
   * @attribute page
   * @type {String}
   * @description
   *   [en]
   *     The url of the content page. If this attribute is used the content will be loaded from a `<template>` tag or a remote file.
   *
   *     It is also possible to put `<ons-page>` element as a child of the element.
   *   [/en]
   *   [ja]ons-splitter-content?????????????????????????????????URL?????????????????????[/ja]
   */

  function SplitterContentElement() {
    _classCallCheck(this, SplitterContentElement);

    var _this = _possibleConstructorReturn(this, (SplitterContentElement.__proto__ || Object.getPrototypeOf(SplitterContentElement)).call(this));

    _this._page = null;
    _this._pageLoader = _pageLoader.defaultPageLoader;

    (0, _contentReady2.default)(_this, function () {
      rewritables.ready(_this, function () {
        var page = _this._getPageTarget();

        if (page) {
          _this.load(page);
        }
      });
    });
    return _this;
  }

  _createClass(SplitterContentElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (!_util2.default.match(this.parentNode, 'ons-splitter')) {
        _util2.default.throw('"ons-splitter-content" must have "ons-splitter" as parent');
      }
    }
  }, {
    key: '_getPageTarget',
    value: function _getPageTarget() {
      return this._page || this.getAttribute('page');
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {}

    /**
     * @property page
     * @type {HTMLElement}
     * @description
     *   [en]The page to load in the splitter content.[/en]
     *   [ja]????????????????????????????????????????????????????????????[/ja]
     */

  }, {
    key: 'load',


    /**
     * @method load
     * @signature load(page, [options])
     * @param {String} page, [options]
     *   [en]Page URL. Can be either an HTML document or an `<template>` id.[/en]
     *   [ja]page???URL??????`<template>`????????????????????????????????????id?????????????????????????????????[/ja]
     * @param {Object} [options]
     * @param {Function} [options.callback]
     * @description
     *   [en]Show the page specified in `page` in the content.[/en]
     *   [ja]????????????URL?????????????????????????????????????????????[/ja]
     * @return {Promise}
     *   [en]Resolves to the new `<ons-page>` element[/en]
     *   [ja]`<ons-page>`?????????????????????Promise????????????????????????????????????[/ja]
     */
    value: function load(page) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._page = page;
      var callback = options.callback || function () {};

      return new Promise(function (resolve) {
        var oldContent = _this2._content || null;

        _this2._pageLoader.load({ page: page, parent: _this2 }, function (pageElement) {
          if (oldContent) {
            _this2._pageLoader.unload(oldContent);
            oldContent = null;
          }

          setImmediate(function () {
            return _this2._show();
          });

          callback(pageElement);
          resolve(pageElement);
        });
      });
    }
  }, {
    key: '_show',
    value: function _show() {
      if (this._content) {
        this._content._show();
      }
    }
  }, {
    key: '_hide',
    value: function _hide() {
      if (this._content) {
        this._content._hide();
      }
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this._content) {
        this._pageLoader.unload(this._content);
      }
      this.remove();
    }
  }, {
    key: 'page',
    get: function get() {
      return this._page;
    }

    /**
     * @param {*} page
     */
    ,
    set: function set(page) {
      this._page = page;
    }
  }, {
    key: '_content',
    get: function get() {
      return this.children[0];
    }

    /**
     * @property pageLoader
     * @type {Function}
     * @description
     *   [en]Page element loaded in the splitter content.[/en]
     *   [ja]????????????????????????????????????????????????????????????[/ja]
     */

  }, {
    key: 'pageLoader',
    get: function get() {
      return this._pageLoader;
    },
    set: function set(loader) {
      if (!(loader instanceof _pageLoader.PageLoader)) {
        _util2.default.throwPageLoader();
      }
      this._pageLoader = loader;
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return [];
    }
  }, {
    key: 'rewritables',
    get: function get() {
      return rewritables;
    }
  }]);

  return SplitterContentElement;
}(_baseElement2.default);

exports.default = SplitterContentElement;


_elements2.default.SplitterContent = SplitterContentElement;
customElements.define('ons-splitter-content', SplitterContentElement);