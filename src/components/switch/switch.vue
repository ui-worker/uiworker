<template>
    <div :class="wrapClass" @click="toggle">
        <span :class="innerClass">
            <slot name="open" v-if="currentVal === trueVal"></slot>
            <slot name="close" v-if="currentVal === falseVal"></slot>
        </span>
    </div>
</template>

<script>
    const prefixCls = 'ui-switch';
    export default {
        name: 'Switch',
        props: {
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueVal: {
                type: [String, Number, Boolean],
                default: true
            },
            falseVal: {
                type: [String, Number, Boolean],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'normal'
            }
        },
        data () {
            var val = !!this.disabled ? false : this.value;
            return {
                currentVal: val
            };
        },
        mounted () {
            if(!!this.disabled){ this.value = false; }
            if(['sm', 'normal', 'lg'].indexOf(this.size) == -1){ this.size = 'normal'; }
        },
        computed: {
            wrapClass () {
                if(['sm', 'normal', 'lg'].indexOf(this.size) == -1){ this.size = 'normal'; }
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentVal === this.trueVal && !this.disabled,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-${this.size}`]: ['sm', 'normal', 'lg'].indexOf(this.size) > -1
                    }
                ];
            },
            innerClass () { return `${prefixCls}-inner`; }
        },
        methods: {
            toggle () {
                if(!!this.disabled){ return; }
                const checkedVal = this.currentVal === this.trueVal ? this.falseVal : this.trueVal;
                this.currentVal = checkedVal;
                this.$emit('input', this.currentVal);
                this.$emit('change', this.currentVal);
            }
        },
        watch: {
            value (val) {
                if(val !== this.trueVal && val !== this.falseVal){
                    throw new Error('value should be trueVal or falseVal!');
                }
                this.currentVal = val;
            }
        }
    }
</script>

<style>
    .ui-switch{ display: inline-block; position: relative; background-color: #dddee1; border: 1px solid #dddee1; overflow: hidden; cursor: pointer; }
    .ui-switch-sm{ width: 30px; height: 14px; line-height: 14px; border-radius: 7px; }
    .ui-switch-normal{ width: 44px; height: 20px; line-height: 20px; border-radius: 10px; }
    .ui-switch-lg{ width: 60px; height: 24px; line-height: 24px; border-radius: 12px; }
    .ui-switch-checked{ background-color: #2d8cf0; border-color: #2d8cf0; }
    .ui-switch-disabled{ background-color: #bbbec4; border-color: #bbbec4; cursor: not-allowed; }
    .ui-switch-inner{ display: inline-block; position: absolute; color: #fff; font-size: 12px; }
    .ui-switch-sm .ui-switch-inner{ height: 12px; right: 4px; line-height: 12px; }
    .ui-switch-normal .ui-switch-inner{ height: 18px; right: 8px; line-height: 18px; }
    .ui-switch-lg .ui-switch-inner{ height: 22px; right: 8px; line-height: 22px; }
    .ui-switch-sm.ui-switch-checked .ui-switch-inner{ left: 4px; }
    .ui-switch-normal.ui-switch-checked .ui-switch-inner{ left: 8px; }
    .ui-switch-lg.ui-switch-checked .ui-switch-inner{ left: 8px; }
    .ui-switch::after{ content: ' '; display: block; position: absolute; background-color: #fff; border: 1px solid #dddee1; border-radius: 50%; left: 0; transition: .3s; }
    .ui-switch.ui-switch-disabled::after{ border-color: #bbbec4; }
    .ui-switch-sm::after{ width: 12px; height: 12px; }
    .ui-switch-normal::after{ width: 18px; height: 18px; }
    .ui-switch-lg::after{ width: 22px; height: 22px; }
    .ui-switch-sm.ui-switch-checked::after{ left: 16px; }
    .ui-switch-normal.ui-switch-checked::after{ left: 26px; }
    .ui-switch-lg.ui-switch-checked::after{ left: 36px; }
</style>