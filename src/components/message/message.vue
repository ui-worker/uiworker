<template>
    <div :class="[prefixCls+'-warrper']">
        <template  v-for="(message, index) in messages">
            <transition name="move-up">
                <div :class="[prefixCls]" v-show="message.isShow">
                    <!-- <transition :name="message.transitionName"> -->
                        <div :class="[message.classes, prefixCls + '-content', getMessageClasses('', message.closable)]">
                            <div v-if="!message.type" :class="[prefixCls + '-content-text' ]" ref="content" v-text="message.content"></div>
                            <div v-else :class="[prefixCls + '-content-text',  prefixCls + '-content-' + message.type]">
                                <i :class="['ui-icon', 'ui-icon-' + iconTypes[message.type], {'ui-load-loop':iconTypes[message.type]=='load-c'}]"></i>
                                <span>{{message.content}}</span>
                            </div>
                            <a :class="[prefixCls + '-content-close']" @click="close(message.name, true)" v-if="message.closable">
                                <i class="ui-icon ui-icon-ios-close-empty"></i>
                            </a>
                        </div>
                </div>
            </transition>
        </template>
    </div>
</template>
<script>
    import {merga}  from '../../util/assist';
    const prefixCls = 'ui-message';
    const iconTypes = {
        'info': 'information-circled',
        'success': 'checkmark-circled',
        'warning': 'android-alert',
        'error': 'close-circled',
        'loading': 'load-c'
    };
    let seed = 0;
    const now = Date.now();
    export default {
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            }
        },
        data () {
            return {
                messages: [],
                iconTypes
            };
        },
        computed: {

        },
        methods: {
            getMessageClasses (_className, _closable) {
                return [
                    this.prefixCls,
                    {
                        [`${this.prefixCls}-closable`]: _closable
                    }
                ];
            },
            add (message) {
                var _this = this;
                const name = message.name || ('uiMessages_' + now + '_' + (seed++));
                // console.log(merga);
                let _message = merga({
                    content: '',
                    duration: 1.5,
                    closable: true,
                    type: null,
                    isShow: false,
                    name: name
                }, message);
                // console.log(JSON.parse(JSON.stringify(_message)))
                this.messages.push(_message);
                setTimeout(function(){
                    _message.isShow = true;
                }, 0);

                this.clearCloseTimer(_message.closeTimer);
                if (_message.duration !== 0) {
                    _message.closeTimer = setTimeout(() => {
                        this.close(_message.name);
                    }, _message.duration * 1000);
                }
            },
            clearCloseTimer(_Timer){
                if(_Timer){
                    clearTimeout(_Timer);
                }
            },
            close (name) {
                const messages = this.messages;
                for (let i = 0; i < messages.length; i++) {
                    if (messages[i].name === name) {
                        messages[i].isShow = false;
                        messages[i].close();
                        setTimeout(function(){
                            messages.splice(i, 1);
                        }, 500)
                        // messages.splice(i, 1);
                        break;
                    }
                }
            },
            closeAll () {
                this.messages = [];
            }
        }
    };
</script>
<style type="text/css">

.ui-message-warrper {font-size: 12px;position: fixed;z-index: 1010;width: 100%;top: 24px;left: 0}
.ui-message{text-align:center;vertical-align: middle;position: absolute;left: 50%;/*top: 16px;*/max-width:1024px;}
.ui-message-content{position: relative;left: -50%;padding: 8px 16px;border-radius: 4px;box-shadow: 0 2px 6px rgba(0,0,0,.4);background: #fff;display: block}
.ui-message-content-text {display: inline-block}
.ui-message-closable .ui-message-content-text{padding-right: 32px}
.ui-message-content-close {position: absolute;right: 4px;top: 9px;color: #999;outline: 0}
.ui-message-content-close i.ui-icon {font-size: 22px;color: #999;transition: color .2s ease;position: relative;top: -3px}
.ui-message-content-close i.ui-icon:hover {color: #444}

.ui-message-content-success .ui-icon {color: #19be6b}
.ui-message-content-error .ui-icon {color: #ed3f14}
.ui-message-content-warning .ui-icon {color: #f90}
.ui-message-content-info .ui-icon,
.ui-message-content-loading .ui-icon {color: #2d8cf0}
.ui-message .ui-icon {margin-right: 8px;font-size: 14px;top: 1px;position: relative}

.ui-load-loop {animation: ani-load-loop 1s linear infinite;}
@keyframes ani-load-loop {
    0% {
        transform: rotate(0)
    }

    50% {
        transform: rotate(180deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.move-up-appear,.move-up-enter-active,.move-up-leave-active {animation-duration: .3s;animation-fill-mode: both;animation-play-state: paused}
.move-up-appear,.move-up-enter-active {animation-name: uiMoveUpIn;animation-play-state: running}
.move-up-leave-active {animation-name: uiMoveUpOut;animation-play-state: running}
.move-up-appear,.move-up-enter-active {opacity: 0;animation-timing-function: ease-in-out}
.move-up-leave-active {animation-timing-function: ease-in-out}
@keyframes uiMoveUpIn {
    0% {
        transform-origin: 0 0;
        transform: translateY(-100%);
        opacity: 0
    }

    to {
        transform-origin: 0 0;
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes uiMoveUpOut {
    0% {
        transform-origin: 0 0;
        transform: translateY(0);
        opacity: 1
    }

    to {
        transform-origin: 0 0;
        transform: translateY(-100%);
        opacity: 0
    }
}
</style>