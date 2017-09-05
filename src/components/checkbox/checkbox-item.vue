<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input
                v-if="group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :value="label"
                v-model="model"
                @change="change">
            <input
                v-if="!group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                @change="change">
        </span>
        <slot><span v-if="showSlot">{{ label }}</span></slot>
    </label>
</template>
<script>
    import { findParent } from '../../util/assist';
    import Emitter from '../../mixins/emitter';
    const prefixCls = 'ui-checkbox';
    export default {
        name: 'Checkbox',
        mixins: [ Emitter ],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: [String, Number, Boolean]
            },
            indeterminate: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                model: [],
                currentValue: this.value,
                group: false,
                showSlot: true,
                parent: findParent(this, 'CheckboxGroup')
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
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
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-indeterminate`]: this.indeterminate
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            this.parent = findParent(this, 'CheckboxGroup');
            if (this.parent) this.group = true;
            if (!this.group) {
                this.updateModel();
                this.showSlot = this.$slots.default !== undefined;
            } else {
                this.parent.updateModel(true);
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }
                const checked = event.target.checked;
                this.currentValue = checked;
                this.$emit('input', checked);
                if (this.group) {
                    this.parent.change(this.model);
                } else {
                    this.$emit('change', checked);
                }
            },
            updateModel () {
                this.currentValue = this.value;
            }
        },
        watch: {
            value () {
                this.updateModel();
            }
        }
    };
</script>
<style type="text/css">
    
    .ui-checkbox {
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
        cursor: pointer;
        outline: 0;
        line-height: 1;
        position: relative
    }

    .ui-checkbox-disabled {
        cursor: not-allowed
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
        /*transition: transform .2s ease-in-out*/
    }

    .ui-checkbox-input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        cursor: pointer;
        opacity: 0
    }

    .ui-checkbox-input[disabled] {
        cursor: not-allowed
    }

    .ui-checkbox-checked:hover .ui-checkbox-inner {
        border-color: #2d8cf0
    }

    .ui-checkbox-checked .ui-checkbox-inner {
        border-color: #2d8cf0;
        background-color: #2d8cf0
    }

    .ui-checkbox-checked .ui-checkbox-inner:after {
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
        transform: rotate(45deg) scale(1);
        /*transition: transform .2s ease-in-out*/
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
        color: #ccc;
        cursor: not-allowed
    }

    .ui-checkbox-indeterminate .ui-checkbox-inner:after {
        content: "";
        width: 8px;
        height: 1px;
        transform: scale(1);
        position: absolute;
        left: 2px;
        top: 5px
    }

    .ui-checkbox-indeterminate:hover .ui-checkbox-inner {
        border-color: #2d8cf0
    }

    .ui-checkbox-indeterminate .ui-checkbox-inner {
        background-color: #2d8cf0;
        border-color: #2d8cf0
    }

    .ui-checkbox-wrapper {
        cursor: pointer;
        font-size: 12px;
        display: inline-block;
        margin-right: 8px
    }

    .ui-checkbox-wrapper-disabled {
        cursor: not-allowed
    }

    .ui-checkbox+span,.ui-checkbox-wrapper+span {
        margin-right: 4px
    }

    .ui-checkbox-group {
        font-size: 14px
    }

    .ui-checkbox-group-item,.ui-switch {
        display: inline-block
    }

</style>