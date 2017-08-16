<template>
    <div>
        <header class="panel-heading">
            <h1>Upload 上传</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">上传控件 - 可使用点击选择上传和拖拽上传（兼容至IE10及以上）。</p>
            <p class="desc-line">Upload标签本身没有样式，可在Upload标签内添加任意标签自由控制样式。</p>

            <h2>代码示例</h2>

            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Upload 
                            url="http://les.mwebm.com/case/upload/api/upload.php"
                            showUploadList>
                            <Button type="primary"><Icon type="ios-cloud-upload-outline"></Icon><span>上传文件</span></Button>
                        </Upload>
                    </div>
                    <header><h4>点击上传</h4></header>
                    <p>点击上传，默认为单选，设置multiple属性可设为多选</p>
                    <p>showUploadList属性设置为true可显示上传列表，默认为false不显示。</p>
                </div>
                <div class="example-code">
                     <script type='text/html' v-code>   
                        <Upload 
                            <org>url</org>=<green>"http://les.mwebm.com/case/upload/api/upload.php"</green>
                            <org>showUploadList</org>>
                            <div>
                                <Button type="primary">
                                    <Icon type="ios-cloud-upload-outline"></Icon>
                                    <span>上传文件</span>
                                </Button>
                            </div>
                        </Upload> 
                    </script> 
                </div>
            </div>
            <!-- demo-2 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Upload 
                            url="http://les.mwebm.com/case/upload/api/upload.php"
                            showUploadList
                            multiple 
                            type="drag">
                            <div style="padding:20px 0;">
                                <Icon type="android-upload" size="68" color="#97a8be"></Icon>
                                <p>将文件拖拽到此处，或点击上传</p>
                            </div>
                        </Upload>
                    </div>
                    <header><h4>拖拽上传</h4></header>
                    <p>设置属性 type 为 drag，可以拖拽上传。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Upload 
                            <org>url</org>=<green>"http://les.mwebm.com/case/upload/api/upload.php"</green>
                            <org>showUploadList</org>>
                            <org>multiple</org>
                            <org>type</org>="drag">
                            <div style="padding:20px 0;">
                                <Icon type="android-upload" size="68" color="#97a8be"></Icon>
                                <p>将文件拖拽到此处，或点击上传</p>
                            </div>
                        </Upload> 
                    </script>
                </div>
            </div>
            <!-- demo-3 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Upload 
                            url="http://les.mwebm.com/case/upload/api/upload.php"
                            showUploadList
                            multiple 
                            :maxSize="1048"
                            :maxNum="6"
                            :format="['jpg', 'jpeg', 'png', 'gif']"
                            :beforeUpload="beforeUpload"
                            :onCheckError="onCheckError">
                            <Button type="info"><Icon type="ios-cloud-upload-outline"></Icon><span>上传文件</span></Button>
                        </Upload>
                    </div>
                    <header><h4>限制类型、数量、尺寸等</h4></header>
                    <p>设置format属性，限制上传文件后缀类型</p>
                    <p>绑定 beforeUpload，并返回false，可以阻止默认上传流程，手动控制文件上传。</p>
                    <p>绑定 onCheckError，可在上传之前检测错误，回调中返回type, file两个参数。</p>
                </div>
                <div class="example-code">
                     <script type='text/html' v-code>   
                        <Upload 
                            <org>url</org>=<green>"http://les.mwebm.com/case/upload/api/upload.php"</green>
                            <org>showUploadList</org>
                            <org>multiple</org>
                            <org>:maxSize</org>=<green>"1048"</green>
                            <org>:maxNum</org>=<green>"6"</green>
                            <org>:format</org>=<green>"['jpg', 'jpeg', 'png', 'gif']"</green>
                            <org>:beforeUpload</org>=<green>"beforeUpload"</green>
                            <org>:onCheckError</org>=<green>"onCheckError"</green>>
                            <Button type="info">
                                <Icon type="ios-cloud-upload-outline"></Icon>
                                <span>上传文件</span>
                            </Button>
                        </Upload>
                        <script>
                            <org>export default</org> {
                                methods: {
                                    beforeUpload (file, data) {
                                        data.extName = file.type.split('/').pop();
                                    },
                                    onCheckError (type, file) {
                                        if (type === 'type') {
                                            alert('上传类型' + file.type + '错误，请重新上传');
                                        }  else if (type === 'size') {
                                            alert('超出文件大小限制');
                                        } else if (type === 'number') {
                                            alert('超出文件限制数量');
                                        }
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>
            <!-- demo-4 复杂上传案例 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <div class="demo-upload-list">
                            <div class="demo-upload-item" v-for="file in fileList" v-if="file.status !== 'finished'">
                                <img :src="file.url">
                                <div class="demo-upload-item-name">{{file.name}}</div>
                                <Icon type="close-round" size="16" class="demo-upload-item-close" color="#ffffff" @click.native="deleteFile(file)" v-if="file.status === 'ready'"></Icon>
                                <div class="mask" v-show="file.showProgress">
                                    <div class="upd-progress-info">
                                        <div class="upload-list-progress-bg">
                                            <div class="upload-list-progress-current" :style="{width: `${file.percentage}%`}"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mask" v-show="file.status === 'fail'">
                                    <div class="upd-error-info">
                                        <p>{{file.errMsg}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="add-file">
                                <Upload 
                                    ref="upload_2"
                                    url="http://les.mwebm.com/case/upload/api/upload.php"
                                    :format="['jpg', 'jpeg', 'png', 'gif']"
                                    accept="image/jpg, image/jpeg, image/png, image/gif"
                                    :maxNum="6"
                                    :autoUpload="false"
                                    multiple 
                                    type="drag"
                                    :onSelect="onSelect"
                                    :onCheckError="onCheckError"
                                    :onAccept="onAccept"
                                    :onSuccess="onHandSuccess"
                                    :onError="onHandError">
                                    <Icon type="camera" size="30" class="camera-icon"></Icon>
                                </Upload>
                            </div>
                        </div>
                        <div class="demo-upload-item-info-box">
                            <Button type="info" @click.native="uploadFIle"><span>上传</span></Button>
                            <Button type="error" @click.native="resetQueue"><span>重置</span></Button>
                        </div>
                        <div style="padding-top:10px;">
                            <span class="demo-upload-item-info">已选择：{{fileNum}}张</span>
                            <span class="demo-upload-item-info">已上传：{{successNum}}张</span>
                            <span class="demo-upload-item-info">失败：{{errorNum}}张</span>
                        </div>
                    </div>
                    <header><h4>手动上传，自定义上传列表</h4></header>
                    <p>设置属性 autoUpload 为 false，可以改为手动上传。</p>
                    <p>设置属性 accept 为允许上传的文件格式，等同于input的accept属性</p>
                    <p>绑定 onSelect 在回调函数中写显示图片列表操作。</p>
                    <p>绑定 onAccept 获取第一个参数即服务器返回数据，当为上传失败时，返回return false，可以阻止执行上传成功流程，而进入上传失败流程。</p>
                    <p>通过 onSuccess 等属性来控制完整的上传过程，详见API。</p>
                </div>
                <div class="example-code">
                     <script type='text/html' v-code>
                        <div class="demo-upload-list">
                            <div class="demo-upload-item" <org>v-for</org>=<green>"file in fileList"</green> <org>v-if</org>=<green>"file.status !== 'finished'"</green>>
                                <img <org>:src</org>=<green>"file.url"</green>>
                                <div class="demo-upload-item-name"> <green>{ {  file.name  } }</green> </div>
                                <Icon type="close-round" size="16" class="demo-upload-item-close" color="#ffffff" <org>@click.native</org>=<green>"deleteFile(file)"</green> <org>v-if</org>=<green>"file.status === 'ready'"</green>></Icon>
                                <div class="mask" <org>v-show</org>=<green>"file.showProgress"</green>>
                                    <div class="upd-progress-info">
                                        <div class="upload-list-progress-bg">
                                            <div class="upload-list-progress-current" <org>:style</org>=<green>"{width: `${file.percentage}%`}"</green>></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mask" <org>v-show</org>=<green>"file.status === 'fail'"</green>>
                                    <div class="upd-error-info">
                                        <p><green>{ {file.errMsg} }</green></p>
                                    </div>
                                </div>
                            </div>
                            <div class="add-file">
                                <Upload 
                                    <org>ref</org>=<green>"upload_2"</green>
                                    <org>url</org>=<green>"http://les.mwebm.com/case/upload/api/upload.php"</green>
                                    <org>:format</org>=<green>"['jpg', 'jpeg', 'png', 'gif']"</green>
                                    <org>accept</org>=<green>"image/jpg, image/jpeg, image/png, image/gif"</green>
                                    <org>:maxNum</org>=<green>"6"</green>
                                    <org>:autoUpload</org>=<green>"false"</green>
                                    <org>multiple </org>
                                    <org>type</org>=<green>"drag"</green>
                                    <org>:onSelect</org>=<green>"onSelect"</green>
                                    <org>:onCheckError</org>=<green>"onCheckError"</green>
                                    <org>:onAccept</org>=<green>"onAccept"</green>
                                    <org>:onSuccess</org>=<green>"onHandSuccess"</green>
                                    <org>:onError</org>=<green>"onHandError"</green>>
                                    <Icon type="camera" size="30" class="camera-icon"></Icon>
                                </Upload>
                            </div>
                        </div>
                        <div class="demo-upload-item-info-box">
                            <Button type="info" <org>@click.native</org>=<green>"uploadFIle"</green>><span>上传</span></Button>
                            <Button type="error" <org>@click.native</org>=<green>"resetQueue"</green>><span>重置</span></Button>
                        </div>
                        <div style="padding-top:10px;">
                            <span class="demo-upload-item-info">已选择：<green>{ {fileNum} }</green>张</span>
                            <span class="demo-upload-item-info">已上传：<green>{ {successNum} }</green>张</span>
                            <span class="demo-upload-item-info">失败：<green>{ {errorNum} }</green>张</span>
                        </div>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        fileList: [],
                                        successNum: 0,  // 成功文件数
                                        errorNum: 0,  // 失败文件数
                                        fileNum: 0  // 队列中文件数
                                    };
                                },
                                methods: {
                                    onCheckError (type, file) {
                                        if (type === 'type') {
                                            alert('上传类型' + file.type + '错误，请重新上传');
                                        }
                                        else if (type === 'size') {
                                            alert('超出文件大小限制');
                                        } else if (type === 'number') {
                                            alert('超出文件限制数量');
                                        }
                                    },
                                    onAccept (res, file) {
                                        if (typeof res === 'string') {
                                            res = JSON.parse(res);
                                        }
                                        if (res.retCode != 1000) return false;
                                    },
                                    onSelect (file, fileList) {
                                        this.fileList.push(file);
                                        file.url = window.URL.createObjectURL(file.raw);
                                        // 更新队列中文件数量
                                        this.fileNum = this.$refs.upload_2.getQueue().fileNum;
                                    },
                                    deleteFile (file) {
                                        // 清除当前选中文件
                                        this.fileList.splice(this.fileList.indexOf(file), 1);
                                        // 调用组件内clearfile方法
                                        this.$refs.upload_2.clearFile(file);
                                    },
                                    uploadFIle () {
                                        // 上传图片
                                        this.$refs.upload_2.submit();
                                    },
                                    resetQueue () {
                                        // 重置队列
                                        this.$refs.upload_2.reset();
                                        this.fileList.length = 0;
                                        // 更新队列中文件数量
                                        this.fileNum = this.$refs.upload_2.getQueue().fileNum;
                                        this.successNum = this.$refs.upload_2.getQueue().successNum;
                                        this.errorNum = this.$refs.upload_2.getQueue().errorNum;
                                        console.info(this.$refs.upload_2.getQueue());
                                    },
                                    onHandSuccess () {
                                        // 更新队列中文件数量
                                        this.fileNum = this.$refs.upload_2.getQueue().fileNum;
                                        this.successNum = this.$refs.upload_2.getQueue().successNum;
                                        this.errorNum = this.$refs.upload_2.getQueue().errorNum;
                                    },
                                    onHandError (err, res, file) {
                                        file.errMsg = res.retMsg;
                                        this.fileNum = this.$refs.upload_2.getQueue().fileNum;
                                        this.successNum = this.$refs.upload_2.getQueue().successNum;
                                        this.errorNum = this.$refs.upload_2.getQueue().errorNum;
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>


            <h2>API</h2>
            <h3>Upload 属性</h3>
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
                        <td>url</td> 
                        <td>上传的地址，必选参数</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>headers</td> 
                        <td>设置上传的请求头部</td> 
                        <td>Object</td> 
                        <td>{}</td>
                    </tr>
                    <tr>
                        <td>multiple</td> 
                        <td>是否支持多选文件</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>data</td> 
                        <td>上传携带参数</td> 
                        <td>Object</td> 
                        <td>{}</td>
                    </tr>
                    <tr>
                        <td>name</td> 
                        <td>上传的文件字段名</td> 
                        <td>String</td> 
                        <td>file</td>
                    </tr>
                    <tr>
                        <td>withCredentials</td> 
                        <td>是否支持发送 cookie 凭证信息</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showUploadList</td> 
                        <td>是否显示默认样式上传文件列表</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>type</td> 
                        <td>上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）</td> 
                        <td>String</td> 
                        <td>select</td>
                    </tr>
                    <tr>
                        <td>format</td> 
                        <td>支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用</td> 
                        <td>Array</td> 
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>accept</td> 
                        <td>接受上传的文件类型</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>maxSize</td> 
                        <td>文件大小限制，单位 kb</td> 
                        <td>Number</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>maxNum</td> 
                        <td>文件个数限制</td> 
                        <td>Number</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>autoUpload</td> 
                        <td>是否在选取文件后立即进行上传（默认自动上传）</td> 
                        <td>Boolean</td> 
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>beforeUpload</td> 
                        <td>上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传，回调返回两个参数分别为 file （当前选中文件）和 data （当前文件上传需携带的参数）</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>onProgress</td> 
                        <td>文件上传时的钩子，返回字段为 event, file, fileList</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>onAccept</td> 
                        <td>上传后服务器返回数据的钩子，返回字段为 data, file，若返回false 则进入上传失败操作。</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>onSuccess</td> 
                        <td>文件上传成功时的钩子，返回字段为 response, file, fileList</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>onError</td> 
                        <td>文件上传失败时的钩子，返回字段为 err, response, file</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>onCheckError</td> 
                        <td>文件验证失败时的钩子，返回字段为 type （有3种类型分别为type[文件类型错误]，number[文件个数错误]，size[文件大小错误]）, file</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>onSelect</td> 
                        <td>选择文件时的钩子，返回字段为 file, fileList</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td> 
                        <td>是否禁用按钮</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>Upload 方法</h3>
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
                        <td>getQueue</td> 
                        <td>获取文件队列，返回一个对象其中字段为fileNum（队列中的文件数）、successNum（上传成功的文件数）、errorNum（上传失败的文件数）</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>clearFile</td> 
                        <td>从文件列表清除指定文件</td>
                        <td>file：要清除的文件</td>
                    </tr>
                    <tr>
                        <td>submit</td> 
                        <td>执行上传</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>reset</td> 
                        <td>重置上传状态，上传队列等</td> 
                        <td>-</td>
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
            showpic: '',
            fileList: [],
            successNum: 0,  // 成功文件数
            errorNum: 0,  // 失败文件数
            fileNum: 0  // 队列中文件数
        };
    },
    methods: {
        beforeUpload (file, data) {
            data.extName = file.type.split('/').pop();
        },
        onCheckError (type, file) {
            if (type === 'type') {
                alert('上传类型' + file.type + '错误，请重新上传');
            }
            else if (type === 'size') {
                alert('超出文件大小限制');
            } else if (type === 'number') {
                alert('超出文件限制数量');
            }
        },
        onAccept (res, file) {
            if (typeof res === 'string') {
                res = JSON.parse(res);
            }
            if (res.retCode != 1000) return false;
        },
        onSelect (file, fileList) {
            this.fileList.push(file);
            file.url = window.URL.createObjectURL(file.raw);
            // 更新队列中文件数量
            this.fileNum = this.$refs.upload_2.getQueue().fileNum;
        },
        deleteFile (file) {
            // 清除当前选中文件
            this.fileList.splice(this.fileList.indexOf(file), 1);
            // 调用组件内clearfile方法
            this.$refs.upload_2.clearFile(file);
        },
        uploadFIle () {
            // 上传图片
            this.$refs.upload_2.submit();
        },
        resetQueue () {
            // 重置队列
            this.$refs.upload_2.reset();
            this.fileList.length = 0;
            // 更新队列中文件数量
            this.fileNum = this.$refs.upload_2.getQueue().fileNum;
            this.successNum = this.$refs.upload_2.getQueue().successNum;
            this.errorNum = this.$refs.upload_2.getQueue().errorNum;
            console.info(this.$refs.upload_2.getQueue());
        },
        onHandSuccess () {
            // 更新队列中文件数量
            this.fileNum = this.$refs.upload_2.getQueue().fileNum;
            this.successNum = this.$refs.upload_2.getQueue().successNum;
            this.errorNum = this.$refs.upload_2.getQueue().errorNum;
        },
        onHandError (err, res, file) {
            file.errMsg = res.retMsg;
            this.fileNum = this.$refs.upload_2.getQueue().fileNum;
            this.successNum = this.$refs.upload_2.getQueue().successNum;
            this.errorNum = this.$refs.upload_2.getQueue().errorNum;
        }
    }
}
</script>


<style scoped>
    .updBtn{
        font-size: 14px;
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