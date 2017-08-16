<template>
    <div>
        <header class="panel-heading">
            <h1>布局 （菜单）</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">Menu组件分为水平（horizontal）和垂直（vertical）两个类型，通过mode属性设置。</p>
            <p class="desc-line">提供3种主题，分别为light、primary、dark，通过theme属性设置。</p>

            <h3>顶部导航</h3>
            <!-- 水平布局 -->
            <!-- header - light -->
            <Row class="demo-header">
                <Col span="8">
                    <div class="box">
                        <div class="demo-header-logo"></div>
                    </div>
                </Col>
                <Col span="16">
                    <Menu mode="horizontal" height="80px" class="demo-header-menu">
                        <Menu-Item active="true"><Icon type="ios-navigate" class="demo-header-icon"></Icon>指南</Menu-Item>
                        <Menu-Item><Icon type="ios-keypad" class="demo-header-icon"></Icon>组件</Menu-Item>
                        <Menu-Item><Icon type="settings" class="demo-header-icon"></Icon>脚手架</Menu-Item>
                        <Menu-Item><Icon type="ios-mic" class="demo-header-icon"></Icon>教程</Menu-Item>
                        <Menu-Item><Icon type="ios-analytics" class="demo-header-icon"></Icon>实践</Menu-Item>
                    </Menu>
                </Col>
            </Row>
            
            <!-- header - primary -->
            <Row class="demo-header primary">
                <Col span="8">
                    <div class="box">
                        <div class="demo-header-logo-white"></div>
                    </div>
                </Col>
                <Col span="16">
                    <Menu mode="horizontal" theme="primary" height="80px" class="demo-header-menu">
                        <Menu-Item active="true"><Icon type="ios-navigate" class="demo-header-icon"></Icon>指南</Menu-Item>
                        <Menu-Item><Icon type="ios-keypad" class="demo-header-icon"></Icon>组件</Menu-Item>
                        <Menu-Item><Icon type="settings" class="demo-header-icon"></Icon>脚手架</Menu-Item>
                        <Menu-Item><Icon type="ios-mic" class="demo-header-icon"></Icon>教程</Menu-Item>
                        <Menu-Item><Icon type="ios-analytics" class="demo-header-icon"></Icon>实践</Menu-Item>
                    </Menu>
                </Col>
            </Row>
            
            <!-- header - dark -->
            <Row class="demo-header dark">
                <Col span="8">
                    <div class="box">
                        <div class="demo-header-logo-white"></div>
                    </div>
                </Col>
                <Col span="16">
                    <Menu mode="horizontal" theme="dark" height="80px" class="demo-header-menu">
                        <Menu-Item active="true"><Icon type="ios-navigate" class="demo-header-icon"></Icon>指南</Menu-Item>
                        <Menu-Item><Icon type="ios-keypad" class="demo-header-icon"></Icon>组件</Menu-Item>
                        <Menu-Item><Icon type="settings" class="demo-header-icon"></Icon>脚手架</Menu-Item>
                        <Menu-Item><Icon type="ios-mic" class="demo-header-icon"></Icon>教程</Menu-Item>
                        <Menu-Item><Icon type="ios-analytics" class="demo-header-icon"></Icon>实践</Menu-Item>
                    </Menu>
                </Col>
            </Row>

            <!-- header - black -->
            <Row class="demo-header black">
                <Col span="8">
                    <div class="box">
                        <div class="demo-header-logo-white"></div>
                    </div>
                </Col>
                <Col span="16">
                    <Menu mode="horizontal" theme="black" height="80px" class="demo-header-menu">
                        <Menu-Item active="true"><Icon type="ios-navigate" class="demo-header-icon"></Icon>指南</Menu-Item>
                        <Menu-Item><Icon type="ios-keypad" class="demo-header-icon"></Icon>组件</Menu-Item>
                        <Menu-Item><Icon type="settings" class="demo-header-icon"></Icon>脚手架</Menu-Item>
                        <Menu-Item><Icon type="ios-mic" class="demo-header-icon"></Icon>教程</Menu-Item>
                        <Menu-Item><Icon type="ios-analytics" class="demo-header-icon"></Icon>实践</Menu-Item>
                    </Menu>
                </Col>
            </Row>




            <h3>侧导航</h3>
            <!-- 垂直布局 -->
            <Row gutter="20">
                <Col span="6">
                    <!-- aside - light -->
                    <div class="light">
                        <Menu mode="vertical" theme="light" width="100%">
                            <Menu-Item active="true"><Icon type="ios-grid-view-outline" class="demo-header-icon"></Icon>Grid 栅格</Menu-Item>
                            <Menu-Item><Icon type="android-color-palette" class="demo-header-icon"></Icon>Color 色彩</Menu-Item>
                            <Menu-Item><Icon type="ios-browsers-outline" class="demo-header-icon"></Icon>Layout 布局</Menu-Item>
                            <Menu-Item><Icon type="social-youtube-outline" class="demo-header-icon"></Icon>Button 按钮</Menu-Item>
                            <Menu-Item><Icon type="ios-heart-outline" class="demo-header-icon"></Icon>Icon 图标</Menu-Item>
                        </Menu>
                    </div>
                </Col>
                <Col span="6">
                    <!-- aside - primary -->
                    <div class="primary">
                        <Menu mode="vertical" theme="primary" width="100%">
                            <Menu-Item active="true"><Icon type="ios-grid-view-outline" class="demo-header-icon"></Icon>Grid 栅格</Menu-Item>
                            <Menu-Item><Icon type="android-color-palette" class="demo-header-icon"></Icon>Color 色彩</Menu-Item>
                            <Menu-Item><Icon type="ios-browsers-outline" class="demo-header-icon"></Icon>Layout 布局</Menu-Item>
                            <Menu-Item><Icon type="social-youtube-outline" class="demo-header-icon"></Icon>Button 按钮</Menu-Item>
                            <Menu-Item><Icon type="ios-heart-outline" class="demo-header-icon"></Icon>Icon 图标</Menu-Item>
                        </Menu>
                    </div>
                </Col>
                <Col span="6">
                    <!-- aside - dark -->
                    <div class="dark">
                        <Menu mode="vertical" theme="dark" width="100%">
                            <Menu-Item active="true"><Icon type="ios-grid-view-outline" class="demo-header-icon"></Icon>Grid 栅格</Menu-Item>
                            <Menu-Item><Icon type="android-color-palette" class="demo-header-icon"></Icon>Color 色彩</Menu-Item>
                            <Menu-Item><Icon type="ios-browsers-outline" class="demo-header-icon"></Icon>Layout 布局</Menu-Item>
                            <Menu-Item><Icon type="social-youtube-outline" class="demo-header-icon"></Icon>Button 按钮</Menu-Item>
                            <Menu-Item><Icon type="ios-heart-outline" class="demo-header-icon"></Icon>Icon 图标</Menu-Item>
                        </Menu>
                    </div>
                </Col>
                <Col span="6">
                    <!-- aside - black -->
                    <div class="black">
                        <Menu mode="vertical" theme="black" width="100%">
                            <Menu-Item active="true"><Icon type="ios-grid-view-outline" class="demo-header-icon"></Icon>Grid 栅格</Menu-Item>
                            <Menu-Item><Icon type="android-color-palette" class="demo-header-icon"></Icon>Color 色彩</Menu-Item>
                            <Menu-Item><Icon type="ios-browsers-outline" class="demo-header-icon"></Icon>Layout 布局</Menu-Item>
                            <Menu-Item><Icon type="social-youtube-outline" class="demo-header-icon"></Icon>Button 按钮</Menu-Item>
                            <Menu-Item><Icon type="ios-heart-outline" class="demo-header-icon"></Icon>Icon 图标</Menu-Item>
                        </Menu>
                    </div>
                </Col>
            </Row>

            <h3>含子菜单侧导航</h3>
            <!-- 含子菜单 垂直布局 -->
            <Row :gutter="20">
                <Col :span="6">
                    <!-- aside - light -->
                    <div class="light">
                        <Menu mode="vertical" theme="light" width="100%">
                            <SubMenu isopen=true @click="testClickSub">
                                <template slot="title"><Icon type="ios-paper"></Icon>内容管理</template>
                                <Menu-Item active="true">文章管理</Menu-Item>
                                <Menu-Item>评论管理</Menu-Item>
                                <Menu-Item>举报管理</Menu-Item>
                            </SubMenu>
                            <SubMenu>
                                <template slot="title"><Icon type="ios-people"></Icon>用户管理</template>
                                <Menu-Item>新增用户</Menu-Item>
                                <Menu-Item>活跃用户</Menu-Item>
                            </SubMenu>
                            <SubMenu isopen=false>
                                <template slot="title"><Icon type="stats-bars"></Icon>统计分析</template>
                                <Menu-Item>新增和启动</Menu-Item>
                                <Menu-Item>活跃分析</Menu-Item>
                                <Menu-Item>时段分析</Menu-Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Col>
                <Col :span="6">
                    <!-- aside - primary -->
                    <div class="primary">
                        <Menu mode="vertical" theme="primary" width="100%">
                            <SubMenu isopen=true @click="testClickSub">
                                <template slot="title"><Icon type="ios-paper"></Icon>内容管理</template>
                                <Menu-Item active="true">文章管理</Menu-Item>
                                <Menu-Item>评论管理</Menu-Item>
                                <Menu-Item>举报管理</Menu-Item>
                            </SubMenu>
                            <SubMenu>
                                <template slot="title"><Icon type="ios-people"></Icon>用户管理</template>
                                <Menu-Item>新增用户</Menu-Item>
                                <Menu-Item>活跃用户</Menu-Item>
                            </SubMenu>
                            <SubMenu isopen=false>
                                <template slot="title"><Icon type="stats-bars"></Icon>统计分析</template>
                                <Menu-Item>新增和启动</Menu-Item>
                                <Menu-Item>活跃分析</Menu-Item>
                                <Menu-Item>时段分析</Menu-Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Col>
                <Col :span="6">
                    <!-- aside - dark -->
                    <div class="dark">
                        <Menu mode="vertical" theme="dark" width="100%">
                            <SubMenu isopen=true @click="testClickSub">
                                <template slot="title"><Icon type="ios-paper"></Icon>内容管理</template>
                                <Menu-Item active="true">文章管理</Menu-Item>
                                <Menu-Item>评论管理</Menu-Item>
                                <Menu-Item>举报管理</Menu-Item>
                            </SubMenu>
                            <SubMenu>
                                <template slot="title"><Icon type="ios-people"></Icon>用户管理</template>
                                <Menu-Item>新增用户</Menu-Item>
                                <Menu-Item>活跃用户</Menu-Item>
                            </SubMenu>
                            <SubMenu isopen=false>
                                <template slot="title"><Icon type="stats-bars"></Icon>统计分析</template>
                                <Menu-Item>新增和启动</Menu-Item>
                                <Menu-Item>活跃分析</Menu-Item>
                                <Menu-Item>时段分析</Menu-Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Col>
                <Col :span="6">
                    <!-- aside - black -->
                    <div class="black">
                        <Menu mode="vertical" theme="black" width="100%">
                            <SubMenu isopen=true @click="testClickSub">
                                <template slot="title"><Icon type="ios-paper"></Icon>内容管理</template>
                                <Menu-Item active="true">文章管理</Menu-Item>
                                <Menu-Item>评论管理</Menu-Item>
                                <Menu-Item>举报管理</Menu-Item>
                            </SubMenu>
                            <SubMenu>
                                <template slot="title"><Icon type="ios-people"></Icon>用户管理</template>
                                <Menu-Item>新增用户</Menu-Item>
                                <Menu-Item>活跃用户</Menu-Item>
                            </SubMenu>
                            <SubMenu isopen=false>
                                <template slot="title"><Icon type="stats-bars"></Icon>统计分析</template>
                                <Menu-Item>新增和启动</Menu-Item>
                                <Menu-Item>活跃分析</Menu-Item>
                                <Menu-Item>时段分析</Menu-Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Col>
            </Row>

            <h2>API</h2>
            <h3>&lt;Menu&gt;菜单</h3>
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
                        <td>mode</td> 
                        <td>菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）</td> 
                        <td>String</td> 
                        <td>vertical</td>
                    </tr>
                    <tr>
                        <td>theme</td> 
                        <td>主题，可选值为 light、dark、primary</td> 
                        <td>String</td> 
                        <td>light</td>
                    </tr>
                    <tr>
                        <td>width</td> 
                        <td>设置宽度属性，带不带单位均可以</td> 
                        <td>Number | String</td> 
                        <td>垂直菜单时，默认240px</td>
                    </tr>
                    <tr>
                        <td>height</td> 
                        <td>设置高度属性，带不带单位均可以</td> 
                        <td>Number | String</td> 
                        <td>水平菜单时，默认60px</td>
                    </tr>
                    <tr>
                        <td>className</td> 
                        <td>自定义的class名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <h3>&lt;Menu-Item&gt;菜单项</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>属性</th> 
                        <th>说明</th> 
                        <th>返回值</th> 
                        <th>默认值</th>
                    </tr>
                    <tr>
                        <td>active</td> 
                        <td>是否激活当前菜单项</td> 
                        <td>Boolean | String</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>className</td> 
                        <td>自定义的class名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                </thead> 
                <tbody>
                </tbody>
            </table>
            <h3>&lt;SubMenu&gt;子菜单</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>属性</th> 
                        <th>说明</th> 
                        <th>返回值</th> 
                    </tr>
                    <tr>
                        <td>isopen</td> 
                        <td>是否展开当前子菜单</td> 
                        <td>Boolean | String</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>className</td> 
                        <td>自定义的class名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                </thead> 
                <tbody>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        testClickSub (e) {
            console.info('点击submenu');
        }
    }
}
</script>


<style scoped>
    .demo-header{
        background: #fff;
        height: 80px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .light{
        background: #fff;
    }
    .primary{
        background: #2d8cf0;
    }
    .green{
        background: #19be6b;
    }
    .dark{
        background: #495060;
    }
    .black{
        background: #404040;
    }
    .demo-header-logo{
        margin-left: 40px;
        width: 50px;
        height: 50px;
        background: url(../logo.png) no-repeat center center;
        background-size: cover;
        float: left;
    }
    .demo-header-logo-white{
        margin-left: 40px;
        width: 50px;
        height: 50px;
        background: url(../logo-white.png) no-repeat center center;
        background-size: cover;
        float: left;
    }
    .demo-header-title{
    	font-family: Helvetica;
        color: #2d8cf0;
        font-weight: lighter;
        font-size: 20px;
        height: 50px;
        line-height: 60px;
        padding-left: 16px;
        float: left;
    }
    .demo-header-menu{
        font-size: 14px;
    }
    .demo-header-icon{
        margin-right: 8px;
    }
</style>

