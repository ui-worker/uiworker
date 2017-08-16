<template>
    <!-- 线形进度条 -->
    <div :class="wrapperClass" v-if="type === 'line'">
        <!--进度条  -->
        <div :class="progressClass">
            <div class="ui-progress-bg">
                <div class="ui-progress-current" :style="bgStyles"></div>
            </div>
        </div>
        <!--进度文字  -->
        <div class="ui-progress-outer" v-if="showInfo">
            <div v-if="currentStatus === 'normal'">
                <div class="ui-progress-text">{{ percent }}%</div>
            </div>
            <div v-else>
                <Icon :type="statusIcon"></Icon>
            </div>
        </div>
    </div>
    <!-- 圆形进度条 -->
    <div :style="circleSize" :class="wrapperClass" v-else>
        <svg viewBox="0 0 100 100">
            <path :d="pathString" stroke="#eaeef2" :stroke-width="6" :fill-opacity="0"/>
            <path :d="pathString" stroke-linecap="round" :stroke="this.color ? this.color : '#43a3fb'" :stroke-width="6" fill-opacity="0" :style="pathStyle"/>
        </svg>
        <div :class="innerClass">
            {{ percent }}%
        </div>
    </div>
</template>

<script>
    const prefixCls = 'ui-progress';
    export default {
        name: 'Progress',
        props: {
            // 进度条类型，分为圆形和线
            type: {
                type: String,
                default: 'line'
            },
            // 百分比
            percent: {
                type: Number,
                default: 0
            },
            // 线宽
            stroke: {
                type: Number,
                default: 10
            },
            // 状态：成功或失败
            status: {
                validator (value) {
                    var statusGroup = ['success', 'error'];
                    if (statusGroup.indexOf(value) > -1) {
                        return value;
                    }
                    return 'normal';
                },
                default: 'normal'
            },
            // 是否显示进度文字信息
            showInfo: {
                type: Boolean,
                default: true
            },
            // 进度条颜色
            color: {
                type: String
            },
            width: {
                type: Number,
                default: 126
            }
        },
        mounted () {
            this.handleStatus();
        },
        data () {
            return {
                currentStatus: this.status
            };
        },
        computed: {
            wrapperClass () {
                return [
                    'ui-progress-wrapper',
                    `ui-progress-${this.currentStatus}`
                ];
            },
            progressClass () {
                return [
                    'ui-progress',
                    {
                        [`ui-progress-show`]: this.showInfo
                    }
                ];
            },
            bgStyles () {
                var styles = {
                    width: this.percent + '%',
                    height: this.stroke + 'px'
                };
                if (this.color) {
                    styles.backgroundColor = this.color;
                }

                return styles;
            },
            statusIcon () {
                var type = '';
                switch (this.currentStatus) {
                    case 'wrong':
                        type = 'ios-close';
                        break;
                    case 'success':
                        type = 'ios-checkmark';
                        break;
                }

                return type;
            },
            circleSize () {
                return {
                    width: `${this.width}px`,
                    height: `${this.width}px`
                };
            },
            radius () {
                return 50 - this.stroke / 2;
            },
            pathString () {
                return `M 50,50 m 0,-${this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
            },
            len () {
                return Math.PI * 2 * this.radius;
            },
            pathStyle () {
                return {
                    'stroke-dasharray': `${this.len}px ${this.len}px`,
                    'stroke-dashoffset': `${((100 - this.percent) / 100 * this.len)}px`,
                    'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
                };
            },
            innerClass () {
                return [prefixCls + '-inner'];
            }
        },
        methods: {
            handleStatus (isBack) {
                if (!isBack) {
                    if (parseInt(this.percent) === 100) {
                        this.currentStatus = 'success';
                        this.$emit('statusChange', this.percent);
                    }
                } else {
                    this.currentStatus = 'normal';
                    this.$emit('statusChange', this.percent);
                }
            }
        },
        watch: {
            percent (val, oldVal) {
                if (val < oldVal) {
                    this.handleStatus(true);
                } else {
                    this.handleStatus();
                }
            }
        }
    }
</script>

<style>
.ui-progress-wrapper {
    font-size: 14px;
    position: relative;
    line-height: 1;
}
.ui-progress {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
}
.ui-progress-show {
    padding-right: 54px;
    margin-right: -58px;
}
.ui-progress-bg {
    border-radius: 100px;
    background: #f3f3f3;
    overflow: hidden;
}
.ui-progress-current {
    border-radius: 100px;
    background: #2db7f5;
    transition: all .2s linear;
    position: relative;
}
.ui-progress-outer {
    display: inline-block;
    width: 40px;
    margin-left: 8px;
    vertical-align: middle;
}
.ui-progress-text {
    color: #495060;
}
.ui-progress-wrong .ui-progress-current {
	background-color: #ed3f14;
}
.ui-progress-wrong .ui-progress-outer {
    color: #ed3f14;
    font-size: 18px;
}
.ui-progress-success .ui-progress-current {
	background-color: #19be6b;
}
.ui-progress-success .ui-progress-outer {
	color: #19be6b;
    font-size: 18px;
}
.ui-progress-inner {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1;
    font-size: 24px;
}
</style>