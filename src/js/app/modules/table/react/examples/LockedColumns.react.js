var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "../Example", "dstore/RequestMemory", "hui/react-components/table/Table"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("../Example"), require("dstore/RequestMemory"), require("hui/react-components/table/Table"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.Example, global.RequestMemory, global.Table);
        global.LockedColumns = mod.exports;
    }
})(this, function (exports, _react, _Example2, _RequestMemory, _Table) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _Example3 = _interopRequireDefault(_Example2);

    var _RequestMemory2 = _interopRequireDefault(_RequestMemory);

    var _Table2 = _interopRequireDefault(_Table);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var LockedColumns = function (_Example) {
        _inherits(LockedColumns, _Example);

        function LockedColumns() {
            _classCallCheck(this, LockedColumns);

            return _possibleConstructorReturn(this, (LockedColumns.__proto__ || Object.getPrototypeOf(LockedColumns)).apply(this, arguments));
        }

        _createClass(LockedColumns, [{
            key: "getCode",
            value: function getCode() {
                return "import Table from \"hui-react/table/Table\"; // Be sure to optimize your layers! See the 'Design & API Document' link above.\nimport RequestMemory from \"dstore/RequestMemory\";\n\n// Load data from remote JSON file\n// @see https://github.com/SitePen/dstore/blob/master/src/RequestMemory.js\nconst collection = new RequestMemory({\n        target: \"js/app/modules/table/hof-batting.json\"\n    }),\n    columns = {\n        first: \"First Name\",\n        last: \"Last Name\",\n        totalH: \"Hits\",\n        total2B: \"Doubles\",\n        total3B: \"Triples\",\n        totalHR: \"Home Runs\",\n        totalBB: \"Walks\",\n        totalSB: \"Stolen Bases\"\n    },\n    options = {\n        autoheight: true,\n        rowsPerPage: 50,\n        showTableBar: false,    // Turn off table bar\n        lockedColumns: 1        // Lock the first column\n    };\n\nReactDOM.render(<Table collection={collection} columns={columns} options={options} />, document.body);";
            }
        }, {
            key: "getCollection",
            value: function getCollection() {
                return new _RequestMemory2.default({
                    target: "js/app/modules/table/hof-batting.json"
                });
            }
        }, {
            key: "getColumns",
            value: function getColumns() {
                return {
                    first: "First Name",
                    last: "Last Name",
                    totalH: "Hits",
                    total2B: "Doubles",
                    total3B: "Triples",
                    totalHR: "Home Runs",
                    totalBB: "Walks",
                    totalSB: "Stolen Bases"
                };
            }
        }, {
            key: "getOptions",
            value: function getOptions() {
                return {
                    autoheight: true,
                    rowsPerPage: 50,
                    showTableBar: false, // Turn off table bar
                    lockedColumns: 1 // Lock the first column
                };
            }
        }, {
            key: "getComponent",
            value: function getComponent() {
                var collection = this.getCollection(),
                    columns = this.getColumns(),
                    options = this.getOptions();

                return _react2.default.createElement(_Table2.default, { collection: collection, columns: columns, options: options });
            }
        }], [{
            key: "displayName",
            get: function get() {
                return "LockedColumns";
            }
        }]);

        return LockedColumns;
    }(_Example3.default);

    exports.default = LockedColumns;
});
//# sourceMappingURL=LockedColumns.react.js.map
