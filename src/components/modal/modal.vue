<template>
    <transition name="fade-ease">
        <div class="ui-modal-wrapper" v-show="visible">
            <div class="ui-modal-mask" @click="mask"></div>
            <div class="ui-modal" :style="classnames">
                <div class="ui-modal-content">
                    <div class="ui-modal-header">
                        <div class="ui-modal-header-title">
                            <slot name="header">{{title}}</slot>
                        </div>
                    </div>
                    <div class="ui-modal-body">
                        <slot>{{message}}</slot>
                    </div>
                    <div class="ui-modal-footer">
                        <slot name="footer">
                            <Button type="primary" @click.native="ok">{{okText}}</Button>
                            <Button @click.native="cancel" v-if="showCancel">{{cancelText}}</Button>
                        </slot>
                    </div>
                    <div class="ui-modal-close" v-if="showClose" @click="cancel">
                        <Icon type="ios-close-empty"></Icon>
                    </div>
                </div>
            </div>
        </div>
    </transition>  
</template>

<script>
    const prefixCls = 'ui-modal';
    
    export default {
        name: 'Modal',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: '消息'
            },
            // 模态框宽度
            width: {
                type: [String, Number],
                default: 500
            },
            okText: {
                type: String,
                default: '确定'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            // 是否可以通过点击遮罩层关闭模态弹窗
            maskClose: {
                type: Boolean,
                default: false
            },
            // 是否显示右上角关闭按钮
            showClose: {
                type: Boolean,
                default: true
            },
            // 是否显示取消按钮
            showCancel: {
                type: Boolean,
                default: true
            },
            // 是否异步关闭
            loading: {
                type: Boolean,
                default: false
            },
            // 关闭弹窗之前
            beforeClose: Function
        },
        mounted () {
            document.addEventListener('keydown', this.EscHandle);
        },
        computed: {
            classnames () {
                var width = `${parseInt(this.width)}px`;
                return {
                    width: width
                };
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: this.value,
                message: ''
            };
        },
        watch: {
            value (val) {
                this.visible = val;
            },
            visible (val) {
                // 关闭
                if (val === false) {
                    setTimeout(() => {
                        this.openScroll();
                    }, 200);
                }
                // 打开
                else {
                    this.lockScroll();
                }
            }
        },
        methods: {
            ok () {
                if (this.beforeClose && typeof this.beforeClose === 'function') {
                    var flag = this.beforeClose(1);
                    if (flag === false) return false;
                }
                if (!this.loading) {
                    this.visible = false;
                    this.$emit('input', false);
                }
                this.$emit('ok');
            },
            EscHandle (e) {
                if (this.visible && this.maskClose) {
                    if (e.keyCode === 27) {
                        this.cancel();
                    }
                }
            },
            mask () {
                if (this.maskClose) {
                    this.cancel();
                }
            },
            // 关闭弹层
            cancel (e) {
                if (this.beforeClose && typeof this.beforeClose === 'function') {
                    this.beforeClose(0);
                }
                this.visible = false;
                this.$emit('input', false);
                this.$emit('cancel');
            },
            getScrollBarWidth () {
                // 包含滚动条宽度
                var windowWidth = window.innerWidth;
                // 判断是否为overflow hidden  是否有滚动条
                this.isBodyOverflow = document.body.clientWidth < windowWidth;
                if (this.isBodyOverflow) {
                    this.scrollBarWidth = windowWidth - document.body.clientWidth;
                }
            },
            // 解除锁定页面滚动
            openScroll () {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            },
            // 锁定页面滚动
            lockScroll () {
                this.getScrollBarWidth();
                if (this.isBodyOverflow && this.scrollBarWidth !== undefined) {
                    document.body.style.paddingRight = this.scrollBarWidth + 'px';
                }
                document.body.style.overflow = 'hidden';
            }
        }
    }
</script>

<style>
.ui-modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
} 
.ui-modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
}
.ui-modal {
    position: fixed;
     left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
    margin: 0 auto;
    z-index: 1001;
}
.ui-modal-content {
    background-color: #fff;
    border-radius: 4px;
}
.ui-modal-close {
    font-size: 32px;
    line-height: 20px;
    color: #999;
    position: absolute;
    right: 16px;
    top: 8px;
    cursor: pointer;
}
.ui-modal-header {
    padding: 14px 16px;
    line-height: 1;
    /* border-bottom: 1px solid #e9eaec; */
}
.ui-modal-header-title {
    min-height: 20px;
    /* line-height: 20px; */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 600;
    color: #333;
    font-size: 15px;
}
.ui-modal-body {
    font-size: 13px;
    line-height: 1.5;
    padding: 16px;
    color: #495060;
}
.ui-modal-footer {
    padding: 8px 16px 14px;
    text-align: right;
}
.ui-modal-footer button {
    margin-left: 8px;
}
.fade-ease-enter-active, .fade-ease-leave-active {
    transition: opacity 0.2s ease;
}
.fade-ease-enter, .fade-ease-leave-to {
    opacity: 0;
}
.fade-ease-leave, .fade-ease-enter-to {
    opacity: 1;
} 
</style>