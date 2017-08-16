<template>
    <div>
        <header class="panel-heading">
            <h1>Checkbox 复选框</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">多选框组件，用于一组可选项多项选择。</p>

            <h2>API</h2>
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
                        <td>disabled</td> 
                        <td>设置按钮为禁用状态</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>value</td> 
                        <td>值</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>

            <h2>代码示例</h2>
            <!-- 测试 -->
            <div class="example-box">
                <div class="example-demo">
                    <input type="checkbox" v-model="checkboxTest" value="中"> 测试原生组件 {{checkboxTest}}
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <input type="checkbox" v-model="checkboxTest" value="中">
                        测试原生组件 {{checkboxTest}}
                    </script> 
                </div>
            </div>       
            
            <!-- 按钮 -->
            <div class="example-box">
                <div class="example-demo">
                    <div><Button @click="checkbox1=!checkbox1">改变值</Button></div>
                    <Checkbox v-model="checkbox1" >中文 {{checkbox1}}</Checkbox>
                    <header><h4>单独使用</h4></header>
                    <p>使用 v-model 可以双向绑定数据。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Button <org>@click</org>=<green>"checkbox1=!checkbox1"</green>>改变值</Button>
                            <Checkbox <org>v-model</org>=<green>"checkbox1"</green>>中文 <green>{ {checkbox1} }</green></Checkbox>
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        checkbox1: true,
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>            
            <!-- 禁用启用 -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="info" @click="checkbox2disabled=!checkbox2disabled">{{checkbox2disabled?'取消禁用':'禁用'}}</Button>
                    <Button @click="checkbox2=!checkbox2">改变值</Button>
                    <br>
                    <Checkbox v-model="checkbox2" :disabled="checkbox2disabled"><span>Twitter {{checkbox2}}</span></Checkbox>
                    <header><h4>不可用</h4></header>
                    <p>通过设置disabled属性来禁用多选框。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Button type="info" 
                                <org>@click</org>=<green>"checkbox2disabled=!checkbox2disabled"</green>>
                                {{checkbox2disabled?'取消禁用':'禁用'}}
                            </Button>
                            <Button <org>@click</org>=<green>"checkbox2=!checkbox2"</green>>改变值</Button>
                            <Checkbox <org>v-model</org>=<green>"checkbox2"</green> <org>:disabled</org>=<green>"checkbox2disabled"</green>><span>Twitter {{checkbox2}}</span></Checkbox>
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        checkbox2: true,
                                        checkbox2disabled: true,
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script>
                </div>
            </div>

            <!-- 组 -->
            <div class="example-box">
                <div class="example-demo">
                    <Checkbox-group v-model="disabledGroup">
                        <Checkbox label="拉人"></Checkbox>
                        <Checkbox label="涉政"></Checkbox>
                        <Checkbox label="涉黄"></Checkbox>
                        <Checkbox label="违规" disabled></Checkbox>
                    </Checkbox-group>
                    <p>{{disabledGroup}}</p>
                    <header><h4>组合使用</h4></header>
                    <p>使用Checkbox-group配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Checkbox-group <org>v-model</org>=<green>"disabledGroup"</green>>
                                <Checkbox <org>label</org>=<green>"拉人"</green>></Checkbox>
                                <Checkbox <org>label</org>=<green>"涉政"</green>></Checkbox>
                                <Checkbox <org>label</org>=<green>"涉黄"</green>></Checkbox>
                                <Checkbox <org>label</org>=<green>"违规"</green> disabled></Checkbox>
                            </Checkbox-group>
                            <p><green>{ {disabledGroup} }</green></p>
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        disabledGroup: []
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script>
                </div>
            </div>  
            
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                checkbox1: true,
                checkbox2: true,
                checkboxTest: true,
                checkbox2disabled: true,
                disabledGroup: []
            }
        }
    }
</script>