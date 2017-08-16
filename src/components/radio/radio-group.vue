<template>
    <div :class="prefixCls"><slot></slot></div>
</template>

<script>
    import {findChild} from '../../util/assist';
    const prefixCls = 'ui-radio-group';

    export default {
        name: 'RadioGroup',
        props: {
            value: {
                type: [String, Number],
                default: ''
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                current: this.value,
                childrens: []
            }
        },
        methods: {
            // 更新选中状态
            updateValue () {
                const value = this.value;
                this.childrens = findChild(this, 'Radio');
                if (this.childrens) {
                    this.childrens.forEach(function(child) {
                        child.current = (value == child.label);
                    }, this);
                }
            },
            change (data) {
                // 使本组件的value变化 触发观察者
                this.$emit('input', data.value);
                this.$emit('change', data.value);
            }
        },
        mounted () {
            // 初始化更新选中状态
            this.updateValue();
        },
        watch: {
            // 当子组件Radio发生变化时 执行本组件的change方法来触发
            value () {
                this.updateValue();
            }
        }
    }
</script>