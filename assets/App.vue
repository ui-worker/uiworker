<template>
    <div class="container">
        <header class="header">
            <Row class="header">
                <Col span="8">
                    <div class="box">
                        <a href="/"><div class="logo"></div></a>
                    </div>
                </Col>
                <Col span="16">
                    <Menu mode="horizontal" height="80px">
                        <router-link to="/guide">
                            <Menu-Item>使用指南</Menu-Item>
                        </router-link>
                        <router-link to="/component">
                            <Menu-Item>组件</Menu-Item>
                        </router-link>
                         <a href="https://github.com/ui-worker/uiworker">
                            <Menu-Item>Github</Menu-Item>
                        </a> 
                        <!-- <Menu-Item>实践</Menu-Item> -->
                    </Menu>
                </Col>
            </Row>
        </header>
        <div class="wrapper-container">
            <aside class="color-black">
                <router-view name="nav"></router-view>
            </aside>
            <section class="main-content">
                <section class="wrapper">
                    <section class="panel">
                        <router-view></router-view>
                    </section>
                </section>
            </section>
        </div>
    </div>
</template>