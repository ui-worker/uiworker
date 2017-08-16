<template>
	<div>
		<Input ref="input" placeholder="请选择日期" v-model="inputvalue"  @focus="focus" @blur="hidePanel" @keydown.native.delete="inputvalue=''"></Input>
		<div class="PanelWarrper">
			<Panel ref="Panel" :show="PanelShow" v-model="Panelvalue" @focus="inputFcous"></Panel>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {Panel} from '../panel/panel.js';

	export default {
		props:{
            value: {
                // 绑定的值，可使用 v-model 双向绑定
                type: [String, Number, Date],
                default: ''
            },
		},
	    data() {
	        return {
	        	PanelShow: false,
	        	PanelInterval:null,
	        	Panelvalue: null,
	        	inputvalue: null
	        }
	    },
	    methods: {
	    	focus() {
	    		// console.log(this.inputvalue?true:false,this.inputvalue,this.Panelvalue)
	    		this.Panelvalue = this.inputvalue ? new Date(this.inputvalue+" 00:00:00") : null;
	    		// console.log(this.inputvalue?true:false,this.inputvalue,this.Panelvalue)
	    		this.showPanel();
	    	},
	    	showPanel(){
    			clearInterval(this.PanelInterval);
	    		this.PanelShow = true;
	    	},
	    	hidePanel(){
	    		var _this = this;
				clearInterval(this.PanelInterval);
	    		this.PanelInterval=setTimeout(function(){
	    			_this.PanelShow = false;
	    		},100);
	    		// this.$emit('input', this.inputDate)
	    	},
	    	inputFcous(){
	    		// console.log(this.$refs.input, this.$refs.input.focus, 1);
	    		this.$refs.input.focus();
	    	},
	    	formatDate(_data) {
	    		if (_data) {
			        var newDate = new Date(parseInt(_data));
			        var Year = 0;
			        var Month = 0;
			        var Day = 0;
			        var CurrentDate = "";

			        Year = newDate.getFullYear();
			        Month = newDate.getMonth() + 1;
			        Day = newDate.getDate();

			        CurrentDate += Year + "/";

			        if (Month >= 10) {
			            CurrentDate += Month + "/";
			        } else {
			            CurrentDate += "0" + Month + "/";
			        };

			        if (Day >= 10) {
			            CurrentDate += Day;
			        } else {
			            CurrentDate += "0" + Day;
			        }
			        return CurrentDate;
			    } else {
			        return '';
			    }
	    	},
	    },
	    watch: {
	    	'value': function(val){
	    		if(typeof val == "object"){
	    			// this.Panelvalue = val
	    			this.inputvalue = this.formatDate(val.getTime());
	    		}else if(typeof val == "number"){
	    			// this.Panelvalue = new Date(val)
	    			this.inputvalue = this.formatDate(val);
	    		}else if(val!=''){
	    			// this.Panelvalue = new Date(val.replace(/-/g,'/'))
	    			this.inputvalue = this.formatDate(new Date(val.replace(/-/g,'/')).getTime());
	    		}
	    	},
	    	'inputvalue': function(val){
	    		this.$emit('input', this.inputvalue);
	    	},
	    	'Panelvalue': function (val){
	    		// console.log(this.formatDate(this.Panelvalue.getTime()));
	    		this.inputvalue = this.Panelvalue?this.formatDate(this.Panelvalue.getTime()):'';
	    	},
	    }
	}
</script>
<style type="text/css" scope>
	.PanelWarrper{position:relative;min-width: 240px;}
	.PanelWarrper .ui-panel{position:absolute;background-color: #fff;box-shadow: 0 1px 6px rgba(0,0,0,.2);z-index:999;}
</style>