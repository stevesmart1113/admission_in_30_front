"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("../components/HelloWorld"));

var _Dashboard = _interopRequireDefault(require("../components/Dashboard"));

var _Universities = _interopRequireDefault(require("../components/Universities"));

var _Schools = _interopRequireDefault(require("../components/Schools"));

var _Courses = _interopRequireDefault(require("../components/Courses"));

var _ = _interopRequireDefault(require(""));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: "/",
    name: "HelloWorld",
    component: _HelloWorld["default"]
  }, {
    path: "/dashboard",
    name: "Dashboard",
    component: _Dashboard["default"],
    children: [{
      path: "/dashboard/universities",
      component: _Universities["default"],
      children: [{
        path: "/dashboard/universities/programs",
        component: component
      }]
    }, {
      path: "/dashboard/schools",
      component: _Schools["default"]
    }, {
      path: "/dashboard/courses",
      component: _Courses["default"]
    }]
  }]
});

exports["default"] = _default;