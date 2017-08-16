<template>
    <div>
        <header class="panel-heading">
            <h1>Grid 栅格</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">这里采用24格栅格系统，一行中有24格等分，可快速进行网页布局</p>
            <p class="desc-line">我们定义了两个组件，行（Row）列（Col）</p>
            <div class="desc-row">
                Row为水平创建一行<br>
                Col应嵌套在Row中<br>
                Col的span参数为所在行中占的栅格格数，范围是1-24<br>
                每个Row中的Col总和应该为24
            </div>

            <h2>代码示例</h2>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col className="demo-col" span="24">24格 -100%</Col>
                    </Row>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Row className="demo-row">
                            <Col className="demo-col" <org>span</org>=<green>"24"</green>>24格 -100%</Col>
                        </Row>
                    </script>
                </div>
            </div>
            
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="12" className="demo-col left">12格 -50%</Col>
                        <Col span="12" className="demo-col right">12格 -50%</Col>
                    </Row>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Row className="demo-row">
                            <Col <org>span</org>=<green>"12"</green> className="demo-col left">12格 -50%</Col>
                            <Col <org>span</org>=<green>"12"</green> className="demo-col right">12格 -50%</Col>
                        </Row>
                    </script>
                </div>
            </div>
            
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="8" className="demo-col left">8格 -33.333333%</Col>
                        <Col span="8" className="demo-col middle">8格 -33.333333%</Col>
                        <Col span="8" className="demo-col right">8格 -33.333333%</Col>
                    </Row>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Row className="demo-row">
                            <Col <org>span</org>=<green>"8"</green> className="demo-col left">8格 -33.333333%</Col>
                            <Col <org>span</org>=<green>"8"</green> className="demo-col middle">8格 -33.333333%</Col>
                            <Col <org>span</org>=<green>"8"</green> className="demo-col right">8格 -33.333333%</Col>
                        </Row>
                    </script>
                </div>
            </div>

            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="16" className="demo-col left">16格 -66.666666%</Col>
                        <Col span="8" className="demo-col middle">8格 -33.333333%</Col>
                    </Row>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Row className="demo-row">
                            <Col <org>span</org>=<green>"16"</green> className="demo-col left">16格 -66.666666%</Col>
                            <Col <org>span</org>=<green>"8"</green> className="demo-col middle">8格 -33.333333%</Col>
                        </Row>
                    </script>
                </div>
            </div>

            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row" gutter="12">
                        <Col span="6">
                            <div class="demo-col left">6格 -25%</div>
                        </Col>
                        <Col span="6">
                            <div class="demo-col middle">6格 -25%</div>
                        </Col>
                        <Col span="6">
                            <div class="demo-col middle-1">6格 -25%</div>
                        </Col>
                        <Col span="6">
                            <div class="demo-col right">6格 -25%</div>
                        </Col>
                    </Row>
                    <header><h4>区块间隔</h4></header>
                    <p>通过给 Row 添加 gutter 属性，可以给下属的 Col 添加间距。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Row className="demo-row" <org>gutter</org>=<green>"12"</green>>
                            <Col <org>span</org>=<green>"6"</green>>
                                <div class="demo-col left">6格 -25%</div>
                            </Col>
                            <Col <org>span</org>=<green>"6"</green>>
                                <div class="demo-col middle">6格 -25%</div>
                            </Col>
                            <Col <org>span</org>=<green>"6"</green>>
                                <div class="demo-col middle-1">6格 -25%</div>
                            </Col>
                            <Col <org>span</org>=<green>"6"</green>>
                                <div class="demo-col right">6格 -25%</div>
                            </Col>
                        </Row>
                    </script> 
                </div>
            </div>

            <div class="example-box">
                <div class="example-demo">
                    <Row>
                        <Col span="6" offset="6">
                            <div class="demo-col left">col-6</div>
                        </Col>
                        <Col span="6" offset="6">
                            <div class="demo-col left">col-6</div>
                        </Col>
                    </Row>
                    <header><h4>左偏移</h4></header>
                    <p>通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Row>
                            <Col <org>span</org>=<green>"6"</green> <org>offset</org>=<green>"6"</green>>
                                <div class="demo-col left">col-6</div>
                            </Col>
                            <Col <org>span</org>=<green>"6"</green> <org>offset</org>=<green>"6"</green>>
                                <div class="demo-col left">col-6</div>
                            </Col>
                        </Row>
                    </script> 
                </div>
            </div>
            
            <header class="block-header"><h2>API</h2></header>
            <h3>Row</h3>
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
                        <td>gutter</td> 
                        <td>栅格间距，单位 px，左右平分</td> 
                        <td>Number</td> 
                        <td>0</td>
                    </tr> 
                    <tr>
                        <td>className</td> 
                        <td>自定义的class名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <h3>Col</h3>
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
                        <td>span</td> 
                        <td>栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none</td> 
                        <td>Number | String</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>offset</td> 
                        <td>栅格左侧的间隔格数，间隔内不可以有栅格</td> 
                        <td>Number | String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>className</td> 
                        <td>自定义的class名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .demo-col{
        padding: 10px 0;
        font-size: 14px;
        color: #fff;
        text-align: center;
        background: rgba(0, 153, 229, .7);
    }
    .demo-col-12{
        width: 50%;
    }
    .middle{
        background: rgba(0, 153, 229, .6);
    }
    .middle-1{
        background: rgba(0, 153, 229, .4);
    }
    .right{
        background: rgba(0, 153, 229, .5);
    }
</style>
