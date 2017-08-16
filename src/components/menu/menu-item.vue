<template>
    <div :class="classnames" :style="styles" @click="handleClick"><slot></slot></div>
</template>

<script>
    import {findParent, findChild, findChilds} from '../../util/assist';

    export default {
        name: 'MenuItem',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            active: {
                type: [String, Boolean],
                default: false
            },
            className: String
        },
        data () {
            return {
                activeClass: false
            }
        },
        computed: {
            classnames () {
                const prefixCls = 'ui-menu';

                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.activeClass,
                        [`${prefixCls}-item-selected`]: this.activeClass,
                        [`${prefixCls}-item-disabled`]: this.disabled
                    }
                ]
            },
            styles () {
                var style = {};

                var parent = findParent(this, 'Menu');
                if (parent.mode === 'horizontal') {
                    style.lineHeight = parent.height;
                }

                return style;
            }
        },
        methods: {
            handleClick (e) {
                if (this.disabled) return;
                var routerLink = findParent(this, 'router-link');
                var parent = findParent(this, 'Menu');
                var menuItem = findChilds(parent, 'MenuItem');

                // 如果上层存在router则不执行后续Menu-Item组件本身的高亮操作
                if (routerLink) {
                    return false;
                }
                
                for (var j = 0; j < menuItem.length; j++) {
                    menuItem[j].activeClass = false;
                }
                        
                this.activeClass = true;
                this.$emit('click', e);
            }
        },
        mounted () {
            // 激活当前项高亮样式
            if (this.active) {
                this.activeClass = true;
            }
        }
    }
</script>

<style>
/* 主题字色 */
/* 水平 */
.ui-menu-horizontal .ui-menu-item {
	float: left;
	padding: 0 20px;
    height: 100%;
	position: relative;
	cursor: pointer;
	z-index: 3;
	transition: all .2s ease-in-out;
    border-bottom: 2px solid transparent;
}

    .ui-menu-light .ui-menu-item {
        color: #495060;
    }
    .ui-menu-primary .ui-menu-item,
    .ui-menu-dark .ui-menu-item,
    .ui-menu-black .ui-menu-item {
        color: #fff;
        opacity: .7;
    }
    /* 主题：light */
    .ui-menu-horizontal.ui-menu-light .ui-menu-item:hover {
        color: #2d8cf0;
        border-bottom: 2px solid #2d8cf0;
    }
    .ui-menu-horizontal.ui-menu-light .ui-menu-item-active,
    .ui-menu-horizontal.ui-menu-light .router-link-active .ui-menu-item {
        color: #2d8cf0;
        border-bottom: 2px solid #2d8cf0;
        z-index: 2;
    }
    /* 主题：primary */
    .ui-menu-horizontal.ui-menu-primary .ui-menu-item:hover {
        color: #fff;
        opacity: 1;
        border-bottom: 2px solid #fff;
    }
    .ui-menu-horizontal.ui-menu-primary .ui-menu-item-active,
    .ui-menu-horizontal.ui-menu-primary .router-link-active .ui-menu-item {
        color: #fff;
        border-bottom: 2px solid #fff;
        opacity: 1;
        z-index: 2;
    }
    /* 主题：dark */
    .ui-menu-horizontal.ui-menu-dark .ui-menu-item:hover {
        color: #fff;
        opacity: 1;
    }
    .ui-menu-horizontal.ui-menu-dark .ui-menu-item-active:hover {
        color: #2d8cf0;
        opacity: 1;
    }
    .ui-menu-horizontal.ui-menu-dark .ui-menu-item-active,
    .ui-menu-horizontal.ui-menu-dark .router-link-active .ui-menu-item {
        color: #2d8cf0;
        border-bottom: 2px solid #2d8cf0;
        background: #363e4f;
        opacity: 1;
        z-index: 2;
    }
    /* black */
    .ui-menu-horizontal.ui-menu-black .ui-menu-item:hover {
        color: #fff;
        opacity: 1;
    }
    .ui-menu-horizontal.ui-menu-black .ui-menu-item-active,
    .ui-menu-horizontal.ui-menu-black .router-link-active .ui-menu-item {
        color: #fff;
        background: #2d8cf0;
        opacity: 1;
        z-index: 2;
    }

/* 垂直 */
.ui-menu-vertical .ui-menu-item {
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all .2s ease-in-out;
    border-right: 2px solid transparent;
}
    /* 主题：light */
    .ui-menu-vertical.ui-menu-light .ui-menu-item:hover {
        background-color: #f3f3f3;
    }
    .ui-menu-vertical.ui-menu-light .ui-menu-item-active,
    .ui-menu-vertical.ui-menu-light .router-link-active .ui-menu-item  {
        color: #2d8cf0;
        border-right: 2px solid #2d8cf0;
        z-index: 2;
    }
    /* 主题：primary */
    .ui-menu-vertical.ui-menu-primary .ui-menu-item:hover {
        color: #fff;
        opacity: 1;
    }
    .ui-menu-vertical.ui-menu-primary .ui-menu-item-active,
    .ui-menu-vertical.ui-menu-primary .router-link-active .ui-menu-item  {
        color: #fff;
        background: #5cadff;
        opacity: 1;
        z-index: 2;
    }
    /* 主题：dark */
    .ui-menu-vertical.ui-menu-dark .ui-menu-item:hover {
        color: #fff;
        opacity: 1;
    }
    .ui-menu-vertical.ui-menu-dark .ui-menu-item-active,
    .ui-menu-vertical.ui-menu-dark .router-link-active .ui-menu-item {
        color: #2d8cf0;
        border-right: 2px solid #2d8cf0;
        background: #363e4f;
        opacity: 1;
        z-index: 2;
    }
    .ui-menu-vertical.ui-menu-dark .ui-menu-item-active:hover,
    .ui-menu-vertical.ui-menu-dark .router-link-active .ui-menu-item:hover{
        color: #2d8cf0;
    }
    /* 主题：black */
    .ui-menu-vertical.ui-menu-black .ui-menu-item:hover {
        color: #fff;
        opacity: 1;
    }
    .ui-menu-vertical.ui-menu-black .ui-menu-item-active,
    .ui-menu-vertical.ui-menu-black .router-link-active .ui-menu-item {
        color: #fff;
        background: #2d8cf0;
        opacity: 1;
        z-index: 2;
    }
    .ui-menu-vertical.ui-menu-black .ui-menu-item-active:hover,
    .ui-menu-vertical.ui-menu-black .router-link-active .ui-menu-item:hover{
        color: #fff;
    }
</style>

