'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _swiper = require('../ons/internal/swiper');

var _swiper2 = _interopRequireDefault(_swiper);

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

/**
 * @element ons-carousel
 * @category carousel
 * @description
 *   [en]
 *     Carousel component. A carousel can be used to display several items in the same space.
 *
 *     The component supports displaying content both horizontally and vertically. The user can scroll through the items by dragging and it can also be controller programmatically.
 *   [/en]
 *   [ja][/ja]
 * @codepen xbbzOQ
 * @tutorial vanilla/Reference/carousel
 * @seealso ons-carousel-item
 *   [en]`<ons-carousel-item>` component[/en]
 *   [ja]ons-carousel-item?????????????????????[/ja]
 * @example
 * <ons-carousel style="width: 100%; height: 200px">
 *   <ons-carousel-item>
 *    ...
 *   </ons-carousel-item>
 *   <ons-carousel-item>
 *    ...
 *   </ons-carousel-item>
 * </ons-carousel>
 */
var CarouselElement = function (_BaseElement) {
  _inherits(CarouselElement, _BaseElement);

  /**
   * @event postchange
   * @description
   *   [en]Fired just after the current carousel item has changed.[/en]
   *   [ja]???????????????????????????????????????????????????????????????????????????????????????[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]???????????????????????????????????????[/ja]
   * @param {Object} event.carousel
   *   [en]Carousel object.[/en]
   *   [ja]???????????????????????????Carousel???????????????????????????[/ja]
   * @param {Number} event.activeIndex
   *   [en]Current active index.[/en]
   *   [ja]?????????????????????????????????????????????????????????????????????[/ja]
   * @param {Number} event.lastActiveIndex
   *   [en]Previous active index.[/en]
   *   [ja]????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @event refresh
   * @description
   *   [en]Fired when the carousel has been refreshed.[/en]
   *   [ja]?????????????????????????????????????????????????????????[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]???????????????????????????????????????[/ja]
   * @param {Object} event.carousel
   *   [en]Carousel object.[/en]
   *   [ja]???????????????????????????Carousel???????????????????????????[/ja]
   */

  /**
   * @event overscroll
   * @description
   *   [en]Fired when the carousel has been overscrolled.[/en]
   *   [ja]???????????????????????????????????????????????????????????????????????????[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]???????????????????????????????????????[/ja]
   * @param {Object} event.carousel
   *   [en]Fired when the carousel has been refreshed.[/en]
   *   [ja]?????????????????????????????????????????????????????????[/ja]
   * @param {Number} event.activeIndex
   *   [en]Current active index.[/en]
   *   [ja]?????????????????????????????????????????????????????????????????????[/ja]
   * @param {String} event.direction
   *   [en]Can be one of either "up", "down", "left" or "right".[/en]
   *   [ja]???????????????????????????????????????????????????????????????"up", "down", "left", "right"?????????????????????????????????????????????[/ja]
   * @param {Function} event.waitToReturn
   *   [en]Takes a <code>Promise</code> object as an argument. The carousel will not scroll back until the promise has been resolved or rejected.[/en]
   *   [ja]???????????????Promise??????????????????????????????????????????????????????????????????Promise?????????????????????resolve????????????reject???????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute direction
   * @type {String}
   * @description
   *   [en]The direction of the carousel. Can be either "horizontal" or "vertical". Default is "horizontal".[/en]
   *   [ja]?????????????????????????????????????????????"horizontal"???"vertical"????????????????????????"horizontal"??????????????????????????????[/ja]
   */

  /**
   * @attribute fullscreen
   * @description
   *   [en]If this attribute is set the carousel will cover the whole screen.[/en]
   *   [ja]???????????????????????????absolute????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute overscrollable
   * @description
   *   [en]If this attribute is set the carousel will be scrollable over the edge. It will bounce back when released.[/en]
   *   [ja]???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute centered
   * @description
   *   [en]If this attribute is set the carousel then the selected item will be in the center of the carousel instead of the beginning. Useful only when the items are smaller than the carousel. [/en]
   *   [ja]??????????????????????????????????????????ons-carousel-item????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute item-width
   * @type {String}
   * @description
   *    [en]ons-carousel-item's width. Only works when the direction is set to "horizontal".[/en]
   *    [ja]ons-carousel-item?????????????????????????????????????????????direction?????????"horizontal"????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute item-height
   * @type {String}
   * @description
   *   [en]ons-carousel-item's height. Only works when the direction is set to "vertical".[/en]
   *   [ja]ons-carousel-item????????????????????????????????????????????????direction?????????"vertical"????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute auto-scroll
   * @description
   *   [en]If this attribute is set the carousel will be automatically scrolled to the closest item border when released.[/en]
   *   [ja]???????????????????????????????????????carousel-item????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute auto-scroll-ratio
   * @type {Number}
   * @description
   *    [en]A number between 0.0 and 1.0 that specifies how much the user must drag the carousel in order for it to auto scroll to the next item.[/en]
   *    [ja]0.0??????1.0???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute swipeable
   * @description
   *   [en]If this attribute is set the carousel can be scrolled by drag or swipe.[/en]
   *   [ja]??????????????????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute disabled
   * @description
   *   [en]If this attribute is set the carousel is disabled.[/en]
   *   [ja]???????????????????????????drag???touch???swipe????????????????????????????????????[/ja]
   */

  /**
   * @attribute initial-index
   * @initonly
   * @default 0
   * @type {Number}
   * @description
   *   [en]Specify the index of the ons-carousel-item to show initially. Default is 0.[/en]
   *   [ja]?????????????????????ons-carousel-item???0???????????????????????????????????????????????????????????????????????? 0 ?????????[/ja]
   */

  /**
   * @attribute auto-refresh
   * @description
   *   [en]When this attribute is set the carousel will automatically refresh when the number of child nodes change.[/en]
   *   [ja]??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute animation
   * @type {String}
   * @description
   *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
   *   [ja][/ja]
   */

  /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *   [ja]???????????????????????????duration, timing, delay????????????????????????????????????????????????????????????{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
   */

  function CarouselElement() {
    _classCallCheck(this, CarouselElement);

    var _this = _possibleConstructorReturn(this, (CarouselElement.__proto__ || Object.getPrototypeOf(CarouselElement)).call(this));

    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });
    return _this;
  }

  _createClass(CarouselElement, [{
    key: '_compile',
    value: function _compile() {
      var target = this.children[0] && this.children[0].tagName !== 'ONS-CAROUSEL-ITEM' && this.children[0] || document.createElement('div');
      if (!target.parentNode) {
        while (this.firstChild) {
          target.appendChild(this.firstChild);
        }
        this.appendChild(target);
      }

      !this.children[1] && this.appendChild(document.createElement('div'));

      this.appendChild = this.appendChild.bind(target);
      this.insertBefore = this.insertBefore.bind(target);
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      if (!this._swiper) {
        this._swiper = new _swiper2.default({
          getElement: function getElement() {
            return _this2;
          },
          getInitialIndex: function getInitialIndex() {
            return _this2.getAttribute('initial-index');
          },
          getAutoScrollRatio: function getAutoScrollRatio() {
            return _this2.autoScrollRatio;
          },
          isVertical: function isVertical() {
            return _this2.vertical;
          },
          isOverScrollable: function isOverScrollable() {
            return _this2.overscrollable;
          },
          isCentered: function isCentered() {
            return _this2.centered;
          },
          isAutoScrollable: function isAutoScrollable() {
            return _this2.autoScroll;
          },
          itemSize: this.itemSize,
          overScrollHook: this._onOverScroll.bind(this),
          preChangeHook: this._onChange.bind(this, 'prechange'),
          postChangeHook: this._onChange.bind(this, 'postchange'),
          refreshHook: this._onRefresh.bind(this),
          scrollHook: function scrollHook() {
            return _this2._onSwipe && _this2._onSwipe.apply(_this2, arguments);
          }
        });

        (0, _contentReady2.default)(this, function () {
          return _this2._swiper.init({
            swipeable: _this2.hasAttribute('swipeable'),
            autoRefresh: _this2.hasAttribute('auto-refresh')
          });
        });
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this._swiper && this._swiper.initialized) {
        this._swiper.dispose();
        this._swiper = null;
      }
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      if (!this._swiper) {
        return;
      }

      switch (name) {
        case 'swipeable':
          this._swiper.updateSwipeable(this.hasAttribute('swipeable'));
          break;
        case 'auto-refresh':
          this._swiper.updateAutoRefresh(this.hasAttribute('auto-refresh'));
          break;
        case 'item-height':
          this.vertical && this._swiper.updateItemSize(this.itemSize);
          break;
        case 'item-width':
          this.vertical || this._swiper.updateItemSize(this.itemSize);
          break;
        case 'direction':
          this._swiper.refresh();
      }
    }
  }, {
    key: '_show',
    value: function _show() {
      this._swiper.show();
    }
  }, {
    key: '_hide',
    value: function _hide() {
      this._swiper.hide();
    }
  }, {
    key: '_onOverScroll',
    value: function _onOverScroll(_ref) {
      var direction = _ref.direction,
          killOverScroll = _ref.killOverScroll;

      var waitForAction = false;
      _util2.default.triggerElementEvent(this, 'overscroll', {
        carousel: this,
        activeIndex: this.getActiveIndex(),
        direction: direction,
        waitToReturn: function waitToReturn(promise) {
          waitForAction = true;
          promise.then(killOverScroll);
        }
      });

      return waitForAction;
    }
  }, {
    key: '_onChange',
    value: function _onChange(eventName, _ref2) {
      var activeIndex = _ref2.activeIndex,
          lastActiveIndex = _ref2.lastActiveIndex;

      _util2.default.triggerElementEvent(this, eventName, { carousel: this, activeIndex: activeIndex, lastActiveIndex: lastActiveIndex });
    }
  }, {
    key: '_onRefresh',
    value: function _onRefresh() {
      _util2.default.triggerElementEvent(this, 'refresh', { carousel: this });
    }

    /**
     * @method setActiveIndex
     * @signature setActiveIndex(index, [options])
     * @param {Number} index
     *   [en]The index that the carousel should be set to.[/en]
     *   [ja]carousel????????????????????????????????????????????????[/ja]
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be called after the animation is finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Specify the index of the `<ons-carousel-item>` to show.[/en]
     *   [ja]????????????ons-carousel-item???index?????????????????????[/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'setActiveIndex',
    value: function setActiveIndex(index) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options = _extends({
        animation: this.getAttribute('animation'),
        animationOptions: this.hasAttribute('animation-options') ? _util2.default.animationOptionsParse(this.getAttribute('animation-options')) : { duration: .3, timing: 'cubic-bezier(.4, .7, .5, 1)' }
      }, options);

      return this._swiper.setActiveIndex(index, options).then(function () {
        options.callback instanceof Function && options.callback(_this3);
        return Promise.resolve(_this3);
      });
    }

    /**
     * @method getActiveIndex
     * @signature getActiveIndex()
     * @return {Number}
     *   [en]The current carousel item index.[/en]
     *   [ja]???????????????????????????????????????????????????????????????????????????????????????[/ja]
     * @description
     *   [en]Returns the index of the currently visible `<ons-carousel-item>`.[/en]
     *   [ja]???????????????????????????ons-carousel-item?????????????????????????????????????????????[/ja]
     */

  }, {
    key: 'getActiveIndex',
    value: function getActiveIndex() {
      return this._swiper.getActiveIndex();
    }

    /**
     * @method next
     * @signature next([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja][/ja]
     * @description
     *   [en]Show next `<ons-carousel-item>`.[/en]
     *   [ja]??????ons-carousel-item?????????????????????[/ja]
     */

  }, {
    key: 'next',
    value: function next(options) {
      return this.setActiveIndex(this.getActiveIndex() + 1, options);
    }

    /**
     * @method prev
     * @signature prev([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja][/ja]
     * @description
     *   [en]Show previous `<ons-carousel-item>`.[/en]
     *   [ja]??????ons-carousel-item?????????????????????[/ja]
     */

  }, {
    key: 'prev',
    value: function prev(options) {
      return this.setActiveIndex(this.getActiveIndex() - 1, options);
    }

    /**
     * @method first
     * @signature first()
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this is set to `"none"`, the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja][/ja]
     * @description
     *   [en]Show first `<ons-carousel-item>`.[/en]
     *   [ja]?????????ons-carousel-item?????????????????????[/ja]
     */

  }, {
    key: 'first',
    value: function first(options) {
      return this.setActiveIndex(0, options);
    }

    /**
     * @method last
     * @signature last()
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja]Resolves to the carousel element[/ja]
     * @description
     *   [en]Show last ons-carousel item.[/en]
     *   [ja]?????????ons-carousel-item?????????????????????[/ja]
     */

  }, {
    key: 'last',
    value: function last(options) {
      this.setActiveIndex(Math.max(this.itemCount - 1, 0), options);
    }

    /**
     * @method refresh
     * @signature refresh()
     * @description
     *   [en]Update the layout of the carousel. Used when adding `<ons-carousel-items>` dynamically or to automatically adjust the size.[/en]
     *   [ja]????????????????????????????????????????????????????????????????????????ons-carousel-item??????????????????????????????ons-carousel?????????????????????????????????????????????????????????[/ja]
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      this._swiper.refresh();
    }

    /**
     * @property itemCount
     * @readonly
     * @type {Number}
     * @description
     *   [en]The number of carousel items.[/en]
     *   [ja]????????????????????????????????????[/ja]
     */

  }, {
    key: 'itemCount',
    get: function get() {
      return this._swiper.itemCount;
    }

    /**
     * @property swipeable
     * @type {Boolean}
     * @description
     *   [en]true if the carousel is swipeable.[/en]
     *   [ja]swipeable????????????true??????????????????[/ja]
     */

  }, {
    key: 'swipeable',
    get: function get() {
      return this.hasAttribute('swipeable');
    },
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'swipeable', value);
    }

    /**
     * @property onSwipe
     * @type {Function}
     * @description
     *   [en]Hook called whenever the user slides the carousel. It gets a decimal index and an animationOptions object as arguments.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'onSwipe',
    get: function get() {
      return this._onSwipe;
    },
    set: function set(value) {
      if (value && !(value instanceof Function)) {
        _util2.default.throw('"onSwipe" must be a function');
      }
      this._onSwipe = value;
    }

    /**
     * @property autoScroll
     * @type {Boolean}
     * @description
     *   [en]true if auto scroll is enabled.[/en]
     *   [ja]?????????????????????????????????????????????true??????????????????[/ja]
     */

  }, {
    key: 'autoScroll',
    get: function get() {
      return this.hasAttribute('auto-scroll');
    },
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'auto-scroll', value);
    }
  }, {
    key: 'vertical',
    get: function get() {
      return this.getAttribute('direction') === 'vertical';
    }
  }, {
    key: 'itemSize',
    get: function get() {
      var itemSizeAttr = (this.getAttribute('item-' + (this.vertical ? 'height' : 'width')) || '').trim();
      return itemSizeAttr.match(/^\d+(px|%)$/) ? itemSizeAttr : '100%';
    }

    /**
     * @property autoScrollRatio
     * @type {Number}
     * @description
     *   [en]The current auto scroll ratio. [/en]
     *   [ja]????????????????????????????????????ratio??????[/ja]
     */

  }, {
    key: 'autoScrollRatio',
    get: function get() {
      return parseFloat(this.getAttribute('auto-scroll-ratio'));
    },
    set: function set(ratio) {
      this.setAttribute('auto-scroll-ratio', ratio);
    }

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the carousel is disabled or not.[/en]
     *   [ja]?????????????????????????????????`true`???[/ja]
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this.hasAttribute('disabled');
    },
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'disabled', value);
    }

    /**
     * @property overscrollable
     * @type {Boolean}
     * @description
     *   [en]Whether the carousel is overscrollable or not.[/en]
     *   [ja]overscroll????????????true??????????????????[/ja]
     */

  }, {
    key: 'overscrollable',
    get: function get() {
      return this.hasAttribute('overscrollable');
    },
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'overscrollable', value);
    }

    /**
     * @property centered
     * @type {Boolean}
     * @description
     *   [en]Whether the carousel is centered or not.[/en]
     *   [ja]centered???????????????????????????true??????????????????[/ja]
     */

  }, {
    key: 'centered',
    get: function get() {
      return this.hasAttribute('centered');
    },
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'centered', value);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['swipeable', 'auto-refresh', 'direction', 'item-height', 'item-width'];
    }
  }, {
    key: 'events',
    get: function get() {
      return ['postchange', 'refresh', 'overscroll'];
    }
  }]);

  return CarouselElement;
}(_baseElement2.default);

exports.default = CarouselElement;


_elements2.default.Carousel = CarouselElement;
customElements.define('ons-carousel', CarouselElement);