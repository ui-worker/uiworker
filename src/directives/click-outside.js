export default {
    // 绑定元素时调用
    bind (el, binding, vnode) {
        function handleClick (e) {
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
    unbind (el, binding) {
        document.removeEventListener('click', el.__clickoutside__);
        delete el.__clickoutside__;
    }
};