(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/resize */ "./resources/backend/views/dashboard/admin/components/mixins/resize.js");
//
//
//
//


__webpack_require__(/*! echarts/theme/macarons */ "./node_modules/echarts/theme/macarons.js"); // echarts theme



var animationDuration = 6000;
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_resize__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    className: {
      type: String,
      "default": 'chart'
    },
    width: {
      type: String,
      "default": '100%'
    },
    height: {
      type: String,
      "default": '300px'
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.initChart();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart: function initChart() {
      this.chart = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(this.$el, 'macarons');
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // ??????????????????????????????????????????
            type: 'shadow' // ??????????????????????????????'line' | 'shadow'

          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration: animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration: animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration: animationDuration
        }]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_PanThumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PanThumb */ "./resources/backend/components/PanThumb/index.vue");
/* harmony import */ var _components_TextHoverEffect_Mallki__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TextHoverEffect/Mallki */ "./resources/backend/components/TextHoverEffect/Mallki.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PanThumb: _components_PanThumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    Mallki: _components_TextHoverEffect_Mallki__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = {
        success: 'success',
        pending: 'danger'
      };
      return statusMap[status];
    }
  },
  data: function data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['name', 'avatar', 'roles']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/resize */ "./resources/backend/views/dashboard/admin/components/mixins/resize.js");
//
//
//
//


__webpack_require__(/*! echarts/theme/macarons */ "./node_modules/echarts/theme/macarons.js"); // echarts theme



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_resize__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    className: {
      type: String,
      "default": 'chart'
    },
    width: {
      type: String,
      "default": '100%'
    },
    height: {
      type: String,
      "default": '350px'
    },
    autoResize: {
      type: Boolean,
      "default": true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler: function handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.initChart();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart: function initChart() {
      this.chart = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(this.$el, 'macarons');
      this.setOptions(this.chartData);
    },
    setOptions: function setOptions() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          expectedData = _ref.expectedData,
          actualData = _ref.actualData;

      this.chart.setOption({
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['expected', 'actual']
        },
        series: [{
          name: 'expected',
          itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        }, {
          name: 'actual',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-count-to */ "./node_modules/vue-count-to/dist/vue-count-to.min.js");
/* harmony import */ var vue_count_to__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_count_to__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CountTo: vue_count_to__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    handleSetLineChartData: function handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/resize */ "./resources/backend/views/dashboard/admin/components/mixins/resize.js");
//
//
//
//


__webpack_require__(/*! echarts/theme/macarons */ "./node_modules/echarts/theme/macarons.js"); // echarts theme



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_resize__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    className: {
      type: String,
      "default": 'chart'
    },
    width: {
      type: String,
      "default": '100%'
    },
    height: {
      type: String,
      "default": '300px'
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.initChart();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart: function initChart() {
      this.chart = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(this.$el, 'macarons');
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        series: [{
          name: 'WEEKLY WRITE ARTICLES',
          type: 'pie',
          roseType: 'radius',
          radius: [15, 95],
          center: ['50%', '38%'],
          data: [{
            value: 320,
            name: 'Industries'
          }, {
            value: 240,
            name: 'Technology'
          }, {
            value: 149,
            name: 'Forex'
          }, {
            value: 100,
            name: 'Gold'
          }, {
            value: 59,
            name: 'Forecasts'
          }],
          animationEasing: 'cubicInOut',
          animationDuration: 2600
        }]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/resize */ "./resources/backend/views/dashboard/admin/components/mixins/resize.js");
//
//
//
//


__webpack_require__(/*! echarts/theme/macarons */ "./node_modules/echarts/theme/macarons.js"); // echarts theme



var animationDuration = 3000;
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_resize__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    className: {
      type: String,
      "default": 'chart'
    },
    width: {
      type: String,
      "default": '100%'
    },
    height: {
      type: String,
      "default": '300px'
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.initChart();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart: function initChart() {
      this.chart = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(this.$el, 'macarons');
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // ??????????????????????????????????????????
            type: 'shadow' // ??????????????????????????????'line' | 'shadow'

          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [{
            name: 'Sales',
            max: 10000
          }, {
            name: 'Administration',
            max: 20000
          }, {
            name: 'Information Technology',
            max: 20000
          }, {
            name: 'Customer Support',
            max: 20000
          }, {
            name: 'Development',
            max: 20000
          }, {
            name: 'Marketing',
            max: 20000
          }]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [{
            value: [5000, 7000, 12000, 11000, 15000, 14000],
            name: 'Allocated Budget'
          }, {
            value: [4000, 9000, 15000, 15000, 13000, 11000],
            name: 'Expected Spending'
          }, {
            value: [5500, 11000, 12000, 15000, 12000, 12000],
            name: 'Actual Spending'
          }],
          animationDuration: animationDuration
        }]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Todo',
  directives: {
    focus: function focus(el, _ref, _ref2) {
      var value = _ref.value;
      var context = _ref2.context;

      if (value) {
        context.$nextTick(function () {
          el.focus();
        });
      }
    }
  },
  props: {
    todo: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      editing: false
    };
  },
  methods: {
    deleteTodo: function deleteTodo(todo) {
      this.$emit('deleteTodo', todo);
    },
    editTodo: function editTodo(_ref3) {
      var todo = _ref3.todo,
          value = _ref3.value;
      this.$emit('editTodo', {
        todo: todo,
        value: value
      });
    },
    toggleTodo: function toggleTodo(todo) {
      this.$emit('toggleTodo', todo);
    },
    doneEdit: function doneEdit(e) {
      var value = e.target.value.trim();
      var todo = this.todo;

      if (!value) {
        this.deleteTodo({
          todo: todo
        });
      } else if (this.editing) {
        this.editTodo({
          todo: todo,
          value: value
        });
        this.editing = false;
      }
    },
    cancelEdit: function cancelEdit(e) {
      e.target.value = this.todo.text;
      this.editing = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.vue */ "./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var STORAGE_KEY = 'todos';
var filters = {
  all: function all(todos) {
    return todos;
  },
  active: function active(todos) {
    return todos.filter(function (todo) {
      return !todo.done;
    });
  },
  completed: function completed(todos) {
    return todos.filter(function (todo) {
      return todo.done;
    });
  }
};
var defalutList = [{
  text: 'star this repository',
  done: false
}, {
  text: 'fork this repository',
  done: false
}, {
  text: 'follow author',
  done: false
}, {
  text: 'vue-element-admin',
  done: true
}, {
  text: 'vue',
  done: true
}, {
  text: 'element-ui',
  done: true
}, {
  text: 'axios',
  done: true
}, {
  text: 'webpack',
  done: true
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Todo: _Todo_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  filters: {
    pluralize: function pluralize(n, w) {
      return n === 1 ? w : w + 's';
    },
    capitalize: function capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  },
  data: function data() {
    return {
      visibility: 'all',
      filters: filters,
      // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || defalutList
      todos: defalutList
    };
  },
  computed: {
    allChecked: function allChecked() {
      return this.todos.every(function (todo) {
        return todo.done;
      });
    },
    filteredTodos: function filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining: function remaining() {
      return this.todos.filter(function (todo) {
        return !todo.done;
      }).length;
    }
  },
  methods: {
    setLocalStorage: function setLocalStorage() {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    addTodo: function addTodo(e) {
      var text = e.target.value;

      if (text.trim()) {
        this.todos.push({
          text: text,
          done: false
        });
        this.setLocalStorage();
      }

      e.target.value = '';
    },
    toggleTodo: function toggleTodo(val) {
      val.done = !val.done;
      this.setLocalStorage();
    },
    deleteTodo: function deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this.setLocalStorage();
    },
    editTodo: function editTodo(_ref) {
      var todo = _ref.todo,
          value = _ref.value;
      todo.text = value;
      this.setLocalStorage();
    },
    clearCompleted: function clearCompleted() {
      this.todos = this.todos.filter(function (todo) {
        return !todo.done;
      });
      this.setLocalStorage();
    },
    toggleAll: function toggleAll(_ref2) {
      var _this = this;

      var done = _ref2.done;
      this.todos.forEach(function (todo) {
        todo.done = done;

        _this.setLocalStorage();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_remote_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/remote-search */ "./resources/backend/api/remote-search.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = {
        success: 'success',
        pending: 'danger'
      };
      return statusMap[status];
    },
    orderNoFilter: function orderNoFilter(str) {
      return str.substring(0, 30);
    }
  },
  data: function data() {
    return {
      list: null
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      Object(_api_remote_search__WEBPACK_IMPORTED_MODULE_0__["transactionList"])().then(function (response) {
        _this.list = response.data.items.slice(0, 8);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_GithubCorner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/GithubCorner */ "./resources/backend/components/GithubCorner/index.vue");
/* harmony import */ var _components_PanelGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PanelGroup */ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue");
/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LineChart */ "./resources/backend/views/dashboard/admin/components/LineChart.vue");
/* harmony import */ var _components_RaddarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/RaddarChart */ "./resources/backend/views/dashboard/admin/components/RaddarChart.vue");
/* harmony import */ var _components_PieChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PieChart */ "./resources/backend/views/dashboard/admin/components/PieChart.vue");
/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BarChart */ "./resources/backend/views/dashboard/admin/components/BarChart.vue");
/* harmony import */ var _components_TransactionTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TransactionTable */ "./resources/backend/views/dashboard/admin/components/TransactionTable.vue");
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TodoList */ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue");
/* harmony import */ var _components_BoxCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BoxCard */ "./resources/backend/views/dashboard/admin/components/BoxCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardAdmin',
  components: {
    GithubCorner: _components_GithubCorner__WEBPACK_IMPORTED_MODULE_0__["default"],
    PanelGroup: _components_PanelGroup__WEBPACK_IMPORTED_MODULE_1__["default"],
    LineChart: _components_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    RaddarChart: _components_RaddarChart__WEBPACK_IMPORTED_MODULE_3__["default"],
    PieChart: _components_PieChart__WEBPACK_IMPORTED_MODULE_4__["default"],
    BarChart: _components_BarChart__WEBPACK_IMPORTED_MODULE_5__["default"],
    TransactionTable: _components_TransactionTable__WEBPACK_IMPORTED_MODULE_6__["default"],
    TodoList: _components_TodoList__WEBPACK_IMPORTED_MODULE_7__["default"],
    BoxCard: _components_BoxCard__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      lineChartData: lineChartData.newVisitis
    };
  },
  methods: {
    handleSetLineChartData: function handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/editor/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_PanThumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PanThumb */ "./resources/backend/components/PanThumb/index.vue");
/* harmony import */ var _components_GithubCorner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GithubCorner */ "./resources/backend/components/GithubCorner/index.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardEditor',
  components: {
    PanThumb: _components_PanThumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    GithubCorner: _components_GithubCorner__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['name', 'avatar', 'roles']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin */ "./resources/backend/views/dashboard/admin/index.vue");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor */ "./resources/backend/views/dashboard/editor/index.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  components: {
    adminDashboard: _admin__WEBPACK_IMPORTED_MODULE_1__["default"],
    editorDashboard: _editor__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      currentRole: 'adminDashboard'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['roles'])),
  created: function created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box-card-component .el-card__header {\n  padding: 0px !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box-card-component .box-card-header[data-v-14491cd1] {\n  position: relative;\n  height: 220px;\n}\n.box-card-component .box-card-header img[data-v-14491cd1] {\n  width: 100%;\n  height: 100%;\n  transition: all 0.2s linear;\n}\n.box-card-component .box-card-header img[data-v-14491cd1]:hover {\n  transform: scale(1.1, 1.1);\n  filter: contrast(130%);\n}\n.box-card-component .mallki-text[data-v-14491cd1] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.box-card-component .panThumb[data-v-14491cd1] {\n  z-index: 100;\n  height: 70px !important;\n  width: 70px !important;\n  position: absolute !important;\n  top: -45px;\n  left: 0px;\n  border: 5px solid #ffffff;\n  background-color: #fff;\n  margin: auto;\n  box-shadow: none !important;\n}\n.box-card-component .panThumb[data-v-14491cd1]  .pan-info {\n  box-shadow: none !important;\n}\n.box-card-component .progress-item[data-v-14491cd1] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 1510px) {\n.box-card-component .mallki-text[data-v-14491cd1] {\n    display: none;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".panel-group[data-v-22f28af5] {\n  margin-top: 18px;\n}\n.panel-group .card-panel-col[data-v-22f28af5] {\n  margin-bottom: 32px;\n}\n.panel-group .card-panel[data-v-22f28af5] {\n  height: 108px;\n  cursor: pointer;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n  color: #666;\n  background: #fff;\n  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.panel-group .card-panel:hover .card-panel-icon-wrapper[data-v-22f28af5] {\n  color: #fff;\n}\n.panel-group .card-panel:hover .icon-people[data-v-22f28af5] {\n  background: #40c9c6;\n}\n.panel-group .card-panel:hover .icon-message[data-v-22f28af5] {\n  background: #36a3f7;\n}\n.panel-group .card-panel:hover .icon-money[data-v-22f28af5] {\n  background: #f4516c;\n}\n.panel-group .card-panel:hover .icon-shopping[data-v-22f28af5] {\n  background: #34bfa3;\n}\n.panel-group .card-panel .icon-people[data-v-22f28af5] {\n  color: #40c9c6;\n}\n.panel-group .card-panel .icon-message[data-v-22f28af5] {\n  color: #36a3f7;\n}\n.panel-group .card-panel .icon-money[data-v-22f28af5] {\n  color: #f4516c;\n}\n.panel-group .card-panel .icon-shopping[data-v-22f28af5] {\n  color: #34bfa3;\n}\n.panel-group .card-panel .card-panel-icon-wrapper[data-v-22f28af5] {\n  float: left;\n  margin: 14px 0 0 14px;\n  padding: 16px;\n  transition: all 0.38s ease-out;\n  border-radius: 6px;\n}\n.panel-group .card-panel .card-panel-icon[data-v-22f28af5] {\n  float: left;\n  font-size: 48px;\n}\n.panel-group .card-panel .card-panel-description[data-v-22f28af5] {\n  float: right;\n  font-weight: bold;\n  margin: 26px;\n  margin-left: 0px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-text[data-v-22f28af5] {\n  line-height: 18px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 16px;\n  margin-bottom: 12px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-num[data-v-22f28af5] {\n  font-size: 20px;\n}\n@media (max-width: 550px) {\n.card-panel-description[data-v-22f28af5] {\n    display: none;\n}\n.card-panel-icon-wrapper[data-v-22f28af5] {\n    float: none !important;\n    width: 100%;\n    height: 100%;\n    margin: 0 !important;\n}\n.card-panel-icon-wrapper .svg-icon[data-v-22f28af5] {\n    display: block;\n    margin: 14px auto !important;\n    float: none !important;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.todoapp {\n  font: 14px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n  background: #fff;\n  z-index: 1;\n  position: relative;\n  /*\n    Hack to remove background from Mobile Safari.\n    Can't use it globally since it destroys checkboxes in Firefox\n  */\n}\n.todoapp button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.todoapp :focus {\n  outline: 0;\n}\n.todoapp .hidden {\n  display: none;\n}\n.todoapp .todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp .todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp .todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n.todoapp .new-todo,\n.todoapp .edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 18px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.todoapp .new-todo {\n  padding: 10px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.todoapp .main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n.todoapp .toggle-all {\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n}\n.todoapp .toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: -52px;\n  left: -13px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.todoapp .toggle-all + label:before {\n  content: \"???\";\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n.todoapp .toggle-all:checked + label:before {\n  color: #737373;\n}\n.todoapp .todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.todoapp .todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n.todoapp .todo-list li:last-child {\n  border-bottom: none;\n}\n.todoapp .todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n.todoapp .todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n.todoapp .todo-list li.editing .view {\n  display: none;\n}\n.todoapp .todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n.todoapp .todo-list li .toggle {\n  opacity: 0;\n}\n.todoapp .todo-list li .toggle + label {\n  /*\n    Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n    IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n  */\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center left;\n  background-size: 36px;\n}\n.todoapp .todo-list li .toggle:checked + label {\n  background-size: 36px;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n.todoapp .todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 50px;\n  display: block;\n  line-height: 1;\n  font-size: 14px;\n  transition: color 0.4s;\n}\n.todoapp .todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n.todoapp .todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  transition: color 0.2s ease-out;\n  cursor: pointer;\n}\n.todoapp .todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n.todoapp .todo-list li .destroy:after {\n  content: \"??\";\n}\n.todoapp .todo-list li:hover .destroy {\n  display: block;\n}\n.todoapp .todo-list li .edit {\n  display: none;\n}\n.todoapp .todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n.todoapp .footer {\n  color: #777;\n  position: relative;\n  padding: 10px 15px;\n  height: 40px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n.todoapp .footer:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 40px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todoapp .todo-count {\n  float: left;\n  text-align: left;\n}\n.todoapp .todo-count strong {\n  font-weight: 300;\n}\n.todoapp .filters {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  list-style: none;\n}\n.todoapp .filters li {\n  display: inline;\n}\n.todoapp .filters li a {\n  color: inherit;\n  font-size: 12px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n.todoapp .filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n.todoapp .filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n.todoapp .clear-completed,\n.todoapp html .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.todoapp .clear-completed:hover {\n  text-decoration: underline;\n}\n.todoapp .info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n.todoapp .info p {\n  line-height: 1;\n}\n.todoapp .info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n.todoapp .info a:hover {\n  text-decoration: underline;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n.todoapp .toggle-all,\n.todoapp .todo-list li .toggle {\n    background: none;\n}\n.todoapp .todo-list li .toggle {\n    height: 40px;\n}\n}\n@media (max-width: 430px) {\n.todoapp .footer {\n    height: 50px;\n}\n.todoapp .filters {\n    bottom: 10px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dashboard-editor-container[data-v-52857733] {\n  padding: 32px;\n  background-color: #f0f2f5;\n  position: relative;\n}\n.dashboard-editor-container .github-corner[data-v-52857733] {\n  position: absolute;\n  top: 0px;\n  border: 0;\n  right: 0;\n}\n.dashboard-editor-container .chart-wrapper[data-v-52857733] {\n  background: #fff;\n  padding: 16px 16px 0;\n  margin-bottom: 32px;\n}\n@media (max-width: 1024px) {\n.chart-wrapper[data-v-52857733] {\n    padding: 8px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emptyGif[data-v-88cd9c42] {\n  display: block;\n  width: 45%;\n  margin: 0 auto;\n}\n.dashboard-editor-container[data-v-88cd9c42] {\n  background-color: #e3e3e3;\n  min-height: 100vh;\n  padding: 50px 60px 0px;\n}\n.dashboard-editor-container .pan-info-roles[data-v-88cd9c42] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #333;\n  display: block;\n}\n.dashboard-editor-container .info-container[data-v-88cd9c42] {\n  position: relative;\n  margin-left: 190px;\n  height: 150px;\n  line-height: 200px;\n}\n.dashboard-editor-container .info-container .display_name[data-v-88cd9c42] {\n  font-size: 48px;\n  line-height: 48px;\n  color: #212121;\n  position: absolute;\n  top: 25px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.github-corner:hover .octo-arm[data-v-5039f091] {\r\n  animation: octocat-wave-data-v-5039f091 560ms ease-in-out\n}\n@keyframes octocat-wave-data-v-5039f091 {\n0%,\r\n  100% {\r\n    transform: rotate(0)\n}\n20%,\r\n  60% {\r\n    transform: rotate(-25deg)\n}\n40%,\r\n  80% {\r\n    transform: rotate(10deg)\n}\n}\n@media (max-width:500px) {\n.github-corner:hover .octo-arm[data-v-5039f091] {\r\n    animation: none\n}\n.github-corner .octo-arm[data-v-5039f091] {\r\n    animation: octocat-wave-data-v-5039f091 560ms ease-in-out\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/components/GithubCorner/index.vue?vue&type=template&id=5039f091&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/components/GithubCorner/index.vue?vue&type=template&id=5039f091&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "github-corner",
      attrs: {
        href: "https://github.com/PanJiaChen/vue-element-admin",
        target: "_blank",
        "aria-label": "View source on Github"
      }
    },
    [
      _c(
        "svg",
        {
          staticStyle: { fill: "#40c9c6", color: "#fff" },
          attrs: {
            width: "80",
            height: "80",
            viewBox: "0 0 250 250",
            "aria-hidden": "true"
          }
        },
        [
          _c("path", {
            attrs: { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "octo-arm",
            staticStyle: { "transform-origin": "130px 106px" },
            attrs: {
              d:
                "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "octo-body",
            attrs: {
              d:
                "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
              fill: "currentColor"
            }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=template&id=061bec25&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=template&id=061bec25& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    class: _vm.className,
    style: { height: _vm.height, width: _vm.width }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=template&id=14491cd1&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=template&id=14491cd1&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-card",
    {
      staticClass: "box-card-component",
      staticStyle: { "margin-left": "8px" }
    },
    [
      _c(
        "div",
        {
          staticClass: "box-card-header",
          attrs: { slot: "header" },
          slot: "header"
        },
        [
          _c("img", {
            attrs: {
              src:
                "https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { position: "relative" } },
        [
          _c("pan-thumb", {
            staticClass: "panThumb",
            attrs: { image: _vm.avatar }
          }),
          _vm._v(" "),
          _c("mallki", {
            attrs: { "class-name": "mallki-text", text: "vue-element-admin" }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "progress-item",
              staticStyle: { "padding-top": "35px" }
            },
            [
              _c("span", [_vm._v("Vue")]),
              _vm._v(" "),
              _c("el-progress", { attrs: { percentage: 70 } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "progress-item" },
            [
              _c("span", [_vm._v("JavaScript")]),
              _vm._v(" "),
              _c("el-progress", { attrs: { percentage: 18 } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "progress-item" },
            [
              _c("span", [_vm._v("CSS")]),
              _vm._v(" "),
              _c("el-progress", { attrs: { percentage: 12 } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "progress-item" },
            [
              _c("span", [_vm._v("ESLint")]),
              _vm._v(" "),
              _c("el-progress", {
                attrs: { percentage: 100, status: "success" }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=template&id=508586a0&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=template&id=508586a0& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    class: _vm.className,
    style: { height: _vm.height, width: _vm.width }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    { staticClass: "panel-group", attrs: { gutter: 40 } },
    [
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  return _vm.handleSetLineChartData("newVisitis")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-people" },
                [
                  _c("svg-icon", {
                    attrs: {
                      "icon-class": "peoples",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-panel-description" },
                [
                  _c("div", { staticClass: "card-panel-text" }, [
                    _vm._v("\n          New Visits\n        ")
                  ]),
                  _vm._v(" "),
                  _c("count-to", {
                    staticClass: "card-panel-num",
                    attrs: { "start-val": 0, "end-val": 102400, duration: 2600 }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  return _vm.handleSetLineChartData("messages")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-message" },
                [
                  _c("svg-icon", {
                    attrs: {
                      "icon-class": "message",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-panel-description" },
                [
                  _c("div", { staticClass: "card-panel-text" }, [
                    _vm._v("\n          Messages\n        ")
                  ]),
                  _vm._v(" "),
                  _c("count-to", {
                    staticClass: "card-panel-num",
                    attrs: { "start-val": 0, "end-val": 81212, duration: 3000 }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  return _vm.handleSetLineChartData("purchases")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-money" },
                [
                  _c("svg-icon", {
                    attrs: {
                      "icon-class": "money",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-panel-description" },
                [
                  _c("div", { staticClass: "card-panel-text" }, [
                    _vm._v("\n          Purchases\n        ")
                  ]),
                  _vm._v(" "),
                  _c("count-to", {
                    staticClass: "card-panel-num",
                    attrs: { "start-val": 0, "end-val": 9280, duration: 3200 }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  return _vm.handleSetLineChartData("shoppings")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-shopping" },
                [
                  _c("svg-icon", {
                    attrs: {
                      "icon-class": "shopping",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-panel-description" },
                [
                  _c("div", { staticClass: "card-panel-text" }, [
                    _vm._v("\n          Shoppings\n        ")
                  ]),
                  _vm._v(" "),
                  _c("count-to", {
                    staticClass: "card-panel-num",
                    attrs: { "start-val": 0, "end-val": 13600, duration: 3600 }
                  })
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=template&id=9d846268&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=template&id=9d846268& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    class: _vm.className,
    style: { height: _vm.height, width: _vm.width }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=template&id=0e364134&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=template&id=0e364134& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    class: _vm.className,
    style: { height: _vm.height, width: _vm.width }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=template&id=81907d32&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=template&id=81907d32& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "todo",
      class: { completed: _vm.todo.done, editing: _vm.editing }
    },
    [
      _c("div", { staticClass: "view" }, [
        _c("input", {
          staticClass: "toggle",
          attrs: { type: "checkbox" },
          domProps: { checked: _vm.todo.done },
          on: {
            change: function($event) {
              return _vm.toggleTodo(_vm.todo)
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          domProps: { textContent: _vm._s(_vm.todo.text) },
          on: {
            dblclick: function($event) {
              _vm.editing = true
            }
          }
        }),
        _vm._v(" "),
        _c("button", {
          staticClass: "destroy",
          on: {
            click: function($event) {
              return _vm.deleteTodo(_vm.todo)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.editing,
            expression: "editing"
          },
          {
            name: "focus",
            rawName: "v-focus",
            value: _vm.editing,
            expression: "editing"
          }
        ],
        staticClass: "edit",
        domProps: { value: _vm.todo.text },
        on: {
          keyup: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.doneEdit($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
              ) {
                return null
              }
              return _vm.cancelEdit($event)
            }
          ],
          blur: _vm.doneEdit
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=template&id=47440bbe&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=template&id=47440bbe& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "todoapp" }, [
    _c("header", { staticClass: "header" }, [
      _c("input", {
        staticClass: "new-todo",
        attrs: { autocomplete: "off", placeholder: "Todo List" },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.addTodo($event)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c(
      "section",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.todos.length,
            expression: "todos.length"
          }
        ],
        staticClass: "main"
      },
      [
        _c("input", {
          staticClass: "toggle-all",
          attrs: { id: "toggle-all", type: "checkbox" },
          domProps: { checked: _vm.allChecked },
          on: {
            change: function($event) {
              return _vm.toggleAll({ done: !_vm.allChecked })
            }
          }
        }),
        _vm._v(" "),
        _c("label", { attrs: { for: "toggle-all" } }),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "todo-list" },
          _vm._l(_vm.filteredTodos, function(todo, index) {
            return _c("todo", {
              key: index,
              attrs: { todo: todo },
              on: {
                toggleTodo: _vm.toggleTodo,
                editTodo: _vm.editTodo,
                deleteTodo: _vm.deleteTodo
              }
            })
          }),
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "footer",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.todos.length,
            expression: "todos.length"
          }
        ],
        staticClass: "footer"
      },
      [
        _c("span", { staticClass: "todo-count" }, [
          _c("strong", [_vm._v(_vm._s(_vm.remaining))]),
          _vm._v(
            "\n      " +
              _vm._s(_vm._f("pluralize")(_vm.remaining, "item")) +
              " left\n    "
          )
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "filters" },
          _vm._l(_vm.filters, function(val, key) {
            return _c("li", { key: key }, [
              _c(
                "a",
                {
                  class: { selected: _vm.visibility === key },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.visibility = key
                    }
                  }
                },
                [_vm._v(_vm._s(_vm._f("capitalize")(key)))]
              )
            ])
          }),
          0
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=template&id=a6a758ac&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=template&id=a6a758ac& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-table",
    {
      staticStyle: { width: "100%", "padding-top": "15px" },
      attrs: { data: _vm.list }
    },
    [
      _c("el-table-column", {
        attrs: { label: "Order_No", "min-width": "200" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(scope) {
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm._f("orderNoFilter")(scope.row.order_no)) +
                    "\n    "
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { label: "Price", width: "195", align: "center" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(scope) {
              return [
                _vm._v(
                  "\n      ??" +
                    _vm._s(_vm._f("toThousandFilter")(scope.row.price)) +
                    "\n    "
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { label: "Status", width: "100", align: "center" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var row = ref.row
              return [
                _c(
                  "el-tag",
                  { attrs: { type: _vm._f("statusFilter")(row.status) } },
                  [_vm._v("\n        " + _vm._s(row.status) + "\n      ")]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=template&id=52857733&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/admin/index.vue?vue&type=template&id=52857733&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dashboard-editor-container" },
    [
      _c("github-corner", { staticClass: "github-corner" }),
      _vm._v(" "),
      _c("panel-group", {
        on: { handleSetLineChartData: _vm.handleSetLineChartData }
      }),
      _vm._v(" "),
      _c(
        "el-row",
        {
          staticStyle: {
            background: "#fff",
            padding: "16px 16px 0",
            "margin-bottom": "32px"
          }
        },
        [_c("line-chart", { attrs: { "chart-data": _vm.lineChartData } })],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 32 } },
        [
          _c("el-col", { attrs: { xs: 24, sm: 24, lg: 8 } }, [
            _c("div", { staticClass: "chart-wrapper" }, [_c("raddar-chart")], 1)
          ]),
          _vm._v(" "),
          _c("el-col", { attrs: { xs: 24, sm: 24, lg: 8 } }, [
            _c("div", { staticClass: "chart-wrapper" }, [_c("pie-chart")], 1)
          ]),
          _vm._v(" "),
          _c("el-col", { attrs: { xs: 24, sm: 24, lg: 8 } }, [
            _c("div", { staticClass: "chart-wrapper" }, [_c("bar-chart")], 1)
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 8 } },
        [
          _c(
            "el-col",
            {
              staticStyle: { "padding-right": "8px", "margin-bottom": "30px" },
              attrs: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 12 },
                xl: { span: 12 }
              }
            },
            [_c("transaction-table")],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            {
              staticStyle: { "margin-bottom": "30px" },
              attrs: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 12 },
                lg: { span: 6 },
                xl: { span: 6 }
              }
            },
            [_c("todo-list")],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            {
              staticStyle: { "margin-bottom": "30px" },
              attrs: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 12 },
                lg: { span: 6 },
                xl: { span: 6 }
              }
            },
            [_c("box-card")],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=template&id=88cd9c42&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/editor/index.vue?vue&type=template&id=88cd9c42&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard-editor-container" }, [
    _c(
      "div",
      { staticClass: " clearfix" },
      [
        _c(
          "pan-thumb",
          { staticStyle: { float: "left" }, attrs: { image: _vm.avatar } },
          [
            _vm._v("\n      Your roles:\n      "),
            _vm._l(_vm.roles, function(item) {
              return _c("span", { key: item, staticClass: "pan-info-roles" }, [
                _vm._v(_vm._s(item))
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("github-corner", {
          staticStyle: {
            position: "absolute",
            top: "0px",
            border: "0",
            right: "0"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "info-container" }, [
          _c("span", { staticClass: "display_name" }, [
            _vm._v(_vm._s(_vm.name))
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticStyle: {
                "font-size": "20px",
                "padding-top": "20px",
                display: "inline-block"
              }
            },
            [_vm._v("Editor's Dashboard")]
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", [
      _c("img", { staticClass: "emptyGif", attrs: { src: _vm.emptyGif } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/index.vue?vue&type=template&id=0437e0b3&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/views/dashboard/index.vue?vue&type=template&id=0437e0b3& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dashboard-container" },
    [_c(_vm.currentRole, { tag: "component" })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/backend/api/remote-search.js":
/*!************************************************!*\
  !*** ./resources/backend/api/remote-search.js ***!
  \************************************************/
/*! exports provided: searchUser, transactionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUser", function() { return searchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionList", function() { return transactionList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/backend/utils/request.js");

function searchUser(name) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/search/user',
    method: 'get',
    params: {
      name: name
    }
  });
}
function transactionList(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/transaction/list',
    method: 'get',
    params: query
  });
}

/***/ }),

/***/ "./resources/backend/components/GithubCorner/index.vue":
/*!*************************************************************!*\
  !*** ./resources/backend/components/GithubCorner/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5039f091_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5039f091&scoped=true& */ "./resources/backend/components/GithubCorner/index.vue?vue&type=template&id=5039f091&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_5039f091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css& */ "./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _index_vue_vue_type_template_id_5039f091_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5039f091_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5039f091",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/components/GithubCorner/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5039f091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/components/GithubCorner/index.vue?vue&type=style&index=0&id=5039f091&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5039f091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5039f091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5039f091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5039f091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/backend/components/GithubCorner/index.vue?vue&type=template&id=5039f091&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/backend/components/GithubCorner/index.vue?vue&type=template&id=5039f091&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5039f091_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5039f091&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/components/GithubCorner/index.vue?vue&type=template&id=5039f091&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5039f091_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5039f091_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BarChart.vue":
/*!*************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BarChart.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarChart_vue_vue_type_template_id_061bec25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.vue?vue&type=template&id=061bec25& */ "./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=template&id=061bec25&");
/* harmony import */ var _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarChart.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarChart_vue_vue_type_template_id_061bec25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarChart_vue_vue_type_template_id_061bec25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/BarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=template&id=061bec25&":
/*!********************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=template&id=061bec25& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_template_id_061bec25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarChart.vue?vue&type=template&id=061bec25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BarChart.vue?vue&type=template&id=061bec25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_template_id_061bec25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_template_id_061bec25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BoxCard.vue":
/*!************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BoxCard.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxCard_vue_vue_type_template_id_14491cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxCard.vue?vue&type=template&id=14491cd1&scoped=true& */ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=template&id=14491cd1&scoped=true&");
/* harmony import */ var _BoxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxCard.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BoxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoxCard.vue?vue&type=style&index=0&lang=scss& */ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _BoxCard_vue_vue_type_style_index_1_id_14491cd1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true& */ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _BoxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BoxCard_vue_vue_type_template_id_14491cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BoxCard_vue_vue_type_template_id_14491cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14491cd1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/BoxCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_1_id_14491cd1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=style&index=1&id=14491cd1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_1_id_14491cd1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_1_id_14491cd1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_1_id_14491cd1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_style_index_1_id_14491cd1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=template&id=14491cd1&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=template&id=14491cd1&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_template_id_14491cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxCard.vue?vue&type=template&id=14491cd1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/BoxCard.vue?vue&type=template&id=14491cd1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_template_id_14491cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxCard_vue_vue_type_template_id_14491cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/LineChart.vue":
/*!**************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/LineChart.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_template_id_508586a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=template&id=508586a0& */ "./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=template&id=508586a0&");
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LineChart_vue_vue_type_template_id_508586a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LineChart_vue_vue_type_template_id_508586a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=template&id=508586a0&":
/*!*********************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=template&id=508586a0& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_508586a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=template&id=508586a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/LineChart.vue?vue&type=template&id=508586a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_508586a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_508586a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue":
/*!***************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/PanelGroup.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelGroup_vue_vue_type_template_id_22f28af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true& */ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true&");
/* harmony import */ var _PanelGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelGroup.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PanelGroup_vue_vue_type_style_index_0_id_22f28af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true& */ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PanelGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PanelGroup_vue_vue_type_template_id_22f28af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PanelGroup_vue_vue_type_template_id_22f28af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22f28af5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/PanelGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_style_index_0_id_22f28af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=style&index=0&id=22f28af5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_style_index_0_id_22f28af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_style_index_0_id_22f28af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_style_index_0_id_22f28af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_style_index_0_id_22f28af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_template_id_22f28af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PanelGroup.vue?vue&type=template&id=22f28af5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_template_id_22f28af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelGroup_vue_vue_type_template_id_22f28af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/PieChart.vue":
/*!*************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/PieChart.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PieChart_vue_vue_type_template_id_9d846268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieChart.vue?vue&type=template&id=9d846268& */ "./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=template&id=9d846268&");
/* harmony import */ var _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PieChart.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PieChart_vue_vue_type_template_id_9d846268___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PieChart_vue_vue_type_template_id_9d846268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/PieChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PieChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=template&id=9d846268&":
/*!********************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=template&id=9d846268& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_template_id_9d846268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PieChart.vue?vue&type=template&id=9d846268& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/PieChart.vue?vue&type=template&id=9d846268&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_template_id_9d846268___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_template_id_9d846268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/RaddarChart.vue":
/*!****************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/RaddarChart.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RaddarChart_vue_vue_type_template_id_0e364134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RaddarChart.vue?vue&type=template&id=0e364134& */ "./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=template&id=0e364134&");
/* harmony import */ var _RaddarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RaddarChart.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RaddarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RaddarChart_vue_vue_type_template_id_0e364134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RaddarChart_vue_vue_type_template_id_0e364134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/RaddarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaddarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RaddarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaddarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=template&id=0e364134&":
/*!***********************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=template&id=0e364134& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaddarChart_vue_vue_type_template_id_0e364134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RaddarChart.vue?vue&type=template&id=0e364134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/RaddarChart.vue?vue&type=template&id=0e364134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaddarChart_vue_vue_type_template_id_0e364134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaddarChart_vue_vue_type_template_id_0e364134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue":
/*!******************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_vue_vue_type_template_id_81907d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.vue?vue&type=template&id=81907d32& */ "./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=template&id=81907d32&");
/* harmony import */ var _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Todo_vue_vue_type_template_id_81907d32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Todo_vue_vue_type_template_id_81907d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/TodoList/Todo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=template&id=81907d32&":
/*!*************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=template&id=81907d32& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_81907d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=template&id=81907d32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/Todo.vue?vue&type=template&id=81907d32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_81907d32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_81907d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue":
/*!*******************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TodoList/index.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_47440bbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=47440bbe& */ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=template&id=47440bbe&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_47440bbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_47440bbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/TodoList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=template&id=47440bbe&":
/*!**************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=template&id=47440bbe& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47440bbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=47440bbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TodoList/index.vue?vue&type=template&id=47440bbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47440bbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47440bbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TransactionTable.vue":
/*!*********************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TransactionTable.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionTable_vue_vue_type_template_id_a6a758ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionTable.vue?vue&type=template&id=a6a758ac& */ "./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=template&id=a6a758ac&");
/* harmony import */ var _TransactionTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionTable.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionTable_vue_vue_type_template_id_a6a758ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionTable_vue_vue_type_template_id_a6a758ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/components/TransactionTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=template&id=a6a758ac&":
/*!****************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=template&id=a6a758ac& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTable_vue_vue_type_template_id_a6a758ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionTable.vue?vue&type=template&id=a6a758ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/components/TransactionTable.vue?vue&type=template&id=a6a758ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTable_vue_vue_type_template_id_a6a758ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTable_vue_vue_type_template_id_a6a758ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/admin/components/mixins/resize.js":
/*!*****************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/components/mixins/resize.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./resources/backend/utils/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      $_sidebarElm: null,
      $_resizeHandler: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$_resizeHandler = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function () {
      if (_this.chart) {
        _this.chart.resize();
      }
    }, 100);
    this.$_initResizeEvent();
    this.$_initSidebarResizeEvent();
  },
  beforeDestroy: function beforeDestroy() {
    this.$_destroyResizeEvent();
    this.$_destroySidebarResizeEvent();
  },
  // to fixed bug when cached by keep-alive
  // https://github.com/PanJiaChen/vue-element-admin/issues/2116
  activated: function activated() {
    this.$_initResizeEvent();
    this.$_initSidebarResizeEvent();
  },
  deactivated: function deactivated() {
    this.$_destroyResizeEvent();
    this.$_destroySidebarResizeEvent();
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_initResizeEvent: function $_initResizeEvent() {
      window.addEventListener('resize', this.$_resizeHandler);
    },
    $_destroyResizeEvent: function $_destroyResizeEvent() {
      window.removeEventListener('resize', this.$_resizeHandler);
    },
    $_sidebarResizeHandler: function $_sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.$_resizeHandler();
      }
    },
    $_initSidebarResizeEvent: function $_initSidebarResizeEvent() {
      this.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0];
      this.$_sidebarElm && this.$_sidebarElm.addEventListener('transitionend', this.$_sidebarResizeHandler);
    },
    $_destroySidebarResizeEvent: function $_destroySidebarResizeEvent() {
      this.$_sidebarElm && this.$_sidebarElm.removeEventListener('transitionend', this.$_sidebarResizeHandler);
    }
  }
});

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/index.vue":
/*!***********************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_52857733_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=52857733&scoped=true& */ "./resources/backend/views/dashboard/admin/index.vue?vue&type=template&id=52857733&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_52857733_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true& */ "./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_52857733_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_52857733_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52857733",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/admin/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_52857733_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=style&index=0&id=52857733&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_52857733_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_52857733_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_52857733_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_52857733_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/backend/views/dashboard/admin/index.vue?vue&type=template&id=52857733&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/admin/index.vue?vue&type=template&id=52857733&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_52857733_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=52857733&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/admin/index.vue?vue&type=template&id=52857733&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_52857733_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_52857733_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/editor/index.vue":
/*!************************************************************!*\
  !*** ./resources/backend/views/dashboard/editor/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_88cd9c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=88cd9c42&scoped=true& */ "./resources/backend/views/dashboard/editor/index.vue?vue&type=template&id=88cd9c42&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/editor/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_88cd9c42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true& */ "./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_88cd9c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_88cd9c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "88cd9c42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/editor/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/editor/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/editor/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_88cd9c42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=style&index=0&id=88cd9c42&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_88cd9c42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_88cd9c42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_88cd9c42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_88cd9c42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/backend/views/dashboard/editor/index.vue?vue&type=template&id=88cd9c42&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/editor/index.vue?vue&type=template&id=88cd9c42&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_88cd9c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=88cd9c42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/editor/index.vue?vue&type=template&id=88cd9c42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_88cd9c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_88cd9c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/views/dashboard/index.vue":
/*!*****************************************************!*\
  !*** ./resources/backend/views/dashboard/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0437e0b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0437e0b3& */ "./resources/backend/views/dashboard/index.vue?vue&type=template&id=0437e0b3&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/backend/views/dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0437e0b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0437e0b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/views/dashboard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/views/dashboard/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/backend/views/dashboard/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/views/dashboard/index.vue?vue&type=template&id=0437e0b3&":
/*!************************************************************************************!*\
  !*** ./resources/backend/views/dashboard/index.vue?vue&type=template&id=0437e0b3& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0437e0b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0437e0b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/views/dashboard/index.vue?vue&type=template&id=0437e0b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0437e0b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0437e0b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);