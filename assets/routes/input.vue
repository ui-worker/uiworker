<template>
    <div>
        <header class="panel-heading">
            <h1>input 输入框</h1>
        </header>

        <div class="panel-body">
            <p class="desc-line">采用v-model的方式绑定，获取输入值</p>
            <p class="desc-line">输入框包含，基础输入框（input）、数值输入框（inputNumber）</p>
            <div class="desc-row">
                input为普通输入框，不校验输入内容，有三种类型 text textarea password<br>
                inputNumber为数值输入框，可以设置最大值最小值，如果输入不合法，返回值为空串<br>
            </div>
            <header class="block-header"><h2>代码示例</h2></header>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="6" className="form-label">普通输入框</Col>
                        <Col span="12" className="form-input"><Input placeholder="请输入内容" v-model="inputText"></Input></Col>
                        <Col span="6" className="form-tips">{{inputText}}</Col>
                    </Row>
                    <header><h4>数据绑定</h4></header>
                    <p>通过给 Input 添加 v-model="inputText" 属性实现数据绑定</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Row className="demo-row">
                                <Col span="6" className="form-label">普通输入框</Col>
                                <Col span="12" className="form-input">
                                    <Input <org>placeholder</org>=<green>"请输入内容"</green> <org>v-model</org>=<green>"inputText"</green>></Input>
                                </Col>
                                <Col span="6" className="form-tips"><green>{ {inputText} }</green></Col>
                            </Row>
                        </template>
                        <script>
                            <org>export default</org> {
                                data() {
                                    return {
                                        inputText: ''
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script>
                </div>
            </div>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="6" className="form-label">校验输入框</Col>
                        <Col span="12" className="form-input"><Input placeholder="请输入内容" regexp="/^[0-9]*$/g" v-model="inputTextreg"></Input></Col>
                        <Col span="6" className="form-tips">{{inputTextreg}}</Col>
                    </Row>
                    <header><h4>数据绑定</h4></header>
                    <p>通过给 Input 添加 v-model="inputTextreg" 属性实现数据绑定</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Row className="demo-row">
                                <Col span="6" className="form-label">校验输入框</Col>
                                <Col span="12" className="form-input">
                                    <Input <org>placeholder</org>=<green>"请输入内容"</green> <org>v-model</org>=<green>"inputTextreg"</green>></Input>
                                </Col>
                                <Col span="6" className="form-tips"><green>{ {inputTextreg} }</green></Col>
                            </Row>
                        </template>
                        <script>
                            <org>export default</org> {
                                data() {
                                    return {
                                        inputTextreg: ''
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script>
                </div>
            </div>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="6" className="form-label">数值输入框</Col>
                        <Col span="12" className="form-input"><InputNumber placeholder="请输入内容" v-model="inputNumber1"></InputNumber></Col>
                        <Col span="6" className="form-tips">{{inputNumber1}}</Col>
                    </Row>
                    <header><h4>数据绑定</h4></header>
                    <p>通过给 Input 添加 v-model="inputNumber1" 属性实现数据绑定,如果不是一个合法的数值，返回一个空串</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Row className="demo-row">
                                <Col span="6" className="form-label">数值输入框</Col>
                                <Col span="12" className="form-input">
                                    <InputNumber <org>placeholder</org>=<green>"请输入内容"</green> <org>v-model</org>=<green>"inputNumber1"</green>></InputNumber>
                                </Col>
                                <Col span="6" className="form-tips"><green>{ {inputNumber1} }</green></Col>
                            </Row>
                        </template>
                        <script>
                            <org>export default</org> {
                                data() {
                                    return {
                                        inputNumber1: 0
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script>
                </div>
            </div>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="6" className="form-label">数值输入框-限制</Col>
                        <Col span="12" className="form-input"><InputNumber placeholder="请输入内容" :max="100" :min="0" v-model="inputNumber2"></InputNumber></Col>
                        <Col span="6" className="form-tips">{{inputNumber2}}</Col>
                    </Row>
                    <header><h4>限制输入值大小</h4></header>
                    <p>通过给 Input 添加 min max 属性实现限制输入值,如果不是一个合法的数值，返回一个空串</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Row className="demo-row">
                                <Col span="6" className="form-label">数值输入框-限制</Col>
                                <Col span="12" className="form-input">
                                    <InputNumber 
                                        <org>placeholder</org>=<green>"请输入内容"</green> 
                                        <org>:max</org>=<green>"100"</green> 
                                        <org>:min</org>=<green>"0"</green> 
                                        v-model="inputNumber2">
                                    </InputNumber>
                                </Col>
                                <Col span="6" className="form-tips"><green>{ {inputNumber2} }</green></Col>
                            </Row>
                        </template>
                        <script>
                            <org>export default</org> {
                                data() {
                                    return {
                                        inputNumber2: 0
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script>
                </div>
            </div>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="6" className="form-label">日期输入框</Col>
                        <Col span="12" className="form-input"><InputDate placeholder="日期日期" v-model="inputDate"></InputDate></Col>
                        <Col span="6" className="form-tips">{{inputDate}}</Col>
                    </Row>
                    <header><h4>数据绑定</h4></header>
                    <p>通过给 Input 添加 v-model="inputDate" 属性实现数据绑定,输入值可以为数字 字符串 日期，返回值为字符串</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Row className="demo-row">
                                <Col span="6" className="form-label">日期输入框</Col>
                                <Col span="12" className="form-input">
                                    <InputDate <org>placeholder</org>=<green>"日期日期"</green> <org>v-model</org>=<green>"inputDate"</green>></InputDate>
                                </Col>
                                <Col span="6" className="form-tips"><green>{ {inputDate} }</green></Col>
                            </Row>
                        </template>
                        <script>
                            <org>export default</org> {
                                data() {
                                    return {
                                        inputDate: ''
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script>
                </div>
            </div>
            <div class="example-box">
                <div class="example-demo">
                    <Row className="demo-row">
                        <Col span="6" className="form-label">inputDate2 <Button @click="inputDate2 = ''">清空</Button></Col>
                        <Col span="12" className="form-input"><InputDate placeholder="日期时间" format="yyyy-MM-dd HH:mm:ss" v-model="inputDate2" :single="true"></InputDate></Col>
                        <Col span="6" className="form-tips">{{inputDate2}}</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col span="6" className="form-label">日期时间</Col>
                        <Col span="12" className="form-input"><InputDate placeholder="日期时间" format="yyyy-MM-dd HH:mm:ss" v-model="inputDate3" :single="false"></InputDate></Col>
                        <Col span="6" className="form-tips">{{inputDate3}}</Col>
                    </Row>
                    <header><h4>数据绑定</h4></header>
                    <p>通过给 Input 添加 v-model="inputDate2" 属性实现数据绑定,输入值可以为数字 字符串 日期，返回值为字符串 :single="true"可以显示时间 format为返回时间格式 :single="true" 为是否使用时分秒选择器</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Row className="demo-row">
                                <Col span="6" className="form-label">日期输入框</Col>
                                <Col span="12" className="form-input">
                                    <InputDate <org>placeholder</org>=<green>"日期日期"</green> <org>v-model</org>=<green>"inputDate2"</green>></InputDate>
                                </Col>
                                <Col span="6" className="form-tips"><green>{ {inputDate2} }</green></Col>
                            </Row>
                        </template>
                        <script>
                            <org>export default</org> {
                                data() {
                                    return {
                                        inputDate2: ''
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script>
                </div>
            </div>
            <header class="block-header"><h2>API</h2></header>
            <h3>Input 属性</h3>
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
                        <td>type</td> 
                        <td>输入框类型，可选值为 text、password 或 textarea</td> 
                        <td>[String]</td> 
                        <td>text</td>
                    </tr> 
                    <tr>
                        <td>value</td> 
                        <td>绑定的值，可使用 v-model 双向绑定</td> 
                        <td>[String, Number]</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>placeholder</td> 
                        <td>占位文本</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>maxlength</td> 
                        <td>最大输入长度</td> 
                        <td>Number</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>disabled</td> 
                        <td>设置输入框为禁用状态</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr> 
                    <tr>
                        <td>rows</td> 
                        <td>文本域默认行数，仅在 textarea 类型下有效</td> 
                        <td>Number</td> 
                        <td>3</td>
                    </tr> 
                    <tr>
                        <td>readonly</td> 
                        <td>设置输入框为只读</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>Input 事件</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>事件名</th> 
                        <th>说明</th> 
                        <th>返回值</th> 
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>enter</td> 
                        <td>按下回车键时触发</td> 
                        <td>-</td> 
                    </tr>
                    <tr>
                        <td>focus</td> 
                        <td>输入框聚焦时触发</td> 
                        <td>-</td> 
                    </tr>
                    <tr>
                        <td>blur</td> 
                        <td>输入框失去焦点时触发</td> 
                        <td>-</td> 
                    </tr>
<!--                     <tr>
                        <td>input</td> 
                        <td>数据改变时触发</td> 
                        <td>-</td> 
                    </tr> -->
                    <tr>
                        <td>change</td> 
                        <td>失去焦点时，如果数据改变，将会触发</td> 
                        <td>-</td> 
                    </tr>
                </tbody>
            </table>
            <h3>InputNumber 属性</h3>
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
                        <td>value</td> 
                        <td>绑定的值，可使用 v-model 双向绑定</td> 
                        <td>[String, Number]</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>placeholder</td> 
                        <td>占位文本</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>disabled</td> 
                        <td>设置输入框为禁用状态</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr> 
                    <tr>
                        <td>readonly</td> 
                        <td>设置输入框为只读</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>max</td> 
                        <td>数值最大值</td> 
                        <td>[Number, Boolean]</td> 
                        <td>false</td>
                    </tr> 
                    <tr>
                        <td>min</td> 
                        <td>数值最小值</td> 
                        <td>[Number, Boolean]</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>InputNumber 事件</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>事件名</th> 
                        <th>说明</th> 
                        <th>返回值</th> 
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>enter</td> 
                        <td>按下回车键时触发</td> 
                        <td>-</td> 
                    </tr>
                    <tr>
                        <td>focus</td> 
                        <td>输入框聚焦时触发</td> 
                        <td>-</td> 
                    </tr>
                    <tr>
                        <td>blur</td> 
                        <td>输入框失去焦点时触发</td> 
                        <td>-</td> 
                    </tr>
<!--                     <tr>
                        <td>input</td> 
                        <td>数据改变时触发</td> 
                        <td>-</td> 
                    </tr> -->
                    <tr>
                        <td>change</td> 
                        <td>失去焦点时，如果数据改变，将会触发</td> 
                        <td>-</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputText: '',
                inputTextreg: '',
                inputNumber1: 0,
                inputNumber2: 0,
                inputNumber3: 0,
                inputNumber4: 0,
                inputNumber4: 0,
                inputDate:'',
                inputDate2:'',
                inputDate3:'2017-09-21 00:00:00',
            }
        }
    }
</script>

<style type="text/css" scoped>
    /*input 样式*/
    .form-label{height: 34px;line-height: 34px;padding-right:10px;text-align: right;}
    .form-input{}
    .form-tips{height: 34px;line-height: 34px;color:rgba(239, 20, 20, 0.68);padding-left:10px;}
</style>