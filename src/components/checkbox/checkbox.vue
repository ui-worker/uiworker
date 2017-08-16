<template>
    <label :class="wrapClasses" @click="handleClick">
        <span :class="checkboxClasses">
            <span :class="[innerClasses]" ></span>
        </span>
        <slot></slot>
    </label>
</template>

<script>
    const prefixCls = 'ui-checkbox';

    export default {
        name: 'Checkbox',
        props: {
        	disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                model: [],
                currentValue: this.value,
                group: false,
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled
                    }
                ];
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        mounted () {
            this.updateModel();
        },
        methods: {
            updateModel () {
                this.currentValue = this.value;
            },
            handleClick (event) {
            	if(this.disabled){
            		return ;
            	}
            	this.currentValue = !this.currentValue
                this.$emit('input', this.currentValue);
            }
        },
        watch: {
            value () {
                this.updateModel();
            }
        }
    }
</script>

<style>
.ui-checkbox-wrapper {
    cursor: pointer;
    font-size: 12px;
    display: inline-block;
    margin-right: 8px
}
.ui-checkbox-wrapper-disabled {
    cursor: not-allowed
}
.ui-checkbox {
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    line-height: 1;
    position: relative
}
.ui-checkbox:hover .ui-checkbox-inner {
    border-color: #bcbcbc
}
.ui-checkbox-inner {
    display: inline-block;
    width: 14px;
    height: 14px;
    position: relative;
    top: 0;
    left: 0;
    border: 1px solid #dddee1;
    border-radius: 2px;
    background-color: #fff;
    transition: border-color .2s ease-in-out,background-color .2s ease-in-out
}
.ui-checkbox-inner:after {
    content: "";
    display: table;
    width: 4px;
    height: 8px;
    position: absolute;
    top: 1px;
    left: 4px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0);
    transition: all .2s ease-in-out
}
.ui-checkbox-checked .ui-checkbox-inner {
    border-color: #2d8cf0;
    background-color: #2d8cf0
}
.ui-checkbox-checked .ui-checkbox-inner:after {
    transform: rotate(45deg) scale(1);
    transition: all .2s ease-in-out
}

.ui-checkbox-disabled.ui-checkbox-checked:hover .ui-checkbox-inner {
    border-color: #dddee1
}

.ui-checkbox-disabled.ui-checkbox-checked .ui-checkbox-inner {
    background-color: #f3f3f3;
    border-color: #dddee1
}

.ui-checkbox-disabled.ui-checkbox-checked .ui-checkbox-inner:after {
    animation-name: none;
    border-color: #ccc
}

.ui-checkbox-disabled:hover .ui-checkbox-inner {
    border-color: #dddee1
}

.ui-checkbox-disabled .ui-checkbox-inner {
    border-color: #dddee1;
    background-color: #f3f3f3
}

.ui-checkbox-disabled .ui-checkbox-inner:after {
    animation-name: none;
    border-color: #f3f3f3
}

.ui-checkbox-disabled .ui-checkbox-inner-input {
    cursor: default
}

.ui-checkbox-disabled+span {
    color: #eee;
    cursor: not-allowed
}

</style>
