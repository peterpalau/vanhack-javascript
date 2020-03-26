/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * This file contains the logic for the VanHack events-like page exercise.
 * 
 * Important: Do not use any of the functions inside this folder for
 * production or big programs because this was implemented only to solve
 * a small exercise for the VanHack recruiting program.
 */
var API_ENDPOINT = 'https://vanhack-events.now.sh';
var EVENTS_API_ENDPOINT = "".concat(API_ENDPOINT, "/events");
/**---------------------------------------------------------------
 * Utilities and functions to be used inside this program,
 * for example to work with XMLHttpRequest.
 * --------------------------------------------------------------- */

/**
 * Convert the given object to an array of key/valyes
 * 
 * @param {object} o 
 */

var objToArray = function objToArray(o) {
  return Object.keys(o).map(function (k) {
    return {
      key: k,
      value: o[k]
    };
  });
};
/**
 * Uppercase the first letter of the string
 * 
 * @param {string} str 
 */


var ucfirst = function ucfirst(str) {
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};
/**
 * Simple function to format dates for the given format
 * 
 * @param {Date} d 
 * @param {object} f 
 */


var formatDate = function formatDate(d) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  return d.toLocaleString('en-US', f);
};
/**
 * Makes a simple ajax XMLHttpRequest request
 * 
 * @group utilities
 * @param {string} endpoint 
 * @param {object} args 
 */


var ajaxRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(endpoint) {
    var args,
        options,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            args = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _objectSpread({
              headers: {
                // Set utf-8 as the standar encoding format to make
                // request, because I am using this encoding in the
                // json-server with dummy data
                'Content-Type': 'application/json; charset=utf-8'
              }
            }, args);
            _context.next = 4;
            return fetch(endpoint, options);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ajaxRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Simple XMLHttpRequest get request
 * @param {string} url 
 */


var get = function get(url) {
  return ajaxRequest(url, {
    method: 'GET'
  });
};
/**
 * Adds the given class to the object
 * 
 * @param {object} el 
 * @param {array|string} className 
 */


var addClass = function addClass(el, className) {
  if (typeof className === 'string') {
    className = [className];
  }

  className.forEach(function (c) {
    if (classExists(el, c) === false) {
      el.className += " ".concat(c);
    }
  });
};
/**
 * Removes the given class from the element
 * 
 * @param {object} el 
 * @param {string} className 
 */


var removeClass = function removeClass(el, className) {
  if (classExists(el, className)) {
    el.className = Array.prototype.slice.call(el.classList).filter(function (c) {
      return c !== className;
    }).join(' ');
  }
};
/**
 * Check if the given element has the given class
 * 
 * @param {object} el 
 * @param {string} className 
 */


var classExists = function classExists(el, className) {
  return Array.prototype.slice.call(el.classList).includes(className);
};
/**
 * Adds a property=value to the given element
 * 
 * @param {object} el 
 * @param {string} prop 
 * @param {bool|string} value 
 */


var addProperty = function addProperty(el, prop, value) {
  return el.setAttribute(prop, value);
};
/**
 * Removes a property from the given element
 * @param {object} el 
 * @param {string} prop 
 */


var removeProperty = function removeProperty(el, prop) {
  return el.removeAttribute(prop);
};
/**---------------------------------------------------------------
 * Simple template renderer class
 * --------------------------------------------------------------- */


var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    _classCallCheck(this, Renderer);

    this.supported = 'content' in document.createElement('template');
  }
  /**
   * Return the element with the selector from the document
   * @param {string} selector 
   */


  _createClass(Renderer, [{
    key: "getElement",
    value: function getElement(selector) {
      var clone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.supported === false) {
        // TODO: implement another way to get html content from the document
        throw new Error('HTML template element is not supported in this browser.');
      }

      var el = document.querySelector(selector);

      if (el === null) {
        throw new Error("The element '".concat(selector, "' do not exists in this document."));
      }

      if (clone) {
        var c = el.cloneNode(true);

        if (c === null) {
          throw new Error("An error ocurred while clonning the teplate ".concat(id));
        }

        return c;
      }

      return el;
    }
    /**
     * Return an element by it's id
     * 
     * @param {string} id 
     */

  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return this.getElement("#".concat(id));
    }
    /**
     * Return a html template
     * @param {string} id 
     */

  }, {
    key: "getTemplate",
    value: function getTemplate(id) {
      var tmpl = this.getElementById(id);

      if (tmpl === null || tmpl.content === null) {
        throw new Error("No template found for ".concat(id));
      }

      return tmpl.content.children[0].cloneNode(true);
    }
    /**
     * Render the specified string
     * 
     * @param {string} tmpl The string template
     * @param {object} args The arguments for the template
     */

  }, {
    key: "render",
    value: function render(tmpl) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Function('return `' + tmpl + '`;').call(args);
    }
  }]);

  return Renderer;
}();

var renderer = new Renderer();
/**---------------------------------------------------------------
 * Simple loader spinner representation
 * --------------------------------------------------------------- */

var Loader = /*#__PURE__*/function () {
  /**
   * The spinner html id (template source)
   * 
   * @param {string} elementId 
   */
  function Loader() {
    var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'spinner';

    _classCallCheck(this, Loader);

    this.elementId = elementId;
    this.element = renderer.getTemplate(this.elementId);
  }
  /**
   * Show the spinner at the specified wrapper
   * 
   * @param {string} wrapperId
   */


  _createClass(Loader, [{
    key: "show",
    value: function show(wrapperId) {
      var wrapper = document.getElementById(wrapperId);

      if (wrapper === null) {
        // If the element is not available using wrapperId as id, the try
        // selecting the element with query selector
        wrapper = document.querySelector(wrapperId);
      }

      if (wrapper === null) {
        throw new Error("The wrapper with id=".concat(wrapperId, " do not exists in this document."));
      }

      this.wrapper = wrapper;
      this.wrapper.appendChild(this.element);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.wrapper !== null) {
        this.wrapper.removeChild(this.element);
      }
    }
  }]);

  return Loader;
}();
/**---------------------------------------------------------------
 * Modal widget representation
 * --------------------------------------------------------------- */


var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.el = renderer.getTemplate('modal');
    this.body = this.el.querySelector('[data-role="modal-content"]');
    this.wrapper = document.body;
    this.isShown = false; // Ensure the modal is hidden

    this.hide();
    this.bindEvents();
  }

  _createClass(Modal, [{
    key: "hide",
    value: function hide() {
      addClass(this.el, 'hidden');
    }
  }, {
    key: "show",
    value: function show() {
      if (this.isShown === true) {
        throw new Error('The modal window is already visible');
      }

      removeClass(this.el, 'hidden');
      this.wrapper.appendChild(this.el);
      this.isShown = true;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.body.appendChild(content);
    }
  }, {
    key: "close",
    value: function close() {
      if (this.isShown === false) {
        throw new Error('The modal window is not visible');
      }

      this.hide();
      this.destroy();
      this.isShown = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.wrapper.removeChild(this.el);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      var closeButton = this.el.querySelector('[data-dismiss="modal"]');
      closeButton.addEventListener('click', function () {
        return _this.close();
      });
    }
  }]);

  return Modal;
}();
/**---------------------------------------------------------------
 * VanHack user representation
 * --------------------------------------------------------------- */


var User = /*#__PURE__*/function () {
  function User(id, name) {
    _classCallCheck(this, User);

    this.id = id;
    this.name = name;
    this.events = [];
  }
  /**
   * Add the given event to the list of applied events
   * 
   * @param {int} id 
   */


  _createClass(User, [{
    key: "applyForEvent",
    value: function applyForEvent(id) {
      if (this.hasApplied(id) === true) {
        throw new Error("The user has already applied to the given event with id ".concat(id));
      }

      this.events.push(id);
    }
    /**
     * Check if the user has applied to the given event
     * 
     * @param {int} id 
     */

  }, {
    key: "hasApplied",
    value: function hasApplied(id) {
      return this.events.includes(id);
    }
  }]);

  return User;
}();
/**---------------------------------------------------------------
 * Event object representation
 * --------------------------------------------------------------- */


var Event = function Event() {
  var _this2 = this;

  _classCallCheck(this, Event);

  Array.prototype.slice.call(arguments).forEach(function (i) {
    return _this2[i.key] = i.value;
  });
};
/**---------------------------------------------------------------
 * VanHack events-like application
 * --------------------------------------------------------------- */


var VanHack = /*#__PURE__*/function () {
  /**
   * The current user
   * 
   * @param {User} user 
   */
  function VanHack(user) {
    _classCallCheck(this, VanHack);

    this.loader = new Loader();
    this.renderer = renderer;
    this.selector = '[data-role="events"]';
    this.container = this.renderer.getElement(this.selector, false);
    this.user = user;
  }

  _createClass(VanHack, [{
    key: "showLoader",
    value: function showLoader() {
      this.loader.show(this.selector);
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.loader.hide();
    }
  }, {
    key: "load",
    value: function load() {
      this.showLoader();
      this.loadEvents();
    }
  }, {
    key: "loadEvents",
    value: function loadEvents() {
      var _this3 = this;

      get(EVENTS_API_ENDPOINT).then(function (events) {
        _this3.showEvents(events);

        _this3.hideLoader();
      });
    }
    /**
     * Return the event of the list for given id
     * @param {int} id 
     */

  }, {
    key: "getEvent",
    value: function getEvent(id) {
      if (id in this.events === false) {
        throw new Error("The event with id ".concat(id, " doesn't exists"));
      }

      return this.events[id];
    }
    /**
     * Show the list of events
     * 
     * @param {array} events 
     */

  }, {
    key: "showEvents",
    value: function showEvents(events) {
      var _this4 = this;

      if (events === null || events.length === 0) {
        throw new Error('Invalid events source');
      }

      this.events = {};
      events.forEach(function (e) {
        e.applied && _this4.user.applyForEvent(e.id);
        _this4.events[e.id] = _construct(Event, _toConsumableArray(objToArray(e)));

        _this4.renderEvent(e.id);
      });
    }
    /**
     * Show the given event
     * 
     * @param {object} event 
     */

  }, {
    key: "showEvent",
    value: function showEvent(event) {
      var modal = new Modal();
      var view = this.renderer.getTemplate('eventDetails');
      this.renderEventProps(event, view);

      if (event.applied) {
        this.disableEventApplyButton(view);
      }

      this.bindEvents(event.id, view);
      modal.setContent(view);
      modal.show();
    }
    /**
     * Apply for the given event
     * 
     * @param {object} event 
     */

  }, {
    key: "applyForEvent",
    value: function applyForEvent(event) {
      if (this.user.hasApplied(event.id) === false) {
        event.applied = true;
        this.disableEventApplying(event);
      }
    }
    /**
     * Disables the given event for applying
     * 
     * @param {object} event 
     */

  }, {
    key: "disableEventApplying",
    value: function disableEventApplying(event) {
      var _this5 = this;

      var eventView = document.querySelectorAll("[data-event-id=\"".concat(event.id, "\"]"));

      if (eventView !== null && eventView.length !== 0) {
        eventView.forEach(function (v) {
          return _this5.disableEventApplyButton(v);
        });
      }
    }
    /**
     * Disables the apply button for the given event
     * 
     * @param {object} v 
     */

  }, {
    key: "disableEventApplyButton",
    value: function disableEventApplyButton(v) {
      var applyButton = v.querySelector('[data-action="apply"]');

      if (applyButton !== null) {
        addClass(applyButton, 'opacity-50 cursor-not-allowed pointer-events-none');
        addProperty(applyButton, 'disabled', true);
      }
    }
    /**
     * Render a specific event
     * 
     * @param {string} id 
     */

  }, {
    key: "renderEvent",
    value: function renderEvent(id) {
      var block = this.renderer.getTemplate('eventBlock');
      var event = this.getEvent(id);
      this.renderEventProps(event, block);
      this.bindEvents(id, block);
      event.applied && this.disableEventApplyButton(block);
      this.container.appendChild(block);
    }
  }, {
    key: "renderEventProps",
    value: function renderEventProps(event, view) {
      var self = this;
      Object.keys(event).forEach(function (k) {
        var e = view.querySelector("[data-render-prop=\"".concat(k, "\"]"));

        if ("render".concat(ucfirst(k)) in self) {
          var r = self["render".concat(ucfirst(k))](event, view);

          if (r && e !== null) {
            e.innerHTML = r;
          }
        } else if (e !== null) {
          e.innerHTML = event[k];
        }
      });
      view.setAttribute('data-event-id', event.id);
    }
  }, {
    key: "renderId",
    value: function renderId(e, v) {
      var startMonthHtml = v.querySelector('[data-prop="start-month"]');
      var startDayHtml = v.querySelector('[data-prop="start-day"]');

      if (startMonthHtml !== null) {
        startMonthHtml.innerHTML = formatDate(new Date(e.start), {
          month: 'long'
        });
      }

      if (startDayHtml !== null) {
        startDayHtml.innerHTML = formatDate(new Date(e.start), {
          day: '2-digit'
        });
      }

      this.renderCategory(e, v);
      this.renderDateInfo(e, v);
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(e) {
      return e.title;
    }
  }, {
    key: "renderContent",
    value: function renderContent(e) {
      return e.description;
    }
  }, {
    key: "renderDateInfo",
    value: function renderDateInfo(e, v) {
      var startDate = new Date(e.start);
      var endDate = new Date(e.end);
      var currentDate = new Date();
      var startFormat = {
        month: 'long',
        day: 'numeric'
      };

      if (startDate.getMonth() !== currentDate.getMonth()) {
        startFormat.month = 'long';
      }

      if (startDate.getFullYear() !== currentDate.getFullYear()) {
        startFormat.year = 'numeric';
      }

      var endFormat = {
        day: 'numeric'
      };

      if (startDate.getMonth() !== endDate.getMonth()) {
        endFormat.month = 'long';
      }

      if (startDate.getFullYear() !== endDate.getFullYear()) {
        endFormat.year = 'numeric';
      }

      var dateHtml = v.querySelector('[data-prop="date"]');

      if (dateHtml !== null) {
        dateHtml.innerHTML = "This event will take between ".concat(formatDate(startDate, startFormat), " and ").concat(formatDate(endDate, endFormat));
      }
    }
  }, {
    key: "renderCategory",
    value: function renderCategory(e, v) {
      var categoryHtml = v.querySelector('[data-prop="category"]');

      if (categoryHtml !== null) {
        categoryHtml.innerHTML = 'Webinar';
      }
    }
  }, {
    key: "renderLocation",
    value: function renderLocation(e) {
      return "".concat(e.location.city, ", ").concat(e.location.country);
    }
  }, {
    key: "renderDeadline",
    value: function renderDeadline(e) {
      return formatDate(new Date(e.deadline));
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(id, v) {
      var _this6 = this;

      var actionView = v.querySelector('[data-action="view"]');
      var actionApply = v.querySelector('[data-action="apply"]');

      if (actionView !== null) {
        actionView.addEventListener('click', function () {
          return _this6.onViewHandler(id);
        });
      }

      if (actionApply !== null) {
        actionApply.addEventListener('click', function () {
          return _this6.onApplyHandler(id);
        });
      }
    }
  }, {
    key: "onViewHandler",
    value: function onViewHandler(id) {
      var event = this.getEvent(id);
      this.showEvent(event);
    }
  }, {
    key: "onApplyHandler",
    value: function onApplyHandler(id) {
      var event = this.getEvent(id);
      this.applyForEvent(event);
    }
  }]);

  return VanHack;
}();

var u = new User(1, "vanhack");
var v = new VanHack(u);
document.addEventListener('DOMContentLoaded', function () {
  v.load();
});

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/apps/vanhack-javascript/main.js */"./main.js");


/***/ })

/******/ });