function getStyle (ele, prop) {
    if (!ele || !prop) return null;

    try {
        var computed = document.defaultView.getComputedStyle(ele, '');
        return ele.style[prop] || computed ? computed[prop] : null;
    } catch (e) {
        return ele.style[prop];
    }
}

// 合并对象
function merga (target) {
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
        }
        else {
            child = findChild(children[i], componentName);
            if (child) break;
        }
    }
    return child;
}

// 查询指定子组件集合
function findChilds(context, componentName, components = []) {
    const childrens = context.$children;

    if (childrens.length) {
        childrens.forEach(child => {
            const name = child.$options.name;
            const childs = child.$children;

            if (name === componentName) components.push(child);
            if (childs.length) {
                const findChildsArr = findChilds(child, componentName, components);
                if (findChildsArr) components.concat(findChildsArr);
            }
        });
    }
    return components;
}

export {
    merga, 
    findParent, 
    findChild,
    findChilds,
    getStyle
};