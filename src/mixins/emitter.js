var emitter = {
    methods: {
        dispatch (componentName, eventName, params) {
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
        broadcast (componentName, eventName, params) {
            this.$children.forEach(function(child) {
                const name = child.$options.name;
                if (name === componentName) {
                    child.$emit.apply(child, [eventName].concat(params));
                } else {
                    emitter.methods.broadcast.apply(child, [componentName, eventName].concat(params));
                }
            }, this);
        }
    }
};

export default emitter;