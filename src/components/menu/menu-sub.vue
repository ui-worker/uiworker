<template>
    <div :class="classnames">
        <div :class="titleclasses" @click="handleClick">
            <slot name="title"></slot>
            <Icon type="ios-arrow-down" :class="arrowclasses"></Icon>
        </div>
        <div ref="drop" :class="prefixCls" v-show="opened">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon/index.js';
    
    const prefixCls = 'ui-menu';

    export default {
        name: 'SubMenu',
        props: {
            active: {
                type: Boolean,
                default: false
            },
            // 是否展开显示
            isopen: {
                type: [Boolean, String],
                default: false
            },
            className: String
        },
        data () {
            return {
                opened: true,
                activeClass: false,
                prefixCls: 'ui-menu',
                height: null
            }
        },
        computed: {
            classnames () {
                return [
                    `${prefixCls}-submenu`,
                    {
                        [`${prefixCls}-submenu-active`]: this.active,
                        [`${prefixCls}-opened`]: this.opened
                    }
                ];
            },
            titleclasses () {
                return `${prefixCls}-submenu-title`;
            },
            arrowclasses () {
                return prefixCls + '-submenu-title-icon';
            }
        },
        watch: {
            opened (val) {
            }
        },
        methods: {
            handleClick (e) {
                var opened = this.opened;
                var _this = this;
                var dropEle = _this.$refs.drop;

                // 动画结束操作
                function onTransitionEnd () {
                    // 当前子菜单显示
                    _this.opened = false;
                    // 解除动画结束事件监听
                    dropEle.removeEventListener('webkitTransitionEnd', onTransitionEnd);
                }

                this.$emit('click', e, this.opened);

                // 展开
                if (!this.opened) {
                    // 当前子菜单显示
                    this.opened = true;
                    dropEle.style.height = 0;
                    // 再做动画
                    setTimeout(function() {
                        dropEle.style.height = _this.height + 'px';
                    }, 0);
                }
                // 收起
                else {
                    dropEle.style.height = 0;
                    dropEle.addEventListener('webkitTransitionEnd', onTransitionEnd, false);
                }
            }
        },
        mounted () {
            this.height = this.$refs.drop.scrollHeight;
            if (this.isopen == "true" || this.isopen == true) {
                this.opened = true;
                this.$refs.drop.style.height  = this.height + 'px';
            } else {
                this.opened = false;
            }
        }
    }
</script>

<style>
.ui-menu-submenu-title>i {
	margin-right: 8px;
}
.ui-menu-light .ui-menu-submenu {
    color: #495060;
}
/* 垂直方向 */
.ui-menu-vertical .ui-menu-submenu-title {
	padding: 14px 24px;
	position: relative;
	cursor: pointer;
	z-index: 1;
	transition: all .2s ease-in-out;
}
.ui-menu-light.ui-menu-vertical .ui-menu-submenu-title {
    color: #495060;
}
.ui-menu-primary.ui-menu-vertical .ui-menu-submenu-title,
.ui-menu-dark.ui-menu-vertical .ui-menu-submenu-title,
.ui-menu-black.ui-menu-vertical .ui-menu-submenu-title {
    color: #fff;
    opacity: .7;
}
.ui-menu-light.ui-menu-vertical .ui-menu-submenu-title:hover {
	background: #f3f3f3;
}
.ui-menu-primary.ui-menu-vertical .ui-menu-submenu-title:hover, 
.ui-menu-dark.ui-menu-vertical .ui-menu-submenu-title:hover, 
.ui-menu-black.ui-menu-vertical .ui-menu-submenu-title:hover {
	color: #fff;
    opacity: 1;
}
.ui-menu-vertical .ui-menu-submenu-title-icon {
	float: right;
	position: relative;
	top: 2px;
}
.ui-menu-submenu-title-icon {
	transition: transform .2s ease-in-out;
}
.ui-menu-opened .ui-menu-submenu-title-icon {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}
.ui-menu-vertical .ui-menu-submenu .ui-menu-item {
	padding-left: 43px;
}
.ui-menu-vertical .ui-menu-submenu>div {
    overflow: hidden;
}
.ui-menu-vertical .ui-menu-submenu .ui-menu {
    -moz-transition: height .2s ease-in-out;
    -webkit-transition: height .2s ease-in-out;
    transition: height .2s ease-in-out;
}
.ui-menu-vertical.ui-menu-black .ui-menu-submenu .ui-menu {
     background: #333; 
}
</style>
