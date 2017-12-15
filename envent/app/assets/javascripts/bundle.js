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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 296);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react/index.js'\n    at Error (native)");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/moment/moment.js'\n    at Error (native)");

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_map_api__ = __webpack_require__(556);


const RECEIVE_MAP = "RECEIVE_EVENT";
/* harmony export (immutable) */ __webpack_exports__["b"] = RECEIVE_MAP;

const REMOVE_MAP = "REMOVE_MAP";
/* harmony export (immutable) */ __webpack_exports__["d"] = REMOVE_MAP;

const RECEIVE_MAP_ERRORS = "RECEIVE_MAP_ERRORS";
/* harmony export (immutable) */ __webpack_exports__["c"] = RECEIVE_MAP_ERRORS;

const CLEAR_MAP_ERRORS = "CLEAR_MAP_ERRORS";
/* harmony export (immutable) */ __webpack_exports__["a"] = CLEAR_MAP_ERRORS;


const receiveMap = map => ({
  type: RECEIVE_MAP,
  map
});

const receiveMapErrors = errors => ({
  type: RECEIVE_MAP_ERRORS,
  errors
});

const removeMap = mapId => ({
  type: REMOVE_MAP,
  mapId
});

const getMap = id => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_map_api__["b" /* fetchMap */])(id).then(map => dispatch(receiveMap(map)), errors => dispatch(receiveMapErrors(errors.responseJSON)));
/* unused harmony export getMap */


const createMap = map => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_map_api__["c" /* postMap */])(map).then(map => dispatch(receiveMap(map)), errors => dispatch(receiveMapErrors(errors.responseJSON)));
/* unused harmony export createMap */


const deletePost = mapId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_map_api__["a" /* deleteMap */])(mapId).then(map => dispatch(removeMap(map)), errors => dispatch(receiveMapErrors(errors.responseJSON)));
/* unused harmony export deletePost */


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);




const Auth = ({ component: Component, path, loggedIn }) => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Route"], { path: path, render: props => !loggedIn ? __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Component, props) : __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Redirect"], { to: '/dashboard' }) });

const Protected = ({ component: Component, path, loggedIn }) => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Route"], { path: path, render: props => loggedIn ? __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Component, props) : __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Redirect"], { to: '/' }) });

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const AuthRoute = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Auth));
/* harmony export (immutable) */ __webpack_exports__["a"] = AuthRoute;

const ProtectedRoute = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Protected));
/* harmony export (immutable) */ __webpack_exports__["b"] = ProtectedRoute;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-router/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-dom/index.js'\n    at Error (native)");

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (({ errors }) => {
  if (errors) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      "ul",
      { className: "errors" },
      errors.map(error => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        "li",
        { className: "alert alert-danger", key: error },
        error
      ))
    );
  }
  return null;
});

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-redux/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-router-dom/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_event_api__ = __webpack_require__(366);


const RECEIVE_EVENT = "RECEIVE_EVENT";
/* harmony export (immutable) */ __webpack_exports__["b"] = RECEIVE_EVENT;

const RECEIVE_EVENTS = "RECEIVE_EVENTS";
/* harmony export (immutable) */ __webpack_exports__["c"] = RECEIVE_EVENTS;

const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
/* harmony export (immutable) */ __webpack_exports__["d"] = RECEIVE_EVENT_ERRORS;

const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";
/* harmony export (immutable) */ __webpack_exports__["a"] = CLEAR_EVENT_ERRORS;


// actions
const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

// thunk action creators
const createEvent = event => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_event_api__["c" /* postEvent */])(event).then(dbEvent => dispatch(receiveEvent(dbEvent)), errors => dispatch(receiveEventErrors(errors.responseJSON)));
/* harmony export (immutable) */ __webpack_exports__["e"] = createEvent;


const fetchEvent = eventId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_event_api__["a" /* getEvent */])(eventId).then(event => dispatch(receiveEvent(event)));
/* harmony export (immutable) */ __webpack_exports__["f"] = fetchEvent;


const fetchEvents = userId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_event_api__["b" /* getEvents */])(userId).then(events => dispatch(receiveEvents(events)));
/* harmony export (immutable) */ __webpack_exports__["g"] = fetchEvents;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_form_container__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_index_container__ = __webpack_require__(396);




class Schedule extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__schedule_form_container__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__schedule_index_container__["a" /* default */], null)
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Schedule;


/***/ }),

/***/ 251:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-bootstrap/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_schedule_api__ = __webpack_require__(395);


const RECEIVE_SCHEDULE_ITEM = "RECEIVE_SCHEDULE_ITEM";
/* harmony export (immutable) */ __webpack_exports__["b"] = RECEIVE_SCHEDULE_ITEM;

const RECEIVE_SCHEDULE_ITEMS = "RECEIVE_SCHEDULE_ITEMS";
/* harmony export (immutable) */ __webpack_exports__["c"] = RECEIVE_SCHEDULE_ITEMS;

const DELETE_SCHEDULE_ITEM = "DELETE_SCHEDULE_ITEM";
/* harmony export (immutable) */ __webpack_exports__["a"] = DELETE_SCHEDULE_ITEM;


// actions
const receiveScheduleItem = scheduleItem => ({
  type: RECEIVE_SCHEDULE_ITEM,
  scheduleItem
});

const receiveScheduleItems = scheduleItems => ({
  type: RECEIVE_SCHEDULE_ITEMS,
  scheduleItems
});

const removeScheduleItem = scheduleItemId => ({
  type: DELETE_SCHEDULE_ITEM,
  scheduleItemId
});

// thunk action creators
const createScheduleItem = (eventId, scheduleItem) => dispatch => {
  return Object(__WEBPACK_IMPORTED_MODULE_0__util_schedule_api__["d" /* postScheduleItem */])(eventId, scheduleItem).then(newScheduleItem => dispatch(receiveScheduleItem(newScheduleItem)));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = createScheduleItem;


const fetchScheduleItem = scheduleItemId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_schedule_api__["b" /* getScheduleItem */])(scheduleItemId).then(scheduleItem => dispatch(receiveScheduleItem(scheduleItem)));
/* harmony export (immutable) */ __webpack_exports__["f"] = fetchScheduleItem;


const fetchScheduleItems = eventId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_schedule_api__["c" /* getScheduleItems */])(eventId).then(scheduleItems => dispatch(receiveScheduleItems(scheduleItems)));
/* harmony export (immutable) */ __webpack_exports__["g"] = fetchScheduleItems;


const destroyScheduleItem = scheduleItemId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_schedule_api__["a" /* deleteScheduleItem */])(scheduleItemId).then(() => dispatch(removeScheduleItem(scheduleItemId)));
/* harmony export (immutable) */ __webpack_exports__["e"] = destroyScheduleItem;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_root__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store_js__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_scheduleItem__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_news__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_info__ = __webpack_require__(78);









document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = Object(__WEBPACK_IMPORTED_MODULE_3__store_store_js__["a" /* default */])(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  __WEBPACK_IMPORTED_MODULE_1_react_dom__["default"].render(__WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__components_root__["a" /* default */], { store: store }), root);

  window.dispatch = store.dispatch;
  window.createScheduleItem = __WEBPACK_IMPORTED_MODULE_4__actions_scheduleItem__["d" /* createScheduleItem */];
  window.fetchScheduleItem = __WEBPACK_IMPORTED_MODULE_4__actions_scheduleItem__["f" /* fetchScheduleItem */];
  window.fetchScheduleItems = __WEBPACK_IMPORTED_MODULE_4__actions_scheduleItem__["g" /* fetchScheduleItems */];
  window.destroyScheduleItem = __WEBPACK_IMPORTED_MODULE_4__actions_scheduleItem__["e" /* destroyScheduleItem */];
  window.fetchEvent = __WEBPACK_IMPORTED_MODULE_5__actions_event__["f" /* fetchEvent */];
  window.fetchEvents = __WEBPACK_IMPORTED_MODULE_5__actions_event__["g" /* fetchEvents */];

  window.createNews = __WEBPACK_IMPORTED_MODULE_6__actions_news__["a" /* createNews */];
  window.fetchSingleNews = __WEBPACK_IMPORTED_MODULE_6__actions_news__["c" /* fetchSingleNews */];
  window.fetchNews = __WEBPACK_IMPORTED_MODULE_6__actions_news__["b" /* fetchNews */];
  window.updateNews = __WEBPACK_IMPORTED_MODULE_6__actions_news__["e" /* updateNews */];
  window.removeNews = __WEBPACK_IMPORTED_MODULE_6__actions_news__["d" /* removeNews */];

  window.createInfo = __WEBPACK_IMPORTED_MODULE_7__actions_info__["b" /* createInfo */];
  window.fetchInfo = __WEBPACK_IMPORTED_MODULE_7__actions_info__["c" /* fetchInfo */];
  window.updateInfo = __WEBPACK_IMPORTED_MODULE_7__actions_info__["d" /* updateInfo */];
});

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(355);





/* harmony default export */ __webpack_exports__["a"] = (props => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
  { store: props.store },
  __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["HashRouter"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* default */], null)
  )
));

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_route_util_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_page_jsx__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_container__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_app_builder__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_event__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schedule_schedule__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_landing_page__ = __webpack_require__(410);











/* harmony default export */ __webpack_exports__["a"] = (() => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__util_route_util_js__["b" /* ProtectedRoute */], { path: '/', component: __WEBPACK_IMPORTED_MODULE_4__header_header_container__["a" /* default */] }),
  __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__util_route_util_js__["b" /* ProtectedRoute */], { path: '/dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__util_route_util_js__["b" /* ProtectedRoute */], { exact: true, path: '/event/', component: __WEBPACK_IMPORTED_MODULE_7__event_event__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__util_route_util_js__["b" /* ProtectedRoute */], { path: '/event_builder', component: __WEBPACK_IMPORTED_MODULE_5__builder_app_builder__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__util_route_util_js__["a" /* AuthRoute */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_9__home_landing_page__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__util_route_util_js__["a" /* AuthRoute */], { exact: true, path: '/signup', component: __WEBPACK_IMPORTED_MODULE_3__landing_page_jsx__["a" /* default */] })
  )
));

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_session_form_container__ = __webpack_require__(357);



/* harmony default export */ __webpack_exports__["a"] = (() => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__session_session_form_container__["a" /* default */], null)
));

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session_form__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_session__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);





const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.params.signup ? __WEBPACK_IMPORTED_MODULE_1__actions_session__["f" /* signupUser */] : __WEBPACK_IMPORTED_MODULE_1__actions_session__["d" /* login */];
  return {
    action: user => dispatch(action(user)),
    handleUpdate: (field, e) => dispatch(ownProps.handleUpdate(field, e))
  };
};

const mapSateToProps = (state, ownProps) => {
  return {
    errors: state.session.errors,
    type: ownProps.match.params.signup ? "signup" : "login"
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapSateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_0__session_form__["a" /* default */])));

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_errors__ = __webpack_require__(130);




class SessionForm extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  title() {
    return this.props.type === "login" ? "Log In" : "Sign Up";
  }

  linkToOtherForm() {
    let url = this.props.type === "login" ? "signup" : "";
    let text = this.props.type === "login" ? "Sign Up" : "Login";
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
      { to: url },
      text
    );
  }

  handleSubmit() {
    this.props.action(this.state);
  }

  handleChange(feild, e) {
    this.setState({ [feild]: e.target.value });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'form',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__misc_errors__["a" /* default */], { errors: this.props.errors }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'email' },
            'Email:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
            id: 'email',
            type: 'text',
            value: this.state.email,
            placeholder: 'email',
            onChange: e => this.props.handleUpdate("email", e)
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'password' },
            'Password:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
            id: 'password',
            type: 'password',
            value: this.state.password,
            placeholder: 'password',
            onChange: e => this.props.handleUpdate("password", e)
          })
        )
      )
    );
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SessionForm;


/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const postUser = formUser => $.ajax({
  method: 'POST',
  url: 'api/users',
  data: { user: formUser }
});
/* harmony export (immutable) */ __webpack_exports__["c"] = postUser;


const loginUser = formUser => $.ajax({
  method: 'POST',
  url: 'api/session',
  data: { user: formUser }
});
/* harmony export (immutable) */ __webpack_exports__["a"] = loginUser;


const logoutUser = () => $.ajax({
  method: 'DELETE',
  url: 'api/session'
});
/* harmony export (immutable) */ __webpack_exports__["b"] = logoutUser;


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_session_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);





const mapStateToProps = state => ({ currentUser: state.session.currentUser });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_session_js__["e" /* logout */])())
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */]));

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      "nav",
      { className: "navbar navbar-toggleable-md navbar-light bg-faded" },
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        "button",
        { className: "navbar-toggler navbar-toggler-right", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", { className: "navbar-toggler-icon" })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        "a",
        { className: "navbar-brand", href: "#" },
        "Envent"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        "div",
        { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          "ul",
          { className: "navbar-nav mr-auto" },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            "li",
            { className: "nav-item active" },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
              "a",
              { className: "nav-link", href: "#" },
              "Home ",
              __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                "span",
                { className: "sr-only" },
                "(current)"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            "li",
            { className: "nav-item" },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
              "a",
              { className: "nav-link", href: "#" },
              "Link"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            "li",
            { className: "nav-item" },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
              "a",
              { className: "nav-link disabled", href: "#" },
              "Disabled"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          "button",
          {
            className: "btn btn-secondary",
            onClick: this.props.logout },
          "Log Out"
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_bar_container__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_event_form_container__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule_container__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_route_util__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news_container__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news_container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__news_news_container__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info_info_form_container__ = __webpack_require__(401);









class AppBuilder extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'h2',
        null,
        'Build Your App'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__progress_bar_container__["a" /* default */], { data: [3, 5] }),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__util_route_util__["b" /* ProtectedRoute */], { path: '/event_builder/:eventTag/info', component: __WEBPACK_IMPORTED_MODULE_7__info_info_form_container__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__util_route_util__["b" /* ProtectedRoute */], { path: '/event_builder/:eventTag/schedule', component: __WEBPACK_IMPORTED_MODULE_4__schedule_schedule_container__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__util_route_util__["b" /* ProtectedRoute */], { path: '/event_builder/:eventTag/news', component: __WEBPACK_IMPORTED_MODULE_6__news_news_container___default.a }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__util_route_util__["b" /* ProtectedRoute */], { path: '/event_builder', component: __WEBPACK_IMPORTED_MODULE_3__event_event_form_container__["a" /* default */] })
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppBuilder;


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_bar__ = __webpack_require__(364);



const mapStateToProps = state => ({
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__progress_bar__["a" /* default */]));

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);



class ProgressBar extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor() {
    super();

    this.state = {
      barStyle: { width: "0%" }
    };
  }

  barWidth() {
    return { width: this.props.data[0] / this.props.data[1] * 100 + "%" };
  }
  componentDidMount() {
    window.setTimeout(() => this.setState({ barStyle: this.barWidth() }), 1000);
  }

  render() {
    let display;
    let { currentEvent } = this.props;
    let { display_elements } = currentEvent;
    if (display_elements) {
      display = display_elements.map(el => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
        {
          key: el,
          to: `/event_builder/${currentEvent.tag}/${el}`
        },
        `${el}`
      ));
    }

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      { className: 'nav-item-data' },
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { className: 'progress-bar-outer' },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'progress-bar-inner',
          style: this.state.barStyle })
      ),
      display
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;


/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_event_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_form__ = __webpack_require__(367);




const mapStateToProps = state => ({ errors: state.errors.eventErrors });

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_event_js__["e" /* createEvent */])(event))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__event_form__["a" /* default */]));

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const postEvent = event => $.ajax({
  method: 'POST',
  url: 'api/events',
  data: { event }
});
/* harmony export (immutable) */ __webpack_exports__["c"] = postEvent;


const getEvent = eventTag => $.ajax({
  url: `/api/events/${eventTag}`
});
/* harmony export (immutable) */ __webpack_exports__["a"] = getEvent;


const getEvents = userId => $.ajax({
  url: `/api/events/`,
  data: { userId }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = getEvents;


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_errors__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_datepicker__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_datepicker_dist_react_datepicker_css__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_datepicker_dist_react_datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_datepicker_dist_react_datepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);








const modules = ["schedule", "news", "info", "message board", "map"];
const CLOUDINARY_UPLOAD_PRESET = 'umzpk5ol';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/trwong/image/upload';

class EventForm extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor() {
    super();
    this.state = {
      name: "",
      tag: "",
      img_url: "",
      location: '',
      message: '',
      start_date: Object(__WEBPACK_IMPORTED_MODULE_6_moment__["default"])(),
      end_date: Object(__WEBPACK_IMPORTED_MODULE_6_moment__["default"])()
    };

    this.modules = new Set();
  }

  handleChange(field, e) {
    if (field === 'modules') {
      let value = e.target.value;
      if (e.target.checked) {
        this.modules.add(value);
      } else {
        this.modules.delete(value);
      }
    }
    this.setState({ [field]: e.target.value });
  }

  handDateChange(field, date) {
    this.setState({ [field]: date });
  }

  handleSubmit() {
    let event = Object.assign({}, this.state);
    event["modules"] = Array.from(this.modules);
    event.start_date = this.state.start_date.format();
    event.end_date = this.state.end_date.format();
    this.props.createEvent(event);
    // this.props.history.push(`/event_builder/${event.tag}/${this.modules[0]}`);
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = __WEBPACK_IMPORTED_MODULE_3_superagent__["default"].post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'h2',
        null,
        ' Event Form'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'form',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__misc_errors__["a" /* default */], { errors: this.props.errors }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'event-name' },
            ' Name '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
            id: 'event-name',
            type: 'text',
            onChange: e => this.handleChange("name", e),
            placeholder: 'Event Name'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'event-tag' },
            'Tag'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
            id: 'event-tag',
            type: 'text',
            onChange: e => this.handleChange("tag", e),
            placeholder: 'Event Tag'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'event-location' },
            'Location'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
            id: 'event-location',
            type: 'text',
            onChange: e => this.handleChange("location", e),
            placeholder: 'Event Location'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'event-message' },
            'Message'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
            id: 'event-message',
            type: 'text',
            onChange: e => this.handleChange("message", e),
            placeholder: 'A custom event message'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'event-start' },
            'start date'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4_react_datepicker__["default"], {
            id: 'event-start',
            selected: this.state.start_date,
            onChange: e => this.handDateChange("start_date", e)
          }),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'label',
            { htmlFor: 'event-end' },
            'end date'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4_react_datepicker__["default"], {
            id: 'event-end',
            selected: this.state.end_date,
            onChange: e => this.handDateChange("end_date", e)
          })
        ),
        modules.map(module => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          { key: module },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { className: 'form-check' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
              'label',
              { className: 'form-check-label' },
              __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
                className: 'form-check-input',
                type: 'checkbox',
                value: module,
                onChange: e => this.handleChange("modules", e)
              }),
              module
            )
          )
        )),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_dropzone__["default"],
          {
            multiple: false,
            accept: 'image/*',
            onDrop: this.onImageDrop.bind(this) },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'p',
            null,
            'Drop an image or click to select a file to upload.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: this.state.img_url }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'fieldset',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'button',
            {
              className: 'btn btn-primary',
              onClick: this.handleSubmit.bind(this) },
            'Create Event'
          )
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventForm;


/***/ }),

/***/ 368:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-dropzone/dist/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/superagent/lib/client.js'\n    at Error (native)");

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-datepicker/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(390)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./react-datepicker.css", function() {
			var newContent = require("!!../../css-loader/index.js!./react-datepicker.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/react-datepicker/dist/react-datepicker.css'\n    at Error (native)");

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/style-loader/lib/addStyles.js'\n    at Error (native)");

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(250);



const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__schedule__["a" /* default */]));

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_form__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_scheduleItem__ = __webpack_require__(26);




const mapStateToProps = state => ({
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({
  createScheduleItem: (eventId, schedule_item) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_scheduleItem__["d" /* createScheduleItem */])(eventId, schedule_item))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__schedule_form__["a" /* default */]));

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Schedule extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      start_time: "",
      end_time: "",
      feature_id: "",
      location: "",
      image: undefined,
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  // if (newProps.currentEvent.id !== this.props.currentEvent.id) {
  //   this.setState({ event_id: newProps.currentEvent.id });
  // }
  // }

  handleChange(title) {
    return event => this.setState({ [title]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createScheduleItem(this.props.currentEvent.id, this.state);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        "h2",
        null,
        " Schedule Form "
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        "form",
        { action: "" },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onChange: this.handleChange("title"),
          type: "text",
          name: "title",
          placeholder: "Title" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onChange: this.handleChange("start_time"),
          type: "datetime-local",
          name: "start_time",
          placeholder: "Start Time" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onChange: this.handleChange("end_time"),
          type: "datetime-local",
          name: "end_time",
          placeholder: "End Time" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onChange: this.handleChange("feature_id"),
          type: "text",
          name: "feature_id",
          placeholder: "Feature(_id)" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onChange: this.handleChange("location"),
          type: "text",
          name: "location",
          placeholder: "Location" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onChange: this.handleChange("image"),
          type: "file",
          name: "image",
          placeholder: "Image" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onChange: this.handleChange("description"),
          type: "text",
          name: "description",
          placeholder: "Description" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          onClick: this.handleSubmit,
          type: "submit" })
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Schedule;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getScheduleItem = scheduleItemId => $.ajax({
  url: `/api/schedule_items/${scheduleItemId}`
});
/* harmony export (immutable) */ __webpack_exports__["b"] = getScheduleItem;


const getScheduleItems = eventId => $.ajax({
  url: `/api/events/${eventId}/schedule_items/`
});
/* harmony export (immutable) */ __webpack_exports__["c"] = getScheduleItems;


const postScheduleItem = (eventId, schedule_item) => $.ajax({
  method: 'POST',
  url: `api/events/${eventId}/schedule_items`,
  data: { schedule_item }
});
/* harmony export (immutable) */ __webpack_exports__["d"] = postScheduleItem;


const deleteScheduleItem = scheduleItemId => $.ajax({
  method: 'DELETE',
  url: `api/schedule_items/${scheduleItemId}`
});
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteScheduleItem;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_index__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_scheduleItem__ = __webpack_require__(26);




const mapStateToProps = state => ({
  scheduleItems: state.scheduleItems,
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({
  fetchScheduleItems: eventId => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_scheduleItem__["g" /* fetchScheduleItems */])(eventId))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__schedule_index__["a" /* default */]));

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_index_item_container__ = __webpack_require__(398);



class ScheduleIndex extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchScheduleItems(this.props.currentEvent.id);
  // }

  componentWillReceiveProps(newProps) {
    if (newProps.currentEvent.id !== this.props.currentEvent.id) {
      this.props.fetchScheduleItems(newProps.currentEvent.id);
    }
  }

  render() {
    let { currentEvent } = this.props;
    if (currentEvent === undefined || currentEvent.scheduleItemsArray === undefined) {
      return null;
    }
    let display = this.props.currentEvent.scheduleItemsArray.map(id => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__schedule_index_item_container__["a" /* default */], {
      key: id,
      scheduleItemId: id
    }));

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'h5',
        null,
        'Current Schedule Items'
      ),
      display
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScheduleIndex;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_index_item__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_scheduleItem__ = __webpack_require__(26);




const mapStateToProps = state => ({
  // scheduleItems: state.scheduleItems,
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({
  destroyScheduleItem: scheduleItemId => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_scheduleItem__["e" /* destroyScheduleItem */])(scheduleItemId))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__schedule_index_item__["a" /* default */]));

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class ScheduleIndexItem extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    let id_arr = this.props.currentEvent.scheduleItems;
    let scheduleItem = id_arr[this.props.scheduleItemId];
    let {
      title,
      start_time,
      end_time,
      feature_id,
      location,
      img_url,
      description
    } = scheduleItem;

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      'title: ',
      title,
      'start_time: ',
      start_time,
      'end_time: ',
      end_time,
      'feature_id: ',
      feature_id,
      'location: ',
      location,
      'img_url: ',
      img_url,
      'description: ',
      description,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'button',
        null,
        'Update'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'button',
        {
          onClick: () => this.props.destroyScheduleItem(this.props.scheduleItemId)
        },
        'Delete'
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScheduleIndexItem;


/***/ }),

/***/ 400:
/***/ (function(module, exports) {

// import { connect } from 'react-redux';
// import { createEvent } from '../../actions/event.js';
// import News from './news';

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = dispatch => ({
// });

// export default connect(mapStateToProps, mapDispatchToProps)(News);

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_form__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_info__ = __webpack_require__(78);




const mapStateToProps = state => ({
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({
  fetchInfo: eventId => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_info__["c" /* fetchInfo */])(eventId)),
  createInfo: (eventId, info) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_info__["b" /* createInfo */])(eventId, info))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__info_form__["a" /* default */]));

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class InfoForm extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: "",
      end_date: "",
      location: "",
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchInfo(this.props.currentEvent.id);
  }

  handleChange(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createInfo(this.props.currentEvent.id, this.state);
  }

  render() {
    let { info } = this.props.currentEvent;
    if (info === {}) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      "div",
      null,
      "Info",
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        "form",
        { action: "" },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          "label",
          null,
          "Start Date:",
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
            onChange: this.handleChange("start_date"),
            type: "date",
            name: "start_date",
            id: "" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          "label",
          null,
          "End Date:",
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
            onChange: this.handleChange("end_date"),
            type: "date",
            name: "end_date",
            id: "" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          "label",
          null,
          "Location:",
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
            onChange: this.handleChange("location"),
            type: "text",
            name: "location",
            id: "" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          "label",
          null,
          "Admin Message:",
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("textarea", {
            onChange: this.handleChange("message"),
            name: "message",
            id: "",
            cols: "30",
            rows: "10" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
          type: "submit",
          value: "Save",
          onClick: this.handleSubmit })
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InfoForm;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const postInfo = (eventId, info) => $.ajax({
  method: 'POST',
  url: `api/events/${eventId}/info`,
  data: { info }
});
/* harmony export (immutable) */ __webpack_exports__["c"] = postInfo;


const getInfo = eventId => $.ajax({
  // harded coded '1' below, id isn't used to find info but is necessary for routing
  url: `/api/events/${eventId}/info/1`
});
/* harmony export (immutable) */ __webpack_exports__["a"] = getInfo;


const patchInfo = (eventId, info) => $.ajax({
  method: "PATCH",
  // harded coded '1' below, id isn't used to find info but is necessary for routing
  url: `/api/events/${eventId}/info/1`,
  data: { info }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = patchInfo;


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event_index_container__ = __webpack_require__(405);




/* harmony default export */ __webpack_exports__["a"] = (() => {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'h1',
      null,
      ' DASHBOARD'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
      { to: '/event_builder' },
      'Create An Event'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__event_event_index_container__["a" /* default */], null)
  );
});

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_event_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_index__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_event__ = __webpack_require__(22);





const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: userId => dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_event__["g" /* fetchEvents */])(userId))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__event_index__["a" /* default */]));

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_index_item_container__ = __webpack_require__(407);



class EventIndex extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents(this.props.currentUser.id);
  }

  render() {
    let { events } = this.props;
    let display;

    if (events === {}) {
      return null;
    }

    display = events.all_ids.map(eventId => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__event_index_item_container__["a" /* default */], {
      key: eventId,
      eventId: eventId }));

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'h5',
        null,
        'Your Events'
      ),
      display
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventIndex;


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_event_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_index_item__ = __webpack_require__(408);




const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__event_index_item__["a" /* default */]));

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class EventIndexItem extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.events.by_id === {}) {
      return null;
    }

    let {
      name, tag, img_url
    } = this.props.events.by_id[this.props.eventId];

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      "div",
      null,
      "Name: ",
      name,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null),
      "Tag: ",
      tag,
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null),
      "Image:",
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("img", {
        className: "event-index-picture",
        src: img_url,
        alt: "" })
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventIndexItem;


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Event extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      null,
      'Event'
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Event;


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_modal_container__ = __webpack_require__(564);





class HomeLandingPage extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalAction: "signup"
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(action = "signup") {
    this.setState({ modalOpen: true, modalAction: action });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      { className: 'home-landing-page-container' },
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'header',
        {
          className: 'landing-page-header-container' },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'h2',
          { className: 'logo' },
          'Envent'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'button',
            { onClick: () => this.openModal("login"), className: 'landing-page-home-link' },
            'LOG IN'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'button',
            { onClick: () => this.openModal("signup"), className: 'landing-page-create-button' },
            'CREATE YOUR APP'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { className: 'landing-page-main-container' },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          { className: 'landing-page-section-big' },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            null,
            'Innovate Your Event. Be Inspirational.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
              'strong',
              {
                className: 'landing-page-emphasis second-element'
              },
              'Take The Lead.'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          { className: 'landing-page-section-medium' },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'h2',
            null,
            'Create Amazing Experiences with'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'h2',
            { className: 'second-element' },
            'Your Own Custom Mobile Event App'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          { className: 'landing-page-section-small' },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'h3',
            null,
            'Engage participants. Interact with your audience. Create inspirin meetings'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'h3',
            { className: 'second-element' },
            'Your next successful event stars with Envent'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'button',
          { onClick: () => this.openModal("signup"), className: 'landing-page-create-button-large' },
          'CREATE YOUR APP'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__session_modal_container__["a" /* default */], {
        modalOpen: this.state.modalOpen,
        closeModal: this.closeModal,
        modalAction: this.state.modalAction
      }),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', {
        className: 'landing-page-background-image'
      }),
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', {
        className: 'landing-page-opaque-background'
      })
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HomeLandingPage;


/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_errors__ = __webpack_require__(130);





class SessionModal extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  title() {
    return this.props.type === "login" ? "Log In" : "Sign Up";
  }

  linkToOtherForm() {
    let url = this.props.type === "login" ? "signup" : "";
    let text = this.props.type === "login" ? "Sign Up" : "Login";
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
      { to: url },
      text
    );
  }

  handleSignUp() {
    this.props.signupUser(this.state);
  }

  handleLogIn() {
    this.props.login(this.state);
  }

  handleChange(field, e) {
    this.setState({ [field]: e.target.value });
  }

  render() {
    let title;
    let button;
    // if (this.props.modal)
    title = this.props.modalAction === "signup" ? "Sign Up" : "Log In";
    button = this.props.modalAction === "signup" ? __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
      {
        form: 'session-form',
        onClick: this.handleSignUp,
        bsStyle: 'primary'
      },
      'Sign Up'
    ) : __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
      {
        form: 'session-form',
        onClick: this.handleLogIn,
        bsStyle: 'primary'
      },
      'Log In'
    );

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      { className: 'static-modal' },
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"],
        { show: this.props.modalOpen, onHide: this.props.closeModal },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Header,
          { closeButton: true },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Title,
            null,
            title
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Body,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'form',
            { id: 'session-form' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__misc_errors__["a" /* default */], { errors: this.props.errors }),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
              'fieldset',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
                id: 'email',
                type: 'text',
                value: this.state.email,
                placeholder: 'Email',
                onChange: e => this.handleChange("email", e)
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
              'fieldset',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', {
                id: 'password',
                type: 'password',
                value: this.state.password,
                placeholder: 'Password',
                onChange: e => this.handleChange("password", e)
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Footer,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
            { onClick: this.props.closeModal },
            'Close'
          ),
          button
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SessionModal;


/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_root__ = __webpack_require__(553);




const middlewares = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk__["default"]];
if (true) {
  // must use 'require' (import only allowed at top of file)
  const { logger } = __webpack_require__(561);
  middlewares.push(logger);
}

/* harmony default export */ __webpack_exports__["a"] = (preloadedState => Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers_root__["a" /* default */], preloadedState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middlewares)));

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/redux-thunk/lib/index.js'\n    at Error (native)");

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_items__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__current_event__ = __webpack_require__(560);








/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
  session: __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */],
  currentEvent: __WEBPACK_IMPORTED_MODULE_6__current_event__["a" /* default */],
  errors: __WEBPACK_IMPORTED_MODULE_3__errors__["a" /* default */],
  events: __WEBPACK_IMPORTED_MODULE_2__events__["a" /* default */]
  // maps,
  // scheduleItems
}));

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_session__ = __webpack_require__(77);


/* harmony default export */ __webpack_exports__["a"] = ((state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_session__["b" /* RECEIVE_CURRENT_USER */]:
      return Object.assign({}, { currentUser: action.currentUser });
    case __WEBPACK_IMPORTED_MODULE_0__actions_session__["c" /* RECEIVE_SESSION_ERRORS */]:
      return Object.assign({}, { errors: action.errors });
    case __WEBPACK_IMPORTED_MODULE_0__actions_session__["a" /* CLEAR_SESSION_ERRORS */]:
      return Object.assign({}, state, { errors: null });
    default:
      return state;
  }
});

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_scheduleItem__ = __webpack_require__(26);




/* harmony default export */ __webpack_exports__["a"] = ((state = { all_ids: [], by_id: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let index;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_event__["b" /* RECEIVE_EVENT */]:
      index = newState.all_ids.indexOf(action.event.id);
      if (index > -1) {
        newState.all_ids.splice(index, 1);
      }
      newState.all_ids.unshift(action.event.id);

      newState.by_id[action.event.id] = action.event;

      return newState;
    // return Object.assign({}, state, {[action.event.id]: action.event});
    // case RECEIVE_MAP:
    //   newState = Object.assign({}, state);
    //   return newState;
    case __WEBPACK_IMPORTED_MODULE_1__actions_event__["c" /* RECEIVE_EVENTS */]:
      return action.events;
    // case RECEIVE_EVENT:
    //   return Object.assign({}, newState, {[action.event.id]: action.event});

    //   // don't think this is ever used
    // case RECEIVE_EVENTS:
    //   return action.events;

    // case RECEIVE_SCHEDULE_ITEM:
    //   newState[action.scheduleItem.event_id].scheduleItems[action.scheduleItem.id] = action.scheduleItem;

    //   index = newState[action.scheduleItem.event_id]
    //     .scheduleItemsArray
    //     .indexOf(action.scheduleItem.id);
    //   if (index > -1) {
    //     newState[action.scheduleItem.event_id].scheduleItemsArray.splice(index, 1);
    //   }
    //   newState[action.scheduleItem.event_id]
    //     .scheduleItemsArray
    //     .unshift(action.scheduleItem.id);

    //   return newState;

    // case RECEIVE_SCHEDULE_ITEMS:
    //   return;

    // case DELETE_SCHEDULE_ITEM:
    //   return;

    default:
      return state;
  }
});

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const postMap = map => $.ajax({
  method: 'POST',
  url: 'api/maps',
  data: { map }
});
/* harmony export (immutable) */ __webpack_exports__["c"] = postMap;


const deleteMap = id => $.ajax({
  method: 'DELETE',
  url: `api/maps/${id}`
});
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteMap;


const fetchMap = id => $.ajax({
  method: 'GET',
  url: `api/maps/${id}`
});
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchMap;


/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_map__ = __webpack_require__(103);



/* harmony default export */ __webpack_exports__["a"] = ((state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_event__["d" /* RECEIVE_EVENT_ERRORS */]:
      return Object.assign({}, state, { eventErrors: action.errors });
    case __WEBPACK_IMPORTED_MODULE_1__actions_map__["c" /* RECEIVE_MAP_ERRORS */]:
      return Object.assign({}, state, { mapErrors: action.errors });
    case __WEBPACK_IMPORTED_MODULE_0__actions_event__["a" /* CLEAR_EVENT_ERRORS */]:
      return Object.assign({}, state, { eventErrors: null });
    case __WEBPACK_IMPORTED_MODULE_1__actions_map__["a" /* CLEAR_MAP_ERRORS */]:
      return Object.assign({}, state, { mapErrors: action.errors });
    default:
      return state;
  }
});

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_map__ = __webpack_require__(103);


/* unused harmony default export */ var _unused_webpack_default_export = ((state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_map__["b" /* RECEIVE_MAP */]:
    // return Object.assign({}, state, {[action.map.id]: action.map});
    case __WEBPACK_IMPORTED_MODULE_0__actions_map__["d" /* REMOVE_MAP */]:
    // delete newState[action.mapId];
    // return newState;
    default:
      return state;
  }
});

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_scheduleItem__ = __webpack_require__(26);


/* unused harmony default export */ var _unused_webpack_default_export = ((state = { all_ids: [], by_id: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let index;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_scheduleItem__["b" /* RECEIVE_SCHEDULE_ITEM */]:
      newState.by_id[action.scheduleItem.id] = action.scheduleItem;

      // debugger;
      index = newState.all_ids.indexOf(action.scheduleItem.id);
      if (index > -1) {
        newState.all_ids.splice(index, 1);
      }
      newState.all_ids.unshift(action.scheduleItem.id);

      return newState;
    case __WEBPACK_IMPORTED_MODULE_0__actions_scheduleItem__["c" /* RECEIVE_SCHEDULE_ITEMS */]:
      return action.scheduleItems;

    case __WEBPACK_IMPORTED_MODULE_0__actions_scheduleItem__["a" /* DELETE_SCHEDULE_ITEM */]:
      index = newState.all_ids.indexOf(action.scheduleItemId);
      if (index > -1) {
        newState.all_ids.splice(index, 1);
      }

      newState.by_id[action.scheduleItemId] = undefined;

      return newState;

    default:
      return state;
  }
});

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_scheduleItem__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_info__ = __webpack_require__(78);




let _nullState = {
  scheduleItems: {},
  scheduleItemsArray: [],
  info: {}
};

const currentEvent = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let index;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_event__["b" /* RECEIVE_EVENT */]:
      return action.event;

    case __WEBPACK_IMPORTED_MODULE_1__actions_scheduleItem__["b" /* RECEIVE_SCHEDULE_ITEM */]:
      newState.scheduleItems[action.scheduleItem.id] = action.scheduleItem;
      index = newState.scheduleItemsArray.indexOf(action.scheduleItem.id);
      if (index > 1) {
        newState.scheduleItemsArray.splice(index, 1);
      }
      newState.scheduleItemsArray.unshift(action.scheduleItem.id);

      return newState;

    case __WEBPACK_IMPORTED_MODULE_1__actions_scheduleItem__["c" /* RECEIVE_SCHEDULE_ITEMS */]:
      if (action.scheduleItems.by_id === undefined) {
        action.scheduleItems.by_id = {};
      } else {
        newState.scheduleItems = action.scheduleItems.by_id;
      }

      if (action.scheduleItems.all_ids === undefined) {
        newState.scheduleItemsArray = [];
      } else {
        newState.scheduleItemsArray = action.scheduleItems.all_ids;
      }

      return newState;

    case __WEBPACK_IMPORTED_MODULE_1__actions_scheduleItem__["a" /* DELETE_SCHEDULE_ITEM */]:
      newState.currentEvent.scheduleItems[action.scheduleItemId] = undefined;

      index = newState.currentEvent.scheduleItemsArray.indexOf(action.scheduleItemId);
      if (index > -1) {
        newState.currentEvent.scheduleItemsArray.splice(index, 1);
      }

      return newState;

    case __WEBPACK_IMPORTED_MODULE_2__actions_info__["a" /* RECEIVE_INFO */]:
      newState.info = action.info;
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (currentEvent);

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/redux-logger/dist/redux-logger.js'\n    at Error (native)");

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_news_api__ = __webpack_require__(563);


const RECEIVE_NEWS = "RECEIVE_NEWS";
/* unused harmony export RECEIVE_NEWS */

const RECEIVE_NEW = "RECEIVE_NEW";
/* unused harmony export RECEIVE_NEW */

const DELETE_NEWS = "DELETE_NEWS";
/* unused harmony export DELETE_NEWS */


//  actions
const receiveNew = singleNews => ({
  type: RECEIVE_NEW,
  singleNews
});

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

const destroyNews = newsId => ({
  type: DELETE_NEWS,
  newsId
});

// thunk action creators
const createNews = (eventId, news) => dispatch => {
  return Object(__WEBPACK_IMPORTED_MODULE_0__util_news_api__["e" /* postNews */])(eventId, news).then(newNews => dispatch(receiveNew(newNews)));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = createNews;


const fetchSingleNews = newsId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_news_api__["c" /* getSingleNews */])(newsId).then(news => dispatch(receiveNew(news)));
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchSingleNews;


const fetchNews = eventId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_news_api__["b" /* getNews */])(eventId).then(news => dispatch(receiveNews(news)));
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchNews;


const updateNews = news => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_news_api__["d" /* patchNews */])(news).then(newNews => dispatch(receiveNew(newNews)));
/* harmony export (immutable) */ __webpack_exports__["e"] = updateNews;


const removeNews = newsId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_news_api__["a" /* deleteNews */])(newsId).then(() => dispatch(destroyNews(newsId)));
/* harmony export (immutable) */ __webpack_exports__["d"] = removeNews;


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const postNews = (eventId, news) => $.ajax({
  method: 'POST',
  url: `api/events/${eventId}/news`,
  data: { news }
});
/* harmony export (immutable) */ __webpack_exports__["e"] = postNews;


const getNews = eventId => $.ajax({
  method: 'GET',
  url: `api/events/${eventId}/news`
});
/* harmony export (immutable) */ __webpack_exports__["b"] = getNews;


const getSingleNews = newsId => $.ajax({
  method: 'GET',
  url: `api/news/${newsId}`
});
/* harmony export (immutable) */ __webpack_exports__["c"] = getSingleNews;


const patchNews = news => $.ajax({
  method: 'PATCH',
  url: `api/news/${news.id}`,
  data: { news }
});
/* harmony export (immutable) */ __webpack_exports__["d"] = patchNews;


const deleteNews = newsId => $.ajax({
  method: 'DELETE',
  url: `api/news/${newsId}`
});
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteNews;


/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session_modal__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_session__ = __webpack_require__(77);
throw new Error("Cannot find module \"react-redux\"");
throw new Error("Cannot find module \"react-router\"");





const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_session__["d" /* login */])(user)),
  signupUser: user => dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_session__["f" /* signupUser */])(user))
});

const mapStateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  type: ownProps.match.params.signup ? "signup" : "login"
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_0__session_modal__["a" /* default */])));

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/julian/Desktop/envent/envent/node_modules/redux/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_session_api__ = __webpack_require__(359);


const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
/* harmony export (immutable) */ __webpack_exports__["b"] = RECEIVE_CURRENT_USER;

const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
/* harmony export (immutable) */ __webpack_exports__["c"] = RECEIVE_SESSION_ERRORS;

const CLEAR_SESSION_ERRORS = "CLEAR_ERRORS";
/* harmony export (immutable) */ __webpack_exports__["a"] = CLEAR_SESSION_ERRORS;


const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
/* unused harmony export receiveCurrentUser */


const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
/* unused harmony export receiveErrors */


const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});
/* unused harmony export clearErrors */


const login = formUser => dispatch => {
  return __WEBPACK_IMPORTED_MODULE_0__util_session_api__["a" /* loginUser */](formUser).then(user => {
    dispatch(receiveCurrentUser(user));
    dispatch(clearErrors());
  }, errors => dispatch(receiveErrors(errors.responseJSON)));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = login;


const logout = () => dispatch => __WEBPACK_IMPORTED_MODULE_0__util_session_api__["b" /* logoutUser */]().then(() => dispatch(receiveCurrentUser(null)), errors => dispatch(receiveErrors(errors.responseJSON)));
/* harmony export (immutable) */ __webpack_exports__["e"] = logout;


const signupUser = formUser => dispatch => __WEBPACK_IMPORTED_MODULE_0__util_session_api__["c" /* postUser */](formUser).then(user => {
  dispatch(receiveCurrentUser(user));
  dispatch(clearErrors());
}, errors => dispatch(receiveErrors(errors.responseJSON)));
/* harmony export (immutable) */ __webpack_exports__["f"] = signupUser;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_info_api__ = __webpack_require__(403);


const RECEIVE_INFO = "RECEIVE_INFO";
/* harmony export (immutable) */ __webpack_exports__["a"] = RECEIVE_INFO;


// actions
const receiveInfo = info => ({
  type: RECEIVE_INFO,
  info
});

// thunk action creators
const createInfo = (eventId, info) => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_info_api__["c" /* postInfo */])(eventId, info).then(newInfo => dispatch(receiveInfo(newInfo)));
/* harmony export (immutable) */ __webpack_exports__["b"] = createInfo;


const fetchInfo = eventId => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_info_api__["a" /* getInfo */])(eventId).then(info => dispatch(receiveInfo(info)));
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchInfo;


const updateInfo = (eventId, info) => dispatch => Object(__WEBPACK_IMPORTED_MODULE_0__util_info_api__["b" /* patchInfo */])(eventId, info).then(newInfo => dispatch(receiveInfo(newInfo)));
/* harmony export (immutable) */ __webpack_exports__["d"] = updateInfo;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map