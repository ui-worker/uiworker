import Notification from './message';
import Vue from 'vue';
Notification.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Notification, {
                props: _props
            });
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const notification = Instance.$children[0];

    return {
        notice (noticeProps) {
            notification.add(noticeProps);
        },
        remove (name) {
            notification.close(name);
        },
        component: notification,
        destroy (element) {
            notification.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

const prefixCls = 'ui-message';
const iconPrefixCls = 'ui-icon';
const prefixKey = 'ui_message_key_';

let defaultDuration = 1.5;
let top;
let messageInstance;
let name = 1;



function getMessageInstance () {
    messageInstance = messageInstance || Notification.newInstance();
    return messageInstance;
}

function notice (content = '', duration = defaultDuration, type, close = function () {}, closable = false) {
    let instance = getMessageInstance();
    instance.notice({
        name: `${prefixKey}${name}`,
        duration: duration,
        // transitionName: 'move-up',
        content: content,
        close: close,
        type: type,
        closable: closable
    });

    // 用于手动消除
    return (function () {
        let target = name++;

        return function () {
            instance.remove(`${prefixKey}${target}`);
        };
    })();
}

export default {
    name: 'Message',
    info (options) {
        const type = typeof options;
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'info', options.close, options.closable);
    },
    success (options) {
        const type = typeof options;
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'success', options.close, options.closable);
    },
    warning (options) {
        const type = typeof options;
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'warning', options.close, options.closable);
    },
    error (options) {
        const type = typeof options;
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'error', options.close, options.closable);
    },
    loading (options) {
        const type = typeof options;
        if (type === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, 'loading', options.close, options.closable);
    },
    destroy () {
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy('ui-message');
    }
};
