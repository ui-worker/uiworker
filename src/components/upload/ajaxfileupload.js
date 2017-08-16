export default function (settings) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    function getData (xhr) {
        const data = xhr.responseText || xhr.response;

        try {
            return JSON.parse(data);
        } catch (error) {
            return data;
        }
    }

    function getError (xhr, url) {
        var error = new Error(`fail to post ${url} http status:${xhr.status}`);
        error.status =  xhr.status;
        error.url = url;
        error.method = 'post';
        return error;
    }

    // 向表单添加数据
    if (settings.data) {
        Object.keys(settings.data).map(function(key){
            formData.append(key, settings.data[key]);
        });
    }
    // 向表单添加文件
    formData.append(settings.filename, settings.file);
    // 监听上传进度事件
    if (xhr.upload) {
        xhr.upload.onprogress = function (e) {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            settings.onprogress(e);
        }
    }
    // 监听上传完成事件
    xhr.onload = function () {
        if (this.status == 200) {
            // 成功处理
            settings.onsuccess(getData(this));
        }
        else {
            // 失败处理
            settings.onerror(getError(xhr, settings.url), getData(this));
        }
    }
    // 监听上传失败事件
    xhr.onerror = function (e) {
        settings.onerror(e);
    }
    // 设置支持发送cookie
    if (settings.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }
    // 设置提交方式
    xhr.open('POST', settings.url, true);
    // 设置请求头
    const headers = settings.headers;
    if (headers) {
        for (var key in headers) {
            if (headers[key] != null) xhr.setRequestHeader(key, headers[key]);
        }    
    }
    // 发送上传请求
    xhr.send(formData);
}