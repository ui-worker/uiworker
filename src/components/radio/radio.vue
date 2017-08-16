<template>
    <label :class="wrapclass">
        <span :class="radioclass">
            <span :class="innerclass"></span>
            <input 
                type="radio" 
                :class="inputclass" 
                :disabled="disabled" 
                :checked="current" 
                @change="onchange">
        </span><slot>{{label}}</slot>
    </label>
</template>

<script>
    import {findParent} from '../../util/assist';
    const prefixCls = 'ui-radio';

    export default {
        name: 'Radio',
        props: {
            value: {
                type: [String, Boolean, Number],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            label: String,
            checked: {
                type: Boolean,
                default: false
            },
            name: String,
        },
        data () {
            return {
                current: false,  // 是否选中状态
                group: false,     // 是否为一组radio
                parent: findParent(this, 'RadioGroup'),
            };
        },
        computed: {
            wrapclass () {
                return [
                    prefixCls + '-wrapper',
                    {
                        [prefixCls + '-group-item']: this.group,
                        [prefixCls + '-wrapper-checked']: this.current,
                        [prefixCls + '-wrapper-disabled']: this.disabled
                    }
                ];
            },
            radioclass () {
                return [
                    prefixCls,
                    {
                        [prefixCls + '-checked']: this.current,
                        [prefixCls + '-disabled']: this.disabled
                    }
                ];
            },
            innerclass () {
                return prefixCls + '-inner';
            },
            inputclass () {
                return prefixCls + '-input';
            }
        },
        methods: {
            /**
             * 更新当前current状态为true（选中）
             * 其他RRadio兄弟的current为false（取消选中）
             **/
            onchange (e) {
                if (this.disabled) {
                    return false;
                }

                // 更新当前选中状态
                var checked = e.target.checked;
                this.current = checked;
                // 触发本组件观察者 
                if (this.label) this.$emit('input', this.label);

                // 通知父组件 - 更新兄弟级Radio元素的current状态
                if (this.group && this.label !== undefined) {
                    this.parent.change({
                        value: this.label,
                    });
                }

                // 无论是否有Radio-group父级 都触发change事件
                this.$emit('change', checked, this.label);
            }
        },
        watch: {
            value () {
                if (!this.group) {
                    // 更新所有v-model相同的Radio组件的选中状态
                    this.current = (this.value == this.label);
                }
            }
        },
        mounted () {
            // 有Radio-group父级则分组
            if (this.parent) this.group = true;
            if (!this.group) {
                this.current = (this.value == this.label);
            }
        }
    }
</script>

<style>
.ui-radio-group {
    display: inline-block;
    font-size: 14px;
}
.ui-radio-wrapper {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: 12px;
    white-space: nowrap;
    margin-right: 8px;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
}
.ui-radio-wrapper-disabled {
	cursor: not-allowed;
}
.ui-radio {
    display: inline-block;
    margin-right: 4px;
    white-space: nowrap;
    outline: 0;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
}
.ui-radio-inner {
    display: inline-block;
    width: 14px;
    height: 14px;
    position: relative;
    left: 0;
    top: 0;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #dddee1;
    transition: all .2s ease-in-out;
}
.ui-radio-inner:after {
    position: absolute;
    width: 8px;
    height: 8px;
    left: 2px;
    top: 2px;
    border-radius: 6px;
    border-top: 0;
    border-left: 0;
    content: '';
    background-color: #2d8cf0;
    opacity: 0;
    transition: all .2s ease-in-out;
    -ms-transform: scale(0);
    transform: scale(0);
}
.ui-radio-input{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
     opacity: 0;  
    cursor: pointer;
}
.ui-radio:hover .ui-radio-inner {
    border-color: #bcbcbc;
}
.ui-radio-checked .ui-radio-inner {
    border-color: #2d8cf0;
}
.ui-radio-checked .ui-radio-inner:after {
    opacity: 1;
    -ms-transform: scale(1);
    transform: scale(1);
}
.ui-radio-checked:hover .ui-radio-inner {
    border-color: #2d8cf0;
}
.ui-radio-disabled, .ui-radio-disabled .ui-radio-input {
	cursor: not-allowed;
}
.ui-radio-disabled:hover .ui-radio-inner {
    border-color: #dddee1;
}
.ui-radio-disabled .ui-radio-inner {
	border-color: #dddee1;
	background-color: #f3f3f3;
}
.ui-radio-disabled .ui-radio-inner:after {
	background-color: #ccc;
}
</style>