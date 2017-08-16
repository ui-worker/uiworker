<template>
    <ul :class="[prefixCls + '-list']">
        <li v-for="file in files" :class="fileItem(file)">
            <span>
                <Icon :type="format(file)" size="16"></Icon> {{ file.name }}
            </span>
            <Icon 
                type="checkmark-circled" 
                size="14"
                :class="[prefixCls + '-list-finish']"
                v-show="file.status === 'finished'"></Icon>
            <Icon
                type="ios-close-empty"
                size="22"
                :class="[prefixCls + '-list-remove']"
                v-show="file.status === 'finished'"
                @click.native="handleRemove(file)"></Icon>
            <transition name="fade">
                <div class="upload-list-info" v-if="file.showProgress">
                    <div class="upload-list-progress-outer">
                        <div class="upload-list-text">{{handlePrcent(file)}}%</div>
                    </div>
                    <div class="upload-list-progress">
                        <div class="upload-list-progress-bg">
                            <div class="upload-list-progress-current" :style="currentbarStyle(file)"></div>
                        </div>
                    </div>
                </div>
            </transition>
        </li>
    </ul>
</template>

<script>
    const prefixCls = 'ui-upload';

    export default {
        name: 'UploadList',
        props: {
            files: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        computed: {
        },
        data () {
            return {
                prefixCls: prefixCls
            }
        },
        methods: {
            currentbarStyle (file) {
                return {
                    width: `${this.handlePrcent(file)}%`
                }
            },
            // 处理返回进度，确定服务器返回成功前都进度定到90%
            handlePrcent (file) {
                var percentage = file.percentage;
                if (file.status === 'uploading') {
                    if (file.percentage >= 90) {
                        percentage = 90; 
                    }
                }
                return parseInt(percentage);
            },
            fileItem (file) {
                return [
                    `${prefixCls}-list-item`,
                    {
                        [`${prefixCls}-list-item-finish`]: file.status === 'finished'
                    }
                ];
            },
            format (file) {
                const format = file.name.split('.').pop().toLocaleLowerCase() || '';
                let type = 'document';

                if (['gif','jpg','jpeg','png','bmp','webp'].indexOf(format) > -1) {
                    type = 'image';
                }
                if (['mp4','m3u8','rmvb','avi','swf','3gp','mkv','flv'].indexOf(format) > -1) {
                    type = 'ios-film';
                }
                if (['mp3','wav','wma','ogg','aac','flac'].indexOf(format) > -1) {
                    type = 'ios-musical-notes';
                }
                if (['doc','txt','docx','pages','epub','pdf'].indexOf(format) > -1) {
                    type = 'document-text';
                }
                if (['numbers','csv','xls','xlsx'].indexOf(format) > -1) {
                    type = 'stats-bars';
                }
                if (['keynote','ppt','pptx'].indexOf(format) > -1) {
                    type = 'ios-videocam';
                }

                return type;
            },
            handleRemove (file) {
                this.$emit('onRemove', file);
            }
        }
    }
</script>

<style>
.ui-upload-list {
    margin-top: 10px;
}
.ui-upload-list-item {
	padding: 4px;
    line-height: 24px;
	color: #495060;
	border-radius: 4px;
	transition: background-color .2s ease-in-out;
	overflow: hidden;
	position: relative;
}
.ui-upload-list-item>span {
    font-size: 14px;
	cursor: pointer;
	transition: color .2s ease-in-out;
}
.ui-upload-list-item>span i {
	display: inline-block;
    color: #97a8be;
    height: 100%;
    margin-right: 6px;
	color: #495060;
	text-align: center;
}
.ui-upload-list-item:hover {
	background: #f3f3f3;
}
.ui-upload-list-item:hover>span {
	color: #2d8cf0;
}
.ui-upload-list-item:hover>span i {
	color: #495060;
}
.ui-upload-list-item:hover .ui-upload-list-remove {
	opacity: 1;
}
.ui-upload-list-item:hover .ui-upload-list-finish {
	display: none;
}
.ui-upload-list-remove {
    opacity: 0; 
    font-weight: 800;
	cursor: pointer;
	float: right;
	margin-right: 4px;
	color: #999;
}
.ui-upload-list-finish {
    float: right;
    color: #19be6b;
}
.ui-upload-list-remove:hover {
	color: #444;
}
.upload-list-info {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
}
.upload-list-progress {
    padding-top: 10px;
    margin-right: 48px;
}
.upload-list-progress-bg {
    height: 4px;
    border-radius: 4px;
    background: #f3f3f3;
}
.upload-list-progress-current {
    width: 0;
    height: 100%;
    border-radius: 4px;
    background: #2db7f5;
}
.upload-list-progress-outer {
    width: 40px;
    float: right;   
}
.upload-list-text {
    color: #495060;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s linear;
}
 .fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-leave, .fade-enter-to {
    opacity: 1;
} 
</style>


