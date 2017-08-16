<template>
    <div :class="classNames" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Row',
        // 接收参数 prop 验证
        props: {
            gutter: {
                type: [String, Number],  // 必须传String或Number类型
                default: 0     // 默认值为0
            },
            className: String
        },
        data () {
            return {
                prefixCls: 'ui-row'
            };
        },
        computed: {
            classNames () {
                return {
                    [`${this.prefixCls}`]: true,
                    [`${this.className}`]: !!this.className
                };
            },
            styles () {
                let styles = {};

                if (this.gutter != 0) {
                    styles = {
                        'margin-left': this.gutter / -2 + 'px',
                        'margin-right': this.gutter / -2 + 'px'
                    };
                }

                return styles;
            }
        },
        methods: {
            updateGutter (newVal) {
                this.$children.forEach(function (children) {
                    if (newVal) {
                        children.gutter = newVal;
                    }
                });
            }
        },
        watch: {
            gutter (newVal) {
                this.updateGutter(newVal);
            }
        }
    }
</script>

<style>
.ui-row{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.ui-row:after,.ui-row:before {
	content: "";
	display: table
}

.ui-row:after {
	clear: both;
	visibility: hidden;
	font-size: 0;
	height: 0
}
</style>
