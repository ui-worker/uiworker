<template>
    <div :class="[prefixCls + '-dropdown']" :style="styles"><slot></slot></div>
</template>

<script>
    import {getStyle} from '../../util/assist.js';

    const prefixCls = 'ui-select';

    export default {
        name: 'Drop',
        data () {
            return {
                prefixCls: prefixCls,
                width: '',
                height: '',
            };
        },
        computed: {
            styles () {
                var style = {};

                if (this.width) {
                    style.width = this.width;
                }
                style.left = 0;
                style.top = this.height;

                return style;
            }
        },
        mounted () {
            this.width = getStyle(this.$parent.$el, 'width');
            this.height = getStyle(this.$parent.$el, 'height');
        }
    }
</script>

<style>
.slide-up-enter-active, .slide-up-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.slide-up-enter {
    transform-origin: 0 0;
    transform: scaleY(0.8);
    opacity: 0;
}
.slide-up-enter-to {
    transform-origin: 0 0;
    transform: scaleY(1);
    opacity: 1;
}
.slide-up-leave {
    transform-origin: 0 0;
    transform: scaleY(1);
    opacity: 1;
}
.slide-up-leave-to {
    transform-origin: 0 0;
    transform: scaleY(0.8);
    opacity: 0;
}
</style>
