<template>
    <button :class="classnames" :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
    const prefixCls = 'ui-btn';

    export default {
        name: 'Button',
        props: {
            type: {
                type: String
            },
            disabled: {
                type: [String, Boolean],
                default: false
            },
            className: String
        },
        computed: {
            classnames () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.className}`]: !!this.className
                    }
                ];
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    }
</script>

<style>
.ui-btn {
	display: inline-block;
	margin-bottom: 0;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	background-image: none;
	border: 1px solid transparent;
	white-space: nowrap;
	line-height: 1.5;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	padding: 6px 15px;
	font-size: 12px;
	border-radius: 4px;
	transition: color .2s linear,background-color .2s linear,border .2s linear;
	color: #495060;
	background-color: #f7f7f7;
	border-color: #dddee1;
}
.ui-btn>.ui-icon+span, .ui-btn>span+.ui-icon {
    margin-left: 5px;
}
.ui-btn,.ui-btn:active,.ui-btn:focus {
	outline: 0;
}
.ui-btn.disabled,.ui-btn[disabled] {
	cursor: not-allowed;
}
.ui-btn.disabled,
.ui-btn.disabled.active,
.ui-btn.disabled:active,
.ui-btn.disabled:focus,
.ui-btn.disabled:hover,
.ui-btn[disabled],
.ui-btn[disabled].active,
.ui-btn[disabled]:active,
.ui-btn[disabled]:focus,
.ui-btn[disabled]:hover {
	color: #bbbec4;
	background-color: #f7f7f7;
	border-color: #dddee1
}
.ui-btn:hover {
	color: #6d7380;
	background-color: #f9f9f9;
	border-color: #e4e5e7;
}
.ui-btn.active,.ui-btn:active {
	color: #454c5b;
	background-color: #ebebeb;
	border-color: #ebebeb;
}
.ui-btn-primary {
	color: #fff;
	background-color: #2d8cf0;
	border-color: #2d8cf0;
}
.ui-btn-primary:hover {
	color: #fff;
	background-color: #57a3f3;
	border-color: #57a3f3;
}
.ui-btn-primary.active,.ui-btn-primary:active {
	color: #f2f2f2;
	background-color: #2b85e4;
	border-color: #2b85e4;
}
.ui-btn-success {
	color: #fff;
	background-color: #19be6b;
	border-color: #19be6b;
}
.ui-btn-success:hover {
	color: #fff;
	background-color: #47cb89;
	border-color: #47cb89;
}
.ui-btn-success.active,.ui-btn-success:active {
	color: #f2f2f2;
	background-color: #18b566;
	border-color: #18b566;
}
.ui-btn-warning {
	color: #fff;
	background-color: #f90;
	border-color: #f90;
}
.ui-btn-warning:hover {
	color: #fff;
	background-color: #ffad33;
	border-color: #ffad33;
}
.ui-btn-warning.active,.ui-btn-warning:active {
	color: #f2f2f2;
	background-color: #f29100;
	border-color: #f29100;
}
.ui-btn-error {
	color: #fff;
	background-color: #ed3f14;
	border-color: #ed3f14;
}
.ui-btn-error:hover {
	color: #fff;
	background-color: #f16543;
	border-color: #f16543;
}
.ui-btn-error.active,.ui-btn-error:active {
	color: #f2f2f2;
	background-color: #e13c13;
	border-color: #e13c13;
}
.ui-btn-info {
	color: #fff;
	background-color: #2db7f5;
	border-color: #2db7f5;
}
.ui-btn-info:hover {
	color: #fff;
	background-color: #57c5f7;
	border-color: #57c5f7;
}
.ui-btn-info.active,.ui-btn-info:active {
	color: #f2f2f2;
	background-color: #2baee9;
	border-color: #2baee9;
}
.ui-btn-ghost {
	color: #495060;
	background-color: transparent;
	border-color: #dddee1;
}
.ui-btn-ghost:hover {
	color: #57a3f3;
	background-color: transparent;
	border-color: #57a3f3;
}
.ui-btn-ghost.active,.ui-btn-ghost:active {
	color: #2b85e4;
	background-color: transparent;
	border-color: #2b85e4
}
</style>
