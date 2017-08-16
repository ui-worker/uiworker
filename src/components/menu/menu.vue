<template>
    <div :class="classnames" :style="styles"><slot></slot></div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        mode: {
            type: String,
            validator (value) {
                if (value === 'horizontal' || value === 'vertical') {
                    return true;
                }
                return false;
            },
            default: 'vertical'  // 默认垂直菜单布局
        },
        theme: {
            type: String,
            default: 'light'  // 默认垂直菜单布局
        },
        width: {
            type: [Number, String],
            default: '240px'
        },
        height: {
            type: [Number, String],
        },
        className: String
    },
    computed: {
        classnames () {
            const prefixCls = 'ui-menu';

            return [
                prefixCls,
                prefixCls + '-' + this.theme,
                {
                    [this.className]: !!this.className,
                    [prefixCls + '-' + this.mode]: this.mode
                }
            ];
        },
        styles () {
            var style = {};

            if (this.mode === 'vertical') {
                style.width = this.width;
                style.height = '100%';
            }
            else if (this.mode === 'horizontal') {
                style.height = this.height;
            }
            
            return style;
        }
    }
}
</script>

<style>
.ui-menu{
	display: block;
	margin: 0;
	padding: 0;
	outline: 0;
	list-style: none;
	font-size: 14px;
	position: relative;
}
.ui-menu-horizontal {
	height: 60px;
}
.ui-menu-light {
	background: #fff;
}
.ui-menu-primary {
    background: #2d8cf0;
}
.ui-menu-dark {
    background: #495060;
}
.ui-menu-black {
    background: #404040;
}
</style>

