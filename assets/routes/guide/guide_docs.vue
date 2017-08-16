<template>
    <div class="panel-body">
        <article>
            <h1>安装</h1>
            <!-- 标准开发 -->
            <h2>标准开发</h2>
            <p>开发之前请先确认已安装npm、webpack，下载uiworker.js和uiworker.css。</p>
            <p>推荐使用npm + webpack + babel 的开发工具来搭建项目 或使用vue-cli脚手架</p>
            
            <!-- 引入uiworker -->
            <h2>引入uiworker</h2>
            <p>在webpack入口文件中进行如下配置：</p>
            <pre>
                <code class="code" v-doc>
                    %import% Vue %from% @'vue'@;   // 引入Vue.js
                    %import% VueRouter %from% @'vue-router'@;  // 引入vue-router.js
                    %import% App %from% @'./App.vue'@;  // 引入页面的视图文件

                    %require%(@'../dist/uiworker.css'@);   // 引入开发版 ui-worker.css
                    %import% uiworker %from% @'../dist/uiworker.js'@;  // 引入开发版 ui-worker.js
                    
                    Vue.use(VueRouter); // 使用vue-router插件
                    Vue.use(uiworker);  // 使用ui-worker组件库
                    
                    // 路由配置demo
                    %const% RouterConfig = {
                        routes: [
                            {
                                path: '/index',
                                component: require('demo.vue')
                            }
                            // ...
                        ]
                    };
                    %const% router = %new% VueRouter(RouterConfig);

                    %new% Vue({
                        el: '#app',
                        router: router,
                        render: h => h(App)
                    });
                </code>
            </pre>
            
            <!-- 组件使用 -->
            <h2>组件使用</h2>
            <p>使用:prop传递数据格式为 数字、布尔值或函数时，必须带<code class="line-code">:</code>，如下示例：</p>
            <code class="code" v-doc>
                <div style="color: #3e76f6;">
                <script type="text/html" v-code>
                    <Pagination <org>:total</org>=<green>"1000"</green> <org>:pageSize</org>=<green>"50"</green> <org>showSkip</org> <org>:showTotal</org>=<green>"false"</green>>
                </script>
                </div>
            </code>
        </article>
    </div>
</template>