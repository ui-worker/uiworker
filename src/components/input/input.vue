<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <input
                ref="input"
                :type="type"
                :class="inputClasses"
                :placeholder="placeholder"
                :style="inputStyles"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
                @change="handleChange">
        </template>
        <template  v-else>
            <textarea
                ref="textarea"
                :class="textareaClasses"
                :style="textareaStyles"
                :placeholder="placeholder"
                :disabled="disabled"
                :rows="rows"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
                @change="handleChange">
            </textarea>
        </template>
    </div>
</template>
<script>
    // import { oneOf, findComponentUpward } from '../../utils/assist';
    // import calcTextareaHeight from '../../utils/calcTextareaHeight';
    // import Emitter from '../../mixins/emitter';
    const prefixCls = 'ui-input';
    export default {
        name: 'Input',
        // mixins: [ Emitter ],
        props: {
            type: {
                // 输入框类型，可选值为 text、password 或 textarea
                type: [String],
                default: 'text'
            },
            value: {
                // 绑定的值，可使用 v-model 双向绑定
                type: [String, Number],
                default: ''
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
            rows: {
                // 文本域默认行数，仅在 textarea 类型下有效
                type: Number,
                default: 3
            },
            readonly: {
                // 设置输入框为只读
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            regexp: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                currentValue: this.value,
                prefixCls: prefixCls,
                textareaStyles: {},
                inputStyles: {}
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
                let value = event.target.value;
                if(this.regexp == ''){
                     this.$emit('input', value);
                }else{
                    var _match = this.regexp.match(/^\/(.*)\/(.*)/)
                    var pattern = _match[1];
                    var attributes = _match[2];
                    var _reg = new RegExp(pattern, attributes);
                    var _result = _reg.test(value);
                    this.$emit('onregexp', _result, value);
                    this.$emit('input', value);
                    // console.log(_reg, _result)
                }
               
                // this.setCurrentValue(value); //感觉没有什么意义
                // this.$emit('input', event);
            },
            handleChange (event) {
                this.$emit('change', event);
            },
            setCurrentValue (value) {
                if (value === this.currentValue) return;
                this.currentValue = value;
            },
            focus() {
                // console.log(this.type);
                // console.log(this.$refs.textarea)
                if (this.type === 'textarea') {
                    this.$refs.textarea.focus();
                } else {
                    this.$refs.input.focus();
                }
            }
        },
        watch: {
            value (val) {
                this.setCurrentValue(val);
            }
        },
        mounted () {
            // console.log();
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
        vertical-align: middle
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
        transition: border .2s ease-in-out .1s,background .2s ease-in-out .1s,box-shadow .2s ease-in-out .1s;
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
</style>