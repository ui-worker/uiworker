<template>
    <div>
        <header class="panel-heading">
            <h1>Message 全局提示</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">信息提示组件，在顶部居中显示。可以自动消失，内置 普通信息，成功信息，警告信息，错误信息。</p>

            <h2>代码示例</h2>

            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Button type="info" @click="showInfo()">消息提示</Button>
                        <Button type="success" @click="showSuccess()">成功信息</Button>
                        <Button type="warning" @click="showWarning()">警告信息</Button>
                        <Button type="error" @click="showError()">错误信息</Button>
                        <Button type="loading" @click="showLoading()">消息提示</Button>
                    </div>
                    <header><h4>消息提示</h4></header>
                    <p>基本功能，显示消息，定时消失</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                            <div>
                                <Button type="info" <org>@click</org>=<green>"showInfo()"</green>>消息提示</Button>
                                <Button type="success" <org>@click</org>=<green>"showSuccess()"</green>>成功信息</Button>
                                <Button type="warning" <org>@click</org>=<green>"showWarning()"</green>>警告信息</Button>
                                <Button type="error" <org>@click</org>=<green>"showError()"</green>>错误信息</Button>
                                <Button type="loading" <org>@click</org>=<green>"showLoading()"</green>>消息提示</Button>
                            </div>

                            <script>
                                showInfo(){
                                    this.$Message.info({
                                        content:'消息提示.info',
                                        duration: 2
                                    })
                                },
                                showWarning(){
                                    this.$Message.warning({
                                        content:'消息提示.warning',
                                        duration: 2
                                    })
                                },
                                showSuccess(){
                                    var _date = new Date();
                                    this.$Message.success({
                                        content:'消息提示.success',
                                        duration: 2,
                                        closable: true,
                                        close(){
                                            console.log( new Date() - _date);
                                        }
                                    })
                                },
                                showError(){
                                    this.$Message.error({
                                        content:'消息提示.error',
                                        duration: 2
                                    })
                                },
                                showLoading(){
                                    var _time = this.$Message.loading({
                                        content:'消息提示.loading',
                                        duration: 0
                                    })
                                    setTimeout(_time, 30000)
                                }
                            </script>
                    </script>
                </div>
            </div>

            <h2>API</h2>
            <h3>Message 方法</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>方法名</th> 
                        <th>说明</th> 
                        <th>参数</th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>destroy</td> 
                        <td>全局销毁</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>info</td> 
                        <td>创建一个普通提示消息</td> 
                        <td>config</td>
                    </tr>
                    <tr>
                        <td>success</td> 
                        <td>创建一个成功提示消息</td> 
                        <td>config</td>
                    </tr>
                    <tr>
                        <td>warning</td> 
                        <td>创建一个警告提示消息</td> 
                        <td>config</td>
                    </tr>
                    <tr>
                        <td>error</td> 
                        <td>创建一个错误提示消息</td> 
                        <td>config</td>
                    </tr>
                    <tr>
                        <td>loading</td> 
                        <td>创建一个加载提示消息</td> 
                        <td>config</td>
                    </tr>
                </tbody>
            </table>
            <h3>Message 方法 info success warning error loading 参数</h3>
            <p>参数 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：</p>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>属性</th> 
                        <th>说明</th> 
                        <th>类型</th> 
                        <th>默认值</th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>content</td> 
                        <td>提示消息</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>duration</td> 
                        <td>消失定时器，单位秒。为0时不自动消失</td> 
                        <td>Number</td> 
                        <td>1.5</td>
                    </tr>
                    <tr>
                        <td>close</td> 
                        <td>关闭时的回调</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>closable</td> 
                        <td>显示关闭按钮</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        };
    },
    methods: {
        showInfo(){
            this.$Message.info({
                content:'消息提示.info',
                duration: 2
            })
        },
        showWarning(){
            this.$Message.warning({
                content:'消息提示.warning',
                duration: 2
            })
        },
        showSuccess(){
            var _date = new Date();
            this.$Message.success({
                content:'消息提示.success',
                duration: 2,
                closable: true,
                close(){
                    console.log( new Date() - _date);
                }
            })
        },
        showError(){
            this.$Message.error({
                content:'消息提示.error',
                duration: 2
            })
        },
        showLoading(){
            var _time = this.$Message.loading({
                content:'消息提示.loading',
                duration: 0
            })
            setTimeout(_time, 30000)
        }
    }
}
</script>


<style scoped>
    body{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    h2{
        font-size: 20px;
        font-weight: 400;
        margin: 12px 0;
    }
    h3{
        font-size: 18px;
        margin: 30px 0 20px;
    }
    .layout-demo{
        height: 300px;
        margin-bottom: 20px;
    }
    .example-box{
        border: 1px solid #eee;
        border-radius: 6px;
        margin-bottom: 20px;
        display: -moz-flex;
        display: flex;
    }
    .example-demo{
        padding: 10px;
        -moz-flex: 1;
        flex: 1;
    }
    .example-demo h4{
        font-size: 14px;
        font-weight: 500;
        background: #fff;
        display: inline-block;
        margin: 0 10px;
        position: relative;
    }
    .example-demo header{
        margin: 30px 0 10px;
        position: relative;
    }
    .example-demo header:before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #eee;
        position: absolute;
        top: 10px;
        left: 0;
    }
    .example-demo p{
        font-size: 12px;
        padding: 0 20px;
    }
    .example-demo>p{
        margin: 5px;
    }
    .desc-row{
        padding: 5px;
        background: #efefef;
        border: 1px solid #ddd;
        font-size: 12px;
        color: #444;
        line-height: 22px;
        margin: 10px 0;
    }
    .desc-line{
        padding: 5px 0;
        font-size: 14px;
    }
    .example-code{
        border-left: 2px dashed #eee;
        padding: 10px;
        -moz-flex: 1;
        flex: 1;
        color: #3e76f6;
        font-size: 14px;
        font-family: Consolas,Menlo,Courier,monospace;
    }
    .api-table{
        width: 100%;
        font-size: 12px;
        margin-bottom: 24px;
    }
    .api-table td, .api-table th{
        border: 1px solid #e9e9e9;
        padding: 8px 16px;
        text-align: left;
    }
    .api-table th {
        background: #f7f7f7;
        white-space: nowrap;
        color: #5c6b77;
        font-weight: 600;
    }
    .wrapper{
        background: #eee;
        padding: 20px;
    }
    .box{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .updBtn{
        font-size: 14px;
    }
    .preivew-box{
        overflow: hidden;
    }
    .preivew-box {
        width: 300px;
        height: 300px;
        background: #dddee1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .preivew-box img {
        max-width: 100%;
    }
    .add-file{
        float: left;
        width: 80px;
    }
    .add-file .ui-upload-drag{
        height: 80px;
        line-height: 80px;
    }
    .demo-upload-list{
        clear: both;
        overflow: hidden;
    }
    .demo-upload-item{
        width: 80px;
        float: left;
        margin-right: 5px;
        position: relative;
    }
    .demo-upload-item img{
        width: 80px;
        height: 80px;
    }
    .demo-upload-item-name{
        font-size: 12px;
        white-space: nowrap;
        padding: 5px 0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .demo-upload-item-close{
        position: absolute;
        right: 0;
        top: 0;
        padding: 3px 5px;
        cursor: pointer;
        background: rgba(255, 0, 0, 0.6);
    }
    .camera-icon{
        height: 80px;
        line-height: 80px;
    }
    .mask{
        width: 100%; 
        height: 80px; 
        position: absolute; 
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3); 
        z-index: 1;
    }
    .upd-progress-info{
        position: absolute;
        width: 100%;
        height: 6px;
        top: 37px;
        left: 0;
        z-index: 2;
    }
    .upd-progress-info .upload-list-progress-bg{
        height: 100%;
    }
    .upd-error-info{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .upd-error-info>p{
        color: #fff;
        padding: 0 4px;
    }
    .demo-upload-item-info-box{
        padding-top: 16px;
    }
    .demo-upload-item-info{
        font-size:12px;
        padding-right: 10px;
    }
</style>