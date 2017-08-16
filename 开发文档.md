#ui-worker组件库

###svn地址
* svn://172.16.1.106/svndemo/ui-worker

###目录结构说明
    ├─assets    // 非js源码
    │    ├─route       // 存放demo页面vue视图
    │    ├─common.css  // demo页面样式
    │    ├─index.html  // demo页面
    │    ├─main.js     // demo主入口文件
    ├─build     // webpack构建执行文件
    │    ├─webpack.config.dev.js         // 构建开发demo页面
    │    ├─webpack.config.build.js       // 构建开发demo文件
    │    ├─webpack.config.dist.dev.js    // 构建开发版uiworker.js, uiworker.css
    │    ├─webpack.config.dist.prod.js   // 构建生产版uiworker.min.js, uiworker.min.css
    ├─dist     // 打包后的文件
    └─src      // js,vue源码


###组件开发说明
开始时使用命令 **npm run dev** 可在浏览器中可调试效果。
如果是第一次运行，需先执行**npm run build**打包出具体文件。

增加组件方法：
* 新增ui组件demo：
    * assets/main.js 增加路由配置
    * assets/routes/asider.vue 增加路由链接视图
    * assets/ 增加配置的xxx.vue文件，作为路由配置的引用文件，编写使用文档及组件使用demo
* 新增ui组件源码：
    * src/components 增加组件目录
    * src/index.js 增加组件对象


###npm scripts构建说明
* **npm run dev** 开启http://localhost:8081服务，生成的文件放在内存中，文件均为demo页面所需文件
* **npm run build** 在dist目录中生成具体文件，文件均为demo页面所需文件
* **npm run dist:dev** 在dist目录中生成开发版的uiworker.js, uiworker.css文件
* **npm run dist:prod** 在dist目录中生成生产版uiworker.min.js, uiworker.min.css文件
    

###d.51vv.com上线说明
* svn地址：svn://172.16.1.106/svndemo/uiworker-service
> 更新src/index.js中的版本号
> 更新package.json中的版本号
> 更新assets/routes/guide/guide_index.vue中的文件下载地址
> 执行**npm run build**和**npm run dist:prod**生成dist目录下生产环境所需文件
> dist/uiworker目录移动至uiworker-service/public下
> dist/index.html移动至uiworker-service/views下