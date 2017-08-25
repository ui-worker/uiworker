<template>
    <div v-if="simple">
        <div :class="simpleWrapperClass">
            <!-- 共几条 -->
            <div :class="[prefixCls + '-total']" v-if="showTotal">
                共<span :class="[prefixCls + '-total-count']">{{total}}</span>条
            </div>
            <div :class="prevClass" @click="handlePrev">
                <a href="javascript:;">
                    <Icon type="ios-arrow-left"></Icon>
                </a>
            </div>
            <div :class="simplePagerClass">
                <span>{{currentPage}}</span><span>/</span><span>{{totalPage}}</span>
            </div>
            <div :class="nextClass" @click="handleNext">
                <a href="javascript:;">
                    <Icon type="ios-arrow-right"></Icon>
                </a>
            </div>
            <!-- 跳至第几页 -->
            <div :class="[prefixCls + '-skip']" v-if="showSkip">
                跳至<input type="text" @keydown.enter="handleKeyDown">页
            </div>
        </div>
    </div>
    <div v-else>
        <div :class="[prefixCls]">
            <!-- 共几条 -->
            <div :class="[prefixCls + '-total']" v-if="showTotal">
                共<span :class="[prefixCls + '-total-count']">{{total}}</span>条
            </div>
            <!-- 上一页按钮 -->
            <div :class="prevClass" @click="handlePrev">
                <a href="javascript:;">
                    <Icon type="ios-arrow-left"></Icon>
                </a>
            </div>
            <!-- 第一页 -->
            <div :class="[pageItemClass, {[activeClass]: currentPage === 1}]" v-if="currentPage > 0" @click="goPage(1)">
                <a href="javascript:;">1</a>
            </div>
            <!-- 前翻省略号 -->
            <div :class="[prefixCls + '-item-jump-prev']" v-if="showPrevMore" @click="handleFastPrev">
                <a href="javascript:;">
                    <Icon type="ios-arrow-left"></Icon>
                </a>
            </div>
            <!-- 中间页 -->
            <div 
                v-for="page in pagers"
                :class="[pageItemClass, {[activeClass]: currentPage === page}]"
                 @click="goPage(page)">
                <a href="javascript:;">{{page}}</a>
            </div>
            <!-- 后翻省略号 -->
            <div :class="[prefixCls + '-item-jump-next']" v-if="showNextMore" @click="handleFastNext">
                <a href="javascript:;">
                    <Icon type="ios-arrow-right"></Icon>
                </a>
            </div>
            <!-- 最后一页 -->
            <div :class="[pageItemClass, {[activeClass]: currentPage === totalPage}]" v-if="totalPage > 1" @click="goPage(totalPage)">
                <a href="javascript:;">
                    {{totalPage}} 
                </a>
            </div>
            <!-- 下一页按钮 -->
            <div :class="nextClass" @click="handleNext">
                <a href="javascript:;">
                    <Icon type="ios-arrow-right"></Icon>
                </a>
            </div>
            <!-- 跳至第几页 -->
            <div :class="[prefixCls + '-skip']" v-if="showSkip">
                跳至<input type="text" @keydown.enter="handleKeyDown">页
            </div>
        </div>
    </div>
</template>

<script>
    const prefixCls = 'ui-pagination';

    export default {
        name: 'Pagination',
        props: {
            // 当前页码
            current: {
                type: Number,
                default: 1
            },
            // 总条目数
            total: Number,
            // 每页显示条目数
            pageSize: {
                type: Number,
                default: 10
            },
            // 简版
            simple: Boolean,
            // 是否显示跳至第几页
            showSkip: {
                type: Boolean,
                default: false
            },
            // 是否显示总数
            showTotal: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
            // 当前页数
            this.currentPage = this.current;
            // 总页数
            // this.totalPage = Math.ceil(this.total / this.pageSize);
        },
        data () {
            return {
                prefixCls: prefixCls,
                // 当前页数
                currentPage: 1,
                // 总页数
                // totalPage: 0,
                // 是否显示前翻页省略号
                showPrevMore: false,
                // 是否显示后翻页省略号
                showNextMore: false
            };
        },
        computed: {
            totalPage () {
                return Math.ceil(this.total / this.pageSize);
            },
            simpleWrapperClass () {
                return [
                    prefixCls,
                    prefixCls + '-simple'
                ];
            },
            simplePagerClass () {
                return [prefixCls + '-simple-pager'];
            },
            prevClass () {
                return [
                    prefixCls + '-prev',
                    {
                        [prefixCls + '-disabled']: this.currentPage === 1
                    }
                ];
            },
            nextClass () {
                return [
                    prefixCls + '-next',
                    {
                        [prefixCls + '-disabled']: this.currentPage === this.totalPage
                    }
                ];
            },
            pageItemClass () {
                return [prefixCls + '-item'];
            },
            activeClass () {
                return [prefixCls + '-active'];
            },
            pagers () {
                var pageNum = 7;  // 视图上要显示的page数量
                var totalPage = this.totalPage;
                var currentPage = this.currentPage;
                var array = [];

                // 隐藏省略号
                this.showPrevMore = false;
                this.showNextMore = false;

                // 大于7页
                if (totalPage > pageNum) {
                    // 大于7页 且 当前页大于page数量 - 3： 显示前翻页省略号
                    if (currentPage > pageNum - 3) this.showPrevMore = true;
                    // 大于7页 且 当前页小于总页数 - 3： 显示后翻页省略号
                    if (currentPage < totalPage - 3) this.showNextMore = true;
                }

                // 小于等于7页时 前后省略号才会都不显示
                if (!this.showPrevMore && !this.showNextMore) {
                    for (var i = 2; i < totalPage; i++) {
                        array.push(i);
                    }
                }
                // 大于7页 前后省略号都显示
                else if (this.showPrevMore && this.showNextMore) {
                    // 渲染当前页的前后两页
                    for (var i = currentPage - 2; i <= currentPage + 2; i++) {
                        array.push(i);
                    }
                }
                // 大于7页 显示前省略号，不显示后省略号
                else if (this.showPrevMore && !this.showNextMore) {
                    for (var i = totalPage - (pageNum - 2); i < totalPage; i++) {
                        array.push(i);
                    }
                }
                // 大于7页 显示后省略号，不显示前省略号
                else if (!this.showPrevMore && this.showNextMore) {
                    // 
                    for (var i = 2; i < pageNum; i++) {
                        array.push(i);
                    }
                }

                return array;
            }
        },
        methods: {
            handlePrev () {
                if (this.currentPage <= 1) return false;
                this.currentPage -= 1;
                this.$emit('change', this.currentPage);
            },
            handleNext () {
                if (this.currentPage >= this.totalPage) return false;
                this.currentPage += 1;
                this.$emit('change', this.currentPage);
            },
            handleFastPrev () {
                var page = this.currentPage - 5;
                if (page > 0) {
                    this.currentPage = page;
                }
                else {
                    this.currentPage = 1;
                }
                this.$emit('change', this.currentPage);
            },
            handleFastNext () {
                var page = this.currentPage + 5;
                if (page > this.totalPage) {
                    this.currentPage = this.totalPage;
                }
                else {
                    this.currentPage = page;
                }
                this.$emit('change', this.currentPage);
            },
            // 跳转到目标页数
            goPage (value) {
                if (value < 1) {
                    return false;
                }
                else if (value > this.totalPage) {
                    return false;
                }
                else if (value === this.currentPage) {
                    return false;
                }
                this.currentPage = value;
                this.$emit('change', this.currentPage);

            },
            // 键盘按下事件
            handleKeyDown (e) {
                var val = parseInt(e.target.value.trim());
                if (isNaN(val)) return false;
                // 跳转到目标页数
                this.goPage(val);
            }
        }
    }
</script>

<style>
    .ui-pagination:after {
        content: '';
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
    .ui-pagination-item, .ui-pagination-item-jump-next, .ui-pagination-item-jump-prev, .ui-pagination-prev, .ui-pagination-next {
        float: left;
        background-color: #fff;
        vertical-align: middle;
        min-width: 32px;
        height: 32px;
        line-height: 30px;
        text-align: center;
        color: #666;
        font-size: 12px;
        cursor: pointer;
        border: 1px solid #dddee1;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
    }
    .ui-pagination-prev a, .ui-pagination-next a {
        color: #666;
        font-size: 14px;
    }
    .ui-pagination-prev:hover, .ui-pagination-next:hover {
        border-color: #2d8cf0;
    }
    .ui-pagination-prev a:hover, .ui-pagination-next a:hover {
        color: #2d8cf0;
    }
    .ui-pagination-prev {
        margin-right: 8px;
    }
    .ui-pagination-disabled {
        cursor: not-allowed;
    }
    .ui-pagination-disabled a {
        color: #ccc;
    }
    .ui-pagination-disabled:hover {
        border-color: #dddee1;
    }
    .ui-pagination-disabled:hover a {
        color: #ccc;
    }
    .ui-pagination-skip {
        float: left;
        line-height: 32px;
        margin-left: 10px;
        font-size: 13px;
    }
    .ui-pagination-skip input {
        height: 32px;
        line-height: 30px;
        padding: 4px 7px;
        font-size: 12px;
        border: 1px solid #dddee1;
        color: #495060;
        background-color: #fff;
        cursor: text;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
        border-radius: 4px;
        margin: 0 8px;
        width: 40px;
    }
    .ui-pagination-skip input:hover {
        border-color: #57a3f3;
    }
    .ui-pagination-skip input:focus {
        border-color: #57a3f3;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(43, 133, 228, .2);
    }
    .ui-pagination-total {
        float: left;
        line-height: 32px;
        margin-right: 12px;
        font-size: 13px;
    }
    .ui-pagination-total-count {
        color: #5cadff;
        padding: 0 3px;
    }
    .ui-pagination-item {
        margin-right: 8px;
    }
    .ui-pagination-item a {
        color: #495060;
    }
    .ui-pagination-item:hover {
        border-color: #2d8cf0;
    }
    .ui-pagination-item:hover a {
        color: #2d8cf0;
    }
    .ui-pagination-active {
        background-color: #2d8cf0;
        border-color: #2d8cf0;
    }
    .ui-pagination-active a{
        color: #fff;
    }
    .ui-pagination-active:hover a {
        color: #fff;
    }
    .ui-pagination-item-jump-next, .ui-pagination-item-jump-prev {
        margin-right: 8px;
    }
    .ui-pagination-item-jump-next:after, .ui-pagination-item-jump-prev:after {
        content: '\2022\2022\2022';
        display: block;
        color: #ccc;
        letter-spacing: 1px;
        text-align: center;
    }
    .ui-pagination-item-jump-next i, .ui-pagination-item-jump-prev i {
        display: none;
    }
    .ui-pagination-item-jump-next:hover i, .ui-pagination-item-jump-prev:hover i {
        display: inline;
        color: #2d8cf0;
    }
    .ui-pagination-item-jump-next:hover:after, .ui-pagination-item-jump-prev:hover:after {
        display: none;
    }
    .ui-pagination-item-jump-prev:hover i:after {
        content: '\F3D2';
    }
    .ui-pagination-item-jump-next:hover i:after {
        content: '\F3D3';
    }
    .ui-pagination-simple .ui-pagination-total {
        line-height: 24px;
        font-size: 12px;
    } 
    .ui-pagination-simple .ui-pagination-skip {
        line-height: 22px;
        font-size: 12px;
    }
    .ui-pagination-simple .ui-pagination-skip input {
        height: 24px;
        line-height: 22px;
        font-size: 12px;
    }
    .ui-pagination-simple-pager {
        float: left;
        margin-right: 4px;
        line-height: 24px;
        font-size: 14px;
    }
    .ui-pagination-simple-pager span {
        margin: 0 4px;
    }
    .ui-pagination-simple .ui-pagination-prev, .ui-pagination-simple .ui-pagination-next {
        font-size: 18px;
        min-width: 24px;
        height: 24px;
        line-height: 22px;
    }
</style>