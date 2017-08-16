<template>
    <div>
        <header class="panel-heading">
            <h1>Select 选择器</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">Select 选择器使用&lt;Select&gt;&lt;/Select&gt;组件和&lt;Option&gt;&lt;/Option&gt;组件组合，来模拟原生的下拉列表。</p>
            <p class="desc-line">选择器支持双向数据绑定、单选。</p>

            <h2>代码示例</h2>


            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <Select width="200px" height="30" placeholder="请选择城市">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                        <Option value="hangzhou">杭州市</Option>
                        <Option value="nanjing">南京市</Option>
                        <Option value="chongqing">重庆市</Option>
                    </Select>
                    <header><h4>基础用法</h4></header>
                    <p>通过设置width和height来指定Select的尺寸</p>
                    <p>也可以给Select添加 style 样式或 class，来设置宽高等其他样式。</p>
                    <p>通过设置 placeholder 属性，来指定默认显示文案。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Select <org>width</org>=<green>"200px"</green> <org>height</org>=<green>"30"</green> <org>placeholder</org>=<green>"请选择城市"</green>>
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                            <Option value="hangzhou">杭州市</Option>
                            <Option value="nanjing">南京市</Option>
                            <Option value="chongqing">重庆市</Option>
                        </Select>
                    </script> 
                </div>
            </div>


            <!-- demo-2 -->
            <div class="example-box">
                <div class="example-demo">
                    <Select width="200px" height="30" v-model="selectModel">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                        <Option value="hangzhou">杭州市</Option>
                        <Option value="nanjing">南京市</Option>
                        <Option value="chongqing">重庆市</Option>
                    </Select> 
                    <span style="padding-top:20px;">{{selectModel}}</span>
                    <div style="padding-top:20px;">
                        <Button type="primary" @click="changeModel('beijing')">北京市</Button>
                        <Button type="info" @click="changeModel('shanghai')">上海市</Button>
                        <Button type="success" @click="changeModel('shenzhen')">深圳市</Button>
                        <Button type="error" @click="changeModel('hangzhou')">杭州市</Button>
                        <Button type="warning" @click="changeModel('nanjing')">南京市</Button>
                        <Button type="primary" style="background-color: #343434;" @click="changeModel('chongqing')">重庆市</Button>
                    </div>
                    <header><h4>双向绑定</h4></header>
                    <p>可通过v-model设置双向数据绑定来切换列表选中项</p>
                    <p></p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Select width="200px" height="30" <org>v-model</org>=<green>"selectModel"</green>>
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                            <Option value="hangzhou">杭州市</Option>
                            <Option value="nanjing">南京市</Option>
                            <Option value="chongqing">重庆市</Option>
                        </Select> 
                        <span style="padding-top:20px;">{{selectModel}}</span>
                        <div style="padding-top:20px;">
                            <Button type="primary" <org>@click</org>=<green>"changeModel('beijing')"</green>>北京市</Button>
                            <Button type="info" <org>@click</org>=<green>"changeModel('shanghai')"</green>>上海市</Button>
                            <Button type="success" <org>@click</org>=<green>"changeModel('shenzhen')"</green>>深圳市</Button>
                            <Button type="error" <org>@click</org>=<green>"changeModel('hangzhou')"</green>>杭州市</Button>
                            <Button type="warning" <org>@click</org>=<green>"changeModel('nanjing')"</green>>南京市</Button>
                            <Button type="primary" <org>@click</org>=<green>"changeModel('chongqing')"</green> style="background-color: #343434;">重庆市</Button>
                        </div>
                        <script>
                        <org>export default</org> {
                            data () {
                                return {
                                    selectModel: ''
                                };
                            },
                            methods: {
                                changeModel (value) {
                                    this.selectModel = value;
                                }
                            }
                        }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>
            
            <!-- demo-3 -->
            <div class="example-box">
                <div class="example-demo">
                    <Select disabled width="200px" height="30">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                        <Option value="hangzhou">杭州市</Option>
                        <Option value="nanjing">南京市</Option>
                        <Option value="chongqing">重庆市</Option>
                    </Select>
                    <Select width="200px" height="30">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option disabled value="shenzhen">深圳市</Option>
                        <Option value="hangzhou">杭州市</Option>
                        <Option value="nanjing">南京市</Option>
                        <Option value="chongqing">重庆市</Option>
                    </Select>
                    <header><h4>禁用</h4></header>
                    <p>通过给Select设置属性disabled禁用整个选择器。</p>
                    <p>通过给Option设置属性disabled可以禁用当前项</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Select <org>disabled</org> width="200px" height="30">
                            <Option value="beijing"</org>>北京市</Option>
                            <Option value="shanghai"</org>>上海市</Option>
                            <Option value="shenzhen"</org>>深圳市</Option>
                            <Option value="hangzhou"</org>>杭州市</Option>
                            <Option value="nanjing"</org>>南京市</Option>
                            <Option value="chongqing"</org>>重庆市</Option>
                        </Select>
                        <Select width="200px" height="30">
                            <Option <org>value</org>=<green>"beijing"</green>>北京市</Option>
                            <Option <org>value</org>=<green>"shanghai"</green>>上海市</Option>
                            <Option <org>disabled</org> <org>value</org>=<green>"shenzhen"</green>>深圳市</Option>
                            <Option <org>value</org>=<green>"hangzhou"</green>>杭州市</Option>
                            <Option <org>value</org>=<green>"nanjing"</green>>南京市</Option>
                            <Option <org>value</org>=<green>"chongqing"</green>>重庆市</Option>
                        </Select>
                    </script> 
                </div>
            </div>

            <!-- demo-4 -->
            <div class="example-box">
                <div class="example-demo">
                    <Select width="200px" height="40" placeholder="请输入任意字符" @change="onchange">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                        <Option value="hangzhou">杭州市</Option>
                        <Option value="nanjing">南京市</Option>
                        <Option value="chongqing">重庆市</Option>
                    </Select>
                    <div style="padding-top:20px;">
                        <p>label：{{ui_select.label}}</p>
                        <p>value：{{ui_select.value}}</p>
                        <p>index：{{ui_select.index}}</p>
                    </div>
                    <header><h4>事件回调</h4></header>
                    <p>绑定change事件，发生变化时，回调函数参数返回一个对象包含3个属性，分别为label、value、index</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Select width="200px" height="40" <org>placeholder</org>=<green>"请输入任意字符"</green> <org>@change</org>=<green>"onchange"</green>>
                            <Option <org>value</org>=<green>"beijing"</green>>北京市</Option>
                            <Option <org>value</org>=<green>"shanghai"</green>>上海市</Option>
                            <Option <org>value</org>=<green>"shenzhen"</green>>深圳市</Option>
                            <Option <org>value</org>=<green>"hangzhou"</green>>杭州市</Option>
                            <Option <org>value</org>=<green>"nanjing"</green>>南京市</Option>
                            <Option <org>value</org>=<green>"chongqing"</green>>重庆市</Option>
                        </Select>
                        <div style="padding-top:20px;">
                            <p>label：<green>{ {ui_select.label} }</green></p>
                            <p>value：<green>{ {ui_select.value} }</green></p>
                            <p>index：<green>{ {ui_select.index} }</green></p>
                        </div>
                        <script>
                        <org>export default</org> {
                            data () {
                                return {
                                    ui_select: {
                                        label: null,
                                        value: null,
                                        index: null
                                    }
                                };
                            },
                            methods: {
                                onchange (item) {
                                    this.ui_select.label = item.label;
                                    this.ui_select.value = item.value;
                                    this.ui_select.index = item.index;
                                }
                            }
                        }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>

            <div class="example-box">
                <div class="example-demo">
                     <Select width="200px" height="30">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen" current>深圳市</Option>
                        <Option value="hangzhou">杭州市</Option>
                        <Option value="nanjing">南京市</Option>
                        <Option value="chongqing">重庆市</Option>
                    </Select> 
                    <header><h4>初始化时选中</h4></header>
                    <p>为一个Option设置current属性，可默认选中</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Select width="200px" height="30">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen" <org>current</org>>深圳市</Option>
                            <Option value="hangzhou">杭州市</Option>
                            <Option value="nanjing">南京市</Option>
                            <Option value="chongqing">重庆市</Option>
                        </Select> 
                    </script> 
                </div>
            </div>


            <h2>API</h2>
            <h3>Select 属性</h3>
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
                        <td>placeholder</td> 
                        <td>选择框默认文字</td> 
                        <td>String</td> 
                        <td>请选择</td>
                    </tr>
                    <tr>
                        <td>v-model</td> 
                        <td>指定选中项目的 value 值，可以双向绑定数据。</td> 
                        <td>String | Number</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td> 
                        <td>是否禁用</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>width</td> 
                        <td>设置宽度属性，带不带单位均可以</td> 
                        <td>Number | String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>height</td> 
                        <td>设置高度属性，带不带单位均可以</td> 
                        <td>Number | String</td> 
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <h3>Select 事件</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>属性</th> 
                        <th>说明</th> 
                        <th>返回值</th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>change</td> 
                        <td>选中的Option变化时触发，回调函数参数返回一个对象包含3个属性，分别为label、value、index</td> 
                        <td>当前选中项，例：{label: '杭州市', value: 'hangzhou', index: 2}</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Option 属性</h3>
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
                        <td>current</td> 
                        <td>初始化时是否选中该项</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>disabled</td> 
                        <td>是否禁用当前项</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ui_select: {
                label: null,
                value: null,
                index: null
            },
            selectModel: ''
        };
    },
    methods: {
        changeModel (value) {
            this.selectModel = value;
        },
        onchange (item) {
            this.ui_select.label = item.label;
            this.ui_select.value = item.value;
            this.ui_select.index = item.index;
        }
    }
}
</script>