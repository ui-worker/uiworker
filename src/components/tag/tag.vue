<template>
	<transition name="fade">
	  <div :class="classes">
	    <span :class="textClasses"><slot></slot></span><Icon v-if="closable" type="ios-close-empty" @click.native.stop="close"></Icon>
	  </div>
	</transition>	
</template>

<script>
	const prefixCls = 'ui-tag'
	export default {
		props: {
			closable: {
				type: Boolean,
				default: false
			},
			name: {
				type: [String, Number]
			},
			color: {
			  type: String
			},
		},
	  computed: {
			classes () {
			  return [
			      `${prefixCls}`,
			      {
			      	[`${prefixCls}-${this.color}`]: !!this.color,
		          	[`${prefixCls}-closable`]: this.closable
			      }
			  ]
			},
			textClasses () {
			  return `${prefixCls}-text`;
			}
	  },
	  methods: {
			close (event) {
			  if (this.name === undefined) {
			    this.$emit('on-close', event);
			  } else {
			    this.$emit('on-close', event, this.name);
			  }
			}
	  }
	}
</script>

<style>
	.ui-tag, .ui-tag a, .ui-tag a:hover {
		color: #495060;
	}
	.ui-tag {
		display: inline-block;
		height: 22px;
		line-height: 22px;
		margin: 2px 4px 2px 0;
		padding: 0 8px;
		border: 1px solid #e9eaec;
		border-radius: 3px;
		background: #f7f7f7;
		font-size: 12px;
		vertical-align: middle;
		opacity: 1;
		overflow: hidden;
		cursor: pointer;
	}
	.ui-tag-closable > i {
		margin-left: 8px;
		font-size: 18px;
		vertical-align: -10%;
	}
	.ui-tag-blue {
		color: #fff;
		background: #108ee9;
		border-color: #108ee9;
	}
	.ui-tag-green {
		color: #fff;
		background: #87d068;
		border-color: #87d068;
	}
	.ui-tag-red {
		color: #fff;
		background: #f50;
		border-color: #f50;
	}
	.ui-tag-yellow {
		color: #fff;
		background: #f90;
		border-color: #f90;
	}
	.ui-tag-pink {
		color: #fff;
		background: #fdd8e7;
		border-color: #fdd8e7;		
	}
	.ui-tag-orange {
		color: #fff;
		background: #fde3cf;
		border-color: #fde3cf;
	}
	.ui-tag-cyan {
		color: #fff;
		background: #fdd8e7;
		border-color: #fdd8e7;
	}
	.ui-tag-purple {
		color: #fff;
		background: #e4e2fa;
		border-color: #e4e2fa;
	}
</style>
