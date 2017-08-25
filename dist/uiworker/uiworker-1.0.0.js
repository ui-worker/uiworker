(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else if(typeof exports === 'object')
		exports["uiworker"] = factory(require("Vue"));
	else
		root["uiworker"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getStyle(ele, prop) {
    if (!ele || !prop) return null;

    try {
        var computed = document.defaultView.getComputedStyle(ele, '');
        return ele.style[prop] || computed ? computed[prop] : null;
    } catch (e) {
        return ele.style[prop];
    }
}

// 合并对象
function merga(target) {
    var args = Array.prototype.slice.call(arguments, 1);
    // 遍历第一个以后的参数列表
    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        // 合并对象属性
        for (var key in source) {
            if (source[key] !== undefined) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

// 查询指定父组件
function findParent(context, componentName) {
    var parent = context.$parent;
    var name = parent.$options.name;
    while (parent && componentName !== name) {
        parent = parent.$parent;
        if (parent) {
            name = parent.$options.name;
        }
    }
    return parent;
}

// 查询指定子组件
function findChild(context, componentName) {
    var child = null;
    var children = context.$children;
    for (var i = 0; i < children.length; i++) {
        var name = children[i].$options.name;
        if (name === componentName) {
            child = children;
            break;
        } else {
            child = findChild(children[i], componentName);
            if (child) break;
        }
    }
    return child;
}

// 查询指定子组件集合
function findChilds(context, componentName) {
    var components = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var childrens = context.$children;

    if (childrens.length) {
        childrens.forEach(function (child) {
            var name = child.$options.name;
            var childs = child.$children;

            if (name === componentName) components.push(child);
            if (childs.length) {
                var findChildsArr = findChilds(child, componentName, components);
                if (findChildsArr) components.concat(findChildsArr);
            }
        });
    }
    return components;
}

exports.merga = merga;
exports.findParent = findParent;
exports.findChild = findChild;
exports.findChilds = findChilds;
exports.getStyle = getStyle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var emitter = {
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                // 父组件触发eventName事件
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            this.$children.forEach(function (child) {
                var name = child.$options.name;
                if (name === componentName) {
                    child.$emit.apply(child, [eventName].concat(params));
                } else {
                    emitter.methods.broadcast.apply(child, [componentName, eventName].concat(params));
                }
            }, this);
        }
    }
};

exports.default = emitter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Icon = _Icon2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = undefined;

var _panel = __webpack_require__(46);

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Panel = _panel2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(109),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\modal\\modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ee3cbba", Component.options)
  } else {
    hotAPI.reload("data-v-2ee3cbba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// 引入组件库


var _index = __webpack_require__(8);

var _index2 = __webpack_require__(17);

var _index3 = __webpack_require__(34);

var _panel = __webpack_require__(4);

var _index4 = __webpack_require__(3);

var _index5 = __webpack_require__(51);

var _index6 = __webpack_require__(56);

var _index7 = __webpack_require__(70);

var _index8 = __webpack_require__(78);

var _index9 = __webpack_require__(86);

var _index10 = __webpack_require__(96);

var _index11 = __webpack_require__(101);

var _index12 = __webpack_require__(106);

var _index13 = __webpack_require__(111);

var _index14 = __webpack_require__(116);

var _index15 = __webpack_require__(121);

var _index16 = _interopRequireDefault(_index15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uiworker = {
    version: '1.0.0',
    Row: _index.Row,
    Col: _index.Col,
    Menu: _index2.Menu,
    MenuItem: _index2.MenuItem,
    SubMenu: _index2.SubMenu,
    Input: _index3.Input,
    InputNumber: _index3.InputNumber,
    InputDate: _index3.InputDate,
    Panel: _panel.Panel,
    Icon: _index4.Icon,
    Button: _index5.Button,
    Select: _index6.Select,
    Option: _index6.Option,
    Radio: _index7.Radio,
    RadioGroup: _index7.RadioGroup,
    Checkbox: _index8.Checkbox,
    CheckboxGroup: _index8.CheckboxGroup,
    Upload: _index9.Upload,
    UploadList: _index9.UploadList,
    Table: _index10.Table,
    Pagination: _index11.Pagination,
    Modal: _index12.Modal,
    Progress: _index13.Progress,
    Loading: _index14.Loading
};

// 定义插件install方法
var install = function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // 遍历组件封装到全局Vue组件中
    Object.keys(uiworker).forEach(function (key) {
        Vue.component(key, uiworker[key]);
    });

    // 添加Vue实例方法，添加到Vue.prototype上实现
    Vue.prototype.$alert = _index12.Modal.alert;
    Vue.prototype.$confirm = _index12.Modal.confirm;
    Vue.prototype.$Message = _index16.default;
};

// 检测是否为浏览器环境
if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined && window.Vue) {
    install(window.Vue);
}

uiworker.install = install;

exports.default = uiworker;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__(9);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(13);

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Grid 栅格
 * 采用24分栏快速创建布局
 * 定义了行(Row)和列(Col)两个组件
 * 
 * Row 组件
 * 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0
 */

exports.Row = _row2.default;
exports.Col = _col2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(12),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\grid\\row.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] row.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01227969", Component.options)
  } else {
    hotAPI.reload("data-v-01227969", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

exports.default = {
    name: 'Row',
    // 接收参数 prop 验证
    props: {
        gutter: {
            type: [String, Number], // 必须传String或Number类型
            default: 0 // 默认值为0
        },
        className: String
    },
    data: function data() {
        return {
            prefixCls: 'ui-row'
        };
    },

    computed: {
        classNames: function classNames() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, '' + this.prefixCls, true), _defineProperty(_ref, '' + this.className, !!this.className), _ref;
        },
        styles: function styles() {
            var styles = {};

            if (this.gutter != 0) {
                styles = {
                    'margin-left': this.gutter / -2 + 'px',
                    'margin-right': this.gutter / -2 + 'px'
                };
            }

            return styles;
        }
    },
    methods: {
        updateGutter: function updateGutter(newVal) {
            this.$children.forEach(function (children) {
                if (newVal) {
                    children.gutter = newVal;
                }
            });
        }
    },
    watch: {
        gutter: function gutter(newVal) {
            this.updateGutter(newVal);
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classNames,
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-01227969", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(16),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\grid\\col.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] col.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31ec03e2", Component.options)
  } else {
    hotAPI.reload("data-v-31ec03e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

exports.default = {
    name: 'Col',
    props: {
        span: [String, Number], // 栅格的占位格数，可选值为0~24的整数
        offset: [String, Number], // 栅格的偏移（margin-left）格数，可选值为0~24的整数
        className: String
    },
    data: function data() {
        return {
            prefixCls: 'ui-col',
            gutter: 0 // 父组件Row的gutter会传入子组件Col
        };
    },

    computed: {
        classNames: function classNames() {
            var _ref;

            return [(_ref = {}, _defineProperty(_ref, '' + this.prefixCls, true), _defineProperty(_ref, this.prefixCls + '-span-' + this.span, this.span), _defineProperty(_ref, this.prefixCls + '-offset-' + this.offset, this.offset), _defineProperty(_ref, '' + this.className, !!this.className), _ref)];
        },
        styles: function styles() {
            var styles = {};

            // 父组件Row有传如gutter参数时
            if (this.gutter != 0) {
                styles = {
                    'padding-left': this.gutter / 2 + 'px',
                    'padding-right': this.gutter / 2 + 'px'
                };
            }

            return styles;
        }
    },
    mounted: function mounted() {
        this.$parent.updateGutter(this.$parent.gutter);
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classNames,
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31ec03e2", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenu = exports.MenuItem = exports.Menu = undefined;

var _menu = __webpack_require__(18);

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__(22);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _menuSub = __webpack_require__(26);

var _menuSub2 = _interopRequireDefault(_menuSub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _menu2.default;
exports.MenuItem = _menuItem2.default;
exports.SubMenu = _menuSub2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(21),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\menu\\menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53997767", Component.options)
  } else {
    hotAPI.reload("data-v-53997767", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//

exports.default = {
    name: 'Menu',
    props: {
        mode: {
            type: String,
            validator: function validator(value) {
                if (value === 'horizontal' || value === 'vertical') {
                    return true;
                }
                return false;
            },

            default: 'vertical' // 默认垂直菜单布局
        },
        theme: {
            type: String,
            default: 'light' // 默认垂直菜单布局
        },
        width: {
            type: [Number, String],
            default: '240px'
        },
        height: {
            type: [Number, String]
        },
        className: String
    },
    computed: {
        classnames: function classnames() {
            var _ref;

            var prefixCls = 'ui-menu';

            return [prefixCls, prefixCls + '-' + this.theme, (_ref = {}, _defineProperty(_ref, this.className, !!this.className), _defineProperty(_ref, prefixCls + '-' + this.mode, this.mode), _ref)];
        },
        styles: function styles() {
            var style = {};

            if (this.mode === 'vertical') {
                style.width = this.width;
                style.height = '100%';
            } else if (this.mode === 'horizontal') {
                style.height = this.height;
            }

            return style;
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classnames,
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-53997767", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(25),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\menu\\menu-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a0e582e", Component.options)
  } else {
    hotAPI.reload("data-v-8a0e582e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(1);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//

exports.default = {
    name: 'MenuItem',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: [String, Boolean],
            default: false
        },
        className: String
    },
    data: function data() {
        return {
            activeClass: false
        };
    },

    computed: {
        classnames: function classnames() {
            var _ref;

            var prefixCls = 'ui-menu';

            return [prefixCls + '-item', (_ref = {}, _defineProperty(_ref, prefixCls + '-item-active', this.activeClass), _defineProperty(_ref, prefixCls + '-item-selected', this.activeClass), _defineProperty(_ref, prefixCls + '-item-disabled', this.disabled), _ref)];
        },
        styles: function styles() {
            var style = {};

            var parent = (0, _assist.findParent)(this, 'Menu');
            if (parent.mode === 'horizontal') {
                style.lineHeight = parent.height;
            }

            return style;
        }
    },
    methods: {
        handleClick: function handleClick(e) {
            if (this.disabled) return;
            var routerLink = (0, _assist.findParent)(this, 'router-link');
            var parent = (0, _assist.findParent)(this, 'Menu');
            var menuItem = (0, _assist.findChilds)(parent, 'MenuItem');

            // 如果上层存在router则不执行后续Menu-Item组件本身的高亮操作
            if (routerLink) {
                return false;
            }

            for (var j = 0; j < menuItem.length; j++) {
                menuItem[j].activeClass = false;
            }

            this.activeClass = true;
            this.$emit('click', e);
        }
    },
    mounted: function mounted() {
        // 激活当前项高亮样式
        if (this.active) {
            this.activeClass = true;
        }
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classnames,
    style: (_vm.styles),
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8a0e582e", module.exports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(33),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\menu\\menu-sub.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu-sub.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b09f95a", Component.options)
  } else {
    hotAPI.reload("data-v-6b09f95a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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

var prefixCls = 'ui-menu';

exports.default = {
    name: 'SubMenu',
    props: {
        active: {
            type: Boolean,
            default: false
        },
        // 是否展开显示
        isopen: {
            type: [Boolean, String],
            default: false
        },
        className: String
    },
    data: function data() {
        return {
            opened: true,
            activeClass: false,
            prefixCls: 'ui-menu',
            height: null
        };
    },

    computed: {
        classnames: function classnames() {
            var _ref;

            return [prefixCls + '-submenu', (_ref = {}, _defineProperty(_ref, prefixCls + '-submenu-active', this.active), _defineProperty(_ref, prefixCls + '-opened', this.opened), _ref)];
        },
        titleclasses: function titleclasses() {
            return prefixCls + '-submenu-title';
        },
        arrowclasses: function arrowclasses() {
            return prefixCls + '-submenu-title-icon';
        }
    },
    watch: {
        opened: function opened(val) {}
    },
    methods: {
        handleClick: function handleClick(e) {
            var opened = this.opened;
            var _this = this;
            var dropEle = _this.$refs.drop;

            // 动画结束操作
            function onTransitionEnd() {
                // 当前子菜单显示
                _this.opened = false;
                // 解除动画结束事件监听
                dropEle.removeEventListener('webkitTransitionEnd', onTransitionEnd);
            }

            this.$emit('click', e, this.opened);

            // 展开
            if (!this.opened) {
                // 当前子菜单显示
                this.opened = true;
                dropEle.style.height = 0;
                // 再做动画
                setTimeout(function () {
                    dropEle.style.height = _this.height + 'px';
                }, 0);
            }
            // 收起
            else {
                    dropEle.style.height = 0;
                    dropEle.addEventListener('webkitTransitionEnd', onTransitionEnd, false);
                }
        }
    },
    mounted: function mounted() {
        this.height = this.$refs.drop.scrollHeight;
        if (this.isopen == "true" || this.isopen == true) {
            this.opened = true;
            this.$refs.drop.style.height = this.height + 'px';
        } else {
            this.opened = false;
        }
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(32),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\icon\\Icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ce81bc7", Component.options)
  } else {
    hotAPI.reload("data-v-6ce81bc7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//

var prefixCls = 'ui-icon';

exports.default = {
    name: 'Icon',
    props: {
        type: String,
        size: [String, Number],
        color: String,
        className: String
    },
    computed: {
        classnames: function classnames() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-' + this.type, !!this.type), _defineProperty(_ref, '' + this.className, !!this.className), _ref)];
        },
        styles: function styles() {
            var style = {};

            this.size && (style['font-size'] = Number(this.size) + 'px');
            this.color && (style['color'] = this.color);

            return style;
        }
    },
    data: function data() {
        return {};
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    class: _vm.classnames,
    style: (_vm.styles)
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ce81bc7", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classnames
  }, [_c('div', {
    class: _vm.titleclasses,
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("title"), _vm._v(" "), _c('Icon', {
    class: _vm.arrowclasses,
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.opened),
      expression: "opened"
    }],
    ref: "drop",
    class: _vm.prefixCls
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b09f95a", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDate = exports.InputNumber = exports.Input = undefined;

var _input = __webpack_require__(35);

var _input2 = _interopRequireDefault(_input);

var _inputNumber = __webpack_require__(39);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _inputDate = __webpack_require__(43);

var _inputDate2 = _interopRequireDefault(_inputDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Input = _input2.default;
exports.InputNumber = _inputNumber2.default;
exports.InputDate = _inputDate2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(36)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(38),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\input\\input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a5204c6", Component.options)
  } else {
    hotAPI.reload("data-v-1a5204c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

// import { oneOf, findComponentUpward } from '../../utils/assist';
// import calcTextareaHeight from '../../utils/calcTextareaHeight';
// import Emitter from '../../mixins/emitter';
var prefixCls = 'ui-input';
exports.default = {
    name: 'Input',
    // mixins: [ Emitter ],
    props: {
        type: {
            // 输入框类型，可选值为 text、password 或 textarea
            type: [String],
            default: 'text'
        },
        value: {
            // 绑定的值，可使用 v-model 双向绑定
            type: [String, Number],
            default: ''
        },
        placeholder: {
            // 占位文本
            type: String,
            default: ''
        },
        maxlength: {
            // 最大输入长度
            type: Number
        },
        disabled: {
            // 设置输入框为禁用状态
            type: Boolean,
            default: false
        },
        rows: {
            // 文本域默认行数，仅在 textarea 类型下有效
            type: Number,
            default: 3
        },
        readonly: {
            // 设置输入框为只读
            type: Boolean,
            default: false
        },
        name: {
            type: String
        }
    },
    data: function data() {
        return {
            currentValue: this.value,
            prefixCls: prefixCls,
            textareaStyles: {},
            inputStyles: {}
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            return [prefixCls + '-wrapper'];
        },
        inputClasses: function inputClasses() {
            return ['' + prefixCls, _defineProperty({}, prefixCls + '-disabled', this.disabled)];
        },
        textareaClasses: function textareaClasses() {
            return ['' + prefixCls, _defineProperty({}, prefixCls + '-disabled', this.disabled)];
        }
    },
    methods: {
        handleEnter: function handleEnter(event) {
            this.$emit('enter', event);
        },
        handleFocus: function handleFocus(event) {
            this.$emit('focus', event);
        },
        handleBlur: function handleBlur(event) {
            this.$emit('blur', event);
        },
        handleInput: function handleInput(event) {
            var value = event.target.value;
            this.$emit('input', value);
            // this.setCurrentValue(value); //感觉没有什么意义
            // this.$emit('input', event);
        },
        handleChange: function handleChange(event) {
            this.$emit('change', event);
        },
        setCurrentValue: function setCurrentValue(value) {
            if (value === this.currentValue) return;
            this.currentValue = value;
        },
        focus: function focus() {
            // console.log(this.type);
            // console.log(this.$refs.textarea)
            if (this.type === 'textarea') {
                this.$refs.textarea.focus();
            } else {
                this.$refs.input.focus();
            }
        }
    },
    watch: {
        value: function value(val) {
            this.setCurrentValue(val);
        }
    },
    mounted: function mounted() {}
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapClasses
  }, [(_vm.type !== 'textarea') ? [_c('input', {
    ref: "input",
    class: _vm.inputClasses,
    style: (_vm.inputStyles),
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "maxlength": _vm.maxlength,
      "readonly": _vm.readonly,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.handleEnter($event)
      },
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "input": _vm.handleInput,
      "change": _vm.handleChange
    }
  })] : [_c('textarea', {
    ref: "textarea",
    class: _vm.textareaClasses,
    style: (_vm.textareaStyles),
    attrs: {
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "rows": _vm.rows,
      "maxlength": _vm.maxlength,
      "readonly": _vm.readonly,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.handleEnter($event)
      },
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "input": _vm.handleInput,
      "change": _vm.handleChange
    }
  })]], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a5204c6", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(42),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\input\\input-number.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] input-number.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ece53aae", Component.options)
  } else {
    hotAPI.reload("data-v-ece53aae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var prefixCls = 'ui-input';
exports.default = {
    name: 'input',
    props: {
        value: {
            // 绑定的值，可使用 v-model 双向绑定
            type: [String, Number],
            default: '0'
        },
        placeholder: {
            // 占位文本
            type: String,
            default: ''
        },
        maxlength: {
            // 最大输入长度
            type: Number
        },
        disabled: {
            // 设置输入框为禁用状态
            type: Boolean,
            default: false
        },
        readonly: {
            // 设置输入框为只读
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        max: {
            // 最大值
            type: [Number, Boolean],
            default: false
        },
        min: {
            // 最小值
            type: [Number, Boolean],
            default: false
        }
    },
    data: function data() {
        return {
            currentValue: this.value,
            prefixCls: prefixCls,
            textareaStyles: {},
            inputStyles: {},
            errorTips: ''
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            return [prefixCls + '-wrapper'];
        },
        inputClasses: function inputClasses() {
            return ['' + prefixCls, _defineProperty({}, prefixCls + '-disabled', this.disabled)];
        },
        textareaClasses: function textareaClasses() {
            return ['' + prefixCls, _defineProperty({}, prefixCls + '-disabled', this.disabled)];
        }
    },
    methods: {
        handleEnter: function handleEnter(event) {
            this.$emit('enter', event);
        },
        handleFocus: function handleFocus(event) {
            this.$emit('focus', event);
        },
        handleBlur: function handleBlur(event) {
            this.$emit('blur', event);
        },
        handleInput: function handleInput(event) {
            // this.$emit('input', event);
        },
        handleChange: function handleChange(event) {
            this.$emit('change', event);
        },
        checkNumber: function checkNumber(value) {
            var _number = Number(value);
            if (isNaN(_number)) {
                this.errorTips = "请输入有效数字";
                return false;
            } else if (this.max !== false && this.max < value) {
                this.errorTips = "最大值：" + this.max;
                return false;
            } else if (this.min !== false && this.min > value) {
                this.errorTips = "最小值：" + this.min;
                return false;
            }
            this.errorTips = "";
            return true;
        },
        focus: function focus() {
            this.$refs.input.focus();
        }
    },
    watch: {
        value: function value(val, old) {
            if (val !== "") {
                this.currentValue = val;
            }
        },
        currentValue: function currentValue(val, old) {
            if (this.checkNumber(val)) {
                if (val === '') {
                    this.$emit('input', "");
                } else {
                    this.$emit('input', Number(val) + "");
                }
            } else {
                this.$emit('input', "");
            };
        }
    },
    mounted: function mounted() {}
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapClasses
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    class: _vm.inputClasses,
    style: (_vm.inputStyles),
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "maxlength": _vm.maxlength,
      "readonly": _vm.readonly,
      "name": _vm.name
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.handleEnter($event)
      },
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }, _vm.handleInput],
      "change": _vm.handleChange
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errorTips),
      expression: "errorTips"
    }],
    staticClass: "ui-input-tips error",
    domProps: {
      "textContent": _vm._s(_vm.errorTips)
    }
  }, [_vm._v("错误")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ece53aae", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(50),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\input\\input-date.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] input-date.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44106e8e", Component.options)
  } else {
    hotAPI.reload("data-v-44106e8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//

var _panel = __webpack_require__(4);

exports.default = {
			props: {
						value: {
									// 绑定的值，可使用 v-model 双向绑定
									type: [String, Number, Date],
									default: ''
						}
			},
			data: function data() {
						return {
									PanelShow: false,
									PanelInterval: null,
									Panelvalue: null,
									inputvalue: null
						};
			},

			methods: {
						focus: function focus() {
									// console.log(this.inputvalue?true:false,this.inputvalue,this.Panelvalue)
									this.Panelvalue = this.inputvalue ? new Date(this.inputvalue + " 00:00:00") : null;
									// console.log(this.inputvalue?true:false,this.inputvalue,this.Panelvalue)
									this.showPanel();
						},
						showPanel: function showPanel() {
									clearInterval(this.PanelInterval);
									this.PanelShow = true;
						},
						hidePanel: function hidePanel() {
									var _this = this;
									clearInterval(this.PanelInterval);
									this.PanelInterval = setTimeout(function () {
												_this.PanelShow = false;
									}, 100);
									// this.$emit('input', this.inputDate)
						},
						inputFcous: function inputFcous() {
									// console.log(this.$refs.input, this.$refs.input.focus, 1);
									this.$refs.input.focus();
						},
						formatDate: function formatDate(_data) {
									if (_data) {
												var newDate = new Date(parseInt(_data));
												var Year = 0;
												var Month = 0;
												var Day = 0;
												var CurrentDate = "";

												Year = newDate.getFullYear();
												Month = newDate.getMonth() + 1;
												Day = newDate.getDate();

												CurrentDate += Year + "/";

												if (Month >= 10) {
															CurrentDate += Month + "/";
												} else {
															CurrentDate += "0" + Month + "/";
												};

												if (Day >= 10) {
															CurrentDate += Day;
												} else {
															CurrentDate += "0" + Day;
												}
												return CurrentDate;
									} else {
												return '';
									}
						}
			},
			watch: {
						'value': function value(val) {
									if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == "object") {
												// this.Panelvalue = val
												this.inputvalue = this.formatDate(val.getTime());
									} else if (typeof val == "number") {
												// this.Panelvalue = new Date(val)
												this.inputvalue = this.formatDate(val);
									} else if (val != '') {
												// this.Panelvalue = new Date(val.replace(/-/g,'/'))
												this.inputvalue = this.formatDate(new Date(val.replace(/-/g, '/')).getTime());
									}
						},
						'inputvalue': function inputvalue(val) {
									this.$emit('input', this.inputvalue);
						},
						'Panelvalue': function Panelvalue(val) {
									// console.log(this.formatDate(this.Panelvalue.getTime()));
									this.inputvalue = this.Panelvalue ? this.formatDate(this.Panelvalue.getTime()) : '';
						}
			}
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(49),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\panel\\panel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3232b491", Component.options)
  } else {
    hotAPI.reload("data-v-3232b491", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var getFirstDayOfMonth = function getFirstDayOfMonth(date) {
    var temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};
var getDayCountOfMonth = function getDayCountOfMonth(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }
    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }
    return 31;
};
exports.default = {
    props: {
        value: {
            type: [Date],
            default: null
        },
        show: {
            type: [Boolean],
            default: false
        }
    },
    name: 'ui-panel',
    components: {},
    data: function data() {
        return {
            // 输入框的值
            inputVal: null,
            // 系统时间的当天
            today: {
                Date: new Date()
            },
            // 面板渲染相关
            panel: {
                currentValue: null,
                year: null,
                month: null,
                panelDate: [],
                dateDay: ['日', '一', '二', '三', '四', '五', '六']
            },
            showTag: this.show
        };
    },

    computed: {},
    watch: {
        value: function value(val) {
            this.inputVal = this.formatToDate(val);
            this.drawPanel();
        },
        show: function show() {
            this.showTag = this.show;
        }
    },
    methods: {
        checkDate: function checkDate(val1, val2) {
            val1 = this.formatToDate(val1);
            val2 = this.formatToDate(val2);
            if (val1 === null || val2 === null) {
                return false;
            } else if (val1.getFullYear() === val2.getFullYear() && val1.getMonth() === val2.getMonth() && val1.getDate() === val2.getDate()) {
                return true;
            } else {
                return false;
            }
        },
        formatToDate: function formatToDate(val) {
            if (typeof val == "string" || typeof val == "number") {
                return new Date(val);
            } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == "object" && val instanceof Date) {
                return val;
            } else {
                // return new Date();
                return null;
            }
        },
        onInput: function onInput(item) {
            if (item.type === 'current-month') {
                this.$emit('input', new Date(this.panel.year + "/" + this.panel.month + "/" + item.date));
            } else if (item.type === 'prev-month') {
                if (this.panel.month === 1) {
                    this.$emit('input', new Date(this.panel.year - 1 + '/12/' + item.date));
                } else {
                    this.$emit('input', new Date(this.panel.year + '/' + (this.panel.month - 1) + '/' + item.date));
                }
            } else if (item.type === 'next-month') {
                if (this.panel.month === 12) {
                    this.$emit('input', new Date(this.panel.year + 1 + '/1/' + item.date));
                } else {
                    this.$emit('input', new Date(this.panel.year + '/' + (this.panel.month + 1) + '/' + item.date));
                }
            }
            // console.log(item);
            this.drawPanel();
        },
        nextMonth: function nextMonth() {
            var date = this.panel.currentValue;
            var _year = date.getFullYear();
            var _month = date.getMonth();
            var _date = date.getDate();
            if (_month === 11) {
                this.panel.currentValue = new Date(_year + '/01/01 00:00:00');
            } else {
                this.panel.currentValue = new Date(_year + '/' + (_month + 2) + '/01 00:00:00');
            }
            this.drawPanel();

            this.$emit('focus');
        },
        prevMonth: function prevMonth() {
            var date = this.panel.currentValue;
            var _year = date.getFullYear();
            var _month = date.getMonth();
            var _date = date.getDate();
            if (_month === 0) {
                this.panel.currentValue = new Date(_year - 1 + '/12/01 00:00:00');
            } else {
                this.panel.currentValue = new Date(_year + '/' + _month + '/01 00:00:00');
            }
            this.drawPanel();
            this.$emit('focus');
        },
        nextYear: function nextYear() {
            var date = this.panel.currentValue;
            var _year = date.getFullYear();
            var _month = date.getMonth();
            var _date = date.getDate();
            this.panel.currentValue = new Date(_year + 1 + '/' + (_month + 1) + '/01 00:00:00');
            this.drawPanel();
            this.$emit('focus');
        },
        prevYear: function prevYear() {
            var date = this.panel.currentValue;
            var _year = date.getFullYear();
            var _month = date.getMonth();
            var _date = date.getDate();
            this.panel.currentValue = new Date(_year - 1 + '/' + (_month + 1) + '/01 00:00:00');
            this.drawPanel();
            this.$emit('focus');
        },
        drawPanel: function drawPanel() {
            // 时间
            var _date = this.panel.currentValue;
            // 当前时间1号是周几
            var _DayTag = getFirstDayOfMonth(_date);
            // 当前是几月
            var _MonthTag = _date.getMonth();
            // 当前年份 
            var _yearTag = _date.getFullYear();
            // 赋值给model
            this.panel.year = _yearTag;
            this.panel.month = _MonthTag + 1;
            // 当前月有几天
            var _today = getDayCountOfMonth(_yearTag, _MonthTag);
            // 上个月有几天
            var _prevday;
            if (_MonthTag === 0) {
                _prevday = getDayCountOfMonth(_yearTag - 1, 11);
            } else {
                _prevday = getDayCountOfMonth(_yearTag, _MonthTag - 1);
            }
            // 下个月有几天
            var _nextday;
            if (_MonthTag === 11) {
                _nextday = getDayCountOfMonth(_yearTag + 1, 0);
            } else {
                _nextday = getDayCountOfMonth(_yearTag, _MonthTag + 1);
            }

            this.panel.panelDate = [];
            // 计算当前月第一天
            var toDayDate = new Date(_yearTag + "/" + (_MonthTag + 1) + "/01 00:00:00");
            //渲染上个月
            var i = 1,
                il = _DayTag === 0 ? 7 : _DayTag;
            for (; i <= il; i++) {
                this.panel.panelDate.push({
                    date: _prevday - il + i,
                    Date: toDayDate.getTime() - 1000 * 60 * 60 * 24 * (il - i + 1),
                    type: 'prev-month'
                });
            }
            // 渲染当前月
            var i = 1,
                il = _today;
            for (var i = 1; i <= il; i++) {
                this.panel.panelDate.push({
                    date: i,
                    Date: toDayDate.getTime() + 1000 * 60 * 60 * 24 * (i - 1),
                    type: 'current-month'
                });
            }
            // 渲染下个月
            var i = 1,
                il = 42 - this.panel.panelDate.length;
            // console.log(toDayDate.getTime(), _today)
            // 计算下个月第一天
            var toDayDate = new Date(toDayDate.getTime() + _today * 1000 * 60 * 60 * 24);
            for (; i <= il; i++) {
                this.panel.panelDate.push({
                    date: i,
                    Date: toDayDate.getTime() + (1000 * 60 * 60 * 24 * i - 1),
                    type: 'next-month'
                });
            }
            // 渲染当前选中和当天
            var i = 0,
                il = this.panel.panelDate.length;
            for (; i < il; i++) {
                if (this.checkDate(this.today.Date, this.panel.panelDate[i].Date)) {
                    this.panel.panelDate[i].today = true;
                }
                // console.log(this.inputVal,this.panel.panelDate[i].Date,this.checkDate(this.inputVal, this.panel.panelDate[i].Date));
                if (this.checkDate(this.inputVal, this.panel.panelDate[i].Date)) {
                    this.panel.panelDate[i].selected = true;
                }
            }
        }
    },
    mounted: function mounted() {
        this.panel.currentValue = this.formatToDate(this.inputVal) || new Date();
        this.drawPanel();
    }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showTag),
      expression: "showTag"
    }],
    staticClass: "ui-panel"
  }, [_c('div', {
    staticClass: "ui-panel-header"
  }, [_c('span', {
    staticClass: "ui-panel-header_oper ui-panel-header_prevYear",
    on: {
      "click": _vm.prevYear
    }
  }, [_c('i', {
    staticClass: "ui-icon ui-icon-ios-arrow-left ui-icon-ios-arrow-double"
  })]), _vm._v(" "), _c('span', {
    staticClass: "ui-panel-header_oper ui-panel-header_prevMonth",
    on: {
      "click": _vm.prevMonth
    }
  }, [_c('i', {
    staticClass: "ui-icon ui-icon-ios-arrow-left"
  })]), _vm._v(" "), _c('span', {
    staticClass: "ui-panel-header_content"
  }, [_vm._v(_vm._s(_vm.panel.year) + "年" + _vm._s(_vm.panel.month) + "月")]), _vm._v(" "), _c('span', {
    staticClass: "ui-panel-header_oper ui-panel-header_nextYear",
    on: {
      "click": _vm.nextYear
    }
  }, [_c('i', {
    staticClass: "ui-icon ui-icon-ios-arrow-right"
  })]), _vm._v(" "), _c('span', {
    staticClass: "ui-panel-header_oper ui-panel-header_nextMonth",
    on: {
      "click": _vm.nextMonth
    }
  }, [_c('i', {
    staticClass: "ui-icon ui-icon-ios-arrow-right ui-icon-ios-arrow-double"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ui-panel-day"
  }, _vm._m(0)), _vm._v(" "), _c('div', {
    staticClass: "ui-panel-date"
  }, _vm._l((_vm.panel.panelDate), function(item) {
    return _c('span', {
      class: [item.type, {
        'today': item.today,
        'selected': item.selected
      }],
      on: {
        "click": function($event) {
          _vm.onInput(item)
        }
      }
    }, [_vm._v(_vm._s(item.date))])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._l((_vm.panel.dateDay), function(item) {
    return _c('span', {
      staticClass: "ui-panel-day_day"
    }, [_vm._v(_vm._s(item))])
  })
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3232b491", module.exports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Input', {
    ref: "input",
    attrs: {
      "placeholder": "请选择日期"
    },
    on: {
      "focus": _vm.focus,
      "blur": _vm.hidePanel
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
        _vm.inputvalue = ''
      }
    },
    model: {
      value: (_vm.inputvalue),
      callback: function($$v) {
        _vm.inputvalue = $$v
      },
      expression: "inputvalue"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "PanelWarrper"
  }, [_c('Panel', {
    ref: "Panel",
    attrs: {
      "show": _vm.PanelShow
    },
    on: {
      "focus": _vm.inputFcous
    },
    model: {
      value: (_vm.Panelvalue),
      callback: function($$v) {
        _vm.Panelvalue = $$v
      },
      expression: "Panelvalue"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44106e8e", module.exports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _button = __webpack_require__(52);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _button2.default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(55),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\button\\button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0dabf807", Component.options)
  } else {
    hotAPI.reload("data-v-0dabf807", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

var prefixCls = 'ui-btn';

exports.default = {
    name: 'Button',
    props: {
        type: {
            type: String
        },
        disabled: {
            type: [String, Boolean],
            default: false
        },
        className: String
    },
    computed: {
        classnames: function classnames() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-' + this.type, !!this.type), _defineProperty(_ref, prefixCls + '-' + this.className, !!this.className), _ref)];
        }
    },
    methods: {
        handleClick: function handleClick(event) {
            this.$emit('click', event);
        }
    }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.classnames,
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0dabf807", module.exports)
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Select = undefined;

var _select = __webpack_require__(57);

var _select2 = _interopRequireDefault(_select);

var _option = __webpack_require__(66);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Select = _select2.default;
exports.Option = _option2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(65),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\select\\select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66233e72", Component.options)
  } else {
    hotAPI.reload("data-v-66233e72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dropdown = __webpack_require__(60);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

var _clickOutside = __webpack_require__(64);

var _clickOutside2 = _interopRequireDefault(_clickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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

var prefixCls = 'ui-select';

exports.default = {
	name: 'Select',
	components: { Drop: _dropdown2.default },
	mixins: [_emitter2.default], // 混合Emitter组件
	directives: { clickoutside: _clickOutside2.default }, // 注册指令
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		width: [String, Number],
		height: [String, Number]
	},
	data: function data() {
		return {
			prefixCls: prefixCls,
			selectedTxt: '',
			selectedVal: null,
			isSelected: false,
			visible: false
		};
	},

	computed: {
		classnames: function classnames() {
			var _ref;

			return [prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-disabled', this.disabled), _defineProperty(_ref, prefixCls + '-visible', this.visible), _defineProperty(_ref, prefixCls + '-' + this.className, !!this.className), _ref)];
		},
		selectionclass: function selectionclass() {
			return [prefixCls + '-selection'];
		},
		dropclass: function dropclass() {
			return [prefixCls + '-dropdown'];
		},
		styles: function styles() {
			var style = {};
			if (this.width) style.width = parseInt(this.width) + 'px';
			if (this.height) {
				style.height = parseInt(this.height) + 'px';
				style.lineHeight = parseInt(this.height) + 'px';
			}

			return style;
		}
	},
	methods: {
		// 显示或隐藏下拉列表
		toggleDropList: function toggleDropList(e) {
			if (this.disabled) {
				return false;
			}
			this.visible = !this.visible;
		},

		// 关闭下拉列表
		closeDropList: function closeDropList() {
			this.visible = false;
		},
		updateOption: function updateOption(currOption) {
			var currIndex = null;
			// 隐藏下拉列表
			this.visible = false;
			// 修改选中状态
			currOption.$parent.$children.forEach(function (option, i) {
				option.selected = false;
				if (option.value === currOption.value) {
					currIndex = i;
					option.selected = true;
				}
			});
			currOption.selected = true;
			// 显示当前项
			this.isSelected = true;
			this.selectedTxt = currOption.$el.innerHTML;
			this.selectedVal = currOption.value;
			// 暴露change事件给开发者
			this.$emit('change', {
				label: this.selectedTxt,
				value: this.selectedVal,
				index: currIndex
			});
			this.$emit('input', this.selectedVal);
		},
		findChild: function findChild() {
			var _this = this;
			var childItem = this.$children[1].$children;
			if (!childItem) return false;
			childItem.forEach(function (option, i) {
				if (_this.value === option.value) {
					_this.updateOption(option);
				}
			});
		}
	},
	watch: {
		value: function value(_value) {
			this.findChild();
		}
	},
	mounted: function mounted() {
		this.findChild();
		// 订阅子组件Option的select事件
		this.$on('selectedItem', this.updateOption);
	}
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(63),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\select\\dropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e3ddc9c", Component.options)
  } else {
    hotAPI.reload("data-v-7e3ddc9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(1);

var prefixCls = 'ui-select'; //
//
//
//

exports.default = {
    name: 'Drop',
    data: function data() {
        return {
            prefixCls: prefixCls,
            width: '',
            height: ''
        };
    },

    computed: {
        styles: function styles() {
            var style = {};

            if (this.width) {
                style.width = this.width;
            }
            style.left = 0;
            style.top = this.height;

            return style;
        }
    },
    mounted: function mounted() {
        this.width = (0, _assist.getStyle)(this.$parent.$el, 'width');
        this.height = (0, _assist.getStyle)(this.$parent.$el, 'height');
    }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.prefixCls + '-dropdown'],
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7e3ddc9c", module.exports)
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // 绑定元素时调用
    bind: function bind(el, binding, vnode) {
        function handleClick(e) {
            // 点击select组件里面的元素不处理
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                // 调用methods中属性指向的函数或data中的属性指向的值
                binding.value(e);
            }
        }
        el.__clickoutside__ = handleClick;
        document.addEventListener('click', handleClick);
    },
    unbind: function unbind(el, binding) {
        document.removeEventListener('click', el.__clickoutside__);
        delete el.__clickoutside__;
    }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.closeDropList),
      expression: "closeDropList"
    }],
    class: _vm.classnames,
    style: (_vm.styles)
  }, [_c('div', {
    class: _vm.selectionclass,
    style: (_vm.styles),
    on: {
      "click": _vm.toggleDropList
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isSelected),
      expression: "!isSelected"
    }],
    class: [_vm.prefixCls + '-placeholder'],
    style: (_vm.styles)
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isSelected),
      expression: "isSelected"
    }],
    class: [_vm.prefixCls + '-selected'],
    style: (_vm.styles)
  }, [_vm._v(_vm._s(_vm.selectedTxt))]), _vm._v(" "), _c('Icon', {
    staticClass: "ui-select-arrow",
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide-up"
    }
  }, [_c('Drop', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }]
  }, [_c('ul', {
    class: [_vm.prefixCls + '-dropdown-list']
  }, [_vm._t("default")], 2)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66233e72", module.exports)
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(67)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(69),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\select\\option.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] option.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fcfd6080", Component.options)
  } else {
    hotAPI.reload("data-v-fcfd6080", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//

var prefixCls = 'ui-select-item';

exports.default = {
	name: 'Option',
	mixins: [_emitter2.default], // 混合Emitter组件
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		current: {
			type: Boolean,
			default: false
		}
	},
	data: function data() {
		return {
			selected: false
		};
	},

	computed: {
		classnames: function classnames() {
			var _ref;

			return [prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-disabled', !!this.disabled), _defineProperty(_ref, prefixCls + '-selected', this.selected), _defineProperty(_ref, this.className, !!this.className), _ref)];
		}
	},
	methods: {
		select: function select() {
			if (this.disabled) {
				return false;
			}

			// 触发父组件（Select）的selected事件处理程序
			this.dispatch('Select', 'selectedItem', this);
			return this;
		}
	},
	mounted: function mounted() {
		var _this = this;
		if (this.current && !this.disabled) {
			// 放到任务队列中
			setTimeout(function () {
				_this.dispatch('Select', 'selectedItem', _this);
			}, 0);
		}
	}
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: _vm.classnames,
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.select($event)
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fcfd6080", module.exports)
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = exports.Radio = undefined;

var _radio = __webpack_require__(71);

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = __webpack_require__(75);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Radio = _radio2.default;
exports.RadioGroup = _radioGroup2.default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(72)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(74),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\radio\\radio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de6fa782", Component.options)
  } else {
    hotAPI.reload("data-v-de6fa782", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(1);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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

var prefixCls = 'ui-radio';

exports.default = {
    name: 'Radio',
    props: {
        value: {
            type: [String, Boolean, Number],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: String,
        checked: {
            type: Boolean,
            default: false
        },
        name: String
    },
    data: function data() {
        return {
            current: false, // 是否选中状态
            group: false, // 是否为一组radio
            parent: (0, _assist.findParent)(this, 'RadioGroup')
        };
    },

    computed: {
        wrapclass: function wrapclass() {
            var _ref;

            return [prefixCls + '-wrapper', (_ref = {}, _defineProperty(_ref, prefixCls + '-group-item', this.group), _defineProperty(_ref, prefixCls + '-wrapper-checked', this.current), _defineProperty(_ref, prefixCls + '-wrapper-disabled', this.disabled), _ref)];
        },
        radioclass: function radioclass() {
            var _ref2;

            return [prefixCls, (_ref2 = {}, _defineProperty(_ref2, prefixCls + '-checked', this.current), _defineProperty(_ref2, prefixCls + '-disabled', this.disabled), _ref2)];
        },
        innerclass: function innerclass() {
            return prefixCls + '-inner';
        },
        inputclass: function inputclass() {
            return prefixCls + '-input';
        }
    },
    methods: {
        /**
         * 更新当前current状态为true（选中）
         * 其他RRadio兄弟的current为false（取消选中）
         **/
        onchange: function onchange(e) {
            if (this.disabled) {
                return false;
            }

            // 更新当前选中状态
            var checked = e.target.checked;
            this.current = checked;
            // 触发本组件观察者 
            if (this.label) this.$emit('input', this.label);

            // 通知父组件 - 更新兄弟级Radio元素的current状态
            if (this.group && this.label !== undefined) {
                this.parent.change({
                    value: this.label
                });
            }

            // 无论是否有Radio-group父级 都触发change事件
            this.$emit('change', checked, this.label);
        }
    },
    watch: {
        value: function value() {
            if (!this.group) {
                // 更新所有v-model相同的Radio组件的选中状态
                this.current = this.value == this.label;
            }
        }
    },
    mounted: function mounted() {
        // 有Radio-group父级则分组
        if (this.parent) this.group = true;
        if (!this.group) {
            this.current = this.value == this.label;
        }
    }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.wrapclass
  }, [_c('span', {
    class: _vm.radioclass
  }, [_c('span', {
    class: _vm.innerclass
  }), _vm._v(" "), _c('input', {
    class: _vm.inputclass,
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.current
    },
    on: {
      "change": _vm.onchange
    }
  })]), _vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de6fa782", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(77),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\radio\\radio-group.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radio-group.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74969471", Component.options)
  } else {
    hotAPI.reload("data-v-74969471", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(1);

var prefixCls = 'ui-radio-group'; //
//
//
//

exports.default = {
    name: 'RadioGroup',
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            current: this.value,
            childrens: []
        };
    },

    methods: {
        // 更新选中状态
        updateValue: function updateValue() {
            var value = this.value;
            this.childrens = (0, _assist.findChild)(this, 'Radio');
            if (this.childrens) {
                this.childrens.forEach(function (child) {
                    child.current = value == child.label;
                }, this);
            }
        },
        change: function change(data) {
            // 使本组件的value变化 触发观察者
            this.$emit('input', data.value);
            this.$emit('change', data.value);
        }
    },
    mounted: function mounted() {
        // 初始化更新选中状态
        this.updateValue();
    },

    watch: {
        // 当子组件Radio发生变化时 执行本组件的change方法来触发
        value: function value() {
            this.updateValue();
        }
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.prefixCls
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-74969471", module.exports)
  }
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = exports.Checkbox = undefined;

var _checkboxItem = __webpack_require__(79);

var _checkboxItem2 = _interopRequireDefault(_checkboxItem);

var _checkboxGroup = __webpack_require__(83);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Checkbox = _checkboxItem2.default;
exports.CheckboxGroup = _checkboxGroup2.default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(80)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(82),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\checkbox\\checkbox-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkbox-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76bee92e", Component.options)
  } else {
    hotAPI.reload("data-v-76bee92e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(1);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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

var prefixCls = 'ui-checkbox';
exports.default = {
    name: 'Checkbox',
    mixins: [_emitter2.default],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: Boolean,
            default: false
        },
        label: {
            type: [String, Number, Boolean]
        },
        indeterminate: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            model: [],
            currentValue: this.value,
            group: false,
            showSlot: true,
            parent: (0, _assist.findParent)(this, 'CheckboxGroup')
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            var _ref;

            return [prefixCls + '-wrapper', (_ref = {}, _defineProperty(_ref, prefixCls + '-group-item', this.group), _defineProperty(_ref, prefixCls + '-wrapper-checked', this.currentValue), _defineProperty(_ref, prefixCls + '-wrapper-disabled', this.disabled), _ref)];
        },
        checkboxClasses: function checkboxClasses() {
            var _ref2;

            return ['' + prefixCls, (_ref2 = {}, _defineProperty(_ref2, prefixCls + '-checked', this.currentValue), _defineProperty(_ref2, prefixCls + '-disabled', this.disabled), _defineProperty(_ref2, prefixCls + '-indeterminate', this.indeterminate), _ref2)];
        },
        innerClasses: function innerClasses() {
            return prefixCls + '-inner';
        },
        inputClasses: function inputClasses() {
            return prefixCls + '-input';
        }
    },
    mounted: function mounted() {
        this.parent = (0, _assist.findParent)(this, 'CheckboxGroup');
        if (this.parent) this.group = true;
        if (!this.group) {
            this.updateModel();
            this.showSlot = this.$slots.default !== undefined;
        } else {
            this.parent.updateModel(true);
        }
    },

    methods: {
        change: function change(event) {
            if (this.disabled) {
                return false;
            }
            var checked = event.target.checked;
            this.currentValue = checked;
            this.$emit('input', checked);
            if (this.group) {
                this.parent.change(this.model);
            } else {
                this.$emit('on-change', checked);
            }
        },
        updateModel: function updateModel() {
            this.currentValue = this.value;
        }
    },
    watch: {
        value: function value() {
            this.updateModel();
        }
    }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.wrapClasses
  }, [_c('span', {
    class: _vm.checkboxClasses
  }, [_c('span', {
    class: _vm.innerClasses
  }), _vm._v(" "), (_vm.group) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    class: _vm.inputClasses,
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.label,
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : (_vm.model)
    },
    on: {
      "change": _vm.change,
      "__c": function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.label,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.model = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.group) ? _c('input', {
    class: _vm.inputClasses,
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.currentValue
    },
    on: {
      "change": _vm.change
    }
  }) : _vm._e()]), _vm._v(" "), _vm._t("default", [(_vm.showSlot) ? _c('span', [_vm._v(_vm._s(_vm.label))]) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76bee92e", module.exports)
  }
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(85),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\checkbox\\checkbox-group.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkbox-group.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d67cbce", Component.options)
  } else {
    hotAPI.reload("data-v-0d67cbce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(1);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

var prefixCls = 'ui-checkbox-group';
exports.default = {
    name: 'CheckboxGroup',
    components: 'CheckboxGroup',
    mixins: [_emitter2.default],
    props: {
        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            currentValue: this.value,
            childrens: []
        };
    },

    computed: {
        classes: function classes() {
            return '' + prefixCls;
        }
    },
    mounted: function mounted() {
        this.updateModel(true);
    },

    methods: {
        updateModel: function updateModel(update) {
            var value = this.value;
            this.childrens = (0, _assist.findChild)(this, 'Checkbox');
            if (this.childrens) {
                this.childrens.forEach(function (child) {
                    // 保证输出共享
                    child.model = value;
                    if (update) {
                        child.currentValue = value.indexOf(child.label) >= 0;
                        child.group = true;
                    }
                });
            }
        },
        change: function change(data) {
            this.currentValue = data;
            this.$emit('input', data);
        }
    },
    watch: {
        value: function value() {
            this.updateModel(true);
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d67cbce", module.exports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadList = exports.Upload = undefined;

var _upload = __webpack_require__(87);

var _upload2 = _interopRequireDefault(_upload);

var _uploadlist = __webpack_require__(92);

var _uploadlist2 = _interopRequireDefault(_uploadlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Upload = _upload2.default;
exports.UploadList = _uploadlist2.default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(91),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\upload\\upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23721db2", Component.options)
  } else {
    hotAPI.reload("data-v-23721db2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ajaxfileupload = __webpack_require__(90);

var _ajaxfileupload2 = _interopRequireDefault(_ajaxfileupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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

var prefixCls = 'ui-upload';

exports.default = {
    name: 'Upload',
    props: {
        // 上传请求地址
        url: {
            type: String,
            required: true // 检测必传
        },
        // 设置上传的请求头部
        headers: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        // 是否支持多选文件
        multiple: {
            type: Boolean,
            default: false
        },
        // 上传携带参数
        data: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        // 上传文件字段名
        name: {
            type: String,
            default: 'file'
        },
        // 支持发送 cookie 凭证信息
        withCredentials: {
            type: Boolean,
            default: false
        },
        // 是否显示上传文件列表
        showUploadList: {
            type: Boolean,
            default: false
        },
        // 上传类型 点击上传 或 拖拽上传
        type: {
            type: String,
            validator: function validator(value) {
                if (value !== 'select' && value !== 'drag') {
                    return 'select';
                }
                return value;
            },

            default: 'select'
        },
        // 支持的文件类型（文件的后缀名）
        format: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        // 接受上传的文件类型
        accept: String,
        // 文件大小限制，单位 kb
        maxSize: Number,
        // 文件数量
        maxNum: Number,
        // 是否在选取文件后立即进行上传
        autoUpload: {
            type: Boolean,
            default: true
        },
        beforeUpload: {
            type: Function,
            default: function _default() {}
        },
        onProgress: {
            type: Function,
            default: function _default() {}
        },
        onAccept: {
            type: Function,
            default: function _default() {}
        },
        onSuccess: {
            type: Function,
            default: function _default() {}
        },
        onError: {
            type: Function,
            default: function _default() {}
        },
        onCheckError: {
            type: Function,
            default: function _default() {}
        },
        onRemove: {
            type: Function,
            default: function _default() {}
        },
        onSelect: {
            type: Function,
            default: function _default() {}
        },
        disabled: Boolean
    },
    computed: {
        classnames: function classnames() {
            var _ref;

            return [prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-select', this.type === 'select'), _defineProperty(_ref, prefixCls + '-drag', this.type === 'drag'), _defineProperty(_ref, prefixCls + '-dragOver', this.type === 'drag' && this.dragOver), _defineProperty(_ref, prefixCls + '-disabled', this.disabled), _ref)];
        },
        inputclass: function inputclass() {
            return [prefixCls + '-input'];
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            dragOver: false,
            fileList: [], // 文件队列
            successQueue: [], // 成功文件队列
            errorQueue: [], // 失败文件队列
            tIndex: 1
        };
    },

    methods: {
        handleClick: function handleClick() {
            if (!this.disabled) {
                this.$refs.fileInput.click();
            }
        },

        // 选择文件后
        handleChange: function handleChange(e) {
            var files = e.target.files;

            if (!files) return;

            // 检测文件数量
            if (this.maxNum && this.fileList.length + files.length > this.maxNum) {
                this.onCheckError('number');
                return;
            }
            // 处理文件
            this.uploadFile(files);
            // 清空文件域的值
            e.target.value = null;
        },

        // 当放置被拖拽数据时
        handleDrop: function handleDrop(e) {
            this.dragOver = false;
            // 处理文件
            this.uploadFile(e.dataTransfer.files);
        },

        // 获取文件队列接口
        getQueue: function getQueue() {
            return {
                fileNum: this.fileList.length,
                successNum: this.successQueue.length,
                errorNum: this.errorQueue.length
            };
        },

        // 从文件列表清除指定文件接口
        clearFile: function clearFile(file) {
            this.fileList.splice(this.fileList.indexOf(file), 1);
        },

        // 上传接口
        submit: function submit() {
            if (!this.fileList.length) return false;
            // 遍历队列中的文件进入上传流程
            this.fileList.forEach(function (file) {
                // 直接进入上传流程
                if (file.status === 'ready') this.upload(file);
            }, this);
        },

        // 重置队列接口
        reset: function reset() {
            this.fileList.length = 0;
            this.successQueue.length = 0;
            this.errorQueue.length = 0;
            this.tIndex = 1;
        },

        // 上传前处理文件
        uploadFile: function uploadFile(files) {
            // 转为文件队列
            var filesQueue = Array.prototype.slice.call(files);

            if (filesQueue.length === 0) return;

            // 遍历队列中的文件进入上传流程
            filesQueue.forEach(function (raw_file) {
                // 文件存入队列
                var _file = this.handleStart(raw_file);
                // 触发选中文件事件
                this.onSelect(_file, this.fileList);
                // 如果是自动上传，则直接进入上传流程
                if (this.autoUpload) this.upload(_file);
            }, this);
        },

        // 检测 及 上传
        upload: function upload(file) {
            var _this2 = this;

            // 检测文件类型
            if (this.format.length) {
                // 上传文件扩展名
                var ext_name = file.name.split('.').pop().toLowerCase();
                // 遍历类型数组检测是否满足条件
                var checked = this.format.some(function (extname) {
                    return extname.toLowerCase() === ext_name;
                });
                if (!checked) {
                    this.clearFile(file);
                    this.onCheckError('type', file);
                    return false;
                }
            }
            // 检测文件大小
            if (this.maxSize) {
                var limit_size = this.maxSize * 1024; // 单位：KB
                var file_size = file.size; // 单位：KB
                if (file_size > limit_size) {
                    this.clearFile(file);
                    this.onCheckError('size', file);
                    return false;
                }
            }
            // 上传文件前钩子，返回false则停止上传
            if (this.beforeUpload && this.beforeUpload(file, this.data) == false) {
                // this.clearFile(file);
                return false;
            }

            file.showProgress = true;

            // 上传操作
            (0, _ajaxfileupload2.default)({
                headers: this.headers, // 上传请求头
                withCredentials: this.withCredentials, // 是否支持发送 cookie
                url: this.url, //上传的地址
                file: file.raw, // 上传的文件
                filename: this.name, // 上传的文件字段名
                data: this.data, // 上传时附带的额外参数
                onprogress: function onprogress(e) {
                    return _this2.handleUploadProgress(e, file, _this2.fileList);
                }, // 进度事件回调
                onsuccess: function onsuccess(res) {
                    return _this2.handleUploadSuccess(res, file);
                }, // 成功事件回调
                onerror: function onerror(err, res) {
                    return _this2.handleUploadError(err, res, file);
                } // 失败事件回调
            });
        },

        // 文件存入队列
        handleStart: function handleStart(file) {
            var uid = Date.now() + this.tIndex++;
            var _file = {
                status: 'ready',
                raw: file,
                name: file.name,
                type: file.type,
                size: file.size,
                uid: uid,
                percentage: 0,
                showProgress: false,
                errMsg: ''
            };

            this.fileList.push(_file);
            return _file;
        },
        handleRemove: function handleRemove(file) {
            this.fileList.splice(this.fileList.indexOf(file), 1);
            this.onRemove(file, this.fileList);
        },
        handleUploadProgress: function handleUploadProgress(e, file, filelist) {
            // 更新队列中文件状态
            file.status = 'uploading';
            file.percentage = e.percent || 0;
            this.onProgress(e, file, filelist);
        },
        handleUploadSuccess: function handleUploadSuccess(res, file) {
            var _this = this;
            // 收到的onAccept事件若返回false则认为失败
            if (this.onAccept(res, file) == false) {
                this.handleUploadError('server return error', res, file);
                return;
            }
            if (this.autoUpload) {
                // 修改文件状态
                file.status = 'finished';
                file.response = res;
            }
            setTimeout(function () {
                if (!this.autoUpload) {
                    // 修改文件状态
                    file.status = 'finished';
                    file.response = res;
                }
                // 进度条移除
                file.showProgress = false;
                // 从文件队列中清除
                _this.fileList.splice(_this.fileList.indexOf(file), 1);
                // 移入成功文件队列
                _this.successQueue.push(file);
                // 触发订阅者
                _this.onSuccess(res, file, _this.fileList);
            }, 800);
        },
        handleUploadError: function handleUploadError(err, res, file) {
            // 修改文件状态
            file.status = 'fail';
            file.showProgress = false;
            // 从文件队列中清除
            this.fileList.splice(this.fileList.indexOf(file), 1);
            // 移入失败文件队列
            this.errorQueue.push(file);
            // 触发订阅者
            this.onError(err, res, file);
        }
    }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (settings) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    function getData(xhr) {
        var data = xhr.responseText || xhr.response;

        try {
            return JSON.parse(data);
        } catch (error) {
            return data;
        }
    }

    function getError(xhr, url) {
        var error = new Error('fail to post ' + url + ' http status:' + xhr.status);
        error.status = xhr.status;
        error.url = url;
        error.method = 'post';
        return error;
    }

    // 向表单添加数据
    if (settings.data) {
        Object.keys(settings.data).map(function (key) {
            formData.append(key, settings.data[key]);
        });
    }
    // 向表单添加文件
    formData.append(settings.filename, settings.file);
    // 监听上传进度事件
    if (xhr.upload) {
        xhr.upload.onprogress = function (e) {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            settings.onprogress(e);
        };
    }
    // 监听上传完成事件
    xhr.onload = function () {
        if (this.status == 200) {
            // 成功处理
            settings.onsuccess(getData(this));
        } else {
            // 失败处理
            settings.onerror(getError(xhr, settings.url), getData(this));
        }
    };
    // 监听上传失败事件
    xhr.onerror = function (e) {
        settings.onerror(e);
    };
    // 设置支持发送cookie
    if (settings.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }
    // 设置提交方式
    xhr.open('POST', settings.url, true);
    // 设置请求头
    var headers = settings.headers;
    if (headers) {
        for (var key in headers) {
            if (headers[key] != null) xhr.setRequestHeader(key, headers[key]);
        }
    }
    // 发送上传请求
    xhr.send(formData);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.prefixCls]
  }, [_c('div', {
    class: _vm.classnames,
    on: {
      "click": _vm.handleClick,
      "drop": function($event) {
        $event.preventDefault();
        _vm.handleDrop($event)
      },
      "dragover": function($event) {
        $event.preventDefault();
        _vm.dragOver = true
      },
      "dragleave": function($event) {
        $event.preventDefault();
        _vm.dragOver = false
      }
    }
  }, [_c('input', {
    ref: "fileInput",
    class: _vm.inputclass,
    attrs: {
      "type": "file",
      "accept": _vm.accept,
      "multiple": _vm.multiple
    },
    on: {
      "change": _vm.handleChange
    }
  }), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), (_vm.showUploadList) ? _c('Upload-list', {
    attrs: {
      "files": _vm.fileList
    },
    on: {
      "onRemove": _vm.handleRemove
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-23721db2", module.exports)
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(95),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\upload\\uploadlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uploadlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17e44345", Component.options)
  } else {
    hotAPI.reload("data-v-17e44345", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
//
//
//
//
//

var prefixCls = 'ui-upload';

exports.default = {
    name: 'UploadList',
    props: {
        files: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {},
    data: function data() {
        return {
            prefixCls: prefixCls
        };
    },

    methods: {
        currentbarStyle: function currentbarStyle(file) {
            return {
                width: this.handlePrcent(file) + '%'
            };
        },

        // 处理返回进度，确定服务器返回成功前都进度定到90%
        handlePrcent: function handlePrcent(file) {
            var percentage = file.percentage;
            if (file.status === 'uploading') {
                if (file.percentage >= 90) {
                    percentage = 90;
                }
            }
            return parseInt(percentage);
        },
        fileItem: function fileItem(file) {
            return [prefixCls + '-list-item', _defineProperty({}, prefixCls + '-list-item-finish', file.status === 'finished')];
        },
        format: function format(file) {
            var format = file.name.split('.').pop().toLocaleLowerCase() || '';
            var type = 'document';

            if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
                type = 'image';
            }
            if (['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'].indexOf(format) > -1) {
                type = 'ios-film';
            }
            if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
                type = 'ios-musical-notes';
            }
            if (['doc', 'txt', 'docx', 'pages', 'epub', 'pdf'].indexOf(format) > -1) {
                type = 'document-text';
            }
            if (['numbers', 'csv', 'xls', 'xlsx'].indexOf(format) > -1) {
                type = 'stats-bars';
            }
            if (['keynote', 'ppt', 'pptx'].indexOf(format) > -1) {
                type = 'ios-videocam';
            }

            return type;
        },
        handleRemove: function handleRemove(file) {
            this.$emit('onRemove', file);
        }
    }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: [_vm.prefixCls + '-list']
  }, _vm._l((_vm.files), function(file) {
    return _c('li', {
      class: _vm.fileItem(file)
    }, [_c('span', [_c('Icon', {
      attrs: {
        "type": _vm.format(file),
        "size": "16"
      }
    }), _vm._v(" " + _vm._s(file.name) + "\n        ")], 1), _vm._v(" "), _c('Icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (file.status === 'finished'),
        expression: "file.status === 'finished'"
      }],
      class: [_vm.prefixCls + '-list-finish'],
      attrs: {
        "type": "checkmark-circled",
        "size": "14"
      }
    }), _vm._v(" "), _c('Icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (file.status === 'finished'),
        expression: "file.status === 'finished'"
      }],
      class: [_vm.prefixCls + '-list-remove'],
      attrs: {
        "type": "ios-close-empty",
        "size": "22"
      },
      nativeOn: {
        "click": function($event) {
          _vm.handleRemove(file)
        }
      }
    }), _vm._v(" "), _c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [(file.showProgress) ? _c('div', {
      staticClass: "upload-list-info"
    }, [_c('div', {
      staticClass: "upload-list-progress-outer"
    }, [_c('div', {
      staticClass: "upload-list-text"
    }, [_vm._v(_vm._s(_vm.handlePrcent(file)) + "%")])]), _vm._v(" "), _c('div', {
      staticClass: "upload-list-progress"
    }, [_c('div', {
      staticClass: "upload-list-progress-bg"
    }, [_c('div', {
      staticClass: "upload-list-progress-current",
      style: (_vm.currentbarStyle(file))
    })])])]) : _vm._e()])], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17e44345", module.exports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _table = __webpack_require__(97);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Table = _table2.default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(98)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(100),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\table\\table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70eceea5", Component.options)
  } else {
    hotAPI.reload("data-v-70eceea5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var prefixCls = 'ui-table';

exports.default = {
    name: 'Table',
    props: {
        // 是否采用固定表格布局
        // 固定表格布局 算法快（列等宽，与单元格的内容无关）
        // 自动表格布局 算法慢（列的宽度由列单元格中没有折行的最宽的内容设定）
        fixed: {
            type: Boolean,
            default: true
        },
        // 集合 - 每一列的宽度
        colWidth: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        // 是否显示纵向边框
        border: {
            type: Boolean,
            default: false
        },
        // 是否隔行换色
        stripe: {
            type: Boolean,
            default: true
        },
        // 列的水平对齐方式，默认左对齐
        align: {
            type: String
        }
    },
    computed: {
        classnames: function classnames() {
            var _ref;

            return [prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-border', this.border), _defineProperty(_ref, prefixCls + '-stripe', this.stripe), _defineProperty(_ref, prefixCls + '-fixed', this.fixed), _defineProperty(_ref, prefixCls + '-' + this.align, this.align), _ref)];
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls
        };
    }
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [(_vm.prefixCls + "-wrapper")]
  }, [_c('table', {
    class: _vm.classnames,
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0",
      "border": "0"
    }
  }, [_c('colgroup', _vm._l((_vm.colWidth), function(item) {
    return _c('col', {
      attrs: {
        "width": item
      }
    })
  })), _vm._v(" "), _vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70eceea5", module.exports)
  }
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

var _pagination = __webpack_require__(102);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Pagination = _pagination2.default;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\pagination\\pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce08bef2", Component.options)
  } else {
    hotAPI.reload("data-v-ce08bef2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var prefixCls = 'ui-pagination';

exports.default = {
    name: 'Pagination',
    props: {
        // 当前页码
        current: {
            type: Number,
            default: 1
        },
        // 总条目数
        total: Number,
        // 每页显示条目数
        pageSize: {
            type: Number,
            default: 10
        },
        // 简版
        simple: Boolean,
        // 是否显示跳至第几页
        showSkip: {
            type: Boolean,
            default: false
        },
        // 是否显示总数
        showTotal: {
            type: Boolean,
            default: false
        }
    },
    mounted: function mounted() {
        // 当前页数
        this.currentPage = this.current;
        // 总页数
        // this.totalPage = Math.ceil(this.total / this.pageSize);
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            // 当前页数
            currentPage: 1,
            // 总页数
            // totalPage: 0,
            // 是否显示前翻页省略号
            showPrevMore: false,
            // 是否显示后翻页省略号
            showNextMore: false
        };
    },

    computed: {
        totalPage: function totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        simpleWrapperClass: function simpleWrapperClass() {
            return [prefixCls, prefixCls + '-simple'];
        },
        simplePagerClass: function simplePagerClass() {
            return [prefixCls + '-simple-pager'];
        },
        prevClass: function prevClass() {
            return [prefixCls + '-prev', _defineProperty({}, prefixCls + '-disabled', this.currentPage === 1)];
        },
        nextClass: function nextClass() {
            return [prefixCls + '-next', _defineProperty({}, prefixCls + '-disabled', this.currentPage === this.totalPage)];
        },
        pageItemClass: function pageItemClass() {
            return [prefixCls + '-item'];
        },
        activeClass: function activeClass() {
            return [prefixCls + '-active'];
        },
        pagers: function pagers() {
            var pageNum = 7; // 视图上要显示的page数量
            var totalPage = this.totalPage;
            var currentPage = this.currentPage;
            var array = [];

            // 隐藏省略号
            this.showPrevMore = false;
            this.showNextMore = false;

            // 大于7页
            if (totalPage > pageNum) {
                // 大于7页 且 当前页大于page数量 - 3： 显示前翻页省略号
                if (currentPage > pageNum - 3) this.showPrevMore = true;
                // 大于7页 且 当前页小于总页数 - 3： 显示后翻页省略号
                if (currentPage < totalPage - 3) this.showNextMore = true;
            }

            // 小于等于7页时 前后省略号才会都不显示
            if (!this.showPrevMore && !this.showNextMore) {
                for (var i = 2; i < totalPage; i++) {
                    array.push(i);
                }
            }
            // 大于7页 前后省略号都显示
            else if (this.showPrevMore && this.showNextMore) {
                    // 渲染当前页的前后两页
                    for (var i = currentPage - 2; i <= currentPage + 2; i++) {
                        array.push(i);
                    }
                }
                // 大于7页 显示前省略号，不显示后省略号
                else if (this.showPrevMore && !this.showNextMore) {
                        for (var i = totalPage - (pageNum - 2); i < totalPage; i++) {
                            array.push(i);
                        }
                    }
                    // 大于7页 显示后省略号，不显示前省略号
                    else if (!this.showPrevMore && this.showNextMore) {
                            // 
                            for (var i = 2; i < pageNum; i++) {
                                array.push(i);
                            }
                        }

            return array;
        }
    },
    methods: {
        handlePrev: function handlePrev() {
            if (this.currentPage <= 1) return false;
            this.currentPage -= 1;
            this.$emit('change', this.currentPage);
        },
        handleNext: function handleNext() {
            if (this.currentPage >= this.totalPage) return false;
            this.currentPage += 1;
            this.$emit('change', this.currentPage);
        },
        handleFastPrev: function handleFastPrev() {
            var page = this.currentPage - 5;
            if (page > 0) {
                this.currentPage = page;
            } else {
                this.currentPage = 1;
            }
            this.$emit('change', this.currentPage);
        },
        handleFastNext: function handleFastNext() {
            var page = this.currentPage + 5;
            if (page > this.totalPage) {
                this.currentPage = this.totalPage;
            } else {
                this.currentPage = page;
            }
            this.$emit('change', this.currentPage);
        },

        // 跳转到目标页数
        goPage: function goPage(value) {
            if (value < 1) {
                return false;
            } else if (value > this.totalPage) {
                return false;
            } else if (value === this.currentPage) {
                return false;
            }
            this.currentPage = value;
            this.$emit('change', this.currentPage);
        },

        // 键盘按下事件
        handleKeyDown: function handleKeyDown(e) {
            var val = parseInt(e.target.value.trim());
            if (isNaN(val)) return false;
            // 跳转到目标页数
            this.goPage(val);
        }
    }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.simple) ? _c('div', [_c('div', {
    class: _vm.simpleWrapperClass
  }, [(_vm.showTotal) ? _c('div', {
    class: [_vm.prefixCls + '-total']
  }, [_vm._v("\n            共"), _c('span', {
    class: [_vm.prefixCls + '-total-count']
  }, [_vm._v(_vm._s(_vm.total))]), _vm._v("条\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.prevClass,
    on: {
      "click": _vm.handlePrev
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-arrow-left"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    class: _vm.simplePagerClass
  }, [_c('span', [_vm._v(_vm._s(_vm.currentPage))]), _c('span', [_vm._v("/")]), _c('span', [_vm._v(_vm._s(_vm.totalPage))])]), _vm._v(" "), _c('div', {
    class: _vm.nextClass,
    on: {
      "click": _vm.handleNext
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-arrow-right"
    }
  })], 1)]), _vm._v(" "), (_vm.showSkip) ? _c('div', {
    class: [_vm.prefixCls + '-skip']
  }, [_vm._v("\n            跳至"), _c('input', {
    attrs: {
      "type": "text"
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.handleKeyDown($event)
      }
    }
  }), _vm._v("页\n        ")]) : _vm._e()])]) : _c('div', [_c('div', {
    class: [_vm.prefixCls]
  }, [(_vm.showTotal) ? _c('div', {
    class: [_vm.prefixCls + '-total']
  }, [_vm._v("\n            共"), _c('span', {
    class: [_vm.prefixCls + '-total-count']
  }, [_vm._v(_vm._s(_vm.total))]), _vm._v("条\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.prevClass,
    on: {
      "click": _vm.handlePrev
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-arrow-left"
    }
  })], 1)]), _vm._v(" "), (_vm.currentPage > 0) ? _c('div', {
    class: [_vm.pageItemClass, ( _obj = {}, _obj[_vm.activeClass] = _vm.currentPage === 1, _obj )],
    on: {
      "click": function($event) {
        _vm.goPage(1)
      }
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("1")])]) : _vm._e(), _vm._v(" "), (_vm.showPrevMore) ? _c('div', {
    class: [_vm.prefixCls + '-item-jump-prev'],
    on: {
      "click": _vm.handleFastPrev
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-arrow-left"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pagers), function(page) {
    return _c('div', {
      class: [_vm.pageItemClass, ( _obj = {}, _obj[_vm.activeClass] = _vm.currentPage === page, _obj )],
      on: {
        "click": function($event) {
          _vm.goPage(page)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(page))])])
    var _obj;
  }), _vm._v(" "), (_vm.showNextMore) ? _c('div', {
    class: [_vm.prefixCls + '-item-jump-next'],
    on: {
      "click": _vm.handleFastNext
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-arrow-right"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.totalPage > 1) ? _c('div', {
    class: [_vm.pageItemClass, ( _obj$1 = {}, _obj$1[_vm.activeClass] = _vm.currentPage === _vm.totalPage, _obj$1 )],
    on: {
      "click": function($event) {
        _vm.goPage(_vm.totalPage)
      }
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.totalPage) + " \n            ")])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.nextClass,
    on: {
      "click": _vm.handleNext
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-arrow-right"
    }
  })], 1)]), _vm._v(" "), (_vm.showSkip) ? _c('div', {
    class: [_vm.prefixCls + '-skip']
  }, [_vm._v("\n            跳至"), _c('input', {
    attrs: {
      "type": "text"
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.handleKeyDown($event)
      }
    }
  }), _vm._v("页\n        ")]) : _vm._e()], 2)])
  var _obj;
  var _obj$1;
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ce08bef2", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modal = undefined;

var _modal = __webpack_require__(5);

var _modal2 = _interopRequireDefault(_modal);

var _dialog = __webpack_require__(110);

var _dialog2 = _interopRequireDefault(_dialog);

var _assist = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 创建单例程序
var instance = null;

// 定义默认信息
// import Vue from 'vue';
var defaults = {
    title: '提示',
    width: 500,
    okText: '确定',
    cancelText: '取消',
    maskClose: false,
    showClose: true,
    showCancel: true,
    loading: false,
    message: '',
    beforeClose: null,
    ok: _modal2.default.methods.ok,
    cancel: _modal2.default.methods.cancel
};

function getModalInstance(options, context) {
    // 获取Modal弹窗单例
    if (!instance) {
        instance = (0, _dialog2.default)();
    }
    // 显示弹窗
    instance.show(options, context);

    return instance;
}

// 挂载alert方法 供全局实例调用
_modal2.default.alert = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // 防止引用对象被修改 每次都要重置属性
    var modal_params = (0, _assist.merga)({}, defaults, {
        message: message,
        showCancel: false
    }, options);
    return getModalInstance(modal_params, this);
};

// 挂载confirm方法 供全局实例调用
_modal2.default.confirm = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // 防止引用对象被修改 每次都要重置属性
    var modal_params = (0, _assist.merga)({}, defaults, {
        message: message
    }, options);
    return getModalInstance(modal_params, this);
};

exports.Modal = _modal2.default;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var prefixCls = 'ui-modal';

exports.default = {
    name: 'Modal',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '消息'
        },
        // 模态框宽度
        width: {
            type: [String, Number],
            default: 500
        },
        okText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        // 是否可以通过点击遮罩层关闭模态弹窗
        maskClose: {
            type: Boolean,
            default: false
        },
        // 是否显示右上角关闭按钮
        showClose: {
            type: Boolean,
            default: true
        },
        // 是否显示取消按钮
        showCancel: {
            type: Boolean,
            default: true
        },
        // 是否异步关闭
        loading: {
            type: Boolean,
            default: false
        },
        // 关闭弹窗之前
        beforeClose: Function
    },
    mounted: function mounted() {
        document.addEventListener('keydown', this.EscHandle);
    },

    computed: {
        classnames: function classnames() {
            var width = parseInt(this.width) + 'px';
            return {
                width: width
            };
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            visible: this.value,
            message: ''
        };
    },

    watch: {
        value: function value(val) {
            this.visible = val;
        },
        visible: function visible(val) {
            var _this = this;

            // 关闭
            if (val === false) {
                setTimeout(function () {
                    _this.openScroll();
                }, 200);
            }
            // 打开
            else {
                    this.lockScroll();
                }
        }
    },
    methods: {
        ok: function ok() {
            if (this.beforeClose && typeof this.beforeClose === 'function') {
                var flag = this.beforeClose(1);
                if (flag === false) return false;
            }
            if (!this.loading) {
                this.visible = false;
                this.$emit('input', false);
            }
            this.$emit('ok');
        },
        EscHandle: function EscHandle(e) {
            if (this.visible && this.maskClose) {
                if (e.keyCode === 27) {
                    this.cancel();
                }
            }
        },
        mask: function mask() {
            if (this.maskClose) {
                this.cancel();
            }
        },

        // 关闭弹层
        cancel: function cancel(e) {
            if (this.beforeClose && typeof this.beforeClose === 'function') {
                this.beforeClose(0);
            }
            this.visible = false;
            this.$emit('input', false);
            this.$emit('cancel');
        },
        getScrollBarWidth: function getScrollBarWidth() {
            // 包含滚动条宽度
            var windowWidth = window.innerWidth;
            // 判断是否为overflow hidden  是否有滚动条
            this.isBodyOverflow = document.body.clientWidth < windowWidth;
            if (this.isBodyOverflow) {
                this.scrollBarWidth = windowWidth - document.body.clientWidth;
            }
        },

        // 解除锁定页面滚动
        openScroll: function openScroll() {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        },

        // 锁定页面滚动
        lockScroll: function lockScroll() {
            this.getScrollBarWidth();
            if (this.isBodyOverflow && this.scrollBarWidth !== undefined) {
                document.body.style.paddingRight = this.scrollBarWidth + 'px';
            }
            document.body.style.overflow = 'hidden';
        }
    }
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-ease"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "ui-modal-wrapper"
  }, [_c('div', {
    staticClass: "ui-modal-mask",
    on: {
      "click": _vm.mask
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-modal",
    style: (_vm.classnames)
  }, [_c('div', {
    staticClass: "ui-modal-content"
  }, [_c('div', {
    staticClass: "ui-modal-header"
  }, [_c('div', {
    staticClass: "ui-modal-header-title"
  }, [_vm._t("header", [_vm._v(_vm._s(_vm.title))])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "ui-modal-body"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.message))])], 2), _vm._v(" "), _c('div', {
    staticClass: "ui-modal-footer"
  }, [_vm._t("footer", [_c('Button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.ok($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.okText))]), _vm._v(" "), (_vm.showCancel) ? _c('Button', {
    nativeOn: {
      "click": function($event) {
        _vm.cancel($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e()])], 2), _vm._v(" "), (_vm.showClose) ? _c('div', {
    staticClass: "ui-modal-close",
    on: {
      "click": _vm.cancel
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-close-empty"
    }
  })], 1) : _vm._e()])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ee3cbba", module.exports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modal;

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _modal = __webpack_require__(5);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function modal() {
    // 创建子类
    var chilModal = _vue2.default.extend(_modal2.default);
    // 挂载到实例
    var instance = new chilModal().$mount();
    // 渲染到body内
    document.body.appendChild(instance.$el);

    return {
        show: function show(options, context) {
            instance.visible = true;
            // 获取传递的设置属性
            for (var key in options) {
                // 如果传递的是Modal实例的属性 则修改当前属性
                if (typeof instance[key] !== 'function') {
                    instance[key] = options[key];
                } else {
                    if (key === 'ok' || key === 'cancel') {
                        instance[key] = function (key) {
                            return function () {
                                _modal2.default.methods[key].call(instance);
                                options[key].call(context);
                            };
                        }(key);
                    }
                }
            }
        }
    };
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = undefined;

var _progress = __webpack_require__(112);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Progress = _progress2.default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(115),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\progress\\progress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] progress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46a30727", Component.options)
  } else {
    hotAPI.reload("data-v-46a30727", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
//
//
//

var prefixCls = 'ui-progress';
exports.default = {
    name: 'Progress',
    props: {
        // 进度条类型，分为圆形和线
        type: {
            type: String,
            default: 'line'
        },
        // 百分比
        percent: {
            type: Number,
            default: 0
        },
        // 线宽
        stroke: {
            type: Number,
            default: 10
        },
        // 状态：成功或失败
        status: {
            validator: function validator(value) {
                var statusGroup = ['success', 'error'];
                if (statusGroup.indexOf(value) > -1) {
                    return value;
                }
                return 'normal';
            },

            default: 'normal'
        },
        // 是否显示进度文字信息
        showInfo: {
            type: Boolean,
            default: true
        },
        // 进度条颜色
        color: {
            type: String
        },
        width: {
            type: Number,
            default: 126
        }
    },
    mounted: function mounted() {
        this.handleStatus();
    },
    data: function data() {
        return {
            currentStatus: this.status
        };
    },

    computed: {
        wrapperClass: function wrapperClass() {
            return ['ui-progress-wrapper', 'ui-progress-' + this.currentStatus];
        },
        progressClass: function progressClass() {
            return ['ui-progress', _defineProperty({}, 'ui-progress-show', this.showInfo)];
        },
        bgStyles: function bgStyles() {
            var styles = {
                width: this.percent + '%',
                height: this.stroke + 'px'
            };
            if (this.color) {
                styles.backgroundColor = this.color;
            }

            return styles;
        },
        statusIcon: function statusIcon() {
            var type = '';
            switch (this.currentStatus) {
                case 'wrong':
                    type = 'ios-close';
                    break;
                case 'success':
                    type = 'ios-checkmark';
                    break;
            }

            return type;
        },
        circleSize: function circleSize() {
            return {
                width: this.width + 'px',
                height: this.width + 'px'
            };
        },
        radius: function radius() {
            return 50 - this.stroke / 2;
        },
        pathString: function pathString() {
            return 'M 50,50 m 0,-' + this.radius + '\n            a ' + this.radius + ',' + this.radius + ' 0 1 1 0,' + 2 * this.radius + '\n            a ' + this.radius + ',' + this.radius + ' 0 1 1 0,-' + 2 * this.radius;
        },
        len: function len() {
            return Math.PI * 2 * this.radius;
        },
        pathStyle: function pathStyle() {
            return {
                'stroke-dasharray': this.len + 'px ' + this.len + 'px',
                'stroke-dashoffset': (100 - this.percent) / 100 * this.len + 'px',
                'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
            };
        },
        innerClass: function innerClass() {
            return [prefixCls + '-inner'];
        }
    },
    methods: {
        handleStatus: function handleStatus(isBack) {
            if (!isBack) {
                if (parseInt(this.percent) === 100) {
                    this.currentStatus = 'success';
                    this.$emit('statusChange', this.percent);
                }
            } else {
                this.currentStatus = 'normal';
                this.$emit('statusChange', this.percent);
            }
        }
    },
    watch: {
        percent: function percent(val, oldVal) {
            if (val < oldVal) {
                this.handleStatus(true);
            } else {
                this.handleStatus();
            }
        }
    }
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.type === 'line') ? _c('div', {
    class: _vm.wrapperClass
  }, [_c('div', {
    class: _vm.progressClass
  }, [_c('div', {
    staticClass: "ui-progress-bg"
  }, [_c('div', {
    staticClass: "ui-progress-current",
    style: (_vm.bgStyles)
  })])]), _vm._v(" "), (_vm.showInfo) ? _c('div', {
    staticClass: "ui-progress-outer"
  }, [(_vm.currentStatus === 'normal') ? _c('div', [_c('div', {
    staticClass: "ui-progress-text"
  }, [_vm._v(_vm._s(_vm.percent) + "%")])]) : _c('div', [_c('Icon', {
    attrs: {
      "type": _vm.statusIcon
    }
  })], 1)]) : _vm._e()]) : _c('div', {
    class: _vm.wrapperClass,
    style: (_vm.circleSize)
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 100 100"
    }
  }, [_c('path', {
    attrs: {
      "d": _vm.pathString,
      "stroke": "#eaeef2",
      "stroke-width": 6,
      "fill-opacity": 0
    }
  }), _vm._v(" "), _c('path', {
    style: (_vm.pathStyle),
    attrs: {
      "d": _vm.pathString,
      "stroke-linecap": "round",
      "stroke": this.color ? this.color : '#43a3fb',
      "stroke-width": 6,
      "fill-opacity": "0"
    }
  })]), _vm._v(" "), _c('div', {
    class: _vm.innerClass
  }, [_vm._v("\n        " + _vm._s(_vm.percent) + "%\n    ")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46a30727", module.exports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = undefined;

var _loading = __webpack_require__(117);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Loading = _loading2.default;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(120),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\loading\\loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dbb39c1", Component.options)
  } else {
    hotAPI.reload("data-v-1dbb39c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var prefixCls = 'ui-loading';
var positionFormat = {
    s: 'static',
    static: 'static',
    a: 'absolute',
    absolute: 'absolute',
    f: 'fixed',
    fixed: 'fixed'
};
exports.default = {
    name: 'Loading',
    props: {
        position: {
            type: [String, Boolean],
            default: 'static'
        },
        text: {
            type: [String, Number, Boolean],
            default: ''
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            positionFormat: positionFormat
        };
    },

    computed: {}
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.prefixCls + '-mask' ],
    style: ({
      position: _vm.positionFormat[_vm.position]
    })
  }, [_c('div', {
    class: [_vm.prefixCls + '-spinner' ]
  }, [_c('svg', {
    staticClass: "circular",
    attrs: {
      "viewBox": "25 25 50 50"
    }
  }, [_c('circle', {
    staticClass: "path",
    attrs: {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "ui-loading-text"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1dbb39c1", module.exports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _message = __webpack_require__(122);

var _message2 = _interopRequireDefault(_message);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_message2.default.newInstance = function (properties) {
    var _props = properties || {};

    var Instance = new _vue2.default({
        data: _props,
        render: function render(h) {
            return h(_message2.default, {
                props: _props
            });
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var notification = Instance.$children[0];

    return {
        notice: function notice(noticeProps) {
            notification.add(noticeProps);
        },
        remove: function remove(name) {
            notification.close(name);
        },

        component: notification,
        destroy: function destroy(element) {
            notification.closeAll();
            setTimeout(function () {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

var prefixCls = 'ui-message';
var iconPrefixCls = 'ui-icon';
var prefixKey = 'ui_message_key_';

var defaultDuration = 1.5;
var top = void 0;
var messageInstance = void 0;
var name = 1;

function getMessageInstance() {
    messageInstance = messageInstance || _message2.default.newInstance();
    return messageInstance;
}

function notice() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    var type = arguments[2];
    var close = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var closable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    var instance = getMessageInstance();
    instance.notice({
        name: '' + prefixKey + name,
        duration: duration,
        // transitionName: 'move-up',
        content: content,
        close: close,
        type: type,
        closable: closable
    });

    // 用于手动消除
    return function () {
        var target = name++;

        return function () {
            instance.remove('' + prefixKey + target);
        };
    }();
}

exports.default = {
    name: 'Message',
    info: function info(options) {
        var type = typeof options === 'undefined' ? 'undefined' : _typeof(options);
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'info', options.close, options.closable);
    },
    success: function success(options) {
        var type = typeof options === 'undefined' ? 'undefined' : _typeof(options);
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'success', options.close, options.closable);
    },
    warning: function warning(options) {
        var type = typeof options === 'undefined' ? 'undefined' : _typeof(options);
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'warning', options.close, options.closable);
    },
    error: function error(options) {
        var type = typeof options === 'undefined' ? 'undefined' : _typeof(options);
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'error', options.close, options.closable);
    },
    loading: function loading(options) {
        var type = typeof options === 'undefined' ? 'undefined' : _typeof(options);
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'loading', options.close, options.closable);
    },
    destroy: function destroy() {
        var instance = getMessageInstance();
        messageInstance = null;
        instance.destroy('ui-message');
    }
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\nodejs\\UI-framework\\ui-worker\\src\\components\\Message\\message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6cba0937", Component.options)
  } else {
    hotAPI.reload("data-v-6cba0937", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(1);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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

var prefixCls = 'ui-message';
var iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled',
    'loading': 'load-c'
};
var seed = 0;
var now = Date.now();
exports.default = {
    props: {
        prefixCls: {
            type: String,
            default: prefixCls
        }
    },
    data: function data() {
        return {
            messages: [],
            iconTypes: iconTypes
        };
    },

    computed: {},
    methods: {
        getMessageClasses: function getMessageClasses(_className, _closable) {
            return [this.prefixCls, _defineProperty({}, this.prefixCls + '-closable', _closable)];
        },
        add: function add(message) {
            var _this2 = this;

            var _this = this;
            var name = message.name || 'uiMessages_' + now + '_' + seed++;
            // console.log(merga);
            var _message = (0, _assist.merga)({
                content: '',
                duration: 1.5,
                closable: true,
                type: null,
                isShow: false,
                name: name
            }, message);
            // console.log(JSON.parse(JSON.stringify(_message)))
            this.messages.push(_message);
            setTimeout(function () {
                _message.isShow = true;
            }, 0);

            this.clearCloseTimer(_message.closeTimer);
            if (_message.duration !== 0) {
                _message.closeTimer = setTimeout(function () {
                    _this2.close(_message.name);
                }, _message.duration * 1000);
            }
        },
        clearCloseTimer: function clearCloseTimer(_Timer) {
            if (_Timer) {
                clearTimeout(_Timer);
            }
        },
        close: function close(name) {
            var messages = this.messages;

            var _loop = function _loop(i) {
                if (messages[i].name === name) {
                    messages[i].isShow = false;
                    messages[i].close();
                    setTimeout(function () {
                        messages.splice(i, 1);
                    }, 500);
                    // messages.splice(i, 1);
                    return 'break';
                }
            };

            for (var i = 0; i < messages.length; i++) {
                var _ret = _loop(i);

                if (_ret === 'break') break;
            }
        },
        closeAll: function closeAll() {
            this.messages = [];
        }
    }
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.prefixCls + '-warrper']
  }, [_vm._l((_vm.messages), function(message, index) {
    return [_c('transition', {
      attrs: {
        "name": "move-up"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (message.isShow),
        expression: "message.isShow"
      }],
      class: [_vm.prefixCls]
    }, [_c('div', {
      class: [message.classes, _vm.prefixCls + '-content', _vm.getMessageClasses('', message.closable)]
    }, [(!message.type) ? _c('div', {
      ref: "content",
      refInFor: true,
      class: [_vm.prefixCls + '-content-text'],
      domProps: {
        "textContent": _vm._s(message.content)
      }
    }) : _c('div', {
      class: [_vm.prefixCls + '-content-text', _vm.prefixCls + '-content-' + message.type]
    }, [_c('i', {
      class: ['ui-icon', 'ui-icon-' + _vm.iconTypes[message.type], {
        'ui-load-loop': _vm.iconTypes[message.type] == 'load-c'
      }]
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(message.content))])]), _vm._v(" "), (message.closable) ? _c('a', {
      class: [_vm.prefixCls + '-content-close'],
      on: {
        "click": function($event) {
          _vm.close(message.name, true)
        }
      }
    }, [_c('i', {
      staticClass: "ui-icon ui-icon-ios-close-empty"
    })]) : _vm._e()])])])]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6cba0937", module.exports)
  }
}

/***/ })
/******/ ]);
});