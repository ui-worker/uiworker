<template>
    <Input
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
        </Input>
</template>
<script>
    const prefixCls = 'ui-inputNumber';
    export default {
        name: 'InputNumber',
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
                errorTips: '',//下掉，使用全局提示
                errorTag: '',
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
                var _errorTips = '';
                if(this.errorTag){
                    // 动画异常
                    // this.errorTag();
                    // this.errorTag=null    
                }
                if(isNaN(_number)) {
                    _errorTips = "请输入有效数字";
                }else if(this.max !== false && this.max < value) {
                    _errorTips = "最大值：" + this.max;
                }else if(this.min !== false && this.min > value) {
                    _errorTips = "最小值：" + this.min;
                }
                if(_errorTips != ''){
                    this.errorTag = this.$Message.error({
                        content: _errorTips,
                        duration: 0,
                        closable: true
                    })
                    return false;
                }else{
                    return true;
                }
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
                if(val!=old){
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
            }
        },
        mounted () {

        }
    };
</script>
