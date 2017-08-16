<template>
    <div :class="classNames" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Col',
        props: {
            span: [String, Number],   // 栅格的占位格数，可选值为0~24的整数
            offset: [String, Number],   // 栅格的偏移（margin-left）格数，可选值为0~24的整数
            className: String
        },
        data () {
            return {
                prefixCls: 'ui-col',
                gutter: 0  // 父组件Row的gutter会传入子组件Col
            };
        },
        computed: {
            classNames () {
                return [
                    {
                        [`${this.prefixCls}`]: true,
                        [`${this.prefixCls}-span-${this.span}`]: this.span,   //ui-col-span
                        [`${this.prefixCls}-offset-${this.offset}`]: this.offset,   //ui-col-offset
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                let styles = {};

                // 父组件Row有传如gutter参数时
                if (this.gutter != 0) {
                    styles = {
                        'padding-left': this.gutter / 2 + 'px',
                        'padding-right': this.gutter / 2 + 'px'
                    };
                }

                return styles;
            }
        },
        mounted () {
            this.$parent.updateGutter(this.$parent.gutter);
        }
    }
</script>

<style>
.ui-col{
    position: relative;
    display: block;
}
.ui-col-span-24,.ui-col-span-23,.ui-col-span-22,.ui-col-span-21,.ui-col-span-20,.ui-col-span-19,.ui-col-span-18,.ui-col-span-17,.ui-col-span-16,.ui-col-span-15,.ui-col-span-14,.ui-col-span-13,.ui-col-span-12,.ui-col-span-11,.ui-col-span-10,.ui-col-span-9,.ui-col-span-8,.ui-col-span-7,.ui-col-span-6,.ui-col-span-5,.ui-col-span-4,.ui-col-span-3,.ui-col-span-2,.ui-col-span-1 {
    float: left;
    display: block;
    box-sizing: border-box;
}
.ui-col-span-24{
    width: 100%;
}
.ui-col-span-23 {
	width: 95.83333333%
}
.ui-col-span-22 {
	width: 91.66666667%
}
.ui-col-span-21 {
	width: 87.5%
}
.ui-col-span-20 {
	width: 83.33333333%
}
.ui-col-span-19 {
	width: 79.16666667%
}
.ui-col-span-18 {
	width: 75%
}
.ui-col-span-17 {
	width: 70.83333333%
}
.ui-col-span-16{
    width: 66.66666667%;
}
.ui-col-span-15 {
	width: 62.5%
}
.ui-col-span-14 {
	width: 58.33333333%
}
.ui-col-span-13 {
	width: 54.16666667%
}
.ui-col-span-12{
    width: 50%;
}
.ui-col-span-11 {
	width: 45.83333333%
}
.ui-col-span-10 {
	width: 41.66666667%
}
.ui-col-span-9 {
	width: 37.5%
}
.ui-col-span-8{
    width: 33.33333333%;
}
.ui-col-span-7 {
	width: 29.16666667%
}
.ui-col-span-6{
    width: 25%;
}
.ui-col-span-5 {
	width: 20.83333333%
}
.ui-col-span-4 {
	width: 16.66666667%
}
.ui-col-span-3 {
	width: 12.5%
}
.ui-col-span-2 {
	width: 8.33333333%
}
.ui-col-span-1 {
	width: 4.16666667%
}
.ui-col-span-0 {
	display: none
}

.ui-col-offset-24 {
	margin-left: 100%
}
.ui-col-offset-23 {
	margin-left: 95.83333333%
}
.ui-col-offset-22 {
	margin-left: 91.66666667%
}
.ui-col-offset-21 {
	margin-left: 87.5%
}
.ui-col-offset-20 {
	margin-left: 83.33333333%
}
.ui-col-offset-19 {
	margin-left: 79.16666667%
}
.ui-col-offset-18 {
	margin-left: 75%
}
.ui-col-offset-17 {
	margin-left: 70.83333333%
}
.ui-col-offset-16 {
	margin-left: 66.66666667%
}
.ui-col-offset-15 {
	margin-left: 62.5%
}
.ui-col-offset-14 {
	margin-left: 58.33333333%
}
.ui-col-offset-13 {
	margin-left: 54.16666667%
}
.ui-col-offset-12 {
	margin-left: 50%
}
.ui-col-offset-11 {
	margin-left: 45.83333333%
}
.ui-col-offset-10 {
	margin-left: 41.66666667%
}
.ui-col-offset-9 {
	margin-left: 37.5%
}
.ui-col-offset-8 {
	margin-left: 33.33333333%
}
.ui-col-offset-7 {
	margin-left: 29.16666667%
}
.ui-col-offset-6 {
	margin-left: 25%
}
.ui-col-offset-4 {
	margin-left: 16.66666667%
}
.ui-col-offset-3 {
	margin-left: 12.5%
}
.ui-col-offset-2 {
	margin-left: 8.33333333%
}
.ui-col-offset-1 {
	margin-left: 4.16666667%
}
</style>
