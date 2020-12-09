"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _bootstrapVue = require("bootstrap-vue");

var _vueShimmer = _interopRequireDefault(require("@gomarky/vue-shimmer"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

var _router = _interopRequireDefault(require("./router"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _vueJsStarRating = _interopRequireDefault(require("vue-js-star-rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_vue["default"].use(_bootstrapVue.BootstrapVue);

_vue["default"].use(_bootstrapVue.IconsPlugin);

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vueShimmer["default"]);

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].use(_vueJsStarRating["default"]);

window.axios = _axios["default"];
_axios["default"].defaults.baseURL = 'http://localhost:8000/';
new _vue["default"]({
  el: '#app',
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
});