<template>
	<!-- <div style="min-height:150px;"> -->
		<div :class="[prefixCls + '-mask',]" :style="{position:positionFormat[position]}">
			<div :class="[prefixCls + '-spinner',]">
				<svg viewBox="25 25 50 50" class="circular" v-show="loading"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
				<!-- <p class="ui-loading-text" v-show="text" v-text="text">拼命加载中</p> -->
				<p class="ui-loading-text"><slot></slot></p>

			</div>
		</div>
	<!-- </div> -->
</template>
<script type="text/javascript">
	const prefixCls = 'ui-loading';
	const positionFormat={
		s: 'relative',
		static: 'relative',
		a: 'absolute',
		absolute: 'absolute',
		f: 'fixed',
		fixed: 'fixed',
	}
    export default {
        name: 'Loading',
        props: {
            position: {
                type: [String, Boolean],
                default: 'static'
            },
            text: {
                type: [String, Number, Boolean],
                default: ''
            },
            loading: {
                type: [Boolean],
                default: true
            },
        },
        data(){
        	return{
        		prefixCls,
        		positionFormat
        	}
        },
        computed: {
        }
    }
</script>
<style type="text/css">

	.ui-loading-mask {
	    z-index: 10000;
	    background-color: rgba(255, 255, 255, 0.9);
	    margin: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    min-height: 100px;/*解决static*/
	    transition: opacity .3s;
	}
	.ui-loading-spinner {
	    top: 50%;
	    margin-top: -40px;
	    width: 100%;
	    text-align: center;
	    position: absolute;
	}
	.ui-loading-spinner .circular {
	    width: 50px;
	    height: 50px;
	    animation: loading-rotate 2s linear infinite;
	}
	@keyframes loading-rotate {
	    to {
	        transform: rotate(1turn)
	    }
	}
	.ui-loading-spinner .path {
	    animation: loading-dash 1.5s ease-in-out infinite;
	    stroke-dasharray: 90,150;
	    stroke-dashoffset: 0;
	    stroke-width: 2;
	    stroke: #20a0ff;
	    stroke-linecap: round;
	}
	@keyframes loading-dash {
	    0% {
	        stroke-dasharray: 1,200;
	        stroke-dashoffset: 0
	    }

	    50% {
	        stroke-dasharray: 90,150;
	        stroke-dashoffset: -40px
	    }

	    to {
	        stroke-dasharray: 90,150;
	        stroke-dashoffset: -120px
	    }
	}
	.ui-loading-spinner .ui-loading-text {
	    color: #20a0ff;
	    margin: 3px 0;
	    font-size: 14px;
	}
</style>