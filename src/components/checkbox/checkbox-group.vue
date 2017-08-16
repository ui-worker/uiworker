<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { findChild } from '../../util/assist';
    import Emitter from '../../mixins/emitter';
    const prefixCls = 'ui-checkbox-group';
    export default {
        name: 'CheckboxGroup',
        components: 'CheckboxGroup',
        mixins: [ Emitter ],
        props: {
            value: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data () {
            return {
                currentValue: this.value,
                childrens: []
            };
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            }
        },
        mounted () {
            this.updateModel(true);
        },
        methods: {
            updateModel (update) {
                const value = this.value;
                this.childrens = findChild(this, 'Checkbox');
                if (this.childrens) {
                    this.childrens.forEach(child => {
                        // 保证输出共享
                        child.model = value;
                        if (update) {
                            child.currentValue = value.indexOf(child.label) >= 0;
                            child.group = true;
                        }
                    });
                }
            },
            change (data) {
                this.currentValue = data;
                this.$emit('input', data);
            }
        },
        watch: {
            value () {
                this.updateModel(true);
            }
        }
    };
</script>