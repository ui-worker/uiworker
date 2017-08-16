<template>
    <div>
        <header class="panel-heading">
            <h1>Radio 单选框</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">单选组件 - 用于一组选项中进行单选。</p>
            <p class="desc-line">可&lt;Radio-group&gt;和&lt;Radio&gt;嵌套使用，也可以单独使用&lt;Radio&gt;组件，建议&lt;Radio-group&gt;和&lt;Radio&gt;嵌套使用</p>

            <h2>代码示例</h2>


            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Radio-group v-model="hourse">
                            <Radio label="的卢" :checked="true">的卢</Radio>
                            <Radio label="赤兔">赤兔</Radio>
                            <Radio label="爪黄飞电">爪黄飞电</Radio>
                        </Radio-group>
                        <div>坐骑：{{hourse}}</div>
                        <div style="padding-top:10px;">
                            <Button type="success" @click="changeVale">的卢</Button>
                            <Button type="info" @click="changeVale">赤兔</Button>
                            <Button type="error" @click="changeVale">爪黄飞电</Button>
                        </div>
                    </div>
                    <header><h4>双向绑定</h4></header>
                    <p>使用 v-model 可以双向绑定数据</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Radio-group <org>v-model</org>=<green>"hourse"</green>>
                            <Radio label="的卢" <org>:checked</org>=<green>"true"</green>>的卢</Radio>
                            <Radio label="赤兔">赤兔</Radio>
                            <Radio label="爪黄飞电">爪黄飞电</Radio>
                        </Radio-group>
                        <div>坐骑：{ { hourse } }</div>
                        <div style="padding-top:10px;">
                            <Button type="success" <org>@click</org>=<green>"changeVale"</green>>的卢</Button>
                            <Button type="info" <org>@click</org>=<green>"changeVale"</green>>赤兔</Button>
                            <Button type="error" <org>@click</org>=<green>"changeVale"</green>>爪黄飞电</Button>
                        </div>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        hourse: '的卢'
                                    };
                                },
                                methods: {
                                    changeVale (e) {
                                        var label = e.target.innerHTML;
                                        this.hourse = label;
                                        this.hourse_2 = label;
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script>
                </div>
            </div>
            <!-- demo-2 -->
            <div class="example-box">
                <div class="example-demo">
                    <Radio-group v-model="device">
                        <Radio label="1"><Icon type="social-apple" class="radio-icon"></Icon>Apple</Radio>
                        <Radio label="2"><Icon type="social-android" class="radio-icon"></Icon>Android</Radio>
                        <Radio label="3"><Icon type="social-windows" class="radio-icon"></Icon>Windows</Radio>
                    </Radio-group>
                    <header><h4>组合使用</h4></header>
                    <p>使用Radio-group实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。</p>
                </div>
                <div class="example-code">
                     <script type='text/html' v-code>
                        <Radio-group <org>v-model</org>=<green>"device"</green>>
                            <Radio label="1"><Icon type="social-apple" class="radio-icon"></Icon>Apple</Radio>
                            <Radio label="2"><Icon type="social-android" class="radio-icon"></Icon>Android</Radio>
                            <Radio label="3"><Icon type="social-windows" class="radio-icon"></Icon>Windows</Radio>
                        </Radio-group>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        device: '2'
                                    };
                                }
                            }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>
            <!-- demo-3 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Radio-group v-model="hourse_1">
                            <Radio label="的卢" :checked="true">的卢</Radio>
                            <Radio disabled label="赤兔">赤兔</Radio>
                            <Radio label="爪黄飞电">爪黄飞电</Radio>
                        </Radio-group>
                    </div>
                    <header><h4>禁用</h4></header>
                    <p>通过设置disabled属性来禁用单选框</p>
                </div>
                <div class="example-code">
                     <script type='text/html' v-code>
                        <Radio-group v-model="hourse_1">
                            <Radio label="的卢" :checked="true">的卢</Radio>
                            <Radio <org>disabled</org> label="赤兔">赤兔</Radio>
                            <Radio label="爪黄飞电">爪黄飞电</Radio>
                        </Radio-group>
                    </script>  
                </div>
            </div>
            <!-- demo-4 -->
            <div class="example-box">
                <div class="example-demo">
                    <Radio-group v-model="policy" @change="zonghengChange">
                        <Radio label="合纵">合纵</Radio>
                        <Radio label="连横">连横</Radio>
                    </Radio-group>
                    <div>[<span id="zongheng"></span>]</div>
                    <header><h4>change事件</h4></header>
                    <p>绑定change事件，可从回调参数中获取当前选中radio的label值</p>
                </div>
                <div class="example-code">
                     <script type='text/html' v-code>
                        <Radio-group <org>v-model</org>=<green>"policy"</green> <org>@change</org>=<green>"zonghengChange"</green>>
                            <Radio <org>label</org>=<green>"合纵"</green>>合纵</Radio>
                            <Radio <org>label</org>=<green>"连横"</green>>连横</Radio>
                        </Radio-group>
                        <div>[<span id="zongheng"></span>]</div>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        policy: ''
                                    };
                                },
                                methods: {
                                    zonghengChange (value) {
                                        document.getElementById('zongheng').innerHTML = value;
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>
            <!-- demo-5 -->
            <div class="example-box">
                <div class="example-demo">
                    <Radio label="道" v-model="thinker">道</Radio>
                    <Radio label="儒" v-model="thinker">儒</Radio>
                    <Radio label="法" v-model="thinker">法</Radio>
                    <Radio label="墨" v-model="thinker">墨</Radio>
                    <Radio label="名" v-model="thinker">名</Radio>
                    <Radio label="兵" v-model="thinker">兵</Radio>
                    <Radio label="阴阳" v-model="thinker">阴阳</Radio>
                    <header><h4>单独使用</h4></header>
                    <p>单独使用Radio组件，并使用 v-model 双向绑定数据</p>
                </div>
                <div class="example-code">
                     <script type='text/html' v-code>
                        <Radio <org>label</org>=<green>"道"</green> <org>v-model</org>=<green>"thinker"</green>>道</Radio>
                        <Radio <org>label</org>=<green>"儒"</green> <org>v-model</org>=<green>"thinker"</green>>儒</Radio>
                        <Radio <org>label</org>=<green>"法"</green> <org>v-model</org>=<green>"thinker"</green>>法</Radio>
                        <Radio <org>label</org>=<green>"墨"</green> <org>v-model</org>=<green>"thinker"</green>>墨</Radio>
                        <Radio <org>label</org>=<green>"名"</green> <org>v-model</org>=<green>"thinker"</green>>名</Radio>
                        <Radio <org>label</org>=<green>"兵"</green> <org>v-model</org>=<green>"thinker"</green>>兵</Radio>
                        <Radio <org>label</org>=<green>"阴阳"</green> <org>v-model</org>=<green>"thinker"</green>>阴阳</Radio>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        thinker: <green>'道'</green>
                                    };
                                }
                            }
                        &lt;/script&gt;
                    </script>
                </div>
            </div>


            <h2>API</h2>
            <h3>Radio 属性</h3>
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
                        <td>v-model</td> 
                        <td>可以使用 v-model 双向绑定数据</td> 
                        <td>String | Boolean | Number</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>label</td> 
                        <td>指定当前选项的 value 值，没个选项都不相同</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td> 
                        <td>是否禁用当前项</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>Radio 事件</h3>
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
                        <td>change</td> 
                        <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td> 
                        <td>true</td>
                    </tr>
                </tbody>
            </table>
            <h3>Radio-group 属性</h3>
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
                        <td>v-model</td> 
                        <td>可以使用 v-model 双向绑定数据</td> 
                        <td>String | Boolean | Number</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>Radio-group 事件</h3>
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
                        <td>change</td> 
                        <td>在选项状态发生改变时触发，返回当前选项的值（label）。通过修改外部的数据改变时不会触发</td> 
                        <td></td>
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
            hourse: '的卢',
            hourse_1: '的卢',
            device: '2',
            policy: '',
            thinker: '道',
        };
    },
    methods: {
        changeVale (e) {
            var label = e.target.innerHTML;
            this.hourse = label;
            this.hourse_2 = label;
        },
        zonghengChange (value) {
            document.getElementById('zongheng').innerHTML = value;
        }
    }
}
</script>


<style scoped>
    .radio-icon{
        font-size: 16px;
        margin: 0 4px;
        position: relative;
        top: 1px;
    }
</style>