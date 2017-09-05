<template>
    <transition name="slide-fade">
        <div class="ui-datepanel_datetime"  v-show="showPanel">        
            <div class="ui-datepanel_date" v-show="!(showTime && timePanel)">
                <div class="ui-datepanel-header">
                    <span class="ui-datepanel-header_oper ui-datepanel-header_prevYear" @click="prevYear"><i class="ui-icon ui-icon-ios-arrow-left ui-icon-ios-arrow-double"></i></span>
                    <span class="ui-datepanel-header_oper ui-datepanel-header_prevMonth" @click="prevMonth"><i class="ui-icon ui-icon-ios-arrow-left"></i></span>
                    <span class="ui-datepanel-header_content">{{panel.year}}年{{panel.month}}月</span>
                    <span class="ui-datepanel-header_oper ui-datepanel-header_nextYear" @click="nextYear"><i class="ui-icon ui-icon-ios-arrow-right ui-icon-ios-arrow-double"></i></span>
                    <span class="ui-datepanel-header_oper ui-datepanel-header_nextMonth" @click="nextMonth"><i class="ui-icon ui-icon-ios-arrow-right"></i></span>
                </div>
                <div class="ui-datepanel-day">
                    <span class="ui-datepanel-day_day" v-for="item of panel.dateDay" v-once >{{item}}</span>
                </div>
                <div class="ui-datepanel-date">
                    <span v-for="item of panel.panelDate" :class="[item.type,{'today':item.today,'selected':item.selected}]" @click="clickDate(item)">{{item.date}}</span>
                </div>
            </div>
            <div class="ui-datepanel_time"  v-show="(showTime && timePanel)">

                <div class="ui-datepanel-header">
                    <span class="ui-datepanel-header_content">{{panel.year}}年{{panel.month}}月{{panel.date}}日</span>
                </div>
                <ul>
                    <li v-for="(i,index) in 24" :class="{'select': index==panel.hours}" @click="clickTime($event, 'hours', index)">{{index | pad}}</li>
                </ul>
                <ul>
                    <li v-for="(i,index) in 60" :class="{'select': index==panel.minutes}" @click="clickTime($event, 'minutes', index)">{{index | pad}}</li>
                </ul>
                <ul>
                    <li v-for="(i,index) in 60" :class="{'select': index==panel.seconds}" @click="clickTime($event, 'seconds', index)">{{index | pad}}</li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
    //获取一号周几
    const getFirstDayOfMonth = function(date) {
        const temp = new Date(date.getTime());
        temp.setDate(1);
        return temp.getDay();
    }
    //获取一个月中有几天
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
    //获取或设置时间
    const dateGet = function(date, type, value){
        // yyyy-MM-dd HH:mm:ss
        date = formatToDate(date)
        if(value === undefined){
            var _methods = {
                y: 'getFullYear',
                M: 'getMonth',
                d: 'getDate',
                H: 'getHours',
                m: 'getMinutes',
                s: 'getSeconds',
            }
            if(_methods[type]!='getMonth'){
                return date[_methods[type]]()
            }else{
                return date[_methods[type]]()+1;
            }
        }else{
            var _methods = {
                y: 'setFullYear',
                M: 'setMonth',
                d: 'setDate',
                H: 'setHours',
                m: 'setMinutes',
                s: 'setSeconds',
                hours: 'setHours',
                minutes: 'setMinutes',
                seconds: 'setSeconds',
            }
            //需要处理超时问题8/31设置Month8变成9/1
            if(_methods[type]!='setMonth'){
                return date[_methods[type]](value)
            }else{
                return date[_methods[type]](value+1);
            }
        }
    }
    //将日期转换为Date()
    const formatToDate =  function(val){
        if(typeof val == "string"){
            return  new Date(val.replace(/-/g,'/'));
        }else if(typeof val == "number"){
            return  new Date(val);
        }else if((typeof val == "object") && (val instanceof Date)){
            return val;
        }else{
            // return new Date();
            return null;
        }
    }
    export default {
        props: {
            // 传入的值，只接受Date
            value: {
                type: [Date],
                default: null
            },
            // 是否显示面板
            show: {
                type: [Boolean],
                default: false,
            },
            // 是否进行时间选择
            timePanel: {
                type: [Boolean],
                default: false,
            }
        },
        name: 'ui-datePanel',
        data () {
            return {
                // 当前选中时间,会经过处理，纯Date类型
                inputVal: null,
                // 系统时间的当天
                today: new Date(),
                // 面板渲染相关
                panel: {
                    //面板当前值
                    currentValue: null,
                    year: null,
                    month: null,
                    date: null,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    // 当前页面渲染date天
                    panelDate: [],
                    // 当前页面
                    dateDay: ['日','一','二','三','四','五','六'],
                },
                //是否显示组件
                showPanel: this.show,
                //切换到时间显示
                showTime: false,
            };
        },
        computed: {
        },
        filters: {
            pad(val, len) {
                val = String(val);
                len = len || 2;
                while (val.length < len) {
                    val = '0' + val;
                }
                return val;
            }
        },
        watch: {
            value (val){
                if(val == null){
                    this.panel.hours= 0;
                    this.panel.minutes= 0;
                    this.panel.seconds= 0;
                }
                this.inputVal = formatToDate(val) || new Date();
                this.drawPanel();
            },
            // 显示控件
            show (){
                this.showPanel = this.show;
                if(this.show){
                    this.showTime = false;
                }
            }
        },
        methods: {
            //校验两个日期是否为同一天
            checkDate (val1, val2){
                val1 = formatToDate(val1);
                val2 = formatToDate(val2);
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
            // 选中日期
            clickDate (item){
                var _time = '';
                if(item.type === 'current-month'){
                    _time=((this.panel.year + "/" + this.panel.month + "/"+ item.date));
                }else if(item.type === 'prev-month'){
                    if(this.panel.month === 1){
                        _time=(((this.panel.year-1) + '/12/'+ item.date));
                    }else{
                        _time=(((this.panel.year) + '/'+(this.panel.month - 1)+'/'+ item.date));
                    }
                }else if(item.type === 'next-month'){
                    if(this.panel.month === 12){
                        _time=(((this.panel.year+1) + '/1/'+ item.date));
                    }else{
                        _time=(((this.panel.year) + '/'+(this.panel.month + 1)+'/'+ item.date));
                    }
                }
                this.panel.date = item.date;
                if(this.timePanel){
                    if(_time){
                        _time = _time + ' '+(this.panel.hours || 0)+':'+(this.panel.minutes || 0)+':'+(this.panel.seconds || 0);
                    }else{
                        // var _year = this.inputVal.getFullYear();
                        // var _month = this.inputVal.getMonth();
                        // var _date = this.inputVal.getDate();
                        // var _Date = new Date(_year+'/'+(_month+1)+'/'+(_date)+' 00:00:00')
                        // _time = _Date.getTime() + (this.panel.hours || 0)*60*60*1000 + (this.panel.minutes || 0)*60*1000+(this.panel.seconds || 0)*1000; 
                    }
                    this.showTime = true;
                    this.$emit('focus')
                }
                // console.log(this.timePanel , this.inputVal)
                this.$emit('input', new Date(_time));
            },
            // 选中时间
            clickTime(e, type, value){
                this.panel[type] = value;
                this.$emit('focus');
                var _time = this.inputVal;
                _time = dateGet(_time, type, value)
                this.$emit('input', new Date(_time));
                // this.clickDate();
            },
            // 选择时间
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
            this.panel.currentValue = formatToDate(this.inputVal) || new Date();
            this.drawPanel();
        },
    };
</script>
<style type="text/css" scope>
    .ui-datepanel_datetime{
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
        font-size: 12px;
        min-height:240px;
        min-width:240px;
    }
/*顶部操作按钮*/
    .ui-datepanel-header{font-size: 0;text-align: center;border-bottom: 1px solid #e9eaec;line-height:32px;}
    .ui-datepanel-header span{display: inline-block;font-size: 12px;min-width:30px;}
    .ui-datepanel-header_prevYear{float:left;/*margin:0px 8px;*/    }
    .ui-datepanel-header_prevMonth{float:left;/*margin:0px 8px;*/    }
    .ui-datepanel-header_content{vertical-align: top; }
    .ui-datepanel-header_nextMonth{float:right;/*margin:0px 8px;*/    }
    .ui-datepanel-header_nextYear{float:right;/*margin:0px 8px;*/    }
    .ui-datepanel-header span.ui-datepanel-header_oper:hover{color: #333;background-color: #e1f0fe;}

/*日期区域*/
    .ui-datepanel-day span,.ui-datepanel-date span{display: inline-block; width:14.285714285714286%;text-align: center;min-width:28px;min-height:28px;line-height: 28px;}
    .prev-month{    color: #bbbec4;}
    .current-month{}
    .next-month{    color: #bbbec4;}

    .current-month:hover{background: #e1f0fe;}

    .ui-datepanel-date span.today{position: relative;}
    .ui-datepanel-date span.today:after {content: "";display: block;width: 6px;height: 6px;border-radius: 50%;background: #2d8cf0;position: absolute;top: 1px;right: 1px;}

    .ui-datepanel-date span.selected{background: #2d8cf0;color: #fff;}
    .ui-datepanel-date span.selected.today:after{background-color: #fff;}
/*指针*/
    .ui-datepanel-date span,.ui-datepanel-header_oper{cursor: pointer;}
/*月份*/
    .ui-datepanel_time{clear:both;}
    .ui-datepanel_time ul{float:left;box-sizing: border-box;width:80px;vertical-align: top;text-align:center;height:200px;overflow: hidden;font-size:0;border-right:1px solid #e9eaec;}
    .ui-datepanel_time ul:last-child{border-right:0px solid #e9eaec;}
    .ui-datepanel_time ul:hover{overflow-y: scroll;}
    .ui-datepanel_time ul li{font-size:12px;padding:5px 5px 5px 0;width:80px;cursor: pointer; user-select:none }
    .ui-datepanel_time ul li:hover,.ui-datepanel_time ul li.select{    color: #2d8cf0;    background: #f3f3f3;}
/**/
    /* 进入和离开动画可以分别 */
    /* 设置不同的持续时间(duration)和动画函数(timing function) */
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active 在 <2.1.8 中 */ {
      transform: translateY(10px);
      opacity: 0;
    }

</style>