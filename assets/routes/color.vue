<template>
    <div>
        <header class="panel-heading">
            <h1>Color 色彩</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">以下调色板作为设计和开发规范，以保证视觉一致。</p>

            <h2>主色</h2>
            <p class="desc-line">下列3种颜色分别用于主色、hover悬浮后、active点击</p>
            <Row gutter="8">
                <Col span="8">
                    <div class="ui-card" style="background-color: #2d8cf0;">
                        <div class="ui-card-name">Primary</div>
                        <div class="ui-card-desc">#2d8cf0</div>
                    </div>
                </Col>
                <Col span="8">
                    <div class="ui-card" style="background-color: #5cadff;">
                        <div class="ui-card-name">:hover</div>
                        <div class="ui-card-desc">#5cadff</div>
                    </div>
                </Col>
                <Col span="8">
                    <div class="ui-card" style="background-color: #3091f2;">
                        <div class="ui-card-name">:active</div>
                        <div class="ui-card-desc">#3091f2</div>
                    </div>
                </Col>
            </Row>
            
            <h2>其余色调</h2>
            <Row gutter="8">
                <Col span="6">
                    <div class="ui-card" style="background-color: #2db7f5;">
                        <div class="ui-card-name">Info</div>
                        <div class="ui-card-desc">#2db7f5</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #19be6b;">
                        <div class="ui-card-name">Success</div>
                        <div class="ui-card-desc">#19be6b</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #ff9900;">
                        <div class="ui-card-name">Warning</div>
                        <div class="ui-card-desc">#ff9900</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #ed3f14;">
                        <div class="ui-card-name">Error</div>
                        <div class="ui-card-desc">#ed3f14</div>
                    </div>
                </Col>
            </Row>
            
            <h2>中性色</h2>
            <p class="desc-line">中性色用于文本、背景、边框、阴影等，通过运用不同的中性色，来表现层次结构。</p>
            <Row gutter="8">
                <Col span="6">
                    <div class="ui-card" style="background-color: #1c2438;">
                        <div class="ui-card-name">标题 Title</div>
                        <div class="ui-card-desc">#1c2438</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #495060;">
                        <div class="ui-card-name">正文 Content</div>
                        <div class="ui-card-desc">#495060</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #80848f;">
                        <div class="ui-card-name">辅助/图标 Sub Color</div>
                        <div class="ui-card-desc">#80848f</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #bbbec4;">
                        <div class="ui-card-name">失效 Disabled</div>
                        <div class="ui-card-desc">#bbbec4</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #dddee1; margin-top:20px;">
                        <div class="ui-card-name dark">边框 Border</div>
                        <div class="ui-card-desc dark">#dddee1</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #e9eaec; margin-top:20px;">
                        <div class="ui-card-name dark">分割线 Divider</div>
                        <div class="ui-card-desc dark">#e9eaec</div>
                    </div>
                </Col>
                <Col span="6">
                    <div class="ui-card" style="background-color: #f8f8f9; margin-top:20px;">
                        <div class="ui-card-name dark">背景 Background</div>
                        <div class="ui-card-desc dark">#f8f8f9</div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<style scoped>
    .ui-card{
        padding: 16px;
        border-radius: 4px;
        font-size: 14px;
        line-height: 1.5;
    }
    .ui-card-name{
        color: #fff;
        font-size: 16px;
    }
    .ui-card-desc{
        color: #fff;
        opacity: .7;
    }
    .ui-card-name.dark, .ui-card-desc.dark{
        color: #657180;
    }
</style>