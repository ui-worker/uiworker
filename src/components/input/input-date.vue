<template>
	<div>
		<Input ref="input" :placeholder="placeholder" v-model="inputvalue" @click="PanelShow == true?PanelShow = true:''" @focus="focus" @blur="hidePanel" @keydown.native.delete="inputvalue=''"></Input>
		<div class="PanelWarrper">
			<DatePanel ref="DatePanel" :show="PanelShow" v-model="Panelvalue" :timePanel="single" @focus="inputFcous"></DatePanel>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {DatePanel} from '../panel/panel.js';
	import FormatDate from '../../util/format/date.js';
	export default {
		name: 'InputDate',
		props:{
            value: {
                // 绑定的值，可使用 v-model 双向绑定
                type: [String, Number, Date],
                default: ''
            },
            placeholder: {
                // 占位文本
                type: String,
                default: '请选择日期'
            },
            single: {
                // 绑定的值，可使用 v-model 双向绑定
                type: [Boolean],
                default: false
            },
            format: {
                type: [String],
                default: 'yyyy-MM-dd'
            }
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
	    		if(this.PanelShow != true){
	    			this.Panelvalue = this.inputvalue ?(~this.inputvalue.indexOf(' ') ? this.newDate(this.inputvalue) : this.newDate(this.inputvalue+" 00:00:00") ): null;
	    		}	
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
	    		},200);
	    		// this.$emit('input', this.inputDate)
	    	},
	    	inputFcous(){
	    		// console.log(this.$refs.input, this.$refs.input.focus, 1);
	    		this.$refs.input.focus();
	    	},
			newDate(val){
				if(val == undefined){
					return new Date();
				}else if((val instanceof Date)){
	    			return this.newDate(val.getTime());
	    		}else if(typeof val == "number" || typeof val == "object"){
	    			return new Date(val);
	    		}else if(typeof val == "string" && val!=''){
	    			return this.newDate(new Date(val.replace(/-/g,'/')).getTime())
	    		}else{
	    			return ''
	    		}
			},
			eqDate(val1 ,val2){
			}
	    },
	    watch: {
	    	'value': function(val, old){
	    		// console.log(val, old);
	    		if(val == ''){
	    			this.inputvalue = null;
	    		}else if(val != old){
	    			// console.log(this.newDate(val));
	    			this.inputvalue = FormatDate(this.newDate(val) || new Date(), this.format);
	    		}
	    	},
	    	'inputvalue': function(val){
	    		if(val){
	    			this.$emit('input', val);
	    		}else{
	    			this.$emit('input', '');
	    		}
	    		
	    	},
	    	'Panelvalue': function (val){
	    		// // console.log(this.Panelvalue);
	    		// console.log(this.Panelvalue,this.Panelvalue?1:2)
	    		this.inputvalue = this.Panelvalue?FormatDate(this.Panelvalue, this.format):'';
	    	},
	    },
	    mounted () {
	    	if(this.value){
	    		this.inputvalue = FormatDate(this.newDate(this.value) || new Date(), this.format);
	    	}
        }
	}
</script>
<style type="text/css" scope>
	.PanelWarrper{position:relative;min-width: 240px;}
	.PanelWarrper .ui-datepanel_datetime{position:absolute;background-color: #fff;box-shadow: 0 1px 6px rgba(0,0,0,.2);z-index:999;}
	.PanelWarrper .ui-datepanel_datetime{max-width:240px;}
</style>