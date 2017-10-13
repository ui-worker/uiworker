<template>
    <div :class="classnames" :style="styles" v-clickoutside="closeDropList">
        <div :class="selectionclass" @click="toggleDropList" :style="styles">
            <span :class="[prefixCls + '-placeholder']" v-show="!isSelected && !search" :style="styles">{{placeholder}}</span>
            <span :class="[prefixCls + '-selected']" v-show="isSelected && !search" :style="styles">{{selectedTxt}}</span>
			<input type="text"
				:class="[prefixCls + '-search']"
				v-if="search"
				v-model="query"
				:disabled="disabled"
				ref="input"
				:placeholder="placeholder">
            <Icon type="arrow-down-b" class="ui-select-arrow" v-show="arrow"></Icon>
        </div>
		<transition name="slide-up">
			<Drop v-show="visible">
				<ul :class="[prefixCls + '-dropdown-list']" v-show="(!notFound && !loadingState)"><slot></slot></ul>
				<ul :class="[prefixCls + '-dropdown-not-found']" v-show="notFound && !loadingState"><li :class="[prefixCls + '-item']">{{notFoundTxt}}</li></ul>
				<ul :class="[prefixCls + '-dropdown-not-found']" v-show="remote && loadingState"><li :class="[prefixCls + '-item']">{{loadingTxt}}</li></ul>
			</Drop>
		</transition>
    </div>
</template>

<script>
	import Drop from './dropdown.vue';
	import Emitter from '../../mixins/emitter';
	import clickoutside from '../../directives/click-outside';
    import {findChilds} from '../../util/assist';

	const prefixCls = 'ui-select';

    export default {
        name: 'Select',
		components: {Drop},
		mixins: [Emitter],  // 混合Emitter组件
		directives: {clickoutside},// 注册指令
        props: {
			value: {
				type: [String, Number],
				default: ''
			},
            placeholder: {
                type: String,
                default: '请选择'
            },
			disabled: {
				type: Boolean,
				default: false
			},
			width: [String, Number],
			height: [String, Number],
			arrow: {
				type: Boolean,
				default: true
			},
			search: Boolean,
			// 是否为远程搜索
			remote: Boolean,
        },
        data () {
            return {
                prefixCls: prefixCls,
                selectedTxt: '',
                selectedVal: null,
                isSelected: false,
                visible: false,
				query: '',   // 查询关键字
				notFound: false,   // 是否未发现数据（默认不显示）
				notFoundTxt: '未找到匹配结果',
				loadingState: false,
				loadingTxt: '加载中...',
            };
		},
        computed:  {
            classnames () {
                return [
                    prefixCls,
                    {
                        [prefixCls + '-disabled']: this.disabled,
                        [prefixCls + '-visible']: this.visible,
                        [prefixCls + '-' + this.className]: !!this.className
                    }
                ];
            },
            selectionclass () {
                return [prefixCls + '-selection'];
            },
            dropclass () {
				return [prefixCls + '-dropdown'];
			},
			styles () {
				var style = {};
				if (this.width) style.width = parseInt(this.width) + 'px';
				if (this.height) {
					style.height = parseInt(this.height) + 'px';
					style.lineHeight = parseInt(this.height) + 'px';
				}

				return style;
			}
        },
        methods: {
			// 显示或隐藏下拉列表
			toggleDropList (e) {
                if (this.disabled) {
                    return false;
                }
				this.visible = !this.visible;
				// 搜索时要先清空选中项
				if (this.visible && (this.search || this.remote)) {
					findChilds(this, 'Option').forEach(function(option, i) {
						option.selected = false;
					});
				}
			},
			// 关闭下拉列表
			closeDropList () {
				this.visible = false;
			},
			updateOption (currOption) {
				var currIndex = null;
				// 隐藏下拉列表
				this.visible = false;
				// 修改选中状态
				currOption.$parent.$children.forEach(function(option, i) {
					option.selected = false;
					if (option.value === currOption.value) {
						currIndex = i;
						option.selected = true;
					}
				});
				currOption.selected = true;
				// 显示当前项
				this.isSelected = true;
				this.selectedTxt = currOption.$el.innerHTML;
				this.selectedVal = currOption.value;
				this.$emit('input', this.selectedVal);
				if (this.search || this.remote) {
					this.query = currOption.label;
				}
				return currIndex;
			},
			findChild () {
				var _this = this;
				var childItem = this.$children[1].$children;
				if (!childItem) return false;
				// 空值清除文字和样式
				if( (typeof _this.value === 'string' || typeof _this.value === 'object') && !_this.value ) {
					this.isSelected = false;
					this.selectedTxt = '';
					this.selectedVal = '';
					this.query = '';
					childItem.forEach(function(option, i) {
						option.selected = false;
					});
					return;
				}
				childItem.forEach(function(option, i) {
					if (_this.value === option.value) {
						_this.updateOption(option);
					}
				});
			},
			querySearch (value) {
				setTimeout(() => {
					// 是否清除v-model绑定的值
					var isClearSelected = true;
					// 是否显示 没查到数据
					var isShowNotFound = false;
					this.loadingState = false;
					// 触发子组件queryChange事件
					this.$children[1].$children.forEach((item) => {
						// 触发子组件的querychange方法
						item.$emit('querychange', value);
						// 进入是否显示 未查到数据 的逻辑
						if (!isShowNotFound) {
							// 没有匹配数据
							if (item.hidden) {
								// 显示 没查到数据
								this.notFound = true;
							}
							// 有匹配数据
							else {
								// 不显示 没查到数据
								this.notFound = false;
								// 阻止下次遍历isShowNotFound逻辑
								isShowNotFound = true;
							}
						}
						// 改变选中状态
						item.selected === true && ( isClearSelected = false );
					}, this);
					if (isClearSelected) {
						this.$emit('input', '');
					}
				}, 0);
			}
		},
		watch: {
			value (value, oldVal) {
				this.findChild();
			},
			query (value) {
				if (this.search && !this.remote) {
					// 输入框值变化时触发回调
					this.$emit('queryChange', value);
					// 触发显示列表变化操作
					this.querySearch(value);
				}
				else if (this.remote) {
					this.loadingState = true;
					// 输入框值变化时触发回调
					this.$emit('queryChange', value);
				}
			},
		},
		mounted () {
			this.findChild();
			// 订阅子组件Option的select事件
			this.$on('selectedItem', (currOption) => {
				var currIndex = this.updateOption(currOption);
				// query变量设置为选中的label或value
				if (currOption.label) {
					this.query = currOption.label;
				}
				// 暴露change事件给开发者
				this.$emit('change', {
					label: this.selectedTxt,
					value: this.selectedVal,
					index: currIndex
				});
			});
			// 订阅子组件clear事件，清空外部绑定的值
			this.$on('clear', () => {
				this.$emit('input', '');
			});
		}
    }
</script>

<style>
.ui-select {
	display: inline-block;
	width: 100%;
	box-sizing: border-box;
	vertical-align: middle;
	color: #495060;
	font-size: 14px;
	line-height: normal;
	position: relative;
}
.ui-select-selection {
	display: block;
	box-sizing: border-box;
	outline: 0;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: pointer;
	position: relative;
	background-color: #fff;
	border-radius: 4px;
	border: 1px solid #dddee1;
	transition: all .2s ease-in-out;
	height: 32px;
}
.ui-select-selection:hover {
	border-color: #57a3f3;
}
.ui-select-selection .ui-select-placeholder, 
.ui-select-selection .ui-select-selected {
	display: block;
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-left: 8px;
	padding-right: 24px;
}
.ui-select-arrow {
	position: absolute;
	top: 50%;
	right: 8px;
	line-height: 1;
	margin-top: -7px;
	font-size: 14px;
	color: #80848f;
	transition: all .2s ease-in-out;
}
.ui-select-visible .ui-select-selection {
	border-color: #57a3f3;
	outline: 0;
	box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
.ui-select-visible .ui-select-arrow {
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
}
.ui-select-disabled .ui-select-selection {
	background-color: #f3f3f3;
	opacity: 1;
	cursor: not-allowed;
	color: #ccc;
}
.ui-select-disabled .ui-select-selection:hover {
	border-color: #e4e5e7;
}
.ui-select-disabled .ui-select-selection:hover {
	border-color: #dddee1;
	box-shadow: none;
}
.ui-select-selection .ui-select-placeholder {
	color: #bbbec4;
}
.ui-select-dropdown {
    width: inherit;
    max-height: 200px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    position: absolute;
    z-index: 900;
}
.ui-select-dropdown-not-found {
	text-align: center;
}
.ui-select-search{
	height: 100%;
	border: none;
	outline: 0;
	color: #495060;
	background-color: transparent;
	cursor: pointer;
	font-size: 12px;
	padding-left: 8px;
	padding-right: 24px;
	float: left;
	width: 100%;
	cursor: text;
}
input.ui-select-search::-webkit-input-placeholder{
	color: #bbbec4;
}
input.ui-select-search::-moz-input-placeholder{
	color: #bbbec4;
}
input.ui-select-search:-ms-input-placeholder{
	color: #bbbec4;
}
</style>