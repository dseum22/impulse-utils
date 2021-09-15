"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subComponent = exports.classNames = void 0;
var react_1 = require("react");
var classNames = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
};
exports.classNames = classNames;
exports.subComponent = {
    create: function (name) {
        var component = function (props) { return props.children; };
        component.displayName = name;
        return component;
    },
    select: function (children, name, props, inner) {
        if (props === void 0) { props = {}; }
        if (inner === void 0) { inner = false; }
        return react_1.Children.map(children, function (child) {
            if (child.type.displayName === name) {
                return inner
                    ? (0, react_1.cloneElement)(child.props.children, props)
                    : (0, react_1.cloneElement)(child, props);
            }
        });
    },
};
