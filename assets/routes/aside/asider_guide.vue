<template>
    <Menu mode="vertical" theme="black" width="100%">
        <!-- <SubMenu isopen=true>
            <template slot="title"><Icon type="ios-navigate"></Icon>Navigation 组件</template>

            <router-link to="/component/pagination">
                <Menu-Item>Pagination 分页</Menu-Item>
            </router-link>
        </SubMenu> -->
         <SubMenu isopen=true>
            <template slot="title"><Icon type="code"></Icon>开发文档</template>

        <router-link to="/guide/index">
            <Menu-Item>ui-worker</Menu-Item>
        </router-link>
            <router-link to="/guide/docs">
                <Menu-Item>安装</Menu-Item>
            </router-link>
            <router-link to="/guide/branch">
                <Menu-Item>结构图</Menu-Item>
            </router-link>
            <router-link to="/guide/updatelog">
                <Menu-Item>更新日志</Menu-Item>
            </router-link>
        </SubMenu> 
        <!-- <router-link to="/guide/docs">
            <Menu-Item>开发文档</Menu-Item>
        </router-link> -->
    </Menu>
</template>
