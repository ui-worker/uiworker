<template>
    <Menu mode="vertical" theme="black" width="100%">
        <SubMenu isopen=true>
            <template slot="title"><Icon type="ios-grid-view-outline"></Icon>basic 组件</template>

            <router-link to="/component/grid">
                <Menu-Item>Grid 栅格</Menu-Item>
            </router-link>
            <router-link to="/component/layout">
                <Menu-Item>Layout 布局</Menu-Item>
            </router-link>
            <router-link to="/component/color">
                <Menu-Item>Color 颜色</Menu-Item>
            </router-link>
            <router-link to="/component/icon">
                <Menu-Item>Icon 图标</Menu-Item>
            </router-link>
            <router-link to="/component/button">
                <Menu-Item>Button 按钮</Menu-Item>
            </router-link>
        </SubMenu>
        
        <SubMenu isopen=true>
            <template slot="title"><Icon type="ios-list"></Icon>form 组件</template>

            <router-link to="/component/input">
                <Menu-Item>Input 输入框</Menu-Item>
            </router-link>
            <router-link to="/component/radio">
                <Menu-Item>Radio 单选框</Menu-Item>
            </router-link>
            <router-link to="/component/checkbox">
                <Menu-Item>Checkbox 多选按钮</Menu-Item>
            </router-link>
            <router-link to="/component/select">
                <Menu-Item>Select 选择器</Menu-Item>
            </router-link>
            <router-link to="/component/panel">
                <Menu-Item>Panel 时间选择面板</Menu-Item>
            </router-link>
            <router-link to="/component/table">
                <Menu-Item>Table 表格</Menu-Item>
            </router-link>
            <router-link to="/component/upload">
                <Menu-Item>Upload 上传</Menu-Item>
            </router-link>
        </SubMenu>
        
        <SubMenu isopen=true>
            <template slot="title"><Icon type="chatbox"></Icon>View 组件</template>

            <router-link to="/component/modal">
                <Menu-Item>Modal 模态弹窗</Menu-Item>
            </router-link>
            <router-link to="/component/progress">
                <Menu-Item>Progress 进度条</Menu-Item>
            </router-link>
            <router-link to="/component/message">
                <Menu-Item>Message 全局提示</Menu-Item>
            </router-link>
            <router-link to="/component/loading">
                <Menu-Item>Loading 加载中</Menu-Item>
            </router-link>
        </SubMenu>

        <SubMenu isopen=true>
            <template slot="title"><Icon type="ios-navigate"></Icon>Navigation 组件</template>

            <router-link to="/component/pagination">
                <Menu-Item>Pagination 分页</Menu-Item>
            </router-link>
        </SubMenu>
    </Menu>
</template>
