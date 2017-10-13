import Vue from 'vue';
import VueRouter from 'vue-router';
import guide_asider from './routes/aside/asider_guide.vue';
import component_asider from './routes/aside/asider.vue';
import App from './App.vue';

// 使用构建前的源码进行打包
import uiworker from '../src/index';

require('./common.css');

// 使用构建后的代码打包（开发板）
// require('../dist/uiworker.css');
// import uiworker from '../dist/uiworker.js';

// 使用构建后的代码打包（生产板）
// require('../dist/uiworker.min.css');
// import uiworker from '../dist/uiworker.min.js';

// 使用vue-router插件
Vue.use(VueRouter);
// 使用uiworker组件库
Vue.use(uiworker);

// 文档转换命令
Vue.directive('code', {
    // 当前元素插入到DOM中
    inserted (el) {
        var div = document.createElement('div'),
            code = '',
            res = '',
            initIndent = 0;

        div.innerText = el.innerHTML;
        // 源码分行
        code = el.innerHTML.split('\n');
        // 定义首行缩进位数
        initIndent = 0;

        for (var i = 0; i < code.length; i++) {
        // for (var line of code) {
            var line = code[i];
            // 若本行存在换行符则继续下一次循环
            if (line.indexOf('\n') > -1) {
                continue;
            }
            // 若是首行代码 则获取缩进量 并跳出循环
            else if (line.indexOf('<') > -1) {
                initIndent = line.indexOf('<');
                div.innerText = el.innerHTML.substring(initIndent);
                break;
            }
        }
        
        res = el.innerHTML
                .replace(/^(\n|\s)+/g, '') // 去除首行空白
                .replace(/(\n|\s)+$/g, '') // 去除结尾空白
                .replace(new RegExp('\n {' + initIndent + '}', 'g'), '\n')
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/ {4}/g, '<span style="padding-left:2em;"><\/span>')
                .replace(/&lt;org&gt;/g, '<font color="#e96900">')
                .replace(/&lt;\/org&gt;/g, '<\/font>')
                .replace(/&lt;green&gt;/g, '<font color="#42b983">')
                .replace(/&lt;\/green&gt;/g, '<\/font>')
                .replace(/&lt;script&gt;/g, '&lt;script&gt;<font color="#525252";>')
                .replace(/&lt;\/script&gt;/g, '<\/font>&lt;\/script&gt;')
                .replace(/\n/g, "<br>");
        
        div.innerHTML = res;
        el.parentNode.replaceChild(div, el);
    }
});

Vue.directive('doc', {
    // 当前元素插入到DOM中
    inserted (el) {
        var initIndent = 0,
            code = el.innerHTML.split('\n');
        for (var i = 0; i < code.length; i++) {
            var line = code[i];
            if (/^\s+[a-zA-Z0-9_]+/g.test(code[i])) {
                initIndent = line.match(/^\s+/g)[0];
                break;
            }
        }
        el.innerHTML = el.innerHTML
            .replace(/^(\n)+/g, '') // 去除首行换行符
            .replace(/(\n|\s)+$/g, '') // 去除结尾换行符
            .replace(new RegExp(initIndent, 'g'), '')
            .replace(/%[^%]+%/g, '<font color="#e96900">$&<\/font>').replace(/%/g, '')  // 匹配 %文本% 替换为橙色
            .replace(/@[^@]+@/g, '<font color="#42b983">$&<\/font>').replace(/@/g, '')  // 匹配 @文本@ 替换为绿色
            .replace(/\/\/[^\n]+\n/g, '<span style="color:#b3b3b3;">$&<\/span>')  // 匹配注释
    }
});

const router = new VueRouter({
    mode: 'history',
    routes: [
        // 使用指南
        {
            path: '/guide',
            redirect: '/guide/index',
        },
        {
            path: '/guide/index',
            components: {
                default: require('./routes/guide/guide_index.vue'),
                nav: guide_asider
            }
        },
        {
            path: '/guide/docs',
            components: {
                default: require('./routes/guide/guide_docs.vue'),
                nav: guide_asider
            },
        },
        {
            path: '/guide/branch',
            components: {
                default: require('./routes/guide/guide_branch.vue'),
                nav: guide_asider
            },
        },
        {
            path: '/guide/updatelog',
            components: {
                default: require('./routes/guide/guide_log.vue'),
                nav: guide_asider
            },
        },
        // 组件
        {
            path: '/component',
            redirect: '/component/grid',
        },
        {
            path: '/component/grid',
            components: {
                default: require('./routes/grid.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/layout',
            components: {
                default: require('./routes/layout.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/color',
            components: {
                default: require('./routes/color.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/icon',
            components: {
                default: require('./routes/icon.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/button',
            components: {
                default: require('./routes/button.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/input',
            components: {
                default: require('./routes/input.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/panel',
            components: {
                default: require('./routes/panel.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/radio',
            components: {
                default: require('./routes/radio.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/select',
            components: {
                default: require('./routes/select.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/switch',
            components: {
                default: require('./routes/switch.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/upload',
            components: {
                default: require('./routes/upload.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/checkbox',
            components: {
                default: require('./routes/checkbox.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/table',
            components: {
                default: require('./routes/table.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/pagination',
            components: {
                default: require('./routes/pagination.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/modal',
            components: {
                default: require('./routes/modal.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/progress',
            components: {
                default: require('./routes/progress.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/message',
            components: {
                default: require('./routes/message.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/loading',
            components: {
                default: require('./routes/loading.vue'),
                nav: component_asider
            }
        },
        {
            path: '/component/tag',
            components: {
                default: require('./routes/tag.vue'),
                nav: component_asider
            }
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    mounted () {
        if (this.$route.path === '/') {
            router.push({path: '/guide'});
        }
    },
    render: h => h(App)
});