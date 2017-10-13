<template>
    <div>
        <header class="panel-heading">
            <h1>uiSwitch 开关</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">在两种状态间切换时用到的开关选择器。</p>
            <h2>示例代码</h2>
            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <ui-switch size="lg" v-model="state" @change="printState">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                    </ui-switch>
                    <p class="val-desc">状态值：{{state}}</p>
                    <p class="val-desc1">触发change事件次数：{{eventCounter1}}</p>
                    <header><h4>用法</h4></header>
                    <p>通过v-model对组件进行双向绑定</p>
                    <p>可通过size属性选择组件尺寸，可选值为：sm, normal或lg, 默认值为normal</p>
                    <p>可以给slot元素添加样式，并在slot中填写uiSwitch不同状态下显示的值</p>
                    <p>通过change事件绑定在组件值发生改变时触发需要执行的操作</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <ui-switch <org>size</org>=<green>"lg"</green> <org>v-model</org>=<green>"state"</green> <org>@change</org>=<green>"printState"</green>>
                            <span slot="open">ON</span>
                            <span slot="close">OFF</span>
                        </ui-switch>
                        &lt;script&gt;
                            <org>export default</org> {
                                data () {
                                    return {
                                        state: true,
                                        eventCounter1: 0
                                    }
                                },
                                methods: {
                                    printState (val) {
                                        this.eventCounter1++;
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
                    <div>
                        <ui-switch size="sm">
                            <span slot="open">开</span>
                            <span slot="close">关</span>
                        </ui-switch>
                        <ui-switch size="sm">
                            <span slot="open"></span>
                            <span slot="close"></span>
                        </ui-switch>
                        <ui-switch size="sm" :disabled="true">
                            <span slot="open"></span>
                            <span slot="close"></span>
                        </ui-switch>
                        <p class="val-desc2">small尺寸switch</p>
                    </div>
                    <div>
                        <ui-switch size="normal">
                            <span slot="open">开</span>
                            <span slot="close">关</span>
                        </ui-switch>
                        <ui-switch>
                            <span slot="open"></span>
                            <span slot="close"></span>
                        </ui-switch>
                        <ui-switch :disabled="true">
                            <span slot="open">开</span>
                            <span slot="close">关</span>
                        </ui-switch>
                        <p class="val-desc2">normal尺寸switch</p>
                    </div>
                    <div>
                        <ui-switch size="lg">
                            <span slot="open">ON</span>
                            <span slot="close">OFF</span>
                        </ui-switch>
                        <ui-switch size="lg">
                            <span slot="open"></span>
                            <span slot="close"></span>
                        </ui-switch>
                        <ui-switch size="lg" :disabled="true">
                            <span slot="open">ON</span>
                            <span slot="close">OFF</span>
                        </ui-switch>
                        <p class="val-desc2">large尺寸switch</p>
                    </div>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <div>
                            <ui-switch size="sm">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </ui-switch>
                            <ui-switch size="sm">
                                <span slot="open"></span>
                                <span slot="close"></span>
                            </ui-switch>
                            <ui-switch size="sm" :disabled="true">
                                <span slot="open"></span>
                                <span slot="close"></span>
                            </ui-switch>
                            <p class="val-desc2">small尺寸switch</p>
                        </div>
                        <div>
                            <ui-switch size="normal">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </ui-switch>
                            <ui-switch>
                                <span slot="open"></span>
                                <span slot="close"></span>
                            </ui-switch>
                            <ui-switch :disabled="true">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </ui-switch>
                            <p class="val-desc2">normal尺寸switch</p>
                        </div>
                        <div>
                            <ui-switch size="lg">
                                <span slot="open">ON</span>
                                <span slot="close">OFF</span>
                            </ui-switch>
                            <ui-switch size="lg">
                                <span slot="open"></span>
                                <span slot="close"></span>
                            </ui-switch>
                            <ui-switch size="lg" :disabled="true">
                                <span slot="open">ON</span>
                                <span slot="close">OFF</span>
                            </ui-switch>
                            <p class="val-desc2">large尺寸switch</p>
                        </div>
                    </script> 
                </div>
            </div>
            <!--api-->
            <h2>API</h2>
            <h3>属性（Properties）</h3>
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
                        <td>（双向）绑定值</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>设置控件的尺寸</td>
                        <td>字符串枚举值，取值范围：sm | nomal | lg</td> 
                        <td>nomal</td>
                    </tr>
                    <tr>
                        <td>disabled</td> 
                        <td>将控件设置为不可用状态</td> 
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>事件（Events）</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>事件</th>
                        <th>说明</th>
                        <th>传递参数</th>
                        <th>返回值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>change</td>
                        <td>组件值改变的时候触发的事件</td>
                        <td>组件改变后的值，如果回调函数不接收参数的话可通过v-model绑定字段获取</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
    .val-desc{ padding: 0; font-size: 14px; font-weight: bold; }
    .val-desc1{ padding: 0; }
    .val-desc2{ padding: 0; margin: 5px 0 10px; padding-bottom: 4px; border-bottom: 1px dashed #eee; }
</style>


<script>
export default {
    data () {
        return {
            state: true,
            eventCounter1: 0
        }
    },
    methods: {
        printState (val) {
            this.eventCounter1++;
        }
    }
}
</script>

