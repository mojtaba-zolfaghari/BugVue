(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoEditorVueWrapper"] = factory(require("vue"));
	else
		root["KendoEditorVueWrapper"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Tools = __webpack_require__(11);

var _Tools2 = _interopRequireDefault(_Tools);

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoEditorTool = {
    name: 'kendo-editor-tool',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Tools2.default]
};

exports.default = KendoEditorTool;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoEditorMixin = __webpack_require__(4);

var _KendoEditorMixin2 = _interopRequireDefault(_KendoEditorMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-editor',
    mixins: [_KendoEditorMixin2.default]
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorInstaller = exports.KendoEditorInstaller = exports.EditorTool = exports.KendoEditorTool = exports.Editor = exports.KendoEditor = undefined;

var _KendoEditor = __webpack_require__(1);

var _KendoEditor2 = _interopRequireDefault(_KendoEditor);

var _KendoEditorTool = __webpack_require__(0);

var _KendoEditorTool2 = _interopRequireDefault(_KendoEditorTool);

var _kendoEditorInstaller = __webpack_require__(21);

var _kendoEditorInstaller2 = _interopRequireDefault(_kendoEditorInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoEditor = _KendoEditor2.default;
exports.Editor = _KendoEditor2.default;
exports.KendoEditorTool = _KendoEditorTool2.default;
exports.EditorTool = _KendoEditorTool2.default;
exports.KendoEditorInstaller = _kendoEditorInstaller2.default;
exports.EditorInstaller = _kendoEditorInstaller2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(5);

var _EditorProps = __webpack_require__(10);

var _EditorProps2 = _interopRequireDefault(_EditorProps);

var _KendoEditorTool = __webpack_require__(0);

var _KendoEditorTool2 = _interopRequireDefault(_KendoEditorTool);

var _Deserialization = __webpack_require__(12);

var _Deserialization2 = _interopRequireDefault(_Deserialization);

var _FileBrowser = __webpack_require__(13);

var _FileBrowser2 = _interopRequireDefault(_FileBrowser);

var _ImageBrowser = __webpack_require__(14);

var _ImageBrowser2 = _interopRequireDefault(_ImageBrowser);

var _Immutables = __webpack_require__(15);

var _Immutables2 = _interopRequireDefault(_Immutables);

var _Messages = __webpack_require__(16);

var _Messages2 = _interopRequireDefault(_Messages);

var _PasteCleanup = __webpack_require__(17);

var _PasteCleanup2 = _interopRequireDefault(_PasteCleanup);

var _Pdf = __webpack_require__(18);

var _Pdf2 = _interopRequireDefault(_Pdf);

var _Resizable = __webpack_require__(19);

var _Resizable2 = _interopRequireDefault(_Resizable);

var _Serialization = __webpack_require__(20);

var _Serialization2 = _interopRequireDefault(_Serialization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    render: function render(createElement) {
        var tagName = this.tag || 'textarea';

        return createElement(tagName, this.$slots.default);
    },
    props: _EditorProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _Deserialization2.default, _FileBrowser2.default, _ImageBrowser2.default, _Immutables2.default, _Messages2.default, _PasteCleanup2.default, _Pdf2.default, _Resizable2.default, _Serialization2.default],
    mounted: function mounted() {
        var that = this;

        that._resolveChildren();

        kendo.jQuery(that.$el).kendoEditor(that.widgetOptions);

        that.$emit('kendowidgetready', that.kendoWidget());

        that.kendoWidget().bind('change', function () {
            that.$emit('changemodel', that.kendoWidget().value());
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoEditor();
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('tools', _KendoEditorTool2.default.name);
        }
    },
    model: {
        event: 'changemodel'
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KendoSharedMethods = exports.KendoBaseInputComponent = exports.KendoBaseDatasourceComponent = exports.KendoBaseComponent = undefined;

var _kendoBaseComponent = __webpack_require__(6);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(7);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(8);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(9);

var _kendoSharedMethods2 = _interopRequireDefault(_kendoSharedMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoBaseComponent = _kendoBaseComponent2.default;
exports.KendoBaseDatasourceComponent = _kendoBaseDatasourceComponent2.default;
exports.KendoBaseInputComponent = _kendoBaseInputComponent2.default;
exports.KendoSharedMethods = _kendoSharedMethods2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
    props: {
        disabled: Boolean,
        readonly: Boolean
    },
    render: function render(h) {
        return h('div');
    },
    created: function created() {
        this.resolveWidgetOptions();
        this.$_nativeTemplates = [];
        this.$on('kendowidgetready', this.ready);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.kendoWidget() && this.kendoWidget().destroy) {
            this.kendoWidget().destroy();
            if (this.$_nativeTemplates.length) {
                for (var i = 0; i < this.$_nativeTemplates.length; i++) {
                    this.$_nativeTemplates[i].$destroy();
                }
            }
        }
    },
    mounted: function mounted() {
        if (this.$el.classList.length > 0) {
            this.nativeClasses = [].concat(_toConsumableArray(this.$el.classList));
        } else {
            this.nativeClasses = [];
        }

        for (var key in this.$options.propsData) {
            var that = this;

            if (key.toLowerCase().indexOf('template') !== -1) {
                var isFunction = this.widgetOptions[key] instanceof Function;

                if (isFunction) {
                    this.widgetOptions[key] = this.transformTemplate(key);
                }
            }

            if (key === 'value') {
                that.$watch(key, function (newValue) {
                    that.changeValue(newValue);
                });
            } else if (key === 'disabled') {
                that.$watch(key, function (newValue) {
                    that.makeDisabled(newValue);
                });
            } else if (key === 'readonly') {
                that.$watch(key, function (newValue) {
                    that.makeReadonly(newValue);
                });
            } else {
                that.$watch(key, function (newValue, oldValue) {
                    // Vue always dispatches a change when inline complex objects are bound
                    // https://github.com/telerik/kendo-ui-core/issues/3952
                    if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                        that.updateWidget();
                    }
                });
            }
        }
    },

    watch: {
        $attrs: function $attrs() {
            this.toggleClasses();
        }
    },
    methods: {
        toggleClasses: function toggleClasses() {
            var that = this;
            var $element = kendo.jQuery(that.$el);
            var $wrapper = that.kendoWidget().wrapper;

            if ($wrapper && $wrapper[0] !== $element[0]) {
                that.nativeClasses.forEach(function (item) {
                    $wrapper.removeClass(item);
                });

                // Add to wrapper only the custom classes without the default Kendo ones
                if (that.kendoClasses) {
                    that.nativeClasses = [].concat(_toConsumableArray(that.$el.classList)).filter(function (item) {
                        return that.kendoClasses.indexOf(item) < 0;
                    });
                } else {
                    that.nativeClasses = [].concat(_toConsumableArray(that.$el.classList));
                }

                that.nativeClasses.forEach(function (item) {
                    $wrapper.addClass(item);
                });
            }

            if (that.kendoClasses) {
                that.kendoClasses.forEach(function (item) {
                    $element.addClass(item);
                });
            }
        },
        updateWidget: function updateWidget() {
            var that = this;

            that.resolveWidgetOptions();

            if (that._resolveChildren) {
                that._resolveChildren();
            }

            if (that.kendoWidget().setOptions) {
                that.kendoWidget().setOptions(that.widgetOptions);
            }
        },

        transformTemplate: function transformTemplate(key, val) {
            var that = this;
            var object;
            var templateDefinition = val || that.$options.propsData[key];
            try {
                object = templateDefinition.call(that, {});
            } catch (e) {
                return templateDefinition;
            }

            if (!object.template) {
                return templateDefinition;
            }

            return function () {
                object = templateDefinition.apply(this, arguments);
                var vueObject = new _vue2.default(object.template);
                vueObject.$data.templateArgs = object.templateArgs;

                var kendoguid = 'kendo' + kendo.guid();

                that.$nextTick(function () {
                    if (document.getElementById(kendoguid)) {
                        vueObject.$mount('#' + kendoguid);
                        that.$_nativeTemplates.push(vueObject);
                    }
                });

                return '<div id="' + kendoguid + '"></div>';
            };
        },
        resolveChildren: function resolveChildren(prop, name) {
            if (!this.widgetOptions[prop] && this.$slots.default) {
                var items = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.$slots.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var childSlot = _step.value;

                        if (childSlot.tag && childSlot.tag.indexOf(name) !== -1) {
                            var itemOptions = this.parseOptions(childSlot.componentInstance);

                            if (itemOptions.dataSourceRef) {
                                this.setInnerDataSource('dataSourceRef', 'dataSource', itemOptions);
                            }

                            items.push(itemOptions);
                            this.handleWatcher(childSlot.componentInstance);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (items.length) {
                    this.widgetOptions[prop] = items;
                }
            }
        },
        handleWatcher: function handleWatcher(childInstance) {
            var that = this;
            childInstance.stashedPropsData = JSON.stringify(childInstance.$options.propsData);

            if (!childInstance._isWatchAttached) {
                childInstance.$watch('$props', function () {
                    var propsAsJson = JSON.stringify(childInstance.$options.propsData);
                    var needsUpdate = childInstance.stashedPropsData !== propsAsJson;

                    if (that.updateWidget && needsUpdate) {
                        that.updateWidget();
                    } else if (that._resolveInnerChildren) {
                        that._resolveInnerChildren();
                    }

                    childInstance.stashedPropsData = propsAsJson;
                }, { deep: true });

                childInstance._isWatchAttached = true;
            }
        },
        makeDisabled: function makeDisabled(toDisable) {
            if (this.kendoWidget().enable) {
                this.kendoWidget().enable(!toDisable);
            }
        },
        makeReadonly: function makeReadonly(value) {
            if (this.kendoWidget().readonly) {
                this.kendoWidget().readonly(value);
            }
        },
        changeValue: function changeValue(newValue) {
            if (this.kendoWidget().value) {
                this.kendoWidget().value(newValue);
            }
        },
        resolveWidgetOptions: function resolveWidgetOptions() {
            this.widgetOptions = this.parseOptions();
        },
        parseOptions: function parseOptions(component) {
            var that = component || this;
            var options = {};
            for (var key in that.$options.propsData) {
                var propOptions = that.$options.props[key];
                var val = that.$options.propsData[key];

                var compositeProps = propOptions.kComposite;

                if (!compositeProps) {
                    if (key.toLowerCase().indexOf('template') !== -1 && val instanceof Function) {
                        options[key] = this.transformTemplate(key, val);
                    } else {
                        options[key] = val;
                    }
                } else {
                    this.addCompositeProperty(options, compositeProps.split('.'), that.$props[key]);
                }
            }

            Object.keys(that.$props).forEach(function (event) {
                if (that.$listeners && that.$listeners[event.toLowerCase()]) {
                    var kendoIndex = event.lastIndexOf('kendo');
                    var kendoEvent;
                    if (kendoIndex !== -1) {
                        kendoEvent = event.replace('kendo', '').toLowerCase();
                    }

                    options[kendoEvent || event] = that.$listeners[event.toLowerCase()];
                }
            });

            return options;
        },
        addCompositeProperty: function addCompositeProperty(obj, keys, val) {
            var lastKey = keys.pop();
            var lastObj = keys.reduce(function (obj, key) {
                obj[key] = _typeof(obj[key]) === 'object' ? obj[key] || {} : {};
                return obj[key];
            }, obj);

            if (lastKey.toLowerCase().indexOf('template') !== -1 && val instanceof Function) {
                lastObj[lastKey] = this.transformTemplate(lastKey, val);
            } else {
                lastObj[lastKey] = val;
            }
        },
        ready: function ready() {
            var that = this;

            if (this.$el.classList.length > 0) {
                that.kendoClasses = [].concat(_toConsumableArray(that.$el.classList)).filter(function (item) {
                    return that.nativeClasses.indexOf(item) < 0;
                });
            }

            if (that.$options.propsData && that.$options.propsData.disabled) {
                that.makeDisabled(true);
            }

            if (that.$options.propsData && that.$options.propsData.readonly) {
                that.makeReadonly(true);
            }
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        dataSourceRef: String
    },
    render: function render(h) {
        return h('div');
    },

    methods: {
        findDataSource: function findDataSource() {
            var dataSource;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.$children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var a = _step.value;

                    if (this.$children.length && a.kendoDataSource) {
                        dataSource = a.kendoDataSource;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return dataSource;
        },
        setInnerDataSource: function setInnerDataSource() {
            var dataSourceRefProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dataSourceRef';
            var rootProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dataSource';
            var subProp = arguments[2];

            var innerDataSource = this.findDataSource();

            if (innerDataSource) {
                if (!subProp) {
                    this.widgetOptions[rootProp] = innerDataSource;
                } else {
                    subProp[rootProp] = innerDataSource;
                }
            } else {
                var refString = subProp ? subProp[dataSourceRefProp] : this[dataSourceRefProp];
                var referredDataSource = this.getParentsRef(refString);

                if (referredDataSource) {
                    this.attachEvents(referredDataSource);
                    if (!subProp) {
                        this.widgetOptions[rootProp] = referredDataSource.kendoDataSource;
                    } else {
                        subProp[rootProp] = referredDataSource.kendoDataSource;
                    }
                }
            }
        },
        getParentsRef: function getParentsRef(anchor) {
            var parent = this.$parent;

            while (parent && !parent.$refs[anchor]) {
                parent = parent.$parent;
            }

            return parent ? parent.$refs[anchor] : undefined;
        },
        setDataSource: function setDataSource(newValue) {
            var newDataSourceRef = this.getParentsRef(newValue);
            var kendoWidget = this.kendoWidget();

            if (kendoWidget.setDataSource && newDataSourceRef) {
                kendoWidget.setDataSource(newDataSourceRef.kendoDataSource);
            } else if (kendoWidget.setDataSource) {
                kendoWidget.setDataSource(newValue);
            }
        },
        attachEvents: function attachEvents(referredDataSource) {
            if (referredDataSource.kendoDataSource) {
                referredDataSource.kendoDataSource.bind('change', function (ev) {
                    referredDataSource.$emit('change', ev);
                });

                referredDataSource.kendoDataSource.bind('error', function (ev) {
                    referredDataSource.$emit('error', ev);
                });

                referredDataSource.kendoDataSource.bind('push', function (ev) {
                    referredDataSource.$emit('push', ev);
                });

                referredDataSource.kendoDataSource.bind('requestEnd', function (ev) {
                    referredDataSource.$emit('requestend', ev);
                });

                referredDataSource.kendoDataSource.bind('requestStart', function (ev) {
                    referredDataSource.$emit('requeststart', ev);
                });

                referredDataSource.kendoDataSource.bind('sync', function (ev) {
                    referredDataSource.$emit('sync', ev);
                });
            }
        }
    },
    mounted: function mounted() {
        var that = this;

        that.$watch('dataSourceRef', function (newValue) {
            that.setDataSource(newValue);
        });
        that.$watch('dataSource', function (newValue) {
            that.setDataSource(newValue);
        });

        that.setInnerDataSource();
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    render: function render(h) {
        return h('input', {
            ref: 'valueInput',
            props: {
                value: this.value
            }
        });
    },

    model: {
        event: 'changemodel'
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        resolveInnerTags: function resolveInnerTags(tagName) {
            var items = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.$slots.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var childSlot = _step.value;

                    if (childSlot.tag && childSlot.tag.indexOf(tagName) !== -1) {
                        var childOptions = childSlot.componentOptions;
                        var item = childOptions.propsData;

                        if (!childOptions.propsData.items) {
                            item.items = childSlot.componentInstance.subitems;
                        }

                        items.push(item);
                        this.handleWatcher(childSlot.componentInstance);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return items;
        },
        handleWatcher: function handleWatcher(childInstance) {
            var that = this;

            if (!childInstance._isWatchAttached) {
                childInstance.$watch('$props', function () {
                    if (that.updateWidget) {
                        that.updateWidget();
                    } else if (that._resolveInnerChildren) {
                        that._resolveInnerChildren();
                    }
                }, { deep: true });

                childInstance._isWatchAttached = true;
            }
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    deserialization: Object,
    domain: String,
    encoded: Boolean,
    immutables: Boolean | Object,
    messages: Object,
    pasteCleanup: Object,
    pdf: Object,
    resizable: Boolean | Object,
    serialization: Object,
    stylesheets: Array,
    tools: Array,
    imageBrowser: Object,
    fileBrowser: Object,
    tag: String,
    value: String,
    placeholder: String,

    // Events
    change: Function,
    execute: Function,
    keydown: Function,
    keyup: Function,
    paste: Function,
    pdfExport: Function,
    select: Function
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        name: {
            type: String,
            kComposite: 'name'
        },
        tooltip: {
            type: String,
            kComposite: 'tooltip'
        },
        exec: {
            type: Function,
            kComposite: 'exec'
        },
        items: {
            type: Array,
            kComposite: 'items'
        },
        palette: {
            type: String | Array,
            kComposite: 'palette'
        },
        columns: {
            type: Number,
            kComposite: 'columns'
        },
        template: {
            type: String | Function,
            kComposite: 'template'
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        deserializationCustom: {
            type: Function,
            kComposite: 'deserialization.custom'
        }
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        fileBrowserFileTypes: {
            type: String,
            kComposite: 'fileBrowser.fileTypes'
        },
        fileBrowserPath: {
            type: String,
            kComposite: 'fileBrowser.path'
        },
        fileBrowserTransportRead: {
            type: String | Function,
            kComposite: 'fileBrowser.transport.read'
        },
        fileBrowserTransportReadContentType: {
            type: String,
            kComposite: 'fileBrowser.transport.read.contentType'
        },
        fileBrowserTransportReadData: {
            type: Object | String | Function,
            kComposite: 'fileBrowser.transport.read.data'
        },
        fileBrowserTransportReadDataType: {
            type: String,
            kComposite: 'fileBrowser.transport.read.dataType'
        },
        fileBrowserTransportReadType: {
            type: String,
            kComposite: 'fileBrowser.transport.read.type'
        },
        fileBrowserTransportReadUrl: {
            type: String | Function,
            kComposite: 'fileBrowser.transport.read.url'
        },
        fileBrowserTransportUploadUrl: {
            type: String,
            kComposite: 'fileBrowser.transport.uploadUrl'
        },
        fileBrowserTransportFileUrl: {
            type: String | Function,
            kComposite: 'fileBrowser.transport.fileUrl'
        },
        fileBrowserTransportDestroy: {
            type: String,
            kComposite: 'fileBrowser.transport.destroy'
        },
        fileBrowserTransportDestroyContentType: {
            type: String,
            kComposite: 'fileBrowser.transport.destroy.contentType'
        },
        fileBrowserTransportDestroyData: {
            type: Object | String | Function,
            kComposite: 'fileBrowser.transport.destroy.data'
        },
        fileBrowserTransportDestroyDataType: {
            type: String,
            kComposite: 'fileBrowser.transport.destroy.dataType'
        },
        fileBrowserTransportDestroyType: {
            type: String,
            kComposite: 'fileBrowser.transport.destroy.type'
        },
        fileBrowserTransportDestroyUrl: {
            type: String | Function,
            kComposite: 'fileBrowser.transport.destroy.url'
        },
        fileBrowserTransportCreate: {
            type: String,
            kComposite: 'fileBrowser.transport.create'
        },
        fileBrowserTransportCreateContentType: {
            type: String,
            kComposite: 'fileBrowser.transport.create.contentType'
        },
        fileBrowserTransportCreateData: {
            type: Object | String | Function,
            kComposite: 'fileBrowser.transport.create.data'
        },
        fileBrowserTransportCreateDataType: {
            type: String,
            kComposite: 'fileBrowser.transport.create.dataType'
        },
        fileBrowserTransportCreateType: {
            type: String,
            kComposite: 'fileBrowser.transport.create.type'
        },
        fileBrowserTransportCreateUrl: {
            type: String | Function,
            kComposite: 'fileBrowser.transport.create.url'
        },
        fileBrowserSchemaModelId: {
            type: String,
            kComposite: 'fileBrowser.schema.model.id'
        },
        fileBrowserSchemaModelFieldsName: {
            type: String,
            kComposite: 'fileBrowser.schema.model.fields.name'
        },
        fileBrowserSchemaModelFieldsNameField: {
            type: String,
            kComposite: 'fileBrowser.schema.model.fields.name.field'
        },
        fileBrowserSchemaModelFieldsNameParse: {
            type: Function,
            kComposite: 'fileBrowser.schema.model.fields.name.parse'
        },
        fileBrowserSchemaModelFieldsType: {
            type: String,
            kComposite: 'fileBrowser.schema.model.fields.type'
        },
        fileBrowserSchemaModelFieldsTypeParse: {
            type: Function,
            kComposite: 'fileBrowser.schema.model.fields.type.parse'
        },
        fileBrowserSchemaModelFieldsTypeField: {
            type: String,
            kComposite: 'fileBrowser.schema.model.fields.type.field'
        },
        fileBrowserSchemaModelFieldsSize: {
            type: String,
            kComposite: 'fileBrowser.schema.model.fields.size'
        },
        fileBrowserSchemaModelFieldsSizeField: {
            type: String,
            kComposite: 'fileBrowser.schema.model.fields.size.field'
        },
        fileBrowserSchemaModelFieldsSizeParse: {
            type: Function,
            kComposite: 'fileBrowser.schema.model.fields.size.parse'
        },
        fileBrowserMessagesUploadFile: {
            type: String,
            kComposite: 'fileBrowser.messages.uploadFile'
        },
        fileBrowserMessagesOrderBy: {
            type: String,
            kComposite: 'fileBrowser.messages.orderBy'
        },
        fileBrowserMessagesOrderByName: {
            type: String,
            kComposite: 'fileBrowser.messages.orderByName'
        },
        fileBrowserMessagesOrderBySize: {
            type: String,
            kComposite: 'fileBrowser.messages.orderBySize'
        },
        fileBrowserMessagesDirectoryNotFound: {
            type: String,
            kComposite: 'fileBrowser.messages.directoryNotFound'
        },
        fileBrowserMessagesEmptyFolder: {
            type: String,
            kComposite: 'fileBrowser.messages.emptyFolder'
        },
        fileBrowserMessagesDeleteFile: {
            type: String,
            kComposite: 'fileBrowser.messages.deleteFile'
        },
        fileBrowserMessagesInvalidFileType: {
            type: String,
            kComposite: 'fileBrowser.messages.invalidFileType'
        },
        fileBrowserMessagesOverwriteFile: {
            type: String,
            kComposite: 'fileBrowser.messages.overwriteFile'
        },
        fileBrowserMessagesSearch: {
            type: String,
            kComposite: 'fileBrowser.messages.search'
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        imageBrowserFileTypes: {
            type: String,
            kComposite: 'imageBrowser.fileTypes'
        },
        imageBrowserPath: {
            type: String,
            kComposite: 'imageBrowser.path'
        },
        imageBrowserTransportRead: {
            type: String | Function,
            kComposite: 'imageBrowser.transport.read'
        },
        imageBrowserTransportReadContentType: {
            type: String,
            kComposite: 'imageBrowser.transport.read.contentType'
        },
        imageBrowserTransportReadData: {
            type: Object | String | Function,
            kComposite: 'imageBrowser.transport.read.data'
        },
        imageBrowserTransportReadDataType: {
            type: String,
            kComposite: 'imageBrowser.transport.read.dataType'
        },
        imageBrowserTransportReadType: {
            type: String,
            kComposite: 'imageBrowser.transport.read.type'
        },
        imageBrowserTransportReadUrl: {
            type: String | Function,
            kComposite: 'imageBrowser.transport.read.url'
        },
        imageBrowserTransportThumbnailUrl: {
            type: String | Function,
            kComposite: 'imageBrowser.transport.thumbnailUrl'
        },
        imageBrowserTransportUploadUrl: {
            type: String,
            kComposite: 'imageBrowser.transport.uploadUrl'
        },
        imageBrowserTransportImageUrl: {
            type: String | Function,
            kComposite: 'imageBrowser.transport.imageUrl'
        },
        imageBrowserTransportDestroy: {
            type: String,
            kComposite: 'imageBrowser.transport.destroy'
        },
        imageBrowserTransportDestroyContentType: {
            type: String,
            kComposite: 'imageBrowser.transport.destroy.contentType'
        },
        imageBrowserTransportDestroyData: {
            type: Object | String | Function,
            kComposite: 'imageBrowser.transport.destroy.data'
        },
        imageBrowserTransportDestroyDataType: {
            type: String,
            kComposite: 'imageBrowser.transport.destroy.dataType'
        },
        imageBrowserTransportDestroyType: {
            type: String,
            kComposite: 'imageBrowser.transport.destroy.type'
        },
        imageBrowserTransportDestroyUrl: {
            type: String | Function,
            kComposite: 'imageBrowser.transport.destroy.url'
        },
        imageBrowserTransportCreate: {
            type: String,
            kComposite: 'imageBrowser.transport.create'
        },
        imageBrowserTransportCreateContentType: {
            type: String,
            kComposite: 'imageBrowser.transport.create.contentType'
        },
        imageBrowserTransportCreateData: {
            type: Object | String | Function,
            kComposite: 'imageBrowser.transport.create.data'
        },
        imageBrowserTransportCreateDataType: {
            type: String,
            kComposite: 'imageBrowser.transport.create.dataType'
        },
        imageBrowserTransportCreateType: {
            type: String,
            kComposite: 'imageBrowser.transport.create.type'
        },
        imageBrowserTransportCreateUrl: {
            type: String | Function,
            kComposite: 'imageBrowser.transport.create.url'
        },
        imageBrowserSchemaModelId: {
            type: String,
            kComposite: 'imageBrowser.schema.model.id'
        },
        imageBrowserSchemaModelFieldsName: {
            type: String,
            kComposite: 'imageBrowser.schema.model.fields.name'
        },
        imageBrowserSchemaModelFieldsNameField: {
            type: String,
            kComposite: 'imageBrowser.schema.model.fields.name.field'
        },
        imageBrowserSchemaModelFieldsNameParse: {
            type: Function,
            kComposite: 'imageBrowser.schema.model.fields.name.parse'
        },
        imageBrowserSchemaModelFieldsType: {
            type: String,
            kComposite: 'imageBrowser.schema.model.fields.type'
        },
        imageBrowserSchemaModelFieldsTypeParse: {
            type: Function,
            kComposite: 'imageBrowser.schema.model.fields.type.parse'
        },
        imageBrowserSchemaModelFieldsTypeField: {
            type: String,
            kComposite: 'imageBrowser.schema.model.fields.type.field'
        },
        imageBrowserSchemaModelFieldsSize: {
            type: String,
            kComposite: 'imageBrowser.schema.model.fields.size'
        },
        imageBrowserSchemaModelFieldsSizeField: {
            type: String,
            kComposite: 'imageBrowser.schema.model.fields.size.field'
        },
        imageBrowserSchemaModelFieldsSizeParse: {
            type: Function,
            kComposite: 'imageBrowser.schema.model.fields.size.parse'
        },
        imageBrowserMessagesUploadFile: {
            type: String,
            kComposite: 'imageBrowser.messages.uploadFile'
        },
        imageBrowserMessagesOrderBy: {
            type: String,
            kComposite: 'imageBrowser.messages.orderBy'
        },
        imageBrowserMessagesOrderByName: {
            type: String,
            kComposite: 'imageBrowser.messages.orderByName'
        },
        imageBrowserMessagesOrderBySize: {
            type: String,
            kComposite: 'imageBrowser.messages.orderBySize'
        },
        imageBrowserMessagesDirectoryNotFound: {
            type: String,
            kComposite: 'imageBrowser.messages.directoryNotFound'
        },
        imageBrowserMessagesEmptyFolder: {
            type: String,
            kComposite: 'imageBrowser.messages.emptyFolder'
        },
        imageBrowserMessagesDeleteFile: {
            type: String,
            kComposite: 'imageBrowser.messages.deleteFile'
        },
        imageBrowserMessagesInvalidFileType: {
            type: String,
            kComposite: 'imageBrowser.messages.invalidFileType'
        },
        imageBrowserMessagesOverwriteFile: {
            type: String,
            kComposite: 'imageBrowser.messages.overwriteFile'
        },
        imageBrowserMessagesSearch: {
            type: String,
            kComposite: 'imageBrowser.messages.search'
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        immutablesDeserialization: {
            type: Function,
            kComposite: 'immutables.deserialization'
        },
        immutablesSerialization: {
            type: String | Function,
            kComposite: 'immutables.serialization'
        }
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        messagesAccessibilityTab: {
            type: String,
            kComposite: 'messages.accessibilityTab'
        },
        messagesAddColumnLeft: {
            type: String,
            kComposite: 'messages.addColumnLeft'
        },
        messagesAddColumnRight: {
            type: String,
            kComposite: 'messages.addColumnRight'
        },
        messagesAddRowAbove: {
            type: String,
            kComposite: 'messages.addRowAbove'
        },
        messagesAddRowBelow: {
            type: String,
            kComposite: 'messages.addRowBelow'
        },
        messagesAlignCenter: {
            type: String,
            kComposite: 'messages.alignCenter'
        },
        messagesAlignCenterBottom: {
            type: String,
            kComposite: 'messages.alignCenterBottom'
        },
        messagesAlignCenterMiddle: {
            type: String,
            kComposite: 'messages.alignCenterMiddle'
        },
        messagesAlignCenterTop: {
            type: String,
            kComposite: 'messages.alignCenterTop'
        },
        messagesAlignLeft: {
            type: String,
            kComposite: 'messages.alignLeft'
        },
        messagesAlignLeftBottom: {
            type: String,
            kComposite: 'messages.alignLeftBottom'
        },
        messagesAlignLeftMiddle: {
            type: String,
            kComposite: 'messages.alignLeftMiddle'
        },
        messagesAlignLeftTop: {
            type: String,
            kComposite: 'messages.alignLeftTop'
        },
        messagesAlignRemove: {
            type: String,
            kComposite: 'messages.alignRemove'
        },
        messagesAlignRight: {
            type: String,
            kComposite: 'messages.alignRight'
        },
        messagesAlignRightBottom: {
            type: String,
            kComposite: 'messages.alignRightBottom'
        },
        messagesAlignRightMiddle: {
            type: String,
            kComposite: 'messages.alignRightMiddle'
        },
        messagesAlignRightTop: {
            type: String,
            kComposite: 'messages.alignRightTop'
        },
        messagesAlignment: {
            type: String,
            kComposite: 'messages.alignment'
        },
        messagesAssociateCellsWithHeaders: {
            type: String,
            kComposite: 'messages.associateCellsWithHeaders'
        },
        messagesBackColor: {
            type: String,
            kComposite: 'messages.backColor'
        },
        messagesBackground: {
            type: String,
            kComposite: 'messages.background'
        },
        messagesBold: {
            type: String,
            kComposite: 'messages.bold'
        },
        messagesBorder: {
            type: String,
            kComposite: 'messages.border'
        },
        messagesStyle: {
            type: String,
            kComposite: 'messages.style'
        },
        messagesCaption: {
            type: String,
            kComposite: 'messages.caption'
        },
        messagesCellMargin: {
            type: String,
            kComposite: 'messages.cellMargin'
        },
        messagesCellPadding: {
            type: String,
            kComposite: 'messages.cellPadding'
        },
        messagesCellSpacing: {
            type: String,
            kComposite: 'messages.cellSpacing'
        },
        messagesCellTab: {
            type: String,
            kComposite: 'messages.cellTab'
        },
        messagesCleanFormatting: {
            type: String,
            kComposite: 'messages.cleanFormatting'
        },
        messagesCollapseBorders: {
            type: String,
            kComposite: 'messages.collapseBorders'
        },
        messagesColumns: {
            type: String,
            kComposite: 'messages.columns'
        },
        messagesCreateLink: {
            type: String,
            kComposite: 'messages.createLink'
        },
        messagesCreateTable: {
            type: String,
            kComposite: 'messages.createTable'
        },
        messagesCreateTableHint: {
            type: String,
            kComposite: 'messages.createTableHint'
        },
        messagesCssClass: {
            type: String,
            kComposite: 'messages.cssClass'
        },
        messagesDeleteColumn: {
            type: String,
            kComposite: 'messages.deleteColumn'
        },
        messagesDeleteRow: {
            type: String,
            kComposite: 'messages.deleteRow'
        },
        messagesDialogCancel: {
            type: String,
            kComposite: 'messages.dialogCancel'
        },
        messagesDialogInsert: {
            type: String,
            kComposite: 'messages.dialogInsert'
        },
        messagesDialogOk: {
            type: String,
            kComposite: 'messages.dialogOk'
        },
        messagesDialogUpdate: {
            type: String,
            kComposite: 'messages.dialogUpdate'
        },
        messagesEditAreaTitle: {
            type: String,
            kComposite: 'messages.editAreaTitle'
        },
        messagesFileTitle: {
            type: String,
            kComposite: 'messages.fileTitle'
        },
        messagesFileWebAddress: {
            type: String,
            kComposite: 'messages.fileWebAddress'
        },
        messagesFontName: {
            type: String,
            kComposite: 'messages.fontName'
        },
        messagesFontNameInherit: {
            type: String,
            kComposite: 'messages.fontNameInherit'
        },
        messagesFontSize: {
            type: String,
            kComposite: 'messages.fontSize'
        },
        messagesFontSizeInherit: {
            type: String,
            kComposite: 'messages.fontSizeInherit'
        },
        messagesForeColor: {
            type: String,
            kComposite: 'messages.foreColor'
        },
        messagesFormatBlock: {
            type: String,
            kComposite: 'messages.formatBlock'
        },
        messagesFormatting: {
            type: String,
            kComposite: 'messages.formatting'
        },
        messagesHeight: {
            type: String,
            kComposite: 'messages.height'
        },
        messagesId: {
            type: String,
            kComposite: 'messages.id'
        },
        messagesImageAltText: {
            type: String,
            kComposite: 'messages.imageAltText'
        },
        messagesImageHeight: {
            type: String,
            kComposite: 'messages.imageHeight'
        },
        messagesImageWebAddress: {
            type: String,
            kComposite: 'messages.imageWebAddress'
        },
        messagesImageWidth: {
            type: String,
            kComposite: 'messages.imageWidth'
        },
        messagesIndent: {
            type: String,
            kComposite: 'messages.indent'
        },
        messagesInsertFile: {
            type: String,
            kComposite: 'messages.insertFile'
        },
        messagesInsertHtml: {
            type: String,
            kComposite: 'messages.insertHtml'
        },
        messagesInsertImage: {
            type: String,
            kComposite: 'messages.insertImage'
        },
        messagesInsertOrderedList: {
            type: String,
            kComposite: 'messages.insertOrderedList'
        },
        messagesInsertUnorderedList: {
            type: String,
            kComposite: 'messages.insertUnorderedList'
        },
        messagesItalic: {
            type: String,
            kComposite: 'messages.italic'
        },
        messagesOverflowAnchor: {
            type: String,
            kComposite: 'messages.overflowAnchor'
        },
        messagesJustifyCenter: {
            type: String,
            kComposite: 'messages.justifyCenter'
        },
        messagesJustifyFull: {
            type: String,
            kComposite: 'messages.justifyFull'
        },
        messagesJustifyLeft: {
            type: String,
            kComposite: 'messages.justifyLeft'
        },
        messagesJustifyRight: {
            type: String,
            kComposite: 'messages.justifyRight'
        },
        messagesLinkOpenInNewWindow: {
            type: String,
            kComposite: 'messages.linkOpenInNewWindow'
        },
        messagesLinkText: {
            type: String,
            kComposite: 'messages.linkText'
        },
        messagesLinkToolTip: {
            type: String,
            kComposite: 'messages.linkToolTip'
        },
        messagesLinkWebAddress: {
            type: String,
            kComposite: 'messages.linkWebAddress'
        },
        messagesOutdent: {
            type: String,
            kComposite: 'messages.outdent'
        },
        messagesPrint: {
            type: String,
            kComposite: 'messages.print'
        },
        messagesRows: {
            type: String,
            kComposite: 'messages.rows'
        },
        messagesSelectAllCells: {
            type: String,
            kComposite: 'messages.selectAllCells'
        },
        messagesStrikethrough: {
            type: String,
            kComposite: 'messages.strikethrough'
        },
        messagesSubscript: {
            type: String,
            kComposite: 'messages.subscript'
        },
        messagesSummary: {
            type: String,
            kComposite: 'messages.summary'
        },
        messagesSuperscript: {
            type: String,
            kComposite: 'messages.superscript'
        },
        messagesTableTab: {
            type: String,
            kComposite: 'messages.tableTab'
        },
        messagesTableWizard: {
            type: String,
            kComposite: 'messages.tableWizard'
        },
        messagesUnderline: {
            type: String,
            kComposite: 'messages.underline'
        },
        messagesUnits: {
            type: String,
            kComposite: 'messages.units'
        },
        messagesUnlink: {
            type: String,
            kComposite: 'messages.unlink'
        },
        messagesViewHtml: {
            type: String,
            kComposite: 'messages.viewHtml'
        },
        messagesWidth: {
            type: String,
            kComposite: 'messages.width'
        },
        messagesWrapText: {
            type: String,
            kComposite: 'messages.wrapText'
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        pasteCleanupAll: {
            type: Boolean,
            kComposite: 'pasteCleanup.all'
        },
        pasteCleanupCss: {
            type: Boolean,
            kComposite: 'pasteCleanup.css'
        },
        pasteCleanupCustom: {
            type: Function,
            kComposite: 'pasteCleanup.custom'
        },
        pasteCleanupKeepNewLines: {
            type: Boolean,
            kComposite: 'pasteCleanup.keepNewLines'
        },
        pasteCleanupMsAllFormatting: {
            type: Boolean,
            kComposite: 'pasteCleanup.msAllFormatting'
        },
        pasteCleanupMsConvertLists: {
            type: Boolean,
            kComposite: 'pasteCleanup.msConvertLists'
        },
        pasteCleanupMsTags: {
            type: Boolean,
            kComposite: 'pasteCleanup.msTags'
        },
        pasteCleanupNone: {
            type: Boolean,
            kComposite: 'pasteCleanup.none'
        },
        pasteCleanupSpan: {
            type: Boolean,
            kComposite: 'pasteCleanup.span'
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        pdfAuthor: {
            type: String,
            kComposite: 'pdf.author'
        },
        pdfAvoidLinks: {
            type: Boolean | String,
            kComposite: 'pdf.avoidLinks'
        },
        pdfCreator: {
            type: String,
            kComposite: 'pdf.creator'
        },
        pdfDate: {
            type: Date,
            kComposite: 'pdf.date'
        },
        pdfFileName: {
            type: String,
            kComposite: 'pdf.fileName'
        },
        pdfForceProxy: {
            type: Boolean,
            kComposite: 'pdf.forceProxy'
        },
        pdfKeywords: {
            type: String,
            kComposite: 'pdf.keywords'
        },
        pdfLandscape: {
            type: Boolean,
            kComposite: 'pdf.landscape'
        },
        pdfMarginBottom: {
            type: Number | String,
            kComposite: 'pdf.margin.bottom'
        },
        pdfMarginLeft: {
            type: Number | String,
            kComposite: 'pdf.margin.left'
        },
        pdfMarginRight: {
            type: Number | String,
            kComposite: 'pdf.margin.right'
        },
        pdfMarginTop: {
            type: Number | String,
            kComposite: 'pdf.margin.top'
        },
        pdfPaperSize: {
            type: String | Array,
            kComposite: 'pdf.paperSize'
        },
        pdfProxyURL: {
            type: String,
            kComposite: 'pdf.proxyURL'
        },
        pdfProxyTarget: {
            type: String,
            kComposite: 'pdf.proxyTarget'
        },
        pdfSubject: {
            type: String,
            kComposite: 'pdf.subject'
        },
        pdfTitle: {
            type: String,
            kComposite: 'pdf.title'
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        resizableContent: {
            type: Boolean,
            kComposite: 'resizable.content'
        },
        resizableMin: {
            type: Number,
            kComposite: 'resizable.min'
        },
        resizableMax: {
            type: Number,
            kComposite: 'resizable.max'
        },
        resizableToolbar: {
            type: Boolean,
            kComposite: 'resizable.toolbar'
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        serializationCustom: {
            type: Function,
            kComposite: 'serialization.custom'
        },
        serializationEntities: {
            type: Boolean,
            kComposite: 'serialization.entities'
        },
        serializationScripts: {
            type: Boolean,
            kComposite: 'serialization.scripts'
        },
        serializationSemantic: {
            type: Boolean,
            kComposite: 'serialization.semantic'
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoEditor = __webpack_require__(1);

var _KendoEditor2 = _interopRequireDefault(_KendoEditor);

var _KendoEditorTool = __webpack_require__(0);

var _KendoEditorTool2 = _interopRequireDefault(_KendoEditorTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoEditorInstaller = function () {
    function KendoEditorInstaller() {
        _classCallCheck(this, KendoEditorInstaller);
    }

    _createClass(KendoEditorInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoEditor2.default.name, _KendoEditor2.default);
            Vue.component(_KendoEditorTool2.default.name, _KendoEditorTool2.default);
        }
    }]);

    return KendoEditorInstaller;
}();

exports.default = KendoEditorInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(KendoEditorInstaller);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=kendo-editor-vue-wrapper.js.map