import { Children, cloneElement, } from 'react';
export var classNames = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
};
export var subComponent = {
    create: function (name) {
        var component = function (props) { return props.children; };
        component.displayName = name;
        return component;
    },
    select: function (children, name, props, inner) {
        if (props === void 0) { props = {}; }
        if (inner === void 0) { inner = false; }
        return Children.map(children, function (child) {
            if (child.type.displayName === name) {
                return inner
                    ? cloneElement(child.props.children, props)
                    : cloneElement(child, props);
            }
        });
    },
};
