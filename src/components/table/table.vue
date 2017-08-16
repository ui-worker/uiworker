<template>
    <div :class="[`${prefixCls}-wrapper`]">
        <table cellspacing="0" cellpadding="0" border="0" :class="classnames">
            <colgroup>
                <col v-for="item in colWidth" :width="item">
            </colgroup> 
            <slot></slot>
        </table>
    </div>
</template>

<script>
    const prefixCls = 'ui-table';

    export default {
        name: 'Table',
        props: {
            // 是否采用固定表格布局
            // 固定表格布局 算法快（列等宽，与单元格的内容无关）
            // 自动表格布局 算法慢（列的宽度由列单元格中没有折行的最宽的内容设定）
            fixed: {
                type: Boolean,
                default: true
            },
            // 集合 - 每一列的宽度
            colWidth: {
                type: Array,
                default () {
                    return [];
                }
            },
            // 是否显示纵向边框
            border: {
                type: Boolean,
                default: false
            },
            // 是否隔行换色
            stripe: {
                type: Boolean,
                default: true
            },
            // 列的水平对齐方式，默认左对齐
            align: {
                type: String
            }
        },
        computed: {
            classnames () {
                return [
                    prefixCls,
                    {
                        [`${prefixCls}-border`]: this.border,
                        [`${prefixCls}-stripe`]: this.stripe,
                        [`${prefixCls}-fixed`]: this.fixed,
                        [`${prefixCls}-${this.align}`]: this.align
                    }
                ];
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        }
    }
</script>

<style>
    .ui-table-wrapper{
        position: relative;
        border: 1px solid #dddee1;
        border-bottom: none;
        border-right: none;
    }
    .ui-table-wrapper:after, .ui-table-wrapper:before{
        content: '';
        position: absolute;
        background-color: #dddee1;
    }
    .ui-table-wrapper:after{
        width: 1px;
        height: 100%;
        right: 0;
        top: 0;
        z-index: 1;
    }
    .ui-table-wrapper:before{
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
    .ui-table{
        width: 100%;
        height: 100%;
        color: #495060;
        font-size: 12px;
        background-color: #fff;
        box-sizing: border-box;
        overflow: hidden;
    }
    .ui-table-fixed{
        table-layout: fixed;
    }
    .ui-table thead th{
        height: 40px;
        min-width: 0;
        /* white-space: nowrap; */
        overflow: hidden;
        background-color: #f8f8f9;
        border-bottom: 1px solid #e9eaec;
        text-align: left;
        word-break: break-all;
        vertical-align: middle;
        /* text-overflow: ellipsis; */
        padding: 0 18px;
        overflow: hidden;
        box-sizing: border-box;
    }
    .ui-table tbody td{
        height: 48px;
        min-width: 0;
        border-bottom: 1px solid #e9eaec;
        background-color: #fff;
        text-align: left;
        word-break: break-all;
        vertical-align: middle;
        text-overflow: ellipsis;
        transition: background-color 0.2s ease-in-out;
        padding: 0 18px;
        overflow: hidden;
        box-sizing: border-box;
    }
    .ui-table-left thead th, .ui-table-left tbody td{
        text-align: left;
    }
    .ui-table-center thead th, .ui-table-center tbody td{
        text-align: center;
    }
    .ui-table-right thead th, .ui-table-right tbody td{
        text-align: right;
    }
    .ui-table tbody tr:hover td{
        background-color: #ebf7ff;
    }
    /* 隔行换色 */
    .ui-table-stripe tbody tr:nth-child(2n) td{
        background-color: #f8f8f9;
    }
    /* 纵向border样式 */
    .ui-table-border tbody td, .ui-table-border thead th{
        border-right: 1px solid #e9eaec;
    }
</style>