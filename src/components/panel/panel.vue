<template>
    <transition name="slide-fade">
        <div class="ui-panel"  v-show="showTag">
            <div class="ui-panel-header">
                <span class="ui-panel-header_oper ui-panel-header_prevYear" @click="prevYear"><i class="ui-icon ui-icon-ios-arrow-left ui-icon-ios-arrow-double"></i></span>
                <span class="ui-panel-header_oper ui-panel-header_prevMonth" @click="prevMonth"><i class="ui-icon ui-icon-ios-arrow-left"></i></span>
                <span class="ui-panel-header_content">{{panel.year}}年{{panel.month}}月</span>
                <span class="ui-panel-header_oper ui-panel-header_nextYear" @click="nextYear"><i class="ui-icon ui-icon-ios-arrow-right"></i></span>
                <span class="ui-panel-header_oper ui-panel-header_nextMonth" @click="nextMonth"><i class="ui-icon ui-icon-ios-arrow-right ui-icon-ios-arrow-double"></i></span>
            </div>
            <div class="ui-panel-day">
                <span class="ui-panel-day_day" v-for="item of panel.dateDay" v-once >{{item}}</span>
            </div>
            <div class="ui-panel-date">
                <span v-for="item of panel.panelDate" :class="[item.type,{'today':item.today,'selected':item.selected}]" @click="onInput(item)">{{item.date}}</span>
            </div>
        </div>
    </transition>
</template>
<script>
    const getFirstDayOfMonth = function(date) {
        const temp = new Date(date.getTime());
        temp.setDate(1);
        return temp.getDay();
    }
    const getDayCountOfMonth = function(year, month) {
        if (month === 3 || month === 5 || month === 8 || month === 10) {
            return 30;
        }
        if (month === 1) {
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                return 29;
            } else {
                return 28;
            }
        }
        return 31;
    };
    export default {
        props: {
            value: {
                type: [Date],
                default: null
            },
            show: {
                type: [Boolean],
                default: false,
            }
        },
        name: 'ui-panel',
        components: { },
        data () {
            return {
                // 输入框的值
                inputVal: null,
                // 系统时间的当天
                today:{
                    Date: new Date(),
                },
                // 面板渲染相关
                panel: {
                    currentValue: null,
                    year: null,
                    month: null,
                    panelDate: [],
                    dateDay: ['日','一','二','三','四','五','六'],
                },
                showTag: this.show,
            };
        },
        computed: {
        },
        watch: {
            value (val){
                this.inputVal = this.formatToDate(val);
                this.drawPanel();
            },
            show (){
                this.showTag = this.show;
            }
        },
        methods: {
            checkDate (val1, val2){
                val1 = this.formatToDate(val1);
                val2 = this.formatToDate(val2);
                if(val1 === null || val2 === null){
                    return false;
                }else if(val1.getFullYear() === val2.getFullYear() &&
                    val1.getMonth() === val2.getMonth() &&
                    val1.getDate() === val2.getDate() ){
                    return true;
                }else{
                    return false;
                }
            },
            formatToDate (val){
                if(typeof val == "string" || typeof val == "number"){
                    return  new Date(val);
                }else if((typeof val == "object") && (val instanceof Date)){
                    return val;
                }else{
                    // return new Date();
                    return null;
                }
            },
            onInput (item){
                if(item.type === 'current-month'){
                    this.$emit('input', new Date(this.panel.year + "/" + this.panel.month + "/"+ item.date));
                }else if(item.type === 'prev-month'){
                    if(this.panel.month === 1){
                        this.$emit('input', new Date((this.panel.year-1) + '/12/'+ item.date));
                    }else{
                        this.$emit('input', new Date((this.panel.year) + '/'+(this.panel.month - 1)+'/'+ item.date));
                    }
                }else if(item.type === 'next-month'){
                    if(this.panel.month === 12){
                        this.$emit('input', new Date((this.panel.year+1) + '/1/'+ item.date));
                    }else{
                        this.$emit('input', new Date((this.panel.year) + '/'+(this.panel.month + 1)+'/'+ item.date));
                    }
                }
                // console.log(item);
                this.drawPanel();
            },
            nextMonth (){
                var date = this.panel.currentValue;
                var _year = date.getFullYear();
                var _month = date.getMonth();
                var _date = date.getDate();
                if(_month === 11){
                    this.panel.currentValue = (new Date(_year+'/01/01 00:00:00'));
                }else{
                    this.panel.currentValue = (new Date(_year+'/'+(_month+2)+'/01 00:00:00'));
                }
                this.drawPanel();
                
                this.$emit('focus')
            },
            prevMonth (){
                var date = this.panel.currentValue;
                var _year = date.getFullYear();
                var _month = date.getMonth();
                var _date = date.getDate();
                if(_month === 0){
                    this.panel.currentValue = (new Date((_year-1)+'/12/01 00:00:00'));
                }else{
                    this.panel.currentValue = (new Date(_year+'/'+(_month)+'/01 00:00:00'));
                }
                this.drawPanel();
                this.$emit('focus')
            },
            nextYear (){
                var date = this.panel.currentValue;
                var _year = date.getFullYear();
                var _month = date.getMonth();
                var _date = date.getDate();
                this.panel.currentValue = (new Date((_year+1)+'/'+(_month+1)+'/01 00:00:00'));
                this.drawPanel();
                this.$emit('focus')
            },
            prevYear (){
                var date = this.panel.currentValue;
                var _year = date.getFullYear();
                var _month = date.getMonth();
                var _date = date.getDate();
                this.panel.currentValue = (new Date((_year-1)+'/'+(_month+1)+'/01 00:00:00'));
                this.drawPanel();
                this.$emit('focus')
            },
            drawPanel (){
                // 时间
                var _date = this.panel.currentValue
                // 当前时间1号是周几
                var _DayTag = getFirstDayOfMonth(_date);
                // 当前是几月
                var _MonthTag = _date.getMonth();
                // 当前年份 
                var _yearTag = _date.getFullYear();
                // 赋值给model
                this.panel.year = _yearTag;
                this.panel.month = _MonthTag + 1;
                // 当前月有几天
                var _today = getDayCountOfMonth(_yearTag, _MonthTag)
                // 上个月有几天
                var _prevday;
                if(_MonthTag === 0) {
                    _prevday = getDayCountOfMonth(_yearTag - 1, 11);
                }else {
                    _prevday = getDayCountOfMonth(_yearTag, _MonthTag - 1);
                }
                // 下个月有几天
                var _nextday;
                if(_MonthTag === 11) {
                    _nextday = getDayCountOfMonth(_yearTag + 1, 0);
                }else {
                    _nextday = getDayCountOfMonth(_yearTag, _MonthTag + 1);
                }

                this.panel.panelDate = [];
                // 计算当前月第一天
                var toDayDate = new Date(_yearTag+"/"+(_MonthTag+1)+"/01 00:00:00");
                //渲染上个月
                var i = 1,il = _DayTag===0 ? 7 : _DayTag;
                for( ; i <= il; i++){
                    this.panel.panelDate.push({
                        date: _prevday - il + i,
                        Date: toDayDate.getTime() - (1000*60*60*24*(il-i+1)),
                        type: 'prev-month'
                    });
                }
                // 渲染当前月
                var i = 1, il = _today;
                for(var i = 1; i <= il; i++){
                    this.panel.panelDate.push({
                        date: i,
                        Date: toDayDate.getTime() + (1000*60*60*24*(i-1)),
                        type: 'current-month'
                    });
                }
                // 渲染下个月
                var i = 1, il = 42 - this.panel.panelDate.length;
                // console.log(toDayDate.getTime(), _today)
                // 计算下个月第一天
                var toDayDate = new Date(toDayDate.getTime()+_today*1000*60*60*24);
                for( ; i <= il; i++){
                    this.panel.panelDate.push({
                        date: i,
                        Date: toDayDate.getTime() + (1000*60*60*24*i-1),
                        type: 'next-month'
                    });
                }
                // 渲染当前选中和当天
                var i = 0, il = this.panel.panelDate.length;
                for( ; i<il ; i++){
                    if(this.checkDate(this.today.Date, this.panel.panelDate[i].Date)){
                        this.panel.panelDate[i].today = true;
                    }
                    // console.log(this.inputVal,this.panel.panelDate[i].Date,this.checkDate(this.inputVal, this.panel.panelDate[i].Date));
                    if(this.checkDate(this.inputVal, this.panel.panelDate[i].Date)){
                        this.panel.panelDate[i].selected = true;
                    }
                }
            }
        },
        mounted (){
            this.panel.currentValue = this.formatToDate(this.inputVal) || new Date();
            this.drawPanel();
        },
    };
</script>
<style type="text/css" scope>
    .ui-panel{
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
        font-size: 12px;
    }
/*顶部操作按钮*/
    .ui-panel-header{font-size: 0;text-align: center;border-bottom: 1px solid #e9eaec;line-height:32px;}
    .ui-panel-header span{display: inline-block;font-size: 12px;}
    .ui-panel-header_prevYear{float:left;margin:0px 8px;    }
    .ui-panel-header_prevMonth{float:left;margin:0px 8px;    }
    .ui-panel-header_content{vertical-align: top; }
    .ui-panel-header_nextMonth{float:right;margin:0px 8px;    }
    .ui-panel-header_nextYear{float:right;margin:0px 8px;    }
    .ui-panel-header span:hover {    color: #2d8cf0;}

/*日期区域*/
    .ui-panel-day span,.ui-panel-date span{display: inline-block; width:14.285714285714286%;text-align: center;min-width:28px;min-height:28px;line-height: 28px;}
    .prev-month{    color: #bbbec4;}
    .current-month{}
    .next-month{    color: #bbbec4;}

    .current-month:hover{background: #e1f0fe;}

    .ui-panel-date span.today{position: relative;}
    .ui-panel-date span.today:after {content: "";display: block;width: 6px;height: 6px;border-radius: 50%;background: #2d8cf0;position: absolute;top: 1px;right: 1px;}

    .ui-panel-date span.selected{background: #2d8cf0;color: #fff;}
    .ui-panel-date span.selected.today:after{background-color: #fff;}
/*指针*/
    .ui-panel-date span,.ui-panel-header_oper{cursor: pointer;}
/* 进入和离开动画可以分别 */
/* 设置不同的持续时间(duration)和动画函数(timing function) */
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 在 <2.1.8 中 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>