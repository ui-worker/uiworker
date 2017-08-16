<template>
    <div>
        <header class="panel-heading">
            <h1>Modal 模态弹窗</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">模态弹窗，可用于消息提示，表单信息修改等。</p>
            <p class="desc-line">Modal 提供两种用法，在template中使用和在script中进行调用。</p>

            <h2>代码示例</h2>

            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="success" @click="toggle_1 = true">显示模态弹窗</Button>
                    <Modal v-model="toggle_1" @ok="close">
                        <p>这是一段测试内容。</p>
                    </Modal>  
                    <header><h4>基本用法</h4></header>
                    <p>可以使用 v-model 实现双向绑定，来控制显示隐藏。</p>
                    <p>绑定 change 事件 处理点击确定按钮后的操作</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Button type="success" <org>@click</org>=<green>"toggle_1 = true"</green>>显示模态弹窗</Button>
                            <Modal <org>v-model</org>=<green>"toggle_1"</green> <org>@ok</org>=<green>"close"</green>>
                                <p>这是一段测试内容。</p>
                            </Modal>
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        toggle_1: false
                                    };
                                },
                                methods: {
                                    close () {
                                        console.info('ok');
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>

            <!-- demo-2 -->
            <div class="example-box">
                <div class="example-demo">
                    <div><Button type="ghost" @click="toggle_2 = true">修改标题按钮文字</Button></div>
                    <div style="padding-top:20px"><Button @click="toggle_3 = true">隐藏取消按钮</Button></div>
                    <div style="padding-top:20px"><Button @click="toggle_4 = true">设置宽度</Button></div>
                    <Modal v-model="toggle_2" title="当前页面显示：" okText="ok" cancelText="cancel">
                        <p>这是一段测试内容。</p>
                    </Modal>  
                    <Modal v-model="toggle_3" :showCancel="false">
                        <p>页面提示</p>
                    </Modal>  
                    <Modal v-model="toggle_4" width="300" :showCancel="false">
                        <p>页面提示信息</p>
                    </Modal>  
                    <header><h4>修改属性</h4></header>
                    <p>设置 title、okText、cancelText 可修改弹窗标题，确认按钮，取消按钮文本。</p>
                    <p>设置 showCancel 为false，可不显示取消按钮</p>
                    <p>设置 width 属性，可自定义宽度</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Button type="ghost" @click="toggle_2 = true">修改标题按钮文字</Button>
                            <Button @click="toggle_3 = true">隐藏取消按钮</Button>
                            <Button @click="toggle_4 = true">设置宽度</Button>
                            <Modal v-model="toggle_2" 
                                <org>title</org>=<green>"当前页面显示："</green> 
                                <org>okText</org>=<green>"ok"</green> 
                                <org>cancelText</org>=<green>"cancel"</green>>
                                <p>这是一段测试内容。</p>
                            </Modal>  
                            <Modal v-model="toggle_3" <org>:showCancel</org>=<green>"false"</green>>
                                <p>页面提示</p>
                            </Modal>  
                            <Modal v-model="toggle_4" <org>width</org>=<green>"300"</green> <org>:showCancel</org>=<green>"false"</green>>
                                <p>页面提示信息</p>
                            </Modal>
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        toggle_2: false,
                                        toggle_3: false,
                                        toggle_4: false
                                    };
                                }
                            };
                        &lt;/script&gt;
                    </script> 
                </div>
            </div> 
            
            <!-- demo-3 -->
            <div class="example-box">
                <div class="example-demo">
                    <div><Button @click="toggle_5 = true">开启点击遮罩层关闭</Button></div>
                    <div style="padding-top:20px"><Button @click="toggle_6 = true">不显示关闭按钮</Button></div>
                    <div style="padding-top:20px"><Button @click="toggle_8 = true">异步关闭弹窗</Button></div>
                    <Modal v-model="toggle_5" maskClose>
                        <p>页面提示</p>
                    </Modal> 
                    <Modal v-model="toggle_6" :showClose="false">
                        <p>页面提示</p>
                    </Modal> 
                    <Modal v-model="toggle_8" loading okText="提交" @ok="submit">
                        <p>用户名：51vv</p>
                        <p>密码：qweasd</p>
                    </Modal> 
                    <header><h4>设置关闭</h4></header>
                    <p>设置 showClose 可以隐藏关闭按钮。</p>
                    <p>设置 maskClose 可以开启遮罩层点击关闭动作。</p>
                    <p>设置 loading 可以用做表单提交验证功能等。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Button @click="toggle_5 = true">开启点击遮罩层关闭</Button>
                            <Button @click="toggle_6 = true">不显示关闭按钮</Button>
                            <Button @click="toggle_8 = true">异步关闭弹窗</Button>
                            <Modal v-model="toggle_5" <org>maskClose</org>>
                                <p>页面提示</p>
                            </Modal> 
                            <Modal v-model="toggle_6" <org>:showClose</org>=<green>"false"</green>>
                                <p>页面提示</p>
                            </Modal> 
                            <Modal v-model="toggle_8" <org>loading</org> <org>okText</org>=<green>"提交"</green> <org>@ok</org>=<green>"confirm"</green>>
                                <p>用户名：51vv</p>
                                <p>密码：qweasd</p>
                            </Modal> 
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        toggle_5: false,
                                        toggle_6: false,
                                        toggle_8: false
                                    };
                                },
                                methods: {
                                    submit () {
                                        if (confirm('确认信息无误') === true) {
                                            this.toggle_8 = false;
                                        }
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script> 
                </div>
            </div> 
            
            <!-- demo-4 -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="warning" @click="toggle_7 = true">修改表单</Button>
                    <Modal v-model="toggle_7">
                        <div slot="header" class="demo-modal-title">
                            <Icon type="android-settings" size="22"></Icon>道具配置 / 修改配置
                        </div>
                        <div class="content-form">
                            <label>配置ID</label>
                            <Input></Input>
                        </div>
                        <div class="content-form">
                            <label>配置名称</label>
                            <Input></Input>
                        </div>
                        <div slot="footer" class="demo-modal-footer">
                            <Button type="success" @click="ok">修改</Button>
                            <Button type="ghost">重置</Button>
                        </div>
                    </Modal>
                    <header><h4>自定义样式</h4></header>
                    <p>Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Button type="warning" @click="toggle_7 = true">修改表单</Button>
                            <Modal v-model="toggle_7">
                                <div <org>slot</org>=<green>"header"</green> class="demo-modal-title">
                                    <Icon type="android-settings" size="22"></Icon>
                                    道具配置 / 修改配置
                                </div>
                                <div class="content-form">
                                    <label>配置ID</label>
                                    <Input></Input>
                                </div>
                                <div class="content-form">
                                    <label>配置名称</label>
                                    <Input></Input>
                                </div>
                                <div <org>slot</org>=<green>"footer"</green> class="demo-modal-footer">
                                    <Button type="success" @click="ok">修改</Button>
                                    <Button type="ghost">重置</Button>
                                </div>
                            </Modal>
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        toggle_7: false
                                    };
                                },
                                methods: {
                                    ok () {
                                        alert('修改成功');
                                        this.toggle_7 = false;
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script> 
                </div>
            </div> 
            
            <!-- demo-5 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Button type="primary" @click="alert">系统弹窗 alert</Button>
                    </div>
                    <div style='padding-top:20px;'>
                        <Button type="warning" @click="confirm">系统弹窗 confirm</Button>
                    </div>
                    <header><h4>直接弹出对话框</h4></header>
                    <p>添加了全局方法$alert, $confirm。可使用js 直接调用alert和confirm弹窗</p>
                    <p>通过this.$alert(message, options)和this.$confirm(message, options)，调用两个方法，参数message为弹窗显示的内容，参数 options 类型为对象可不填，可设置Modal组件内提供的属性。</p>
                    <p>options 参数设置ok和cancel方法，来绑定点击确定按钮和关闭之后的操作，</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Button type="primary" <org>@click</org>=<green>"alert"</green>>系统弹窗 alert</Button>
                            <Button type="warning" <org>@click</org>=<green>"confirm"</green>>系统弹窗 confirm</Button>
                        </template>
                        <script>
                            <org>export default</org> {
                                methods: {
                                    alert () {
                                        this.$alert('消息提示', {
                                            title: '消息提示'
                                        });
                                    },
                                    confirm () {
                                        this.$confirm('此操作将永久删除该文件, 是否继续?', {
                                            maskClose: true,
                                            ok () {
                                                alert('删除成功');
                                            },
                                            cancel () {
                                                console.info('cancel');
                                            }
                                        });
                                    }
                                }
                            };
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>

            
            <h2>API</h2>
            <h3>Modal 全局方法</h3>
            <p class="desc-line">Modal组件为组件库添加了2种全局方法：$alert，$confirm，通过以下方法来使用：</p>
            <p class="desc-line">this.$alert(message, options)</p>
            <p class="desc-line">this.$confirm(message, options)</p>
            <h3>Modal 属性</h3>
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
                        <td>模态弹窗是否显示，可使用 v-model 双向绑定数据。</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>title</td> 
                        <td>自定义标题，如果使用 slot 自定义了页头，则 title 无效</td> 
                        <td>String</td> 
                        <td>消息</td>
                    </tr>
                    <tr>
                        <td>width</td> 
                        <td>自定义宽度</td> 
                        <td>Number | String</td> 
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>okText</td> 
                        <td>确定按钮文字</td> 
                        <td>String</td> 
                        <td>确定</td>
                    </tr>
                    <tr>
                        <td>cancelText</td> 
                        <td>取消按钮文字</td> 
                        <td>String</td> 
                        <td>取消</td>
                    </tr>
                    <tr>
                        <td>maskClose</td> 
                        <td>是否可以通过点击遮罩层关闭模态弹窗</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showClose</td> 
                        <td>是否显示右上角关闭按钮</td> 
                        <td>Boolean</td> 
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>showCancel</td> 
                        <td>是否显示取消按钮</td> 
                        <td>Boolean</td> 
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>loading</td> 
                        <td>是否异步关闭</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>beforeClose</td> 
                        <td>关闭弹窗前回调，回调中参数 type = 1 时表示点击确定按钮，type = 0 时表示点击关闭，在回调中返回 false 会阻止弹窗关闭。</td> 
                        <td>Function</td> 
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <h3>Modal 事件</h3>
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
                        <td>ok</td> 
                        <td>点击确定的回调</td> 
                        <td>-</td> 
                    </tr> 
                    <tr>
                        <td>cancel</td> 
                        <td>点击取消的回调</td> 
                        <td>-</td> 
                    </tr> 
                </tbody>
            </table>
            <h3>Modal slot</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>名称</th> 
                        <th>说明</th> 
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>header</td> 
                        <td>自定义页头</td> 
                    </tr> 
                    <tr>
                        <td>footer</td> 
                        <td>自定义页脚内容</td> 
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
                toggle_1: false,
                toggle_2: false,
                toggle_3: false,
                toggle_4: false,
                toggle_5: false,
                toggle_6: false,
                toggle_7: false,
                toggle_8: false
            };
        },
        methods: {
            ok () {
                alert('修改成功');
                this.toggle_7 = false;
            },
            close () {
                console.info('ok');
            },
            submit () {
                if (confirm('确认信息无误') === true) {
                    this.toggle_8 = false;
                }
            },
            alert () {
                this.$alert('消息提示', {
                    title: '消息提示'
                });
            },
            confirm () {
                this.$confirm('此操作将永久删除该文件, 是否继续?', {
                    maskClose: true,
                    ok () {
                        alert('删除成功');
                    },
                    cancel () {
                        console.info('cancel');
                    }
                });
            }
        }
    }
</script>



<style scoped>
    .demo-modal-title{
        color: #2b85e4;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
    }
    .demo-modal-title i{
        margin-right: 10px;
        line-height: 30px;
        position: relative;
        top: 2px;
    }
    .content-form{
        text-align: center;
        clear: both;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .content-form label{
        display: inline-block;
        width: 80px;
        text-align: right;
    }
    .content-form .ui-input-wrapper{
        display: inline-block;
        width: auto;
    }
    .demo-modal-footer{
        text-align: center;
    }
</style>