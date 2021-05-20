/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./js/main.js");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./assets/weather-icons sync recursive ^\\.\\/.*\\.png$":
    /*!*************************************************!*\
      !*** ./assets/weather-icons sync ^\.\/.*\.png$ ***!
      \*************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var map = {
            "./clear-day.png": "./assets/weather-icons/clear-day.png",
            "./clear-night.png": "./assets/weather-icons/clear-night.png",
            "./cloudy.png": "./assets/weather-icons/cloudy.png",
            "./fog.png": "./assets/weather-icons/fog.png",
            "./hail.png": "./assets/weather-icons/hail.png",
            "./partly-cloudy-day.png": "./assets/weather-icons/partly-cloudy-day.png",
            "./partly-cloudy-night.png": "./assets/weather-icons/partly-cloudy-night.png",
            "./rain.png": "./assets/weather-icons/rain.png",
            "./sleet.png": "./assets/weather-icons/sleet.png",
            "./snow.png": "./assets/weather-icons/snow.png",
            "./thunderstorm.png": "./assets/weather-icons/thunderstorm.png",
            "./tornado.png": "./assets/weather-icons/tornado.png",
            "./wind.png": "./assets/weather-icons/wind.png"
        };


        function webpackContext(req) {
            var id = webpackContextResolve(req);
            return __webpack_require__(id);
        }

        function webpackContextResolve(req) {
            if (!__webpack_require__.o(map, req)) {
                var e = new Error("Cannot find module '" + req + "'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            }
            return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
            return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = "./assets/weather-icons sync recursive ^\\.\\/.*\\.png$";

        /***/
    }),

    /***/
    "./assets/weather-icons/clear-day.png":
    /*!********************************************!*\
      !*** ./assets/weather-icons/clear-day.png ***!
      \********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/clear-day.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/clear-night.png":
    /*!**********************************************!*\
      !*** ./assets/weather-icons/clear-night.png ***!
      \**********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/clear-night.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/cloudy.png":
    /*!*****************************************!*\
      !*** ./assets/weather-icons/cloudy.png ***!
      \*****************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/cloudy.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/fog.png":
    /*!**************************************!*\
      !*** ./assets/weather-icons/fog.png ***!
      \**************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/fog.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/hail.png":
    /*!***************************************!*\
      !*** ./assets/weather-icons/hail.png ***!
      \***************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/hail.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/partly-cloudy-day.png":
    /*!****************************************************!*\
      !*** ./assets/weather-icons/partly-cloudy-day.png ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/partly-cloudy-day.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/partly-cloudy-night.png":
    /*!******************************************************!*\
      !*** ./assets/weather-icons/partly-cloudy-night.png ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/partly-cloudy-night.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/rain.png":
    /*!***************************************!*\
      !*** ./assets/weather-icons/rain.png ***!
      \***************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/rain.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/sleet.png":
    /*!****************************************!*\
      !*** ./assets/weather-icons/sleet.png ***!
      \****************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/sleet.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/snow.png":
    /*!***************************************!*\
      !*** ./assets/weather-icons/snow.png ***!
      \***************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/snow.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/thunderstorm.png":
    /*!***********************************************!*\
      !*** ./assets/weather-icons/thunderstorm.png ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/thunderstorm.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/tornado.png":
    /*!******************************************!*\
      !*** ./assets/weather-icons/tornado.png ***!
      \******************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/tornado.png";

        /***/
    }),

    /***/
    "./assets/weather-icons/wind.png":
    /*!***************************************!*\
      !*** ./assets/weather-icons/wind.png ***!
      \***************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/wind.png";

        /***/
    }),

    /***/
    "./js/buttons.js":
    /*!***********************!*\
      !*** ./js/buttons.js ***!
      \***********************/
    /*! exports provided: fahrenheitButton, celsiusButton, updateButton */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "fahrenheitButton", function() { return fahrenheitButton; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "celsiusButton", function() { return celsiusButton; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "updateButton", function() { return updateButton; });
        /* harmony import */
        var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./display */ "./js/display.js");
        /* harmony import */
        var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./globals */ "./js/globals.js");
        /* harmony import */
        var _userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./userData */ "./js/userData.js");
        /* harmony import */
        var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./utilities */ "./js/utilities.js");





        function toggleButtons() {
            fahrenheitButton.classList.toggle('inactive');
            celsiusButton.classList.toggle('inactive');
        }

        var fahrenheitButton = document.createElement('button');
        fahrenheitButton.classList.add('button', 'button--f');
        fahrenheitButton.innerText = '°F';
        var celsiusButton = document.createElement('button');
        celsiusButton.classList.add('button', 'button--c');
        celsiusButton.innerText = '°C';
        fahrenheitButton.addEventListener('click', function() {
            if (_userData__WEBPACK_IMPORTED_MODULE_2__["settings"].units === _globals__WEBPACK_IMPORTED_MODULE_1__["units"].si) {
                _userData__WEBPACK_IMPORTED_MODULE_2__["settings"].units = _globals__WEBPACK_IMPORTED_MODULE_1__["units"].imperial;
                _display__WEBPACK_IMPORTED_MODULE_0__["display"].drawWeatherAndTicker();
                toggleButtons();
            }
        });
        celsiusButton.addEventListener('click', function() {
            if (_userData__WEBPACK_IMPORTED_MODULE_2__["settings"].units === _globals__WEBPACK_IMPORTED_MODULE_1__["units"].imperial) {
                _userData__WEBPACK_IMPORTED_MODULE_2__["settings"].units = _globals__WEBPACK_IMPORTED_MODULE_1__["units"].si;
                _display__WEBPACK_IMPORTED_MODULE_0__["display"].drawWeatherAndTicker();
                toggleButtons();
            }
        });
        var updateButton = document.createElement('button');
        updateButton.classList.add('button', 'button--update');
        var spinner = document.createElement('div');
        spinner.classList.add('spinner');
        updateButton.appendChild(spinner);
        updateButton.addEventListener('click', function() {
            _utilities__WEBPACK_IMPORTED_MODULE_3__["triggerAnimation"](spinner);
            _display__WEBPACK_IMPORTED_MODULE_0__["display"].drawBG();
        });

        /***/
    }),

    /***/
    "./js/display.js":
    /*!***********************!*\
      !*** ./js/display.js ***!
      \***********************/
    /*! exports provided: display */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
        /* harmony import */
        var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./buttons */ "./js/buttons.js");
        /* harmony import */
        var _fetchers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./fetchers */ "./js/fetchers.js");
        /* harmony import */
        var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./globals */ "./js/globals.js");
        /* harmony import */
        var _location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./location */ "./js/location.js");
        /* harmony import */
        var _menuLanguage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./menuLanguage */ "./js/menuLanguage.js");
        /* harmony import */
        var _search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./search */ "./js/search.js");
        /* harmony import */
        var _ticker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./ticker */ "./js/ticker.js");
        /* harmony import */
        var _userData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./userData */ "./js/userData.js");
        /* harmony import */
        var _utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./utilities */ "./js/utilities.js");
        /* harmony import */
        var _weatherTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./weatherTime */ "./js/weatherTime.js");





        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

        function _asyncToGenerator(fn) {
            return function() {
                var self = this,
                    args = arguments;
                return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self, args);

                    function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); }

                    function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); }
                    _next(undefined);
                });
            };
        }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












        var Display =
            /*#__PURE__*/
            function() {
                function Display(getWeatherDataFn, getGeoDataFn, getImageURLFn, bgImageTemplateFn, tickerFn) {
                    var _this = this;

                    _classCallCheck(this, Display);

                    _defineProperty(this, "initTimeUpdater", function(weatherData) {
                        if (_this.interval) clearInterval(_this.interval);
                        _this.interval = setInterval(function() {
                            _this.updateTime(weatherData);
                        }, 1000 * 60);
                    });

                    this.getWeatherData = getWeatherDataFn;
                    this.getGeoData = getGeoDataFn;
                    this.getImageURL = getImageURLFn;
                    this.bgImageTemplate = bgImageTemplateFn;
                    this.search = _search__WEBPACK_IMPORTED_MODULE_9__["search"];
                    this.menuLanguage = _menuLanguage__WEBPACK_IMPORTED_MODULE_8__;
                    this.ticker = tickerFn;
                }

                _createClass(Display, [{
                    key: "updateTime",
                    value: function updateTime(weatherData) {
                        this.currentTime = new _utilities__WEBPACK_IMPORTED_MODULE_12__["TimeFormatter"](new Date(), _userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language, weatherData.timezone);
                        _weatherTime__WEBPACK_IMPORTED_MODULE_13__["dateTime"].innerText = "".concat(this.currentTime.getDay(), " ").concat(this.currentTime.getDate(), " ").concat(this.currentTime.getMonth(), " \xA0 ").concat(this.currentTime.getTime());
                    }
                }, {
                    key: "insertDataToWeatherCluster",
                    value: function insertDataToWeatherCluster(locationData, weatherData) {
                        _location__WEBPACK_IMPORTED_MODULE_7__["countryAndCity"].innerText = "".concat(locationData.city).concat(locationData.city ? ', ' : '').concat(locationData.country);
                        this.updateTime(weatherData);
                        _weatherTime__WEBPACK_IMPORTED_MODULE_13__["temperatureToday"].innerText = Math.round(weatherData.currently.temperature);
                        _weatherTime__WEBPACK_IMPORTED_MODULE_13__["weatherIcon"].src = __webpack_require__("./assets/weather-icons sync recursive ^\\.\\/.*\\.png$")("./".concat(weatherData.currently.icon, ".png"));
                        _weatherTime__WEBPACK_IMPORTED_MODULE_13__["weatherIcon"].alt = weatherData.currently.icon;
                        _weatherTime__WEBPACK_IMPORTED_MODULE_13__["weatherDataList"].innerHTML = "<p>".concat(weatherData.currently.summary, "</p>\n      <p>").concat(_globals__WEBPACK_IMPORTED_MODULE_6__["dictionary"].feelsLike[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language], ": ").concat(Math.round(weatherData.currently.apparentTemperature), "\xB0</p>\n      <p>").concat(_globals__WEBPACK_IMPORTED_MODULE_6__["dictionary"].wind[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language], ": ").concat(Math.round(weatherData.currently.windSpeed), " ").concat(_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].units === 'si' ? 'm/s' : 'mph', "</p>\n      <p>").concat(_globals__WEBPACK_IMPORTED_MODULE_6__["dictionary"].humidity[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language], ": ").concat(Math.round(weatherData.currently.humidity * 100), "%</p>");
                        _weatherTime__WEBPACK_IMPORTED_MODULE_13__["forecast"].insertWeatherData(weatherData);
                    }
                }, {
                    key: "insertDataToMapCluster",
                    value: function insertDataToMapCluster(locationData) {
                        _location__WEBPACK_IMPORTED_MODULE_7__["mapIframe"].src = "https://www.google.com/maps/embed/v1/view?center=".concat(locationData.latitude, ",").concat(locationData.longitude, "&zoom=10&key=AIzaSyBWWZnqHV3asW7DM3yCQ0dxSHjj_J9LkwE&language=").concat(_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language);
                        this.latDegrees = _utilities__WEBPACK_IMPORTED_MODULE_12__["decimalToDegrees"](locationData.latitude);
                        this.lngDegrees = _utilities__WEBPACK_IMPORTED_MODULE_12__["decimalToDegrees"](locationData.longitude);
                        _location__WEBPACK_IMPORTED_MODULE_7__["latitude"].innerText = "".concat(_globals__WEBPACK_IMPORTED_MODULE_6__["dictionary"].latitude[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language], ": ").concat(this.latDegrees.degrees, "\xB0").concat(this.latDegrees.minutes.slice(0, 2), "'");
                        _location__WEBPACK_IMPORTED_MODULE_7__["longitude"].innerText = "".concat(_globals__WEBPACK_IMPORTED_MODULE_6__["dictionary"].longitude[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language], ": ").concat(this.lngDegrees.degrees, "\xB0").concat(this.lngDegrees.minutes.slice(0, 2), "'");
                    }
                }, {
                    key: "insertBGToBody",
                    value: function insertBGToBody(imageURL) {
                        document.body.style.background = this.bgImageTemplate.getString(imageURL);
                        document.body.style.backgroundSize = 'cover';
                    }
                }, {
                    key: "getData",
                    value: function() {
                        var _getData = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee(language) {
                                var locationData, weatherData;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return this.getGeoData(_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].location, _globals__WEBPACK_IMPORTED_MODULE_6__["apiKeys"].location, language);

                                            case 2:
                                                locationData = _context.sent;

                                                if (locationData) {
                                                    _context.next = 5;
                                                    break;
                                                }

                                                return _context.abrupt("return", false);

                                            case 5:
                                                _context.next = 7;
                                                return this.getWeatherData(_globals__WEBPACK_IMPORTED_MODULE_6__["apiKeys"].weather, locationData, _userData__WEBPACK_IMPORTED_MODULE_11__["settings"].units, language);

                                            case 7:
                                                weatherData = _context.sent;
                                                return _context.abrupt("return", {
                                                    locationData: locationData,
                                                    weatherData: weatherData
                                                });

                                            case 9:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, this);
                            }));

                        function getData(_x) {
                            return _getData.apply(this, arguments);
                        }

                        return getData;
                    }()
                }, {
                    key: "drawSearchInput",
                    value: function drawSearchInput() {
                        this.search.field.placeholder = _globals__WEBPACK_IMPORTED_MODULE_6__["dictionary"].searchPlaceholder[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language];
                        this.search.button.innerText = _globals__WEBPACK_IMPORTED_MODULE_6__["dictionary"].search[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language];
                    }
                }, {
                    key: "drawButtons",
                    value: function() {
                        var _drawButtons = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee2() {
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                this.menuLanguage.languageButtonText.innerText = _userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language;
                                                this.menuLanguage.menuItems[_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language].classList.remove('inactive');
                                                if (_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].units === _globals__WEBPACK_IMPORTED_MODULE_6__["units"].si) _buttons__WEBPACK_IMPORTED_MODULE_4__["fahrenheitButton"].classList.add('inactive');
                                                else _buttons__WEBPACK_IMPORTED_MODULE_4__["celsiusButton"].classList.add('inactive');

                                            case 3:
                                            case "end":
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, this);
                            }));

                        function drawButtons() {
                            return _drawButtons.apply(this, arguments);
                        }

                        return drawButtons;
                    }()
                }, {
                    key: "drawWeatherAndTicker",
                    value: function() {
                        var _drawWeatherAndTicker = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee3() {
                                var data;
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.next = 2;
                                                return this.getData(_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language);

                                            case 2:
                                                data = _context3.sent;
                                                this.insertDataToWeatherCluster(data.locationData, data.weatherData);
                                                this.ticker.drawTicker(data.weatherData);

                                            case 5:
                                            case "end":
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, this);
                            }));

                        function drawWeatherAndTicker() {
                            return _drawWeatherAndTicker.apply(this, arguments);
                        }

                        return drawWeatherAndTicker;
                    }()
                }, {
                    key: "drawMap",
                    value: function() {
                        var _drawMap = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee4() {
                                var data;
                                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                    while (1) {
                                        switch (_context4.prev = _context4.next) {
                                            case 0:
                                                _context4.next = 2;
                                                return this.getData(_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language);

                                            case 2:
                                                data = _context4.sent;
                                                this.insertDataToMapCluster(data.locationData);

                                            case 4:
                                            case "end":
                                                return _context4.stop();
                                        }
                                    }
                                }, _callee4, this);
                            }));

                        function drawMap() {
                            return _drawMap.apply(this, arguments);
                        }

                        return drawMap;
                    }()
                }, {
                    key: "drawBG",
                    value: function() {
                        var _drawBG = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee5(data) {
                                var dataEn, timeFormatter, month, hours, keywords, imageURL;
                                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                _context5.t0 = data;

                                                if (_context5.t0) {
                                                    _context5.next = 5;
                                                    break;
                                                }

                                                _context5.next = 4;
                                                return this.getData(_globals__WEBPACK_IMPORTED_MODULE_6__["languages"].english);

                                            case 4:
                                                _context5.t0 = _context5.sent;

                                            case 5:
                                                dataEn = _context5.t0;
                                                timeFormatter = new _utilities__WEBPACK_IMPORTED_MODULE_12__["TimeFormatter"](new Date(), 'ru', dataEn.weatherData.timezone);
                                                month = timeFormatter.getMonth();
                                                hours = timeFormatter.getHours();
                                                keywords = _utilities__WEBPACK_IMPORTED_MODULE_12__["generateKeywords"](month, hours);
                                                keywords.push(dataEn.weatherData.currently.summary);
                                                _context5.next = 13;
                                                return this.getImageURL(keywords, _globals__WEBPACK_IMPORTED_MODULE_6__["apiKeys"].image);

                                            case 13:
                                                imageURL = _context5.sent;
                                                this.insertBGToBody(imageURL);

                                            case 15:
                                            case "end":
                                                return _context5.stop();
                                        }
                                    }
                                }, _callee5, this);
                            }));

                        function drawBG(_x2) {
                            return _drawBG.apply(this, arguments);
                        }

                        return drawBG;
                    }()
                }, {
                    key: "drawEverything",
                    value: function() {
                        var _drawEverything = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee6() {
                                var data;
                                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                    while (1) {
                                        switch (_context6.prev = _context6.next) {
                                            case 0:
                                                _context6.next = 2;
                                                return this.getData(_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language);

                                            case 2:
                                                data = _context6.sent;
                                                if (!data) _search__WEBPACK_IMPORTED_MODULE_9__["search"].throwError();
                                                else {
                                                    this.drawButtons();
                                                    this.drawSearchInput();
                                                    this.insertDataToWeatherCluster(data.locationData, data.weatherData);
                                                    this.insertDataToMapCluster(data.locationData, data.weatherData);
                                                    this.drawBG(_userData__WEBPACK_IMPORTED_MODULE_11__["settings"].language === _globals__WEBPACK_IMPORTED_MODULE_6__["languages"].english ? data : false);
                                                    this.ticker.drawTicker(data.weatherData);
                                                    this.initTimeUpdater(data.weatherData);
                                                }

                                            case 4:
                                            case "end":
                                                return _context6.stop();
                                        }
                                    }
                                }, _callee6, this);
                            }));

                        function drawEverything() {
                            return _drawEverything.apply(this, arguments);
                        }

                        return drawEverything;
                    }()
                }]);

                return Display;
            }();

        var display = new Display(_fetchers__WEBPACK_IMPORTED_MODULE_5__["getWeatherData"], _fetchers__WEBPACK_IMPORTED_MODULE_5__["getGeoData"], _fetchers__WEBPACK_IMPORTED_MODULE_5__["getImageURL"], _utilities__WEBPACK_IMPORTED_MODULE_12__["bgImageTemplate"], _ticker__WEBPACK_IMPORTED_MODULE_10__["ticker"]);

        /***/
    }),

    /***/
    "./js/domBuilder.js":
    /*!**************************!*\
      !*** ./js/domBuilder.js ***!
      \**************************/
    /*! no exports provided */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./buttons */ "./js/buttons.js");
        /* harmony import */
        var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./display */ "./js/display.js");
        /* harmony import */
        var _location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./location */ "./js/location.js");
        /* harmony import */
        var _menuLanguage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./menuLanguage */ "./js/menuLanguage.js");
        /* harmony import */
        var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./search */ "./js/search.js");
        /* harmony import */
        var _ticker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./ticker */ "./js/ticker.js");
        /* harmony import */
        var _userData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./userData */ "./js/userData.js");
        /* harmony import */
        var _weatherTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./weatherTime */ "./js/weatherTime.js");




        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

        function _asyncToGenerator(fn) {
            return function() {
                var self = this,
                    args = arguments;
                return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self, args);

                    function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); }

                    function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); }
                    _next(undefined);
                });
            };
        }










        function buildDom() {
            return _buildDom.apply(this, arguments);
        }

        function _buildDom() {
            _buildDom = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                    var leftSubCluster, rightSubCluster, buttonCluster, weatherDataCluster, mapCluster, mainWrapper;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _userData__WEBPACK_IMPORTED_MODULE_9__["settings"].downloadUserData();

                                case 2:
                                    leftSubCluster = document.createElement('div');
                                    leftSubCluster.classList.add('button-cluster__left-sub-cluster');
                                    leftSubCluster.appendChild(_buttons__WEBPACK_IMPORTED_MODULE_3__["updateButton"]);
                                    leftSubCluster.appendChild(_menuLanguage__WEBPACK_IMPORTED_MODULE_6__["languageMenu"]);
                                    leftSubCluster.appendChild(_buttons__WEBPACK_IMPORTED_MODULE_3__["fahrenheitButton"]);
                                    leftSubCluster.appendChild(_buttons__WEBPACK_IMPORTED_MODULE_3__["celsiusButton"]);
                                    rightSubCluster = document.createElement('div');
                                    rightSubCluster.classList.add('button-cluster__right-sub-cluster');
                                    rightSubCluster.appendChild(_search__WEBPACK_IMPORTED_MODULE_7__["search"].field);
                                    rightSubCluster.appendChild(_search__WEBPACK_IMPORTED_MODULE_7__["search"].button);
                                    rightSubCluster.appendChild(_search__WEBPACK_IMPORTED_MODULE_7__["search"].recognitionButton);
                                    buttonCluster = document.createElement('div');
                                    buttonCluster.classList.add('button-cluster');
                                    buttonCluster.appendChild(leftSubCluster);
                                    buttonCluster.appendChild(rightSubCluster);
                                    weatherDataCluster = document.createElement('div');
                                    weatherDataCluster.classList.add('weather-data-cluster');
                                    weatherDataCluster.appendChild(_location__WEBPACK_IMPORTED_MODULE_5__["countryAndCity"]);
                                    weatherDataCluster.appendChild(_weatherTime__WEBPACK_IMPORTED_MODULE_10__["dateTime"]);
                                    weatherDataCluster.appendChild(_weatherTime__WEBPACK_IMPORTED_MODULE_10__["temperatureToday"]);
                                    weatherDataCluster.appendChild(_weatherTime__WEBPACK_IMPORTED_MODULE_10__["weatherIcon"]);
                                    weatherDataCluster.appendChild(_weatherTime__WEBPACK_IMPORTED_MODULE_10__["weatherDataList"]);
                                    weatherDataCluster.appendChild(_weatherTime__WEBPACK_IMPORTED_MODULE_10__["forecast"].collection[0]);
                                    weatherDataCluster.appendChild(_weatherTime__WEBPACK_IMPORTED_MODULE_10__["forecast"].collection[1]);
                                    weatherDataCluster.appendChild(_weatherTime__WEBPACK_IMPORTED_MODULE_10__["forecast"].collection[2]);
                                    mapCluster = document.createElement('div');
                                    mapCluster.classList.add('map-cluster');
                                    mapCluster.appendChild(_location__WEBPACK_IMPORTED_MODULE_5__["map"]);
                                    mapCluster.appendChild(_location__WEBPACK_IMPORTED_MODULE_5__["coordinates"]);
                                    mainWrapper = document.createElement('div');
                                    mainWrapper.classList.add('main-wrapper');
                                    mainWrapper.appendChild(weatherDataCluster);
                                    mainWrapper.appendChild(mapCluster);
                                    document.body.appendChild(buttonCluster);
                                    document.body.appendChild(mainWrapper);
                                    document.body.appendChild(_ticker__WEBPACK_IMPORTED_MODULE_8__["ticker"].tickerWrapper);
                                    _display__WEBPACK_IMPORTED_MODULE_4__["display"].drawEverything();
                                    window.addEventListener('beforeunload', function() {
                                        _userData__WEBPACK_IMPORTED_MODULE_9__["settings"].uploadUserData();
                                    });

                                case 40:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee);
                }));
            return _buildDom.apply(this, arguments);
        }

        buildDom();

        /***/
    }),

    /***/
    "./js/fetchers.js":
    /*!************************!*\
      !*** ./js/fetchers.js ***!
      \************************/
    /*! exports provided: getWeatherData, getGeoData, getIPInfo, getImageURL */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return getWeatherData; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getGeoData", function() { return getGeoData; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getIPInfo", function() { return getIPInfo; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getImageURL", function() { return getImageURL; });
        /* harmony import */
        var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
        /* harmony import */
        var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
        /* harmony import */
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);






        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

        function _asyncToGenerator(fn) {
            return function() {
                var self = this,
                    args = arguments;
                return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self, args);

                    function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); }

                    function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); }
                    _next(undefined);
                });
            };
        }

        function getWeatherData(_x, _x2, _x3, _x4) {
            return _getWeatherData.apply(this, arguments);
        }

        function _getWeatherData() {
            _getWeatherData = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(apiKey, _ref, units, language) {
                    var latitude, longitude, response, responseData;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    latitude = _ref.latitude, longitude = _ref.longitude;
                                    _context.next = 3;
                                    return fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat(apiKey, "/").concat(latitude, ",").concat(longitude, "?lang=").concat(language, "&units=").concat(units));

                                case 3:
                                    response = _context.sent;
                                    _context.next = 6;
                                    return response.json();

                                case 6:
                                    responseData = _context.sent;
                                    return _context.abrupt("return", responseData);

                                case 8:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee);
                }));
            return _getWeatherData.apply(this, arguments);
        }

        function getGeoData(_x5, _x6, _x7) {
            return _getGeoData.apply(this, arguments);
        }

        function _getGeoData() {
            _getGeoData = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2(place, apiKey, language) {
                    var response, responseData;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.prev = 0;
                                    _context2.next = 3;
                                    return fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(place, "&key=").concat(apiKey, "&pretty=1&no_annotations=1&language=").concat(language));

                                case 3:
                                    response = _context2.sent;
                                    _context2.next = 6;
                                    return response.json();

                                case 6:
                                    responseData = _context2.sent;
                                    _context2.next = 12;
                                    break;

                                case 9:
                                    _context2.prev = 9;
                                    _context2.t0 = _context2["catch"](0);
                                    console.log('GEODATA:', _context2.t0);

                                case 12:
                                    if (!(responseData.results.length === 0)) {
                                        _context2.next = 14;
                                        break;
                                    }

                                    return _context2.abrupt("return", false);

                                case 14:
                                    return _context2.abrupt("return", {
                                        latitude: responseData.results[0].geometry.lat,
                                        longitude: responseData.results[0].geometry.lng,
                                        country: responseData.results[0].components.country || 'Unknown',
                                        city: responseData.results[0].components.city || responseData.results[0].components.county || responseData.results[0].components.state || responseData.results[0].components.region || ''
                                    });

                                case 15:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, null, [
                        [0, 9]
                    ]);
                }));
            return _getGeoData.apply(this, arguments);
        }

        function getIPInfo(_x8) {
            return _getIPInfo.apply(this, arguments);
        }

        function _getIPInfo() {
            _getIPInfo = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3(key) {
                    var response, responseData;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.prev = 0;
                                    _context3.next = 3;
                                    return fetch("https://cors-anywhere.herokuapp.com/https://ipinfo.io/json?token=".concat(key));

                                case 3:
                                    response = _context3.sent;
                                    _context3.next = 6;
                                    return response.json();

                                case 6:
                                    responseData = _context3.sent;
                                    _context3.next = 12;
                                    break;

                                case 9:
                                    _context3.prev = 9;
                                    _context3.t0 = _context3["catch"](0);
                                    console.log('IPINFO', _context3.t0);

                                case 12:
                                    return _context3.abrupt("return", responseData);

                                case 13:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, null, [
                        [0, 9]
                    ]);
                }));
            return _getIPInfo.apply(this, arguments);
        }

        function getImageURL(_x9, _x10) {
            return _getImageURL.apply(this, arguments);
        }

        function _getImageURL() {
            _getImageURL = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(keywords, apiKeys) {
                    var key, response, responseData, i;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    key = apiKeys.getKey();
                                    _context4.prev = 1;
                                    _context4.next = 4;
                                    return fetch("https://api.unsplash.com/photos/random?query=".concat(keywords[0], ",").concat(keywords[1], ",").concat(keywords[2], "&client_id=").concat(key, "&orientation=landscape"));

                                case 4:
                                    response = _context4.sent;
                                    _context4.next = 10;
                                    break;

                                case 7:
                                    _context4.prev = 7;
                                    _context4.t0 = _context4["catch"](1);
                                    console.log('UNSPLASH-1: ', _context4.t0);

                                case 10:
                                    i = 0;

                                case 11:
                                    if (!(response.status === 403 && i < apiKeys.keys.length)) {
                                        _context4.next = 25;
                                        break;
                                    }

                                    _context4.prev = 12;
                                    key = apiKeys.updateKey(); // eslint-disable-next-line no-await-in-loop

                                    _context4.next = 16;
                                    return fetch("https://api.unsplash.com/photos/random?query=".concat(keywords[0], ",").concat(keywords[1], ",").concat(keywords[2], "&client_id=").concat(key, "&orientation=landscape"));

                                case 16:
                                    response = _context4.sent;
                                    _context4.next = 22;
                                    break;

                                case 19:
                                    _context4.prev = 19;
                                    _context4.t1 = _context4["catch"](12);
                                    console.log('UNSPLASH-loop: ', _context4.t1);

                                case 22:
                                    i++;
                                    _context4.next = 11;
                                    break;

                                case 25:
                                    _context4.prev = 25;
                                    _context4.next = 28;
                                    return response.json();

                                case 28:
                                    responseData = _context4.sent;
                                    _context4.next = 34;
                                    break;

                                case 31:
                                    _context4.prev = 31;
                                    _context4.t2 = _context4["catch"](25);
                                    console.log('UNSPLASH-2: ', _context4.t2);

                                case 34:
                                    return _context4.abrupt("return", responseData.urls.regular);

                                case 35:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, null, [
                        [1, 7],
                        [12, 19],
                        [25, 31]
                    ]);
                }));
            return _getImageURL.apply(this, arguments);
        }

        /***/
    }),

    /***/
    "./js/globals.js":
    /*!***********************!*\
      !*** ./js/globals.js ***!
      \***********************/
    /*! exports provided: apiKeys, languages, units, dictionary */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "apiKeys", function() { return apiKeys; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "units", function() { return units; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "dictionary", function() { return dictionary; });
        /* harmony import */
        var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./utilities */ "./js/utilities.js");

        var apiKeys = {
            weather: '43ca44b17c4017837e555b7a2fddd02d',
            location: 'dfcea8096a95496ba653f501109c66bf',
            map: 'AIzaSyBWWZnqHV3asW7DM3yCQ0dxSHjj_J9LkwE',
            ip: 'd4c758d211e7c9',
            image: _utilities__WEBPACK_IMPORTED_MODULE_0__["imageApiKeySwitcher"]
        };
        var languages = {
            english: 'en',
            russian: 'ru',
            belarus: 'be'
        };
        var units = {
            si: 'si',
            imperial: 'us'
        };
        var dictionary = {
            latitude: {
                en: 'Latitude',
                ru: 'Широта',
                be: 'Шырата'
            },
            longitude: {
                en: 'Longitude',
                ru: 'Долгота',
                be: 'Даўгата'
            },
            feelsLike: {
                en: 'Feels Like',
                ru: 'Ощущается как',
                be: 'Адчуваецца як'
            },
            wind: {
                en: 'Wind',
                ru: 'Ветер',
                be: 'Вецер'
            },
            humidity: {
                en: 'Humidity',
                ru: 'Влажность',
                be: 'Вільготнасць'
            },
            search: {
                en: 'Search',
                ru: 'Поиск',
                be: 'Пошук'
            },
            searchPlaceholder: {
                en: 'Search city or ZIP',
                ru: 'Найти город или индекс',
                be: 'Знайсці горад ці індэкс'
            },
            voiceSearchPlaceholder: {
                en: 'What place do you want to find?',
                ru: 'Какое место вы хотите найти?',
                be: 'Якое месца вы хочаце знайсці?'
            },
            searchError: {
                en: 'Incorrect data',
                ru: 'Неверные данные',
                be: 'Няслушныя дадзеныя'
            },
            weatherInOtherDays: {
                en: 'Weather in other days:',
                ru: 'Погода в другие дни:',
                be: 'Надвор\'е ў іншыя дні:'
            },
            speed: {
                si: {
                    en: 'm/s',
                    ru: 'м/с',
                    be: 'м/с'
                },
                us: {
                    en: 'mph',
                    ru: 'Миль/ч',
                    be: 'Міль/ч'
                }
            }
        };

        /***/
    }),

    /***/
    "./js/location.js":
    /*!************************!*\
      !*** ./js/location.js ***!
      \************************/
    /*! exports provided: countryAndCity, map, mapIframe, coordinates, latitude, longitude */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "countryAndCity", function() { return countryAndCity; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "mapIframe", function() { return mapIframe; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "coordinates", function() { return coordinates; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "latitude", function() { return latitude; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "longitude", function() { return longitude; });
        var countryAndCity = document.createElement('p');
        countryAndCity.classList.add('weather-data-cluster__location');
        var map = document.createElement('div');
        map.classList.add('map-cluster__map');
        var mapIframe = document.createElement('iframe');
        mapIframe.classList.add('map-iframe');
        map.appendChild(mapIframe);
        var coordinates = document.createElement('div');
        coordinates.classList.add('map-cluster__coordinates');
        var latitude = document.createElement('p');
        var longitude = document.createElement('p');
        coordinates.appendChild(latitude);
        coordinates.appendChild(longitude);

        /***/
    }),

    /***/
    "./js/main.js":
    /*!********************!*\
      !*** ./js/main.js ***!
      \********************/
    /*! no exports provided */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../sass/main.scss */ "./sass/main.scss");
        /* harmony import */
        var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _domBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./domBuilder */ "./js/domBuilder.js");



        /***/
    }),

    /***/
    "./js/menuLanguage.js":
    /*!****************************!*\
      !*** ./js/menuLanguage.js ***!
      \****************************/
    /*! exports provided: languageMenu, languageButtonText, menuItems */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "languageMenu", function() { return languageMenu; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "languageButtonText", function() { return languageButtonText; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
        /* harmony import */
        var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
        /* harmony import */
        var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
        /* harmony import */
        var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
        /* harmony import */
        var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! core-js/modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
        /* harmony import */
        var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
        /* harmony import */
        var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
        /* harmony import */
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */
        var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
        /* harmony import */
        var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */
        var _display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./display */ "./js/display.js");
        /* harmony import */
        var _globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./globals */ "./js/globals.js");
        /* harmony import */
        var _userData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./userData */ "./js/userData.js");









        var _menuItems;

        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

        function _iterableToArrayLimit(arr, i) {
            if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; }
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) {
                _d = true;
                _e = err;
            } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } }
            return _arr;
        }

        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




        var languageMenu = document.createElement('div');
        languageMenu.classList.add('language-menu');
        var languageButton = document.createElement('button');
        languageButton.classList.add('button', 'drop-down-menu__face-button');
        languageMenu.appendChild(languageButton);
        var languageButtonText = document.createElement('span');
        languageButton.appendChild(languageButtonText);
        var arrowDown = document.createElement('span');
        arrowDown.classList.add('arrow-down');
        languageButton.appendChild(arrowDown);
        var menu = document.createElement('div');
        menu.classList.add('drop-down-menu');
        var menuItems = (_menuItems = {}, _defineProperty(_menuItems, _globals__WEBPACK_IMPORTED_MODULE_9__["languages"].english, document.createElement('button')), _defineProperty(_menuItems, _globals__WEBPACK_IMPORTED_MODULE_9__["languages"].russian, document.createElement('button')), _defineProperty(_menuItems, _globals__WEBPACK_IMPORTED_MODULE_9__["languages"].belarus, document.createElement('button')), _menuItems);
        Object.entries(menuItems).forEach(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                item = _ref2[1];

            item.classList.add('drop-down-menu__item');
            item.classList.add('button');
            item.classList.add('inactive');
            item.id = key;
            item.innerText = key;
            menu.appendChild(item);
        });
        languageMenu.appendChild(menu);
        languageButton.addEventListener('click', function() {
            menu.classList.toggle('drop-down-menu--open');
            languageButton.classList.toggle('drop-down-menu__face-button--open');
            arrowDown.classList.toggle('arrow-down--open');
        });
        menu.addEventListener('click', function(e) {
            if (e.target.classList.contains('drop-down-menu__item') && e.target.classList.contains('inactive')) {
                _userData__WEBPACK_IMPORTED_MODULE_10__["settings"].language = e.target.id;
                Object.values(menuItems).forEach(function(item) {
                    item.classList.add('inactive');
                });
                e.target.classList.remove('inactive');
                languageButtonText.innerText = e.target.id;
                _display__WEBPACK_IMPORTED_MODULE_8__["display"].drawSearchInput();
                _display__WEBPACK_IMPORTED_MODULE_8__["display"].drawMap();
                _display__WEBPACK_IMPORTED_MODULE_8__["display"].drawWeatherAndTicker();
            }
        });

        /***/
    }),

    /***/
    "./js/search.js":
    /*!**********************!*\
      !*** ./js/search.js ***!
      \**********************/
    /*! exports provided: search */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
        /* harmony import */
        var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
        /* harmony import */
        var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
        /* harmony import */
        var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
        /* harmony import */
        var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
        /* harmony import */
        var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./display */ "./js/display.js");
        /* harmony import */
        var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./globals */ "./js/globals.js");
        /* harmony import */
        var _userData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./userData */ "./js/userData.js");





        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





        var Search = function Search() {
            var _this = this;

            _classCallCheck(this, Search);

            _defineProperty(this, "cleanSearchField", function() {
                _this.field.value = '';

                _this.field.blur();

                _this.field.classList.remove('search-field-error');

                _this.recognition.stop();

                _this.field.placeholder = _globals__WEBPACK_IMPORTED_MODULE_5__["dictionary"].searchPlaceholder[_userData__WEBPACK_IMPORTED_MODULE_6__["settings"].language];
            });

            _defineProperty(this, "cancelWithEsc", function(e) {
                if (e.key === 'Escape') {
                    _this.cleanSearchField();
                }
            });

            _defineProperty(this, "cancelWithClick", function(e) {
                if (e.target !== _this.field && e.target !== _this.recognitionButton) {
                    _this.cleanSearchField();
                }
            });

            _defineProperty(this, "throwError", function() {
                _this.cleanSearchField();

                _this.field.classList.add('search-field-error');

                _this.field.placeholder = _globals__WEBPACK_IMPORTED_MODULE_5__["dictionary"].searchError[_userData__WEBPACK_IMPORTED_MODULE_6__["settings"].language];
            });

            _defineProperty(this, "triggerVoiceSearch", function() {
                window.addEventListener('keyup', _this.cancelWithEsc);
                window.addEventListener('click', _this.cancelWithClick);

                _this.button.classList.add('disabled');

                _this.recognitionButton.style.display = 'none';
                _this.button.disabled = true;

                _this.cleanSearchField();

                _this.field.placeholder = _globals__WEBPACK_IMPORTED_MODULE_5__["dictionary"].voiceSearchPlaceholder[_userData__WEBPACK_IMPORTED_MODULE_6__["settings"].language];
                _this.field.disabled = true;
                _this.recognition.lang = _userData__WEBPACK_IMPORTED_MODULE_6__["settings"].language;

                _this.recognition.start();
            });

            _defineProperty(this, "getTranscript", function(e) {
                _this.transcript = Array.from(e.results).map(function(result) {
                    return result[0];
                }).map(function(result) {
                    return result.transcript;
                }).join('');
            });

            _defineProperty(this, "processVoiceSearch", function() {
                if (_this.transcript.length > 1 && /^(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])+$/.test(_this.transcript)) {
                    _this.processSearchQuery(_this.transcript);
                } else if (_this.transcript.length === 0) {
                    _this.field.placeholder = _globals__WEBPACK_IMPORTED_MODULE_5__["dictionary"].searchPlaceholder[_userData__WEBPACK_IMPORTED_MODULE_6__["settings"].language];
                } else _this.throwError();

                window.removeEventListener('keyup', _this.cancelWithEsc);
                window.removeEventListener('click', _this.cancelWithClick);

                _this.button.classList.remove('disabled');

                _this.recognitionButton.style.display = 'block';
                _this.button.disabled = false;
                _this.field.disabled = false;
            });

            _defineProperty(this, "processSearchQuery", function(query) {
                _this.cleanSearchField();

                _userData__WEBPACK_IMPORTED_MODULE_6__["settings"].location = query;
                _display__WEBPACK_IMPORTED_MODULE_4__["display"].drawEverything();
            });

            _defineProperty(this, "processSearchWithButton", function() {
                if (_this.field.value.length > 1 && /^(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])+$/.test(_this.field.value)) {
                    _this.processSearchQuery(_this.field.value);
                } else _this.throwError();
            });

            _defineProperty(this, "processSearchWithEnter", function(e) {
                if (e.key === 'Enter' && _this.field.value.length !== 0) {
                    _this.processSearchQuery(_this.field.value);
                }
            });

            this.field = document.createElement('input');
            this.field.classList.add('search-input');
            this.field.type = 'search';
            this.field.name = 'search-city';
            this.field.required = true;
            this.field.placeholder = _globals__WEBPACK_IMPORTED_MODULE_5__["dictionary"].searchPlaceholder[_userData__WEBPACK_IMPORTED_MODULE_6__["settings"].language];
            this.button = document.createElement('button');
            this.button.classList.add('button', 'search-input__button');
            this.button.innerText = _globals__WEBPACK_IMPORTED_MODULE_5__["dictionary"].search[_userData__WEBPACK_IMPORTED_MODULE_6__["settings"].language];
            this.recognitionButton = document.createElement('button');
            this.recognitionButton.classList.add('search-input__voice-button');
            this.recognition = new(window.speechRecognition || window.webkitSpeechRecognition)();
            this.recognition.interimResults = true;
            this.field.addEventListener('keyup', this.cancelWithEsc);
            this.field.addEventListener('keyup', this.processSearchWithEnter);
            this.button.addEventListener('click', this.processSearchWithButton);
            this.recognitionButton.addEventListener('click', this.triggerVoiceSearch);
            this.recognition.addEventListener('result', this.getTranscript);
            this.recognition.addEventListener('end', this.processVoiceSearch);
            this.transcript = '';
        };

        var search = new Search();

        /***/
    }),

    /***/
    "./js/ticker.js":
    /*!**********************!*\
      !*** ./js/ticker.js ***!
      \**********************/
    /*! exports provided: ticker */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ticker", function() { return ticker; });
        /* harmony import */
        var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./globals */ "./js/globals.js");
        /* harmony import */
        var _userData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./userData */ "./js/userData.js");
        /* harmony import */
        var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./utilities */ "./js/utilities.js");

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





        var Ticker = function Ticker() {
            var _this = this;

            _classCallCheck(this, Ticker);

            _defineProperty(this, "createTickerItem", function(content) {
                var tickerItem = document.createElement('p');
                tickerItem.classList.add('ticker__item');
                tickerItem.innerText = content;

                _this.itemCollection.push(tickerItem);
            });

            _defineProperty(this, "createItemSet", function(dayData) {
                var dayTime = new _utilities__WEBPACK_IMPORTED_MODULE_2__["TimeFormatter"](dayData.time * 1000, _userData__WEBPACK_IMPORTED_MODULE_1__["settings"].language);
                var fullDay = dayTime.getFullDay();
                fullDay = fullDay[0].toUpperCase() + fullDay.slice(1);

                _this.createTickerItem('');

                _this.createTickerItem("".concat(fullDay, " :"));

                _this.createTickerItem("".concat(Math.round(dayData.temperatureLow), "\xB0 - ").concat(Math.round(dayData.temperatureHigh), "\xB0"));

                _this.createTickerItem(dayData.summary.slice(0, -1));

                _this.createTickerItem("".concat(_globals__WEBPACK_IMPORTED_MODULE_0__["dictionary"].wind[_userData__WEBPACK_IMPORTED_MODULE_1__["settings"].language], ": ").concat(Math.round(dayData.windSpeed), " ").concat(_userData__WEBPACK_IMPORTED_MODULE_1__["settings"].units === 'si' ? _globals__WEBPACK_IMPORTED_MODULE_0__["dictionary"].speed.si[_userData__WEBPACK_IMPORTED_MODULE_1__["settings"].language] : _globals__WEBPACK_IMPORTED_MODULE_0__["dictionary"].speed.us[_userData__WEBPACK_IMPORTED_MODULE_1__["settings"].language]));

                _this.createTickerItem("".concat(_globals__WEBPACK_IMPORTED_MODULE_0__["dictionary"].humidity[_userData__WEBPACK_IMPORTED_MODULE_1__["settings"].language], ": ").concat(Math.round(dayData.humidity * 100), "%"));

                _this.createTickerItem('');
            });

            _defineProperty(this, "createTickerContent", function(weekData) {
                for (var i = 1; i < 8; i++) {
                    _this.createItemSet(weekData[i]);
                }
            });

            _defineProperty(this, "drawTicker", function(weatherData) {
                _this.ticker.innerHTML = '';

                _this.createTickerContent(weatherData.daily.data);

                _this.itemCollection.forEach(function(item) {
                    return _this.ticker.appendChild(item);
                });

                _this.itemCollection = [];
            });

            this.tickerWrapper = document.createElement('div');
            this.tickerWrapper.classList.add('ticker-wrapper');
            this.ticker = document.createElement('div');
            this.ticker.classList.add('ticker');
            this.tickerWrapper.appendChild(this.ticker);
            this.itemCollection = [];
        };

        var ticker = new Ticker();

        /***/
    }),

    /***/
    "./js/userData.js":
    /*!************************!*\
      !*** ./js/userData.js ***!
      \************************/
    /*! exports provided: settings */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
        /* harmony import */
        var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
        /* harmony import */
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./globals */ "./js/globals.js");
        /* harmony import */
        var _fetchers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./fetchers */ "./js/fetchers.js");




        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

        function _asyncToGenerator(fn) {
            return function() {
                var self = this,
                    args = arguments;
                return new Promise(function(resolve, reject) {
                    var gen = fn.apply(self, args);

                    function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); }

                    function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); }
                    _next(undefined);
                });
            };
        }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




        var UserData =
            /*#__PURE__*/
            function() {
                function UserData() {
                    _classCallCheck(this, UserData);

                    this.language = _globals__WEBPACK_IMPORTED_MODULE_3__["languages"].english;
                    this.units = _globals__WEBPACK_IMPORTED_MODULE_3__["units"].si;
                    this.location = 'Belarus';
                    this.timeZone = '';
                }

                _createClass(UserData, [{
                    key: "downloadUserData",
                    value: function() {
                        var _downloadUserData = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee() {
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.prev = 0;
                                                this.localStorageData = JSON.parse(localStorage.getItem('fancy-weather-lhk'));
                                                _context.next = 4;
                                                return _fetchers__WEBPACK_IMPORTED_MODULE_4__["getIPInfo"](_globals__WEBPACK_IMPORTED_MODULE_3__["apiKeys"].ip);

                                            case 4:
                                                this.ipData = _context.sent;
                                                this.language = this.localStorageData.language || _globals__WEBPACK_IMPORTED_MODULE_3__["languages"].english;
                                                this.units = this.localStorageData.units || _globals__WEBPACK_IMPORTED_MODULE_3__["units"].si;
                                                this.location = "".concat(this.ipData.city || '', " ").concat(this.ipData.country || this.ipData.region);
                                                _context.next = 13;
                                                break;

                                            case 10:
                                                _context.prev = 10;
                                                _context.t0 = _context["catch"](0);
                                                console.log('downloadUserData:', _context.t0);

                                            case 13:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, this, [
                                    [0, 10]
                                ]);
                            }));

                        function downloadUserData() {
                            return _downloadUserData.apply(this, arguments);
                        }

                        return downloadUserData;
                    }()
                }, {
                    key: "uploadUserData",
                    value: function uploadUserData() {
                        this.localStorageData = {
                            language: this.language,
                            units: this.units
                        };
                        localStorage.setItem('fancy-weather-lhk', JSON.stringify(this.localStorageData));
                    }
                }]);

                return UserData;
            }();

        var settings = new UserData();

        /***/
    }),

    /***/
    "./js/utilities.js":
    /*!*************************!*\
      !*** ./js/utilities.js ***!
      \*************************/
    /*! exports provided: TimeFormatter, imageApiKeySwitcher, decimalToDegrees, bgImageTemplate, generateKeywords, triggerAnimation */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return TimeFormatter; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "imageApiKeySwitcher", function() { return imageApiKeySwitcher; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "decimalToDegrees", function() { return decimalToDegrees; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "bgImageTemplate", function() { return bgImageTemplate; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "generateKeywords", function() { return generateKeywords; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "triggerAnimation", function() { return triggerAnimation; });
        /* harmony import */
        var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
        /* harmony import */
        var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
        /* harmony import */
        var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
        /* harmony import */
        var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
        /* harmony import */
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
        /* harmony import */
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
        /* harmony import */
        var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__);







        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        var TimeFormatter =
            /*#__PURE__*/
            function() {
                function TimeFormatter() {
                    var timeStamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
                    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
                    var timeZone = arguments.length > 2 ? arguments[2] : undefined;

                    _classCallCheck(this, TimeFormatter);

                    this.date = new Date(timeStamp);
                    this.locale = locale;
                    this.timeZone = timeZone;
                    this.weekBe = {
                        short: {
                            mon: 'пн',
                            tue: 'аў',
                            wed: 'ср',
                            thu: 'чц',
                            fri: 'пт',
                            sat: 'сб',
                            sun: 'нз'
                        },
                        full: {
                            monday: 'панядзелак',
                            tuesday: 'аўторак',
                            wednesday: 'серада',
                            thursday: 'чацвер',
                            friday: 'пятніца',
                            saturday: 'субота',
                            sunday: 'нядзеля'
                        }
                    };
                    this.monthBe = {
                        january: 'cтудзень',
                        february: 'люты',
                        march: 'сакавік',
                        april: 'красавік',
                        may: 'май',
                        june: 'чэрвень',
                        july: 'ліпень',
                        august: 'жнівень',
                        september: 'верасень',
                        october: 'кастрычніцк',
                        november: 'лістапад',
                        december: 'снежань'
                    };
                }

                _createClass(TimeFormatter, [{
                    key: "getDay",
                    value: function getDay() {
                        if (this.locale.toLowerCase() === 'be') {
                            var enDay = this.date.toLocaleDateString('en', {
                                weekday: 'short',
                                timeZone: this.timeZone
                            });
                            return this.weekBe.short[enDay.toLowerCase()];
                        }

                        return this.date.toLocaleDateString(this.locale, {
                            weekday: 'short',
                            timeZone: this.timeZone
                        });
                    }
                }, {
                    key: "getFullDay",
                    value: function getFullDay() {
                        if (this.locale.toLowerCase() === 'be') {
                            var enFullDay = this.date.toLocaleDateString('en', {
                                weekday: 'long',
                                timeZone: this.timeZone
                            });
                            return this.weekBe.full[enFullDay.toLowerCase()];
                        }

                        return this.date.toLocaleDateString(this.locale, {
                            weekday: 'long',
                            timeZone: this.timeZone
                        });
                    }
                }, {
                    key: "getDate",
                    value: function getDate() {
                        return this.date.toLocaleDateString(this.locale, {
                            day: 'numeric',
                            timeZone: this.timeZone
                        });
                    }
                }, {
                    key: "getMonth",
                    value: function getMonth() {
                        if (this.locale.toLowerCase() === 'be') {
                            var enMonth = this.date.toLocaleDateString('en', {
                                month: 'long',
                                timeZone: this.timeZone
                            });
                            return this.monthBe[enMonth.toLowerCase()];
                        }

                        return this.date.toLocaleDateString(this.locale, {
                            month: 'long',
                            timeZone: this.timeZone
                        });
                    }
                }, {
                    key: "getTime",
                    value: function getTime() {
                        return this.date.toLocaleDateString('ru', {
                            hour: 'numeric',
                            minute: '2-digit',
                            timeZone: this.timeZone
                        }).split(' ')[1];
                    }
                }, {
                    key: "getHours",
                    value: function getHours() {
                        return this.getTime().split(':')[0];
                    }
                }]);

                return TimeFormatter;
            }();

        var ImageApiKeySwitcher =
            /*#__PURE__*/
            function() {
                function ImageApiKeySwitcher() {
                    _classCallCheck(this, ImageApiKeySwitcher);

                    this.counter = 0;
                    this.keys = ['9ffe44f80e9a5ea908c596de07f24b01145a79018daa172974cc961a79583a87', '83dfa940e6a660199c7e7b4bf33902c1f04fc8e958272bd4308dcec97db1bfc3', 'b51e5fc2fbb6592944435068a0affe25e1ed28d747e8eaa81aac6f4c1edbf958', 'fb054b49efafb4854192d38db3d87f1b4211c2567587b8e3307614e8efda79ea', 'be9086c1bfd0184c596f85c05a39b58ada493c74d450982fcac8e0a158e3e139', 'c39f7b7054728fbe1182c24abe50486c3b6e09c849fca3ecbb0b3800739af880', 'ca999b90665246999a446def90692123897b8dbf2be71b2f6792a2d2222de873', '265194590fc47c0b078386361fe497ea5c31d56d34ccf9bd1e0330fa4383df91'];
                    this.currentKey = this.keys[0];
                }

                _createClass(ImageApiKeySwitcher, [{
                    key: "updateKey",
                    value: function updateKey() {
                        this.counter++;
                        this.currentKey = this.keys[this.counter % this.keys.length];
                        return this.currentKey;
                    }
                }, {
                    key: "getKey",
                    value: function getKey() {
                        return this.currentKey;
                    }
                }]);

                return ImageApiKeySwitcher;
            }();

        var imageApiKeySwitcher = new ImageApiKeySwitcher();

        function decimalToDegrees(decimal) {
            var splitted = decimal.toString().split('.');
            var result = {
                degrees: splitted[0]
            };
            result.minutes = splitted[1] === undefined ? '0' : Math.round(Math.abs(decimal - Number(splitted[0])) * 60).toString();
            return result;
        }
        var bgImageTemplate = {
            template: ['linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center center fixed, url(', ') no-repeat center center fixed'],
            getString: function getString(url) {
                return this.template[0] + url + this.template[1];
            }
        };

        function generateKeywords(month, hours) {
            var timeOfTheDay;
            var timeOfTheYear;
            if (month <= 2 || month === 11) timeOfTheYear = 'winter';
            else if (month > 2 && month <= 5) timeOfTheYear = 'spring';
            else if (month > 5 && month <= 8) timeOfTheYear = 'summer';
            else timeOfTheYear = 'autumn';
            if (hours > 4 && hours <= 10) timeOfTheDay = 'morning';
            else if (hours > 10 && hours <= 16) timeOfTheDay = 'day';
            else if (hours > 15 && hours <= 21) timeOfTheDay = 'evening';
            else timeOfTheDay = 'night';
            return [timeOfTheYear, timeOfTheDay];
        }

        function triggerAnimation(el) {
            el.style.animation = 'none'; // eslint-disable-next-line no-unused-expressions

            el.offsetHeight;
            el.style.animation = null;
        }

        /***/
    }),

    /***/
    "./js/weatherTime.js":
    /*!***************************!*\
      !*** ./js/weatherTime.js ***!
      \***************************/
    /*! exports provided: dateTime, temperatureToday, weatherIcon, weatherDataList, forecast */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "dateTime", function() { return dateTime; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "temperatureToday", function() { return temperatureToday; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "weatherIcon", function() { return weatherIcon; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "weatherDataList", function() { return weatherDataList; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "forecast", function() { return forecast; });
        /* harmony import */
        var _userData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./userData */ "./js/userData.js");
        /* harmony import */
        var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./utilities */ "./js/utilities.js");

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



        var dateTime = document.createElement('p');
        dateTime.classList.add('weather-data-cluster__date-time');
        var temperatureToday = document.createElement('p');
        temperatureToday.classList.add('weather-data-cluster__temperature-today');
        var weatherIcon = document.createElement('img');
        weatherIcon.classList.add('weather-data-cluster__weather-icon');
        weatherIcon.alt = '\xa0';
        var weatherDataList = document.createElement('div');
        weatherDataList.classList.add('weather-data-cluster__weather-data');

        var Forecast =
            /*#__PURE__*/
            function() {
                function Forecast() {
                    _classCallCheck(this, Forecast);

                    this.collection = [];
                }

                _createClass(Forecast, [{
                    key: "createNode",
                    value: function createNode() {
                        var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

                        for (var i = 0; i < amount; i++) {
                            var nodeWrapper = document.createElement('div');
                            nodeWrapper.classList.add('forecast');
                            var dayElement = document.createElement('p');
                            dayElement.classList.add('forecast__day');
                            var temperatureElement = document.createElement('p');
                            temperatureElement.classList.add('forecast__temperature');
                            var weatherIconElement = document.createElement('img');
                            weatherIconElement.classList.add('forecast__icon');
                            weatherIconElement.alt = '\xa0';
                            nodeWrapper.appendChild(dayElement);
                            nodeWrapper.appendChild(temperatureElement);
                            nodeWrapper.appendChild(weatherIconElement);
                            this.collection.push(nodeWrapper);
                        }
                    }
                }, {
                    key: "insertWeatherData",
                    value: function insertWeatherData(weatherData) {
                        var data = {};

                        for (var i = 1; i <= this.collection.length; i++) {
                            var dayTime = new _utilities__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"](weatherData.daily.data[i].time * 1000, _userData__WEBPACK_IMPORTED_MODULE_0__["settings"].language);
                            data.day = dayTime.getFullDay();
                            data.temperature = Math.round((weatherData.daily.data[i].temperatureHigh + weatherData.daily.data[i].temperatureLow) / 2);
                            data.icon = weatherData.daily.data[i].icon;
                            this.updateNode(i - 1, data);
                        }
                    }
                }, {
                    key: "updateNode",
                    value: function updateNode(nodeIndex, data) {
                        var node = this.collection[nodeIndex];
                        node.children[0].innerText = data.day;
                        node.children[1].innerText = "".concat(data.temperature, "\xB0");
                        node.children[2].src = __webpack_require__("./assets/weather-icons sync recursive ^\\.\\/.*\\.png$")("./".concat(data.icon, ".png"));
                        node.children[2].alt = data.icon;
                    }
                }]);

                return Forecast;
            }();

        var forecast = new Forecast();
        forecast.createNode(3);

        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_a-function.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_a-function.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_add-to-unscopables.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
        module.exports = function(key) {
            ArrayProto[UNSCOPABLES][key] = true;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_advance-string-index.js":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var at = __webpack_require__( /*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

        // `AdvanceStringIndex` abstract operation
        // https://tc39.github.io/ecma262/#sec-advancestringindex
        module.exports = function(S, index, unicode) {
            return index + (unicode ? at(S, index).length : 1);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_an-instance.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_an-instance.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
                throw TypeError(name + ': incorrect invocation!');
            }
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_an-object.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_an-object.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_array-includes.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/_array-includes.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
        var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el)
                    while (length > index) {
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                        // Array#indexOf ignores holes, Array#includes - not
                    } else
                        for (; length > index; index++)
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                return !IS_INCLUDES && -1;
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_classof.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/modules/_classof.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
        var TAG = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
        // ES3 wrong here
        var ARG = cof(function() { return arguments; }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) { /* empty */ }
        };

        module.exports = function(it) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                :
                typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T
                // builtinTag case
                :
                ARG ? cof(O)
                // ES3 arguments fallback
                :
                (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_cof.js":
    /*!**********************************************!*\
      !*** ./node_modules/core-js/modules/_cof.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var toString = {}.toString;

        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_core.js":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/modules/_core.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var core = module.exports = { version: '2.6.11' };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_create-property.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/_create-property.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $defineProperty = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
        var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

        module.exports = function(object, index, value) {
            if (index in object) $defineProperty.f(object, index, createDesc(0, value));
            else object[index] = value;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_ctx.js":
    /*!**********************************************!*\
      !*** ./node_modules/core-js/modules/_ctx.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // optional / simple context binding
        var aFunction = __webpack_require__( /*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
        module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
                case 1:
                    return function(a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function( /* ...args */ ) {
                return fn.apply(that, arguments);
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_defined.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/modules/_defined.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_descriptors.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_descriptors.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
            return Object.defineProperty({}, 'a', { get: function() { return 7; } }).a != 7;
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_dom-create.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_dom-create.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var document = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_enum-bug-keys.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // IE 8- don't enum bug keys
        module.exports = (
            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
        ).split(',');


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_enum-keys.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_enum-keys.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // all enumerable object keys, includes symbols
        var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
        var gOPS = __webpack_require__( /*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
        var pIE = __webpack_require__( /*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
        module.exports = function(it) {
            var result = getKeys(it);
            var getSymbols = gOPS.f;
            if (getSymbols) {
                var symbols = getSymbols(it);
                var isEnum = pIE.f;
                var i = 0;
                var key;
                while (symbols.length > i)
                    if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
            return result;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_export.js":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/modules/_export.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js");
        var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
        var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
        var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
        var PROTOTYPE = 'prototype';

        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                // export native or passed
                out = (own ? target : source)[key];
                // bind timers to global for call from export context
                exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                // extend global
                if (target) redefine(target, key, out, type & $export.U);
                // export
                if (exports[key] != out) hide(exports, key, exp);
                if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_fails.js":
    /*!************************************************!*\
      !*** ./node_modules/core-js/modules/_fails.js ***!
      \************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_fix-re-wks.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        __webpack_require__( /*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
        var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
        var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
        var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
        var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
        var wks = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
        var regexpExec = __webpack_require__( /*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

        var SPECIES = wks('species');

        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
            // #replace needs built-in support for named groups.
            // #match works fine because it just return the exec results, even if it has
            // a "grops" property.
            var re = /./;
            re.exec = function() {
                var result = [];
                result.groups = { a: '7' };
                return result;
            };
            return ''.replace(re, '$<a>') !== '7';
        });

        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function() {
            // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
            var re = /(?:)/;
            var originalExec = re.exec;
            re.exec = function() { return originalExec.apply(this, arguments); };
            var result = 'ab'.split(re);
            return result.length === 2 && result[0] === 'a' && result[1] === 'b';
        })();

        module.exports = function(KEY, length, exec) {
            var SYMBOL = wks(KEY);

            var DELEGATES_TO_SYMBOL = !fails(function() {
                // String methods call symbol-named RegEp methods
                var O = {};
                O[SYMBOL] = function() { return 7; };
                return '' [KEY](O) != 7;
            });

            var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
                // Symbol-named RegExp methods call .exec
                var execCalled = false;
                var re = /a/;
                re.exec = function() { execCalled = true; return null; };
                if (KEY === 'split') {
                    // RegExp[@@split] doesn't call the regex's exec method, but first creates
                    // a new one. We need to return the patched regex when creating the new one.
                    re.constructor = {};
                    re.constructor[SPECIES] = function() { return re; };
                }
                re[SYMBOL]('');
                return !execCalled;
            }) : undefined;

            if (!DELEGATES_TO_SYMBOL ||
                !DELEGATES_TO_EXEC ||
                (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
                (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
            ) {
                var nativeRegExpMethod = /./ [SYMBOL];
                var fns = exec(
                    defined,
                    SYMBOL,
                    '' [KEY],
                    function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                        if (regexp.exec === regexpExec) {
                            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                                // The native String method already delegates to @@method (this
                                // polyfilled function), leasing to infinite recursion.
                                // We avoid it by directly calling the native @@method method.
                                return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                            }
                            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
                        }
                        return { done: false };
                    }
                );
                var strfn = fns[0];
                var rxfn = fns[1];

                redefine(String.prototype, KEY, strfn);
                hide(RegExp.prototype, SYMBOL, length == 2
                    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                    ?

                    function(string, arg) { return rxfn.call(string, this, arg); }
                    // 21.2.5.6 RegExp.prototype[@@match](string)
                    // 21.2.5.9 RegExp.prototype[@@search](string)
                    :
                    function(string) { return rxfn.call(string, this); }
                );
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_flags.js":
    /*!************************************************!*\
      !*** ./node_modules/core-js/modules/_flags.js ***!
      \************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        // 21.2.5.3 get RegExp.prototype.flags
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        module.exports = function() {
            var that = anObject(this);
            var result = '';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.unicode) result += 'u';
            if (that.sticky) result += 'y';
            return result;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_for-of.js":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/modules/_for-of.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
        var call = __webpack_require__( /*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
        var isArrayIter = __webpack_require__( /*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
        var getIterFn = __webpack_require__( /*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
        var BREAK = {};
        var RETURN = {};
        var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
            var iterFn = ITERATOR ? function() { return iterable; } : getIterFn(iterable);
            var f = ctx(fn, that, entries ? 2 : 1);
            var index = 0;
            var length, step, iterator, result;
            if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
            // fast case for arrays with default iterator
            if (isArrayIter(iterFn))
                for (length = toLength(iterable.length); length > index; index++) {
                    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                    if (result === BREAK || result === RETURN) return result;
                } else
                    for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                        result = call(iterator, f, step.value, entries);
                        if (result === BREAK || result === RETURN) return result;
                    }
        };
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_function-to-string.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/_function-to-string.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_global.js":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/modules/_global.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
            window : typeof self != 'undefined' && self.Math == Math ? self
            // eslint-disable-next-line no-new-func
            :
            Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_has.js":
    /*!**********************************************!*\
      !*** ./node_modules/core-js/modules/_has.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_hide.js":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/modules/_hide.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
        var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
        module.exports = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_html.js":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/modules/_html.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var document = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
        module.exports = document && document.documentElement;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_ie8-dom-define.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = !__webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
            return Object.defineProperty(__webpack_require__( /*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function() { return 7; } }).a != 7;
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_inherit-if-required.js":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var setPrototypeOf = __webpack_require__( /*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
        module.exports = function(that, target, C) {
            var S = target.constructor;
            var P;
            if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
                setPrototypeOf(that, P);
            }
            return that;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_invoke.js":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/modules/_invoke.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function(fn, args, that) {
            var un = that === undefined;
            switch (args.length) {
                case 0:
                    return un ? fn() :
                        fn.call(that);
                case 1:
                    return un ? fn(args[0]) :
                        fn.call(that, args[0]);
                case 2:
                    return un ? fn(args[0], args[1]) :
                        fn.call(that, args[0], args[1]);
                case 3:
                    return un ? fn(args[0], args[1], args[2]) :
                        fn.call(that, args[0], args[1], args[2]);
                case 4:
                    return un ? fn(args[0], args[1], args[2], args[3]) :
                        fn.call(that, args[0], args[1], args[2], args[3]);
            }
            return fn.apply(that, args);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_iobject.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/modules/_iobject.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == 'String' ? it.split('') : Object(it);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_is-array-iter.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // check on default Array iterator
        var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
        var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
        var ArrayProto = Array.prototype;

        module.exports = function(it) {
            return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_is-array.js":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/modules/_is-array.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
        module.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == 'Array';
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_is-object.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_is-object.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_is-regexp.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_is-regexp.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 7.2.8 IsRegExp(argument)
        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
        var MATCH = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
        module.exports = function(it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_iter-call.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_iter-call.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        module.exports = function(iterator, fn, value, entries) {
            try {
                return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
            } catch (e) {
                var ret = iterator['return'];
                if (ret !== undefined) anObject(ret.call(iterator));
                throw e;
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_iter-create.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_iter-create.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var create = __webpack_require__( /*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
        var descriptor = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function() { return this; });

        module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
            setToStringTag(Constructor, NAME + ' Iterator');
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_iter-define.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_iter-define.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js");
        var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
        var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
        var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
        var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
        var $iterCreate = __webpack_require__( /*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
        var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function() { return this; };

        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                    case KEYS:
                        return function keys() { return new Constructor(this, kind); };
                    case VALUES:
                        return function values() { return new Constructor(this, kind); };
                }
                return function entries() { return new Constructor(this, kind); };
            };
            var TAG = NAME + ' Iterator';
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
            var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    // Set @@toStringTag to native iterators
                    setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                    if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() { return $native.call(this); };
            }
            // Define iterator
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
            }
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED)
                    for (key in methods) {
                        if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_iter-detect.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_iter-detect.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
        var SAFE_CLOSING = false;

        try {
            var riter = [7][ITERATOR]();
            riter['return'] = function() { SAFE_CLOSING = true; };
            // eslint-disable-next-line no-throw-literal
            Array.from(riter, function() { throw 2; });
        } catch (e) { /* empty */ }

        module.exports = function(exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING) return false;
            var safe = false;
            try {
                var arr = [7];
                var iter = arr[ITERATOR]();
                iter.next = function() { return { done: safe = true }; };
                arr[ITERATOR] = function() { return iter; };
                exec(arr);
            } catch (e) { /* empty */ }
            return safe;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_iter-step.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_iter-step.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(done, value) {
            return { value: value, done: !!done };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_iterators.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_iterators.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = {};


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_library.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/modules/_library.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = false;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_meta.js":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/modules/_meta.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var META = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var setDesc = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var FREEZE = !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
            return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: 'O' + ++id, // object ID
                    w: {} // weak collections IDs
                }
            });
        };
        var fastKey = function(it, create) {
            // return primitive with prefix
            if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return 'F';
                // not necessary to add metadata
                if (!create) return 'E';
                // add missing metadata
                setMeta(it);
                // return object ID
            }
            return it[META].i;
        };
        var getWeak = function(it, create) {
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return true;
                // not necessary to add metadata
                if (!create) return false;
                // add missing metadata
                setMeta(it);
                // return hash weak collections IDs
            }
            return it[META].w;
        };
        // add metadata on freeze-family methods calling
        var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
            return it;
        };
        var meta = module.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_microtask.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_microtask.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var macrotask = __webpack_require__( /*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

        module.exports = function() {
            var head, last, notify;

            var flush = function() {
                var parent, fn;
                if (isNode && (parent = process.domain)) parent.exit();
                while (head) {
                    fn = head.fn;
                    head = head.next;
                    try {
                        fn();
                    } catch (e) {
                        if (head) notify();
                        else last = undefined;
                        throw e;
                    }
                }
                last = undefined;
                if (parent) parent.enter();
            };

            // Node.js
            if (isNode) {
                notify = function() {
                    process.nextTick(flush);
                };
                // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
            } else if (Observer && !(global.navigator && global.navigator.standalone)) {
                var toggle = true;
                var node = document.createTextNode('');
                new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
                notify = function() {
                    node.data = toggle = !toggle;
                };
                // environments with maybe non-completely correct, but existent Promise
            } else if (Promise && Promise.resolve) {
                // Promise.resolve without an argument throws an error in LG WebOS 2
                var promise = Promise.resolve(undefined);
                notify = function() {
                    promise.then(flush);
                };
                // for other environments - macrotask based on:
                // - setImmediate
                // - MessageChannel
                // - window.postMessag
                // - onreadystatechange
                // - setTimeout
            } else {
                notify = function() {
                    // strange IE + webpack dev server bug - use .call(global)
                    macrotask.call(global, flush);
                };
            }

            return function(fn) {
                var task = { fn: fn, next: undefined };
                if (last) last.next = task;
                if (!head) {
                    head = task;
                    notify();
                }
                last = task;
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_new-promise-capability.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        // 25.4.1.5 NewPromiseCapability(C)
        var aFunction = __webpack_require__( /*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

        function PromiseCapability(C) {
            var resolve, reject;
            this.promise = new C(function($$resolve, $$reject) {
                if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                resolve = $$resolve;
                reject = $$reject;
            });
            this.resolve = aFunction(resolve);
            this.reject = aFunction(reject);
        }

        module.exports.f = function(C) {
            return new PromiseCapability(C);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-create.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/_object-create.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var dPs = __webpack_require__( /*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
        var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
        var Empty = function() { /* empty */ };
        var PROTOTYPE = 'prototype';

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = __webpack_require__( /*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
            var i = enumBugKeys.length;
            var lt = '<';
            var gt = '>';
            var iframeDocument;
            iframe.style.display = 'none';
            __webpack_require__( /*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-dp.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_object-dp.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
        var dP = Object.defineProperty;

        exports.f = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) { /* empty */ }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-dps.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_object-dps.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

        module.exports = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-gopd.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_object-gopd.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var pIE = __webpack_require__( /*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
        var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
        var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
        var gOPD = Object.getOwnPropertyDescriptor;

        exports.f = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) { /* empty */ }
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-gopn-ext.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
        var gOPN = __webpack_require__( /*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
        var toString = {}.toString;

        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
            Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };

        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-gopn.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_object-gopn.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__( /*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
        var hiddenKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-gops.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_object-gops.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        exports.f = Object.getOwnPropertySymbols;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-gpo.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_object-gpo.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
        var ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-keys-internal.js":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
        var arrayIndexOf = __webpack_require__( /*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

        module.exports = function(object, names) {
            var O = toIObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O)
                if (key != IE_PROTO) has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
            while (names.length > i)
                if (has(O, key = names[i++])) {
                    ~arrayIndexOf(result, key) || result.push(key);
                }
            return result;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-keys.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_object-keys.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__( /*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
        var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

        module.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-pie.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_object-pie.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        exports.f = {}.propertyIsEnumerable;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_object-to-array.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/_object-to-array.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
        var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
        var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
        var isEnum = __webpack_require__( /*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
        module.exports = function(isEntries) {
            return function(it) {
                var O = toIObject(it);
                var keys = getKeys(O);
                var length = keys.length;
                var i = 0;
                var result = [];
                var key;
                while (length > i) {
                    key = keys[i++];
                    if (!DESCRIPTORS || isEnum.call(O, key)) {
                        result.push(isEntries ? [key, O[key]] : O[key]);
                    }
                }
                return result;
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_perform.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/modules/_perform.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(exec) {
            try {
                return { e: false, v: exec() };
            } catch (e) {
                return { e: true, v: e };
            }
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_promise-resolve.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var newPromiseCapability = __webpack_require__( /*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

        module.exports = function(C, x) {
            anObject(C);
            if (isObject(x) && x.constructor === C) return x;
            var promiseCapability = newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_property-desc.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/_property-desc.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_redefine-all.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/_redefine-all.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
        module.exports = function(target, src, safe) {
            for (var key in src) redefine(target, key, src[key], safe);
            return target;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_redefine.js":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/modules/_redefine.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var SRC = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
        var $toString = __webpack_require__( /*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
        var TO_STRING = 'toString';
        var TPL = ('' + $toString).split(TO_STRING);

        __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function(it) {
            return $toString.call(it);
        };

        (module.exports = function(O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) has(val, 'name') || hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === global) {
                O[key] = val;
            } else if (!safe) {
                delete O[key];
                hide(O, key, val);
            } else if (O[key]) {
                O[key] = val;
            } else {
                hide(O, key, val);
            }
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_regexp-exec-abstract.js":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";


        var classof = __webpack_require__( /*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
        var builtinExec = RegExp.prototype.exec;

        // `RegExpExec` abstract operation
        // https://tc39.github.io/ecma262/#sec-regexpexec
        module.exports = function(R, S) {
            var exec = R.exec;
            if (typeof exec === 'function') {
                var result = exec.call(R, S);
                if (typeof result !== 'object') {
                    throw new TypeError('RegExp exec method returned something other than an Object or null');
                }
                return result;
            }
            if (classof(R) !== 'RegExp') {
                throw new TypeError('RegExp#exec called on incompatible receiver');
            }
            return builtinExec.call(R, S);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_regexp-exec.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";


        var regexpFlags = __webpack_require__( /*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

        var nativeExec = RegExp.prototype.exec;
        // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.
        var nativeReplace = String.prototype.replace;

        var patchedExec = nativeExec;

        var LAST_INDEX = 'lastIndex';

        var UPDATES_LAST_INDEX_WRONG = (function() {
            var re1 = /a/,
                re2 = /b*/g;
            nativeExec.call(re1, 'a');
            nativeExec.call(re2, 'a');
            return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
        })();

        // nonparticipating capturing group, copied from es5-shim's String#split patch.
        var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

        if (PATCH) {
            patchedExec = function exec(str) {
                var re = this;
                var lastIndex, reCopy, match, i;

                if (NPCG_INCLUDED) {
                    reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
                }
                if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

                match = nativeExec.call(re, str);

                if (UPDATES_LAST_INDEX_WRONG && match) {
                    re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                }
                if (NPCG_INCLUDED && match && match.length > 1) {
                    // Fix browsers whose `exec` methods don't consistently return `undefined`
                    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                    // eslint-disable-next-line no-loop-func
                    nativeReplace.call(match[0], reCopy, function() {
                        for (i = 1; i < arguments.length - 2; i++) {
                            if (arguments[i] === undefined) match[i] = undefined;
                        }
                    });
                }

                return match;
            };
        }

        module.exports = patchedExec;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_same-value.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_same-value.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // 7.2.9 SameValue(x, y)
        module.exports = Object.is || function is(x, y) {
            // eslint-disable-next-line no-self-compare
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_set-proto.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_set-proto.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var check = function(O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
            set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
                function(test, buggy, set) {
                    try {
                        set = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__( /*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array);
                    } catch (e) { buggy = true; }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy) O.__proto__ = proto;
                        else set(O, proto);
                        return O;
                    };
                }({}, false) : undefined),
            check: check
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_set-species.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_set-species.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
        var SPECIES = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

        module.exports = function(KEY) {
            var C = global[KEY];
            if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                configurable: true,
                get: function() { return this; }
            });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_set-to-string-tag.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var def = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var TAG = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

        module.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_shared-key.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_shared-key.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var shared = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
        var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_shared.js":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/modules/_shared.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js");
        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
            version: core.version,
            mode: __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
            copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_species-constructor.js":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/modules/_species-constructor.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var aFunction = __webpack_require__( /*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
        var SPECIES = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
        module.exports = function(O, D) {
            var C = anObject(O).constructor;
            var S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_string-at.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_string-at.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
        var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that));
                var i = toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
                    TO_STRING ? s.charAt(i) : a :
                    TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_string-trim.js":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/_string-trim.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
        var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
        var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
        var spaces = __webpack_require__( /*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
        var space = '[' + spaces + ']';
        var non = '\u200b\u0085';
        var ltrim = RegExp('^' + space + space + '*');
        var rtrim = RegExp(space + space + '*$');

        var exporter = function(KEY, exec, ALIAS) {
            var exp = {};
            var FORCE = fails(function() {
                return !!spaces[KEY]() || non[KEY]() != non;
            });
            var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
            if (ALIAS) exp[ALIAS] = fn;
            $export($export.P + $export.F * FORCE, 'String', exp);
        };

        // 1 -> String#trimLeft
        // 2 -> String#trimRight
        // 3 -> String#trim
        var trim = exporter.trim = function(string, TYPE) {
            string = String(defined(string));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
        };

        module.exports = exporter;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_string-ws.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_string-ws.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_task.js":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/modules/_task.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
        var invoke = __webpack_require__( /*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
        var html = __webpack_require__( /*! ./_html */ "./node_modules/core-js/modules/_html.js");
        var cel = __webpack_require__( /*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;
        var run = function() {
            var id = +this;
            // eslint-disable-next-line no-prototype-builtins
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };
        var listener = function(event) {
            run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
                var args = [];
                var i = 1;
                while (arguments.length > i) args.push(arguments[i++]);
                queue[++counter] = function() {
                    // eslint-disable-next-line no-new-func
                    invoke(typeof fn == 'function' ? fn : Function(fn), args);
                };
                defer(counter);
                return counter;
            };
            clearTask = function clearImmediate(id) {
                delete queue[id];
            };
            // Node.js 0.8-
            if (__webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
                defer = function(id) {
                    process.nextTick(ctx(run, id, 1));
                };
                // Sphere (JS game engine) Dispatch API
            } else if (Dispatch && Dispatch.now) {
                defer = function(id) {
                    Dispatch.now(ctx(run, id, 1));
                };
                // Browsers with MessageChannel, includes WebWorkers
            } else if (MessageChannel) {
                channel = new MessageChannel();
                port = channel.port2;
                channel.port1.onmessage = listener;
                defer = ctx(port.postMessage, port, 1);
                // Browsers with postMessage, skip WebWorkers
                // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                defer = function(id) {
                    global.postMessage(id + '', '*');
                };
                global.addEventListener('message', listener, false);
                // IE8-
            } else if (ONREADYSTATECHANGE in cel('script')) {
                defer = function(id) {
                    html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                        html.removeChild(this);
                        run.call(id);
                    };
                };
                // Rest old browsers
            } else {
                defer = function(id) {
                    setTimeout(ctx(run, id, 1), 0);
                };
            }
        }
        module.exports = {
            set: setTask,
            clear: clearTask
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_to-absolute-index.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_to-integer.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_to-integer.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_to-iobject.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_to-iobject.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__( /*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
        var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
        module.exports = function(it) {
            return IObject(defined(it));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_to-length.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_to-length.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 7.1.15 ToLength
        var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
        var min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_to-object.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/_to-object.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
        module.exports = function(it) {
            return Object(defined(it));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_to-primitive.js":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/_to-primitive.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
            if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_uid.js":
    /*!**********************************************!*\
      !*** ./node_modules/core-js/modules/_uid.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_user-agent.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_user-agent.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var navigator = global.navigator;

        module.exports = navigator && navigator.userAgent || '';


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_wks-define.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/_wks-define.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js");
        var LIBRARY = __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js");
        var wksExt = __webpack_require__( /*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
        var defineProperty = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_wks-ext.js":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/modules/_wks-ext.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        exports.f = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/_wks.js":
    /*!**********************************************!*\
      !*** ./node_modules/core-js/modules/_wks.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var store = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
        var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
        var Symbol = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
        var USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function(name) {
            return store[name] || (store[name] =
                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/core.get-iterator-method.js":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var classof = __webpack_require__( /*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
        var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
        var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
        module.exports = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function(it) {
            if (it != undefined) return it[ITERATOR] ||
                it['@@iterator'] ||
                Iterators[classof(it)];
        };


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.array.from.js":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es6.array.from.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
        var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
        var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
        var call = __webpack_require__( /*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
        var isArrayIter = __webpack_require__( /*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
        var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
        var createProperty = __webpack_require__( /*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
        var getIterFn = __webpack_require__( /*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

        $export($export.S + $export.F * !__webpack_require__( /*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function(iter) { Array.from(iter); }), 'Array', {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                var O = toObject(arrayLike);
                var C = typeof this == 'function' ? this : Array;
                var aLen = arguments.length;
                var mapfn = aLen > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iterFn = getIterFn(O);
                var length, result, step, iterator;
                if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                // if object isn't iterable or it's array with default iterator - use simple case
                if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                    for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                    }
                } else {
                    length = toLength(O.length);
                    for (result = new C(length); length > index; index++) {
                        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                    }
                }
                result.length = index;
                return result;
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.array.iterator.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var addToUnscopables = __webpack_require__( /*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
        var step = __webpack_require__( /*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
        var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
        var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__( /*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == 'keys') return step(0, index);
            if (kind == 'values') return step(0, O[index]);
            return step(0, [index, O[index]]);
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.function.name.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es6.function.name.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
        var FProto = Function.prototype;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name';

        // 19.2.4.2 name
        NAME in FProto || __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
            configurable: true,
            get: function() {
                try {
                    return ('' + this).match(nameRE)[1];
                } catch (e) {
                    return '';
                }
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.number.constructor.js":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
        var inheritIfRequired = __webpack_require__( /*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
        var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
        var gOPN = __webpack_require__( /*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
        var gOPD = __webpack_require__( /*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
        var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
        var $trim = __webpack_require__( /*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
        var NUMBER = 'Number';
        var $Number = global[NUMBER];
        var Base = $Number;
        var proto = $Number.prototype;
        // Opera ~12 has broken Object#toString
        var BROKEN_COF = cof(__webpack_require__( /*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
        var TRIM = 'trim' in String.prototype;

        // 7.1.3 ToNumber(argument)
        var toNumber = function(argument) {
            var it = toPrimitive(argument, false);
            if (typeof it == 'string' && it.length > 2) {
                it = TRIM ? it.trim() : $trim(it, 3);
                var first = it.charCodeAt(0);
                var third, radix, maxCode;
                if (first === 43 || first === 45) {
                    third = it.charCodeAt(2);
                    if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
                } else if (first === 48) {
                    switch (it.charCodeAt(1)) {
                        case 66:
                        case 98:
                            radix = 2;
                            maxCode = 49;
                            break; // fast equal /^0b[01]+$/i
                        case 79:
                        case 111:
                            radix = 8;
                            maxCode = 55;
                            break; // fast equal /^0o[0-7]+$/i
                        default:
                            return +it;
                    }
                    for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                        code = digits.charCodeAt(i);
                        // parseInt parses a string to a first unavailable symbol
                        // but ToNumber should return NaN if a string contains unavailable symbols
                        if (code < 48 || code > maxCode) return NaN;
                    }
                    return parseInt(digits, radix);
                }
            }
            return +it;
        };

        if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
            $Number = function Number(value) {
                var it = arguments.length < 1 ? 0 : value;
                var that = this;
                return that instanceof $Number
                    // check on 1..constructor(foo) case
                    &&
                    (BROKEN_COF ? fails(function() { proto.valueOf.call(that); }) : cof(that) != NUMBER) ?
                    inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
            };
            for (var keys = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
                    // ES3:
                    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                    // ES6 (in case, if modules with ES6 Number statics required before):
                    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                ).split(','), j = 0, key; keys.length > j; j++) {
                if (has(Base, key = keys[j]) && !has($Number, key)) {
                    dP($Number, key, gOPD(Base, key));
                }
            }
            $Number.prototype = proto;
            proto.constructor = $Number;
            __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.object.to-string.js":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        // 19.1.3.6 Object.prototype.toString()
        var classof = __webpack_require__( /*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
        var test = {};
        test[__webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
            __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
                return '[object ' + classof(this) + ']';
            }, true);
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.promise.js":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/es6.promise.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js");
        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
        var classof = __webpack_require__( /*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
        var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var aFunction = __webpack_require__( /*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
        var anInstance = __webpack_require__( /*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
        var forOf = __webpack_require__( /*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
        var task = __webpack_require__( /*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
        var microtask = __webpack_require__( /*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
        var newPromiseCapabilityModule = __webpack_require__( /*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
        var perform = __webpack_require__( /*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
        var userAgent = __webpack_require__( /*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
        var promiseResolve = __webpack_require__( /*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
        var PROMISE = 'Promise';
        var TypeError = global.TypeError;
        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8 || '';
        var $Promise = global[PROMISE];
        var isNode = classof(process) == 'process';
        var empty = function() { /* empty */ };
        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

        var USE_NATIVE = !! function() {
            try {
                // correct subclassing with @@species support
                var promise = $Promise.resolve(1);
                var FakePromise = (promise.constructor = {})[__webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function(exec) {
                    exec(empty, empty);
                };
                // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                return (isNode || typeof PromiseRejectionEvent == 'function') &&
                    promise.then(empty) instanceof FakePromise
                    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
                    // we can't detect it synchronously, so just check versions
                    &&
                    v8.indexOf('6.6') !== 0 &&
                    userAgent.indexOf('Chrome/66') === -1;
            } catch (e) { /* empty */ }
        }();

        // helpers
        var isThenable = function(it) {
            var then;
            return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
        };
        var notify = function(promise, isReject) {
            if (promise._n) return;
            promise._n = true;
            var chain = promise._c;
            microtask(function() {
                var value = promise._v;
                var ok = promise._s == 1;
                var i = 0;
                var run = function(reaction) {
                    var handler = ok ? reaction.ok : reaction.fail;
                    var resolve = reaction.resolve;
                    var reject = reaction.reject;
                    var domain = reaction.domain;
                    var result, then, exited;
                    try {
                        if (handler) {
                            if (!ok) {
                                if (promise._h == 2) onHandleUnhandled(promise);
                                promise._h = 1;
                            }
                            if (handler === true) result = value;
                            else {
                                if (domain) domain.enter();
                                result = handler(value); // may throw
                                if (domain) {
                                    domain.exit();
                                    exited = true;
                                }
                            }
                            if (result === reaction.promise) {
                                reject(TypeError('Promise-chain cycle'));
                            } else if (then = isThenable(result)) {
                                then.call(result, resolve, reject);
                            } else resolve(result);
                        } else reject(value);
                    } catch (e) {
                        if (domain && !exited) domain.exit();
                        reject(e);
                    }
                };
                while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
                promise._c = [];
                promise._n = false;
                if (isReject && !promise._h) onUnhandled(promise);
            });
        };
        var onUnhandled = function(promise) {
            task.call(global, function() {
                var value = promise._v;
                var unhandled = isUnhandled(promise);
                var result, handler, console;
                if (unhandled) {
                    result = perform(function() {
                        if (isNode) {
                            process.emit('unhandledRejection', value, promise);
                        } else if (handler = global.onunhandledrejection) {
                            handler({ promise: promise, reason: value });
                        } else if ((console = global.console) && console.error) {
                            console.error('Unhandled promise rejection', value);
                        }
                    });
                    // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                    promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                }
                promise._a = undefined;
                if (unhandled && result.e) throw result.v;
            });
        };
        var isUnhandled = function(promise) {
            return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function(promise) {
            task.call(global, function() {
                var handler;
                if (isNode) {
                    process.emit('rejectionHandled', promise);
                } else if (handler = global.onrejectionhandled) {
                    handler({ promise: promise, reason: promise._v });
                }
            });
        };
        var $reject = function(value) {
            var promise = this;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            promise._v = value;
            promise._s = 2;
            if (!promise._a) promise._a = promise._c.slice();
            notify(promise, true);
        };
        var $resolve = function(value) {
            var promise = this;
            var then;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            try {
                if (promise === value) throw TypeError("Promise can't be resolved itself");
                if (then = isThenable(value)) {
                    microtask(function() {
                        var wrapper = { _w: promise, _d: false }; // wrap
                        try {
                            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                        } catch (e) {
                            $reject.call(wrapper, e);
                        }
                    });
                } else {
                    promise._v = value;
                    promise._s = 1;
                    notify(promise, false);
                }
            } catch (e) {
                $reject.call({ _w: promise, _d: false }, e); // wrap
            }
        };

        // constructor polyfill
        if (!USE_NATIVE) {
            // 25.4.3.1 Promise(executor)
            $Promise = function Promise(executor) {
                anInstance(this, $Promise, PROMISE, '_h');
                aFunction(executor);
                Internal.call(this);
                try {
                    executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                } catch (err) {
                    $reject.call(this, err);
                }
            };
            // eslint-disable-next-line no-unused-vars
            Internal = function Promise(executor) {
                this._c = []; // <- awaiting reactions
                this._a = undefined; // <- checked in isUnhandled reactions
                this._s = 0; // <- state
                this._d = false; // <- done
                this._v = undefined; // <- value
                this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                this._n = false; // <- notify
            };
            Internal.prototype = __webpack_require__( /*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
                // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                then: function then(onFulfilled, onRejected) {
                    var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                    reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                    reaction.fail = typeof onRejected == 'function' && onRejected;
                    reaction.domain = isNode ? process.domain : undefined;
                    this._c.push(reaction);
                    if (this._a) this._a.push(reaction);
                    if (this._s) notify(this, false);
                    return reaction.promise;
                },
                // 25.4.5.1 Promise.prototype.catch(onRejected)
                'catch': function(onRejected) {
                    return this.then(undefined, onRejected);
                }
            });
            OwnPromiseCapability = function() {
                var promise = new Internal();
                this.promise = promise;
                this.resolve = ctx($resolve, promise, 1);
                this.reject = ctx($reject, promise, 1);
            };
            newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
                return C === $Promise || C === Wrapper ?
                    new OwnPromiseCapability(C) :
                    newGenericPromiseCapability(C);
            };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
        __webpack_require__( /*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
        Wrapper = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
            // 25.4.4.5 Promise.reject(r)
            reject: function reject(r) {
                var capability = newPromiseCapability(this);
                var $$reject = capability.reject;
                $$reject(r);
                return capability.promise;
            }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
            // 25.4.4.6 Promise.resolve(x)
            resolve: function resolve(x) {
                return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
            }
        });
        $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__( /*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function(iter) {
            $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var resolve = capability.resolve;
                var reject = capability.reject;
                var result = perform(function() {
                    var values = [];
                    var index = 0;
                    var remaining = 1;
                    forOf(iterable, false, function(promise) {
                        var $index = index++;
                        var alreadyCalled = false;
                        values.push(undefined);
                        remaining++;
                        C.resolve(promise).then(function(value) {
                            if (alreadyCalled) return;
                            alreadyCalled = true;
                            values[$index] = value;
                            --remaining || resolve(values);
                        }, reject);
                    });
                    --remaining || resolve(values);
                });
                if (result.e) reject(result.v);
                return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var reject = capability.reject;
                var result = perform(function() {
                    forOf(iterable, false, function(promise) {
                        C.resolve(promise).then(capability.resolve, reject);
                    });
                });
                if (result.e) reject(result.v);
                return capability.promise;
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.regexp.exec.js":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var regexpExec = __webpack_require__( /*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
        __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js")({
            target: 'RegExp',
            proto: true,
            forced: regexpExec !== /./.exec
        }, {
            exec: regexpExec
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.regexp.flags.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // 21.2.5.3 get RegExp.prototype.flags()
        if (__webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
            configurable: true,
            get: __webpack_require__( /*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.regexp.search.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";


        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var sameValue = __webpack_require__( /*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
        var regExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

        // @@search logic
        __webpack_require__( /*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function(defined, SEARCH, $search, maybeCallNative) {
            return [
                // `String.prototype.search` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.search
                function search(regexp) {
                    var O = defined(this);
                    var fn = regexp == undefined ? undefined : regexp[SEARCH];
                    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
                },
                // `RegExp.prototype[@@search]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
                function(regexp) {
                    var res = maybeCallNative($search, regexp, this);
                    if (res.done) return res.value;
                    var rx = anObject(regexp);
                    var S = String(this);
                    var previousLastIndex = rx.lastIndex;
                    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
                    var result = regExpExec(rx, S);
                    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
                    return result === null ? -1 : result.index;
                }
            ];
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.regexp.split.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";


        var isRegExp = __webpack_require__( /*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
        var advanceStringIndex = __webpack_require__( /*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
        var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
        var callRegExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
        var regexpExec = __webpack_require__( /*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
        var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
        var $min = Math.min;
        var $push = [].push;
        var $SPLIT = 'split';
        var LENGTH = 'length';
        var LAST_INDEX = 'lastIndex';
        var MAX_UINT32 = 0xffffffff;

        // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
        var SUPPORTS_Y = !fails(function() { RegExp(MAX_UINT32, 'y'); });

        // @@split logic
        __webpack_require__( /*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function(defined, SPLIT, $split, maybeCallNative) {
            var internalSplit;
            if (
                'abbc' [$SPLIT](/(b)*/)[1] == 'c' ||
                'test' [$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                'ab' [$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                '.' [$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                '.' [$SPLIT](/()()/)[LENGTH] > 1 ||
                '' [$SPLIT](/.?/)[LENGTH]
            ) {
                // based on es5-shim implementation, need to rework it
                internalSplit = function(separator, limit) {
                    var string = String(this);
                    if (separator === undefined && limit === 0) return [];
                    // If `separator` is not a regex, use native split
                    if (!isRegExp(separator)) return $split.call(string, separator, limit);
                    var output = [];
                    var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') +
                        (separator.sticky ? 'y' : '');
                    var lastLastIndex = 0;
                    var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    var separatorCopy = new RegExp(separator.source, flags + 'g');
                    var match, lastIndex, lastLength;
                    while (match = regexpExec.call(separatorCopy, string)) {
                        lastIndex = separatorCopy[LAST_INDEX];
                        if (lastIndex > lastLastIndex) {
                            output.push(string.slice(lastLastIndex, match.index));
                            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                            lastLength = match[0][LENGTH];
                            lastLastIndex = lastIndex;
                            if (output[LENGTH] >= splitLimit) break;
                        }
                        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                    }
                    if (lastLastIndex === string[LENGTH]) {
                        if (lastLength || !separatorCopy.test('')) output.push('');
                    } else output.push(string.slice(lastLastIndex));
                    return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                };
                // Chakra, V8
            } else if ('0' [$SPLIT](undefined, 0)[LENGTH]) {
                internalSplit = function(separator, limit) {
                    return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
                };
            } else {
                internalSplit = $split;
            }

            return [
                // `String.prototype.split` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.split
                function split(separator, limit) {
                    var O = defined(this);
                    var splitter = separator == undefined ? undefined : separator[SPLIT];
                    return splitter !== undefined ?
                        splitter.call(separator, O, limit) :
                        internalSplit.call(String(O), separator, limit);
                },
                // `RegExp.prototype[@@split]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                //
                // NOTE: This cannot be properly polyfilled in engines that don't support
                // the 'y' flag.
                function(regexp, limit) {
                    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
                    if (res.done) return res.value;

                    var rx = anObject(regexp);
                    var S = String(this);
                    var C = speciesConstructor(rx, RegExp);

                    var unicodeMatching = rx.unicode;
                    var flags = (rx.ignoreCase ? 'i' : '') +
                        (rx.multiline ? 'm' : '') +
                        (rx.unicode ? 'u' : '') +
                        (SUPPORTS_Y ? 'y' : 'g');

                    // ^(? + rx + ) is needed, in combination with some S slicing, to
                    // simulate the 'y' flag.
                    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                    if (lim === 0) return [];
                    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                    var p = 0;
                    var q = 0;
                    var A = [];
                    while (q < S.length) {
                        splitter.lastIndex = SUPPORTS_Y ? q : 0;
                        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                        var e;
                        if (
                            z === null ||
                            (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
                        ) {
                            q = advanceStringIndex(S, q, unicodeMatching);
                        } else {
                            A.push(S.slice(p, q));
                            if (A.length === lim) return A;
                            for (var i = 1; i <= z.length - 1; i++) {
                                A.push(z[i]);
                                if (A.length === lim) return A;
                            }
                            q = p = e;
                        }
                    }
                    A.push(S.slice(p));
                    return A;
                }
            ];
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.regexp.to-string.js":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        __webpack_require__( /*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var $flags = __webpack_require__( /*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
        var TO_STRING = 'toString';
        var $toString = /./ [TO_STRING];

        var define = function(fn) {
            __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
        };

        // 21.2.5.14 RegExp.prototype.toString()
        if (__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
            define(function toString() {
                var R = anObject(this);
                return '/'.concat(R.source, '/',
                    'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
            });
            // FF44- RegExp#toString has a wrong name
        } else if ($toString.name != TO_STRING) {
            define(function toString() {
                return $toString.call(this);
            });
        }


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.string.iterator.js":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        var $at = __webpack_require__( /*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__( /*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function(iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return { value: undefined, done: true };
            point = $at(O, index);
            this._i += point.length;
            return { value: point, done: false };
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es6.symbol.js":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/es6.symbol.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";

        // ECMAScript 6 symbols shim
        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
        var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
        var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
        var META = __webpack_require__( /*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
        var $fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
        var shared = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
        var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
        var wks = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
        var wksExt = __webpack_require__( /*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
        var wksDefine = __webpack_require__( /*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
        var enumKeys = __webpack_require__( /*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
        var isArray = __webpack_require__( /*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
        var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
        var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
        var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
        var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
        var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
        var _create = __webpack_require__( /*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
        var gOPNExt = __webpack_require__( /*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
        var $GOPD = __webpack_require__( /*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
        var $GOPS = __webpack_require__( /*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
        var $DP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
        var $keys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = 'prototype';
        var HIDDEN = wks('_hidden');
        var TO_PRIMITIVE = wks('toPrimitive');
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared('symbol-registry');
        var AllSymbols = shared('symbols');
        var OPSymbols = shared('op-symbols');
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
        var QObject = global.QObject;
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
            return _create(dP({}, 'a', {
                get: function() { return dP(this, 'a', { value: 7 }).a; }
            })).a != 7;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;

        var wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
        };

        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
            return typeof it == 'symbol';
        } : function(it) {
            return it instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, { enumerable: createDesc(0, false) });
                }
                return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P));
            var i = 0;
            var l = keys.length;
            var key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            }
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto;
            var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
            }
            return result;
        };

        // 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function(value) {
                    if (this === ObjectProto) $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
                return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                return this._k;
            });

            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__( /*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__( /*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
            $GOPS.f = $getOwnPropertySymbols;

            if (DESCRIPTORS && !__webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
                redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
            }

            wksExt.f = function(name) {
                return wrap(wks(name));
            };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

        for (var es6Symbols = (
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
            ).split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
            // 19.4.2.1 Symbol.for(key)
            'for': function(key) {
                return has(SymbolRegistry, key += '') ?
                    SymbolRegistry[key] :
                    SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                for (var key in SymbolRegistry)
                    if (SymbolRegistry[key] === sym) return key;
            },
            useSetter: function() { setter = true; },
            useSimple: function() { setter = false; }
        });

        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        });

        // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443
        var FAILS_ON_PRIMITIVES = $fails(function() { $GOPS.f(1); });

        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
            getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                return $GOPS.f(toObject(it));
            }
        });

        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
        })), 'JSON', {
            stringify: function stringify(it) {
                var args = [it];
                var i = 1;
                var replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                $replacer = replacer = args[1];
                if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                if (!isArray(replacer)) replacer = function(key, value) {
                    if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });

        // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, 'Symbol');
        // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, 'Math', true);
        // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, 'JSON', true);


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es7.object.entries.js":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-values-entries
        var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
        var $entries = __webpack_require__( /*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

        $export($export.S, 'Object', {
            entries: function entries(it) {
                return $entries(it);
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es7.object.values.js":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es7.object.values.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-values-entries
        var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
        var $values = __webpack_require__( /*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

        $export($export.S, 'Object', {
            values: function values(it) {
                return $values(it);
            }
        });


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
      \*******************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


        /***/
    }),

    /***/
    "./node_modules/core-js/modules/web.dom.iterable.js":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var $iterators = __webpack_require__( /*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
        var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
        var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
        var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
        var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
        var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
        var wks = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
        var ITERATOR = wks('iterator');
        var TO_STRING_TAG = wks('toStringTag');
        var ArrayValues = Iterators.Array;

        var DOMIterables = {
            CSSRuleList: true, // TODO: Not spec compliant, should be false.
            CSSStyleDeclaration: false,
            CSSValueList: false,
            ClientRectList: false,
            DOMRectList: false,
            DOMStringList: false,
            DOMTokenList: true,
            DataTransferItemList: false,
            FileList: false,
            HTMLAllCollection: false,
            HTMLCollection: false,
            HTMLFormElement: false,
            HTMLSelectElement: false,
            MediaList: true, // TODO: Not spec compliant, should be false.
            MimeTypeArray: false,
            NamedNodeMap: false,
            NodeList: true,
            PaintRequestList: false,
            Plugin: false,
            PluginArray: false,
            SVGLengthList: false,
            SVGNumberList: false,
            SVGPathSegList: false,
            SVGPointList: false,
            SVGStringList: false,
            SVGTransformList: false,
            SourceBufferList: false,
            StyleSheetList: true, // TODO: Not spec compliant, should be false.
            TextTrackCueList: false,
            TextTrackList: false,
            TouchList: false
        };

        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
            var NAME = collections[i];
            var explicit = DOMIterables[NAME];
            var Collection = global[NAME];
            var proto = Collection && Collection.prototype;
            var key;
            if (proto) {
                if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = ArrayValues;
                if (explicit)
                    for (key in $iterators)
                        if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
        }


        /***/
    }),

    /***/
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./sass/main.scss":
    /*!***************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--7-2!./node_modules/postcss-loader/src??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--7-4!./sass/main.scss ***!
      \***************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        // extracted by mini-css-extract-plugin

        /***/
    }),

    /***/
    "./node_modules/regenerator-runtime/runtime.js":
    /*!*****************************************************!*\
      !*** ./node_modules/regenerator-runtime/runtime.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var runtime = (function(exports) {
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
            IteratorPrototype[iteratorSymbol] = function() {
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
                return ctor ?
                    ctor === GeneratorFunction ||
                    // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    (ctor.displayName || ctor.name) === "GeneratorFunction" :
                    false;
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

            function AsyncIterator(generator) {
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
                            return Promise.resolve(value.__await).then(function(value) {
                                invoke("next", value, resolve, reject);
                            }, function(err) {
                                invoke("throw", err, resolve, reject);
                            });
                        }

                        return Promise.resolve(value).then(function(unwrapped) {
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
                        return new Promise(function(resolve, reject) {
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
            AsyncIterator.prototype[asyncIteratorSymbol] = function() {
                return this;
            };
            exports.AsyncIterator = AsyncIterator;

            // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.
            exports.async = function(innerFn, outerFn, self, tryLocsList) {
                var iter = new AsyncIterator(
                    wrap(innerFn, outerFn, self, tryLocsList)
                );

                return exports.isGeneratorFunction(outerFn) ?
                    iter // If outerFn is a generator, return the full iterator.
                    :
                    iter.next().then(function(result) {
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
                            state = context.done ?
                                GenStateCompleted :
                                GenStateSuspendedYield;

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

                if (!info) {
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
                        var i = -1,
                            next = function next() {
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

                        return !!caught;
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


        /***/
    }),

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";


        var isOldIE = function isOldIE() {
            var memo;
            return function memorize() {
                if (typeof memo === 'undefined') {
                    // Test for IE <= 9 as proposed by Browserhacks
                    // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                    // Tests for existence of standard globals is to allow style-loader
                    // to operate correctly into non-standard environments
                    // @see https://github.com/webpack-contrib/style-loader/issues/177
                    memo = Boolean(window && document && document.all && !window.atob);
                }

                return memo;
            };
        }();

        var getTarget = function getTarget() {
            var memo = {};
            return function memorize(target) {
                if (typeof memo[target] === 'undefined') {
                    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                        try {
                            // This will throw an exception if access to iframe is blocked
                            // due to cross-origin restrictions
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            // istanbul ignore next
                            styleTarget = null;
                        }
                    }

                    memo[target] = styleTarget;
                }

                return memo[target];
            };
        }();

        var stylesInDom = {};

        function modulesToDom(moduleId, list, options) {
            for (var i = 0; i < list.length; i++) {
                var part = {
                    css: list[i][1],
                    media: list[i][2],
                    sourceMap: list[i][3]
                };

                if (stylesInDom[moduleId][i]) {
                    stylesInDom[moduleId][i](part);
                } else {
                    stylesInDom[moduleId].push(addStyle(part, options));
                }
            }
        }

        function insertStyleElement(options) {
            var style = document.createElement('style');
            var attributes = options.attributes || {};

            if (typeof attributes.nonce === 'undefined') {
                var nonce = true ? __webpack_require__.nc : undefined;

                if (nonce) {
                    attributes.nonce = nonce;
                }
            }

            Object.keys(attributes).forEach(function(key) {
                style.setAttribute(key, attributes[key]);
            });

            if (typeof options.insert === 'function') {
                options.insert(style);
            } else {
                var target = getTarget(options.insert || 'head');

                if (!target) {
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                }

                target.appendChild(style);
            }

            return style;
        }

        function removeStyleElement(style) {
            // istanbul ignore if
            if (style.parentNode === null) {
                return false;
            }

            style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */


        var replaceText = function replaceText() {
            var textStore = [];
            return function replace(index, replacement) {
                textStore[index] = replacement;
                return textStore.filter(Boolean).join('\n');
            };
        }();

        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? '' : obj.css; // For old IE

            /* istanbul ignore if  */

            if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;

                if (childNodes[index]) {
                    style.removeChild(childNodes[index]);
                }

                if (childNodes.length) {
                    style.insertBefore(cssNode, childNodes[index]);
                } else {
                    style.appendChild(cssNode);
                }
            }
        }

        function applyToTag(style, options, obj) {
            var css = obj.css;
            var media = obj.media;
            var sourceMap = obj.sourceMap;

            if (media) {
                style.setAttribute('media', media);
            } else {
                style.removeAttribute('media');
            }

            if (sourceMap && btoa) {
                css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
            } // For old IE

            /* istanbul ignore if  */


            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.firstChild) {
                    style.removeChild(style.firstChild);
                }

                style.appendChild(document.createTextNode(css));
            }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
            var style;
            var update;
            var remove;

            if (options.singleton) {
                var styleIndex = singletonCounter++;
                style = singleton || (singleton = insertStyleElement(options));
                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else {
                style = insertStyleElement(options);
                update = applyToTag.bind(null, style, options);

                remove = function remove() {
                    removeStyleElement(style);
                };
            }

            update(obj);
            return function updateStyle(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                        return;
                    }

                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }

        module.exports = function(moduleId, list, options) {
            options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page

            if (!options.singleton && typeof options.singleton !== 'boolean') {
                options.singleton = isOldIE();
            }

            moduleId = options.base ? moduleId + options.base : moduleId;
            list = list || [];

            if (!stylesInDom[moduleId]) {
                stylesInDom[moduleId] = [];
            }

            modulesToDom(moduleId, list, options);
            return function update(newList) {
                newList = newList || [];

                if (Object.prototype.toString.call(newList) !== '[object Array]') {
                    return;
                }

                if (!stylesInDom[moduleId]) {
                    stylesInDom[moduleId] = [];
                }

                modulesToDom(moduleId, newList, options);

                for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
                    stylesInDom[moduleId][j]();
                }

                stylesInDom[moduleId].length = newList.length;

                if (stylesInDom[moduleId].length === 0) {
                    delete stylesInDom[moduleId];
                }
            };
        };

        /***/
    }),

    /***/
    "./sass/main.scss":
    /*!************************!*\
      !*** ./sass/main.scss ***!
      \************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        var api = __webpack_require__( /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
        var content = __webpack_require__( /*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--7-2!../node_modules/postcss-loader/src??ref--7-3!../node_modules/sass-loader/dist/cjs.js??ref--7-4!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./sass/main.scss");

        content = content.__esModule ? content.default : content;

        if (typeof content === 'string') {
            content = [
                [module.i, content, '']
            ];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(module.i, content, options);

        var exported = content.locals ? content.locals : {};



        module.exports = exported;

        /***/
    })

    /******/
});