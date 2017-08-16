import Vue from 'vue';
import Modal from './modal.vue';

export default function modal() {
    // 创建子类
    var chilModal = Vue.extend(Modal);
    // 挂载到实例
    var instance = new chilModal().$mount();
    // 渲染到body内
    document.body.appendChild(instance.$el);

    return {
        show (options, context) {
            instance.visible = true;
            // 获取传递的设置属性
            for (var key in options) {
                // 如果传递的是Modal实例的属性 则修改当前属性
                if(typeof instance[key] !== 'function') {
                    instance[key] = options[key];
                }
                else {
                    if (key === 'ok' || key === 'cancel') {
                        instance[key] = (function (key) {
                            return function () {
                                Modal.methods[key].call(instance);
                                options[key].call(context);
                            }
                        })(key);
                    }
                }
            }
        }
    };
}