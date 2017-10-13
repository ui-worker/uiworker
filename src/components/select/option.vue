<template>
    <li :class="classnames" @click.stop="select" v-show="!hidden"><slot>{{showLabel}}</slot></li>
</template>

<script>
	import Emitter from '../../mixins/emitter';
    import {findParent} from '../../util/assist';

    const prefixCls = 'ui-select-item';
    
    export default {
		name: 'Option',
		mixins: [Emitter],  // 混合Emitter组件
        props: {
			value: {
				type: [String, Number],
				required: true
			},
			label: {
				type: [String, Number],
			},
			disabled: {
				type: Boolean,
				default: false
			},
			current: {
				type: Boolean,
				default: false
			}
		},
        data () {
            return {
				selected: false,
				hidden: false
			};
        },
        computed:  {
            classnames () {
                return [
					prefixCls,
					{
						[prefixCls + '-disabled']: !!this.disabled,
						[prefixCls + '-selected']: this.selected,
						[this.className]: !!this.className
					}
				];
            },
			showLabel () {
				if (this.label) {
					return this.label;
				}
				else {
					return this.value;
				}
			}
        },
        methods: {
			select () {
				if (this.disabled) {
					return false;
				}

				// 触发父组件（Select）的selected事件处理程序
				this.dispatch('Select', 'selectedItem', this);
				return this;
			},
			queryChange (val) {
				// 使用label检测
				if (this.label) {
					this.hidden = !new RegExp(val, 'gi').test(this.label);
					val !== this.label && ( this.selected = false );
<<<<<<< HEAD
					// console.info(this.label, this.hidden)
=======
>>>>>>> 3770b27ae496b0974b3532f15628e7ed306a2417
				}
				// 使用value检测
				// else {
				// 	this.hidden = !new RegExp(val, 'gi').test(this.value);
				// 	val !== this.value && ( this.selected = false );
				// }
			}
		},
		mounted () {
			var _this = this;
			if (this.current && !this.disabled) {
				// 放到任务队列中
				setTimeout(function() {
					_this.dispatch('Select', 'selectedItem', _this);
				}, 0);
				
			}
			// 监听父组件的querychange事件（输入文本时触发）
			this.$on('querychange', (value) => {
				this.queryChange(value);
			});
		}
    }
</script>

<style>
.ui-select-item {
	margin: 0;
	line-height: normal;
	padding: 7px 16px;
	clear: both;
	color: #495060;
	font-size: 12px!important;
	white-space: nowrap;
	list-style: none;
	cursor: pointer;
	transition: background .2s ease-in-out;
}
.ui-select-dropdown-not-found .ui-select-item {
	color: #bbbec4;
}
.ui-select-item:hover {
	background: #f3f3f3;
}
.ui-select-dropdown-not-found .ui-select-item:hover {
	background: #fff;
}
.ui-select-item-focus {
	background: #f3f3f3;
}
.ui-select-item-disabled {
	color: #bbbec4;
	cursor: not-allowed;
}
.ui-select-item-disabled:hover {
	color: #bbbec4;
	background-color: #fff;
	cursor: not-allowed;
}
.ui-select-item-selected,.ui-select-item-selected:hover {
	color: #fff;
	background: rgba(45,140,240,.9);
}
.ui-select-item-selected.ui-select-item-focus {
	background: rgba(40,123,211,.91);
}
</style>

