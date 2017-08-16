// import Vue from 'vue';
import Modal from './modal.vue';
import dialog from './dialog.js';
import {merga} from '../../util/assist.js';

// 创建单例程序
var instance = null;

// 定义默认信息
const defaults = {
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
    ok: Modal.methods.ok,
    cancel: Modal.methods.cancel
};

function getModalInstance (options, context) {
    // 获取Modal弹窗单例
    if (!instance) {
        instance = dialog();
    }
    // 显示弹窗
    instance.show(options, context);

    return instance;
}

// 挂载alert方法 供全局实例调用
Modal.alert = function (message, options = {}) {
    // 防止引用对象被修改 每次都要重置属性
    var modal_params = merga({}, defaults, {
        message: message,
        showCancel: false,
    }, options);
    return getModalInstance(modal_params, this);
}

// 挂载confirm方法 供全局实例调用
Modal.confirm = function (message, options = {}) {
    // 防止引用对象被修改 每次都要重置属性
    var modal_params = merga({}, defaults, {
        message: message,
    }, options);
    return getModalInstance(modal_params, this);
}

export {Modal};