'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _autostyle = require('../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _modifierUtil = require('../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

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

var scheme = {
  '': 'select-* select--*',
  '.select-input': 'select-input--*'
};

var defaultClassName = 'select';

var INPUT_ATTRIBUTES = ['autofocus', 'disabled', 'form', 'multiple', 'name', 'required', 'size'];

/**
 * @element ons-select
 * @category form
 * @modifier material
 *  [en]Displays a Material Design select input.[/en]
 *  [ja][/ja]
 * @modifier underbar
 *  [en]Displays a horizontal line underneath a select input.[/en]
 *  [ja][/ja]
 * @description
 *   [en]
 *     Select component. If you want to place a select with an ID of `my-id` on a page, use `<ons-select select-id="my-id">`.
 *
 *     The component will automatically display as a Material Design select on Android.
 *
 *     Most attributes that can be used for a normal `<select>` element can also be used on the `<ons-select>` element.
 *   [/en]
 *   [ja]?????????????????????????????????????????????????????????????????????`select` ?????????????????????????????????????????? `ons-select` ?????????????????????????????????[/ja]
 * @codepen hLayx
 * @tutorial vanilla/Reference/select
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier??????????????????[/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @example
 * <ons-select>
 *   <option value="1">1</option>
 *   <option value="2">2nd</option>
 *   <option value="3">3rd option</option>
 * </ons-select>
 */

var SelectElement = function (_BaseElement) {
  _inherits(SelectElement, _BaseElement);

  /**
   * @attribute autofocus
   * @type {Boolean}
   * @default false
   * @description
   *  [en]Element automatically gains focus on page load.[/en]
   *  [ja]??????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute disabled
   * @type {Boolean}
   * @default false
   * @description
   *   [en]Specify if select input should be disabled.[/en]
   *   [ja]???????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute form
   * @type {String}
   * @description
   *   [en]Associate a select element to an existing form on the page, even if not nested.[/en]
   *   [ja]???????????????????????????????????????????????? `form` ?????????????????????????????????????????????????????? `form` ??????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute multiple
   * @type {Boolean}
   * @default false
   * @description
   *  [en]If this attribute is defined, multiple options can be selected at once.[/en]
   *  [ja]????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute name
   * @type {String}
   * @description
   *   [en]Name the select element, useful for instance if it is part of a form.[/en]
   *   [ja]?????????????????????????????????????????????????????????????????? `form` ?????????????????????????????????[/ja]
   */

  /**
   * @attribute required
   * @type {Boolean}
   * @description
   *   [en]Make the select input required for submitting the form it is part of.[/en]
   *   [ja]??????????????????????????????????????????????????????????????????????????????????????? `form` ?????????????????????????????????[/ja]
   */

  /**
   * @attribute select-id
   * @type {String}
   * @description
   *   [en]ID given to the inner select, useful for dynamic manipulation.[/en]
   *   [ja]???????????????????????????????????????????????? select ?????????????????? ID ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute size
   * @type {Number}
   * @default 1
   * @description
   *   [en]How many options are displayed; if there are more than the size then a scroll appears to navigate them.[/en]
   *   [ja]???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  function SelectElement() {
    _classCallCheck(this, SelectElement);

    var _this = _possibleConstructorReturn(this, (SelectElement.__proto__ || Object.getPrototypeOf(SelectElement)).call(this));

    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });

    _this._deriveGetters();
    return _this;
  }

  _createClass(SelectElement, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      var _this2 = this;

      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, defaultClassName, scheme);
          break;
        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, scheme);
          break;
      }

      if (INPUT_ATTRIBUTES.indexOf(name) >= 0) {
        (0, _contentReady2.default)(this, function () {
          return _this2._updateBoundAttributes();
        });
      }
    }
  }, {
    key: '_updateBoundAttributes',
    value: function _updateBoundAttributes() {
      var _this3 = this;

      INPUT_ATTRIBUTES.forEach(function (attr) {
        if (_this3.hasAttribute(attr)) {
          _this3._select.setAttribute(attr, _this3.getAttribute(attr));
        } else {
          _this3._select.removeAttribute(attr);
        }
      });
    }

    /**
     * @property length
     * @description
     *   [en]Number of options in the select box.[/en]
     *   [ja]????????????????????????????????????????????????????????????????????????????????? `select` ??????[/ja]
     */

    /**
     * @property options
     * @description
     *   [en]Several options for handling the select DOM object.[/en]
     *   [ja]????????????????????????????????????????????? `option` ?????????????????????????????????[/ja]
     */

    /**
     * @property selectedIndex
     * @description
     *   [en]Index of the currently selected option.[/en]
     *   [ja]???????????????????????????????????????????????????????????????????????????[/ja]
     */

    /**
     * @property value
     * @description
     *   [en]Value of the currently selected option.[/en]
     *   [ja]????????????????????????????????????????????????????????????[/ja]
     */

  }, {
    key: '_compile',
    value: function _compile() {
      _autostyle2.default.prepare(this);

      this.classList.add(defaultClassName);
      var sel = this._select || document.createElement('select');
      if (!sel.id && this.hasAttribute('select-id')) {
        sel.id = this.getAttribute('select-id');
      }
      sel.classList.add('select-input');
      if (!this._select) {
        _util2.default.arrayFrom(this.childNodes).forEach(function (element) {
          return sel.appendChild(element);
        });
        this.appendChild(sel);
      }

      _modifierUtil2.default.initModifier(this, scheme);
    }
  }, {
    key: '_deriveGetters',
    value: function _deriveGetters() {
      var _this4 = this;

      ['disabled', 'length', 'multiple', 'name', 'options', 'selectedIndex', 'size', 'value', 'form', 'type'].forEach(function (key) {
        Object.defineProperty(_this4, key, {
          configurable: true,
          enumerable: true,
          get: function get() {
            return _this4._select[key];
          },
          set: ['form', 'type'].indexOf(key) === -1 ? function (value) {
            return (0, _contentReady2.default)(_this4, function () {
              return _this4._select[key] = value;
            });
          } : undefined
        });
      });
    }
  }, {
    key: 'add',
    value: function add(option) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._select.add(option, index);
    }
  }, {
    key: 'remove',
    value: function remove(index) {
      this._select.remove(index);
    }
  }, {
    key: '_select',
    get: function get() {
      return this.querySelector('select');
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'class'].concat(INPUT_ATTRIBUTES);
    }
  }]);

  return SelectElement;
}(_baseElement2.default);

exports.default = SelectElement;


_elements2.default.Select = SelectElement;
customElements.define('ons-select', SelectElement);