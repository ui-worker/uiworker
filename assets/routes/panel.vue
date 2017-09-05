<template>
    <div>
        <header class="panel-heading">
            <h1>DatePanel 日期面板</h1>
        </header>

        <div class="panel-body">
            <p class="desc-line">采用v-model的方式绑定，获取输入值</p>
            <p></p>
            <div class="desc-row">
                DatePanel 可以返回选中的日期<br>
                <br>
            </div>
            <header class="block-header"  ><h2>代码示例</h2></header>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="6" className="">
                            <span @click="DatePaneltag = !DatePaneltag">切换状态</span>
                        </Col>
                        <Col span="18" className="">
                            {{DatePaneltag}}
                        </Col>
                    </Row>
                    <hr>    
                    <Row className="demo-row">
                        <Col span="6" className="">
                            <span>值</span>
                        </Col>
                        <Col span="18" className="">
                            {{value}}
                        </Col>
                    </Row>
                    <hr>    
                    <Row className="demo-row">
                        <Col span="24" className="">
                            <DatePanel :show="DatePaneltag" v-model="value"></DatePanel>
                        </Col>
                    </Row>
                    <header><h4>数据绑定</h4></header>
                    <p>通过给 DatePanel 添加 v-model="value" 属性实现数据绑定</p>
                </div>
                <div class="example-code">
                    <script type="text/html" v-code>
                        <Row className="demo-row">
                            <Col span="6" className="">
                                <span <org>@click</org>=<green>"DatePaneltag = !DatePaneltag"</green>>切换状态</span>
                            </Col>
                            <Col span="18" className="">
                                {{DatePaneltag}}
                            </Col>
                        </Row>
                        <hr>    
                        <Row className="demo-row">
                            <Col span="6" className="">
                                <span>值</span>
                            </Col>
                            <Col span="18" className="">
                                {{value}}
                            </Col>
                        </Row>
                        <hr>    
                        <Row className="demo-row">
                            <Col span="24" className="">
                                <DatePanel <org>:show</org>=<green>"DatePaneltag"</green> <org>v-model</org>=<green>"value"</green>></DatePanel>
                            </Col>
                        </Row>
                    </script>
                </div>
            </div>
            <header class="block-header"><h2>API</h2></header>
            <h3>DatePanel</h3>
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
                        <td>show</td> 
                        <td>设置面板显示</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>DatePanel 事件</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>事件名</th> 
                        <th>说明</th> 
                        <th>返回值</th> 
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
        data() {
            return {
                value: null,
                DatePaneltag: true
            }
        }
    }
</script>