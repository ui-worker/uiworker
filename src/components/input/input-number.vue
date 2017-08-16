<template>
    <div :class="wrapClasses">
        <input
            ref="input"
            type="text"
            :class="inputClasses"
            :placeholder="placeholder"
            :style="inputStyles"
            :disabled="disabled"
            :maxlength="maxlength"
            :readonly="readonly"
            :name="name"
            v-model="currentValue"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
            @change="handleChange">
        <span class="ui-input-tips error" v-text="errorTips" v-show="errorTips">错误</span>
    </div>
</template>
<script>
    const prefixCls = 'ui-input';
    export default {
        name: 'input',
        props: {
            value: {
                // 绑定的值，可使用 v-model 双向绑定
                type: [String, Number],
                default: '0'
            },
            placeholder: {
                // 占位文本
                type: String,
                default: ''
            },
            maxlength: {
                // 最大输入长度
                type: Number
            },
            disabled: {
                // 设置输入框为禁用状态
                type: Boolean,
                default: false
            },
            readonly: {
                // 设置输入框为只读
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            max: {
                // 最大值
                type: [Number, Boolean],
                default: false
            },
            min: {
                // 最小值
                type: [Number, Boolean],
                default: false
            }
        },
        data () {
            return {
                currentValue: this.value,
                prefixCls: prefixCls,
                textareaStyles: {},
                inputStyles: {},
                errorTips: ''
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`
                ];
            },
            inputClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            textareaClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleEnter (event) {
                this.$emit('enter', event);
            },
            handleFocus (event) {
                this.$emit('focus', event);
            },
            handleBlur (event) {
                this.$emit('blur', event);
            },
            handleInput (event) {
                // this.$emit('input', event);
            },
            handleChange (event) {
                this.$emit('change', event);
            },
            checkNumber (value){
                var _number = Number(value);
                if(isNaN(_number)) {
                    this.errorTips = "请输入有效数字";
                    return false;
                }else if(this.max !== false && this.max < value) {
                    this.errorTips = "最大值：" + this.max;
                    return false;
                }else if(this.min !== false && this.min > value) {
                    this.errorTips = "最小值：" + this.min;
                    return false;
                }
                this.errorTips = "";
                return true;
            },
            focus() {
                this.$refs.input.focus();
            }
        },
        watch: {
            value (val, old) {
                if(val !== ""){
                    this.currentValue = val;
                }                
            },
            currentValue (val, old){
                if(this.checkNumber(val)){
                    if(val === ''){
                        this.$emit('input', "");
                    }else{
                        this.$emit('input', Number(val)+"");                        
                    }
                } else {
                    this.$emit('input', "");
                };
            }
        },
        mounted () {

        }
    };
</script>

<style scope>
    *,:after,:before {
        box-sizing: border-box
    }
    .ui-input-wrapper {
        display: inline-block;
        width: 100%;
        position: relative;
        vertical-align: middle;
        /*为了内部用absolute写提示*/
        position: relative;
    }
    .ui-input {
        display: inline-block;
        width: 100%;
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 12px;
        border: 1px solid #dddee1;
        border-radius: 4px;
        color: #495060;
        background-color: #fff;
        background-image: none;
        position: relative;
        cursor: text;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
        /* 解决两个重合 */
        margin-bottom:1px;
        margin-top:1px; 
    }
    .ui-input:focus,.ui-input:hover {
        border-color: #57a3f3
    }
    .ui-input:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgba(45,140,240,.2)
    }
    .ui-input[disabled],fieldset[disabled] .ui-input {
        background-color: #f3f3f3;
        opacity: 1;
        cursor: not-allowed;
        color: #ccc
    }
    textarea.ui-input {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
        font-size: 14px
    }
    /*提示样式*/
    .ui-input-tips{
        position: absolute;
        right:0;top:0;
        height:32px;line-height:32px;
        padding:0 .8em;
        min-width:1em;max-width:10em;
    }
    .ui-input-tips.error{
        background-color: rgba(252, 85, 85, 0.91);
        color:#fff;
    }
</style>