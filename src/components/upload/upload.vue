<template>
    <div :class="[prefixCls]">
        <div :class="classnames" @click="handleClick" @drop.prevent="handleDrop" @dragover.prevent="dragOver = true" @dragleave.prevent="dragOver = false">
            <input 
            type="file" 
            :class="inputclass"
            ref="fileInput"
            :accept="accept"
            :multiple="multiple"
            @change="handleChange">
            <slot></slot>
        </div>
        <Upload-list v-if="showUploadList" :files="fileList" @onRemove="handleRemove"></Upload-list>
    </div>
</template>

<script>
    import ajaxFileUpload from './ajaxfileupload';
    const prefixCls = 'ui-upload';

    export default {
        name: 'Upload',
        props: {
            // 上传请求地址
            url: {
                type: String,
                required: true  // 检测必传
            },
            // 设置上传的请求头部
            headers: {
                type: Object,
                default () {
                    return {};
                }
            },
            // 是否支持多选文件
            multiple: {
                type: Boolean,
                default: false
            },
            // 上传携带参数
            data: {
                type: Object,
                default () {
                    return {};
                }
            },
            // 上传文件字段名
            name: {
                type: String,
                default: 'file'
            },
            // 支持发送 cookie 凭证信息
            withCredentials: {
                type: Boolean,
                default: false
            },
            // 是否显示上传文件列表
            showUploadList: {
                type: Boolean,
                default: false
            },
            // 上传类型 点击上传 或 拖拽上传
            type: {
                type: String,
                validator (value) {
                    if (value !== 'select' && value !== 'drag') {
                        return 'select';
                    }
                    return value;
                },
                default: 'select'
            },
            // 支持的文件类型（文件的后缀名）
            format: {
                type: Array,
                default () {
                    return [];
                }
            },
            // 接受上传的文件类型
            accept: String,
            // 文件大小限制，单位 kb
            maxSize: Number,
            // 文件数量
            maxNum: Number,
            // 是否在选取文件后立即进行上传
            autoUpload: {
                type: Boolean,
                default: true
            },
            beforeUpload: {
                type: Function,
                default: function () {}
            },
            onProgress: {
                type: Function,
                default: function () {}
            },
            onAccept: {
                type: Function,
                default: function () {}
            },
            onSuccess: {
                type: Function,
                default: function () {}
            },
            onError: {
                type: Function,
                default: function () {}
            },
            onCheckError: {
                type: Function,
                default: function () {}
            },
            onRemove: {
                type: Function,
                default: function () {}
            },
            onSelect: {
                type: Function,
                default: function () {}
            },
            disabled: Boolean
        },
        computed: {
            classnames () {
                return [
                    prefixCls,
                    {
                        [`${prefixCls}-select`]: this.type === 'select',
                        [`${prefixCls}-drag`]: this.type === 'drag',
                        [`${prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            inputclass () {
                return [`${prefixCls}-input`];
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                dragOver: false,
                fileList: [],  // 文件队列
                successQueue: [],   // 成功文件队列
                errorQueue: [],  // 失败文件队列
                tIndex: 1,
            };
        },
        methods: {
            handleClick () {
                if (!this.disabled) {
                    this.$refs.fileInput.click();
                }
            },
            // 选择文件后
            handleChange (e) {
                var files = e.target.files;

                if (!files) return;

                // 检测文件数量
                if (this.maxNum && this.fileList.length + files.length > this.maxNum) {
                    this.onCheckError('number');
                    return;
                }
                // 处理文件
                this.uploadFile(files);
                // 清空文件域的值
                e.target.value = null;
            },
            // 当放置被拖拽数据时
            handleDrop (e) {
                this.dragOver = false;
                // 处理文件
                this.uploadFile(e.dataTransfer.files);
            },
            // 获取文件队列接口
            getQueue () {
                return {
                    fileNum: this.fileList.length,
                    successNum: this.successQueue.length,
                    errorNum: this.errorQueue.length,
                };
            },
            // 从文件列表清除指定文件接口
            clearFile (file) {
                this.fileList.splice(this.fileList.indexOf(file), 1);
            },
            // 上传接口
            submit () {
                if (!this.fileList.length) return false;
                // 遍历队列中的文件进入上传流程
                this.fileList.forEach(function(file) {
                    // 直接进入上传流程
                    if (file.status === 'ready') this.upload(file);
                }, this);
            },
            // 重置队列接口
            reset () {
                this.fileList.length = 0;
                this.successQueue.length = 0;
                this.errorQueue.length = 0;
                this.tIndex = 1;
            },
            // 上传前处理文件
            uploadFile (files) {
                // 转为文件队列
                var filesQueue = Array.prototype.slice.call(files);

                if (filesQueue.length === 0) return;
                
                // 遍历队列中的文件进入上传流程
                filesQueue.forEach(function(raw_file) {
                    // 文件存入队列
                    var _file = this.handleStart(raw_file);
                    // 触发选中文件事件
                    this.onSelect(_file, this.fileList);
                    // 如果是自动上传，则直接进入上传流程
                    if (this.autoUpload) this.upload(_file);
                }, this);
            },
            // 检测 及 上传
            upload (file) {
                // 检测文件类型
                if (this.format.length) {
                    // 上传文件扩展名
                    var ext_name = file.name.split('.').pop().toLowerCase();
                    // 遍历类型数组检测是否满足条件
                    var checked = this.format.some(function(extname){
                        return extname.toLowerCase() === ext_name;
                    });
                    if (!checked) {
                        this.clearFile(file);
                        this.onCheckError('type', file);
                        return false;
                    }
                }
                // 检测文件大小
                if (this.maxSize) {
                    var limit_size = this.maxSize * 1024;  // 单位：KB
                    var file_size = file.size;  // 单位：KB
                    if (file_size > limit_size) {
                        this.clearFile(file);
                        this.onCheckError('size', file);
                        return false;
                    }
                }
                // 上传文件前钩子，返回false则停止上传
                if (this.beforeUpload && this.beforeUpload(file, this.data) == false) {
                    // this.clearFile(file);
                    return false;
                }

                file.showProgress = true;

                // 上传操作
                ajaxFileUpload({
                    headers: this.headers,   // 上传请求头
                    withCredentials: this.withCredentials,  // 是否支持发送 cookie
                    url: this.url,  //上传的地址
                    file: file.raw,  // 上传的文件
                    filename: this.name,  // 上传的文件字段名
                    data: this.data,  // 上传时附带的额外参数
                    onprogress: e => this.handleUploadProgress(e, file, this.fileList),  // 进度事件回调
                    onsuccess: res => this.handleUploadSuccess(res, file),  // 成功事件回调
                    onerror: (err, res) => this.handleUploadError(err, res, file)  // 失败事件回调
                });
            },
            // 文件存入队列
            handleStart (file) {
                const uid = Date.now() + this.tIndex++;
                var _file = {
                    status: 'ready',
                    raw: file,
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    uid: uid,
                    percentage: 0,
                    showProgress: false,
                    errMsg: ''
                };

                this.fileList.push(_file);
                return _file;
            },
            handleRemove (file) {
                this.fileList.splice(this.fileList.indexOf(file), 1);
                this.onRemove(file, this.fileList);
            },
            handleUploadProgress (e, file, filelist) {
                // 更新队列中文件状态
                file.status = 'uploading';
                file.percentage = e.percent || 0;
                this.onProgress(e, file, filelist);
            },
            handleUploadSuccess (res, file) {
                var _this = this;
                // 收到的onAccept事件若返回false则认为失败
                if (this.onAccept(res, file) == false) {
                    this.handleUploadError('server return error', res, file);
                    return;
                }
                if (this.autoUpload) {
                    // 修改文件状态
                    file.status = 'finished';
                    file.response = res;
                }
                setTimeout(function() {
                    if (!this.autoUpload) {
                        // 修改文件状态
                        file.status = 'finished';
                        file.response = res;
                    }
                    // 进度条移除
                    file.showProgress = false;
                    // 从文件队列中清除
                    _this.fileList.splice(_this.fileList.indexOf(file), 1);
                    // 移入成功文件队列
                    _this.successQueue.push(file);
                    // 触发订阅者
                    _this.onSuccess(res, file, _this.fileList);
                }, 800);

            },
            handleUploadError (err, res, file) {
                // 修改文件状态
                file.status = 'fail';
                file.showProgress = false;
                // 从文件队列中清除
                this.fileList.splice(this.fileList.indexOf(file), 1);
                // 移入失败文件队列
                this.errorQueue.push(file);
                // 触发订阅者
                this.onError(err, res, file);
            }
        }
    }
</script>

<style>
.ui-upload input[type=file] {
    display: none;
}
.ui-upload-select {
    display: inline-block;
}
.ui-upload-drag {
	background: #fff;
	border: 1px dashed #dddee1;
	border-radius: 4px;
	text-align: center;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: border-color .2s ease;
}
.ui-upload-drag:hover {
	border-color: #2d8cf0;
}
.ui-upload-dragOver {
	border: 2px dashed #2d8cf0;
}
.ui-upload-list {
    margin-top: 8px;
}
</style>