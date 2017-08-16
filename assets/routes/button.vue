<template>
    <div>
        <header class="panel-heading">
            <h1>Button 按钮</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">按钮组件提供6种类型，分别为 <span class="code">primary</span>、<span class="code">ghost</span>、<span class="code">info</span>、<span class="code">success</span>、<span class="code">warning</span>、<span class="code">error</span></p>
            <p class="desc-line">通过设置type为上述几种类型即可创建不同样式的按钮</p>
            <p class="desc-line">若想自定义按钮，可在标签上加class类名设置样式即可</p>

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
                        <td>type</td> 
                        <td>按钮类型，可选值为primary、ghost、info、success、warning、error或者不设置</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td> 
                        <td>设置按钮为禁用状态</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>className</td> 
                        <td>自定义的class名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                </tbody>
            </table>

            <h2>代码示例</h2>
            
            <!-- default -->
            <div class="example-box">
                <div class="example-demo">
                    <Button>Default</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button>Default</Button>
                    </script> 
                </div>
            </div>
            <!-- disabled -->
            <div class="example-box">
                <div class="example-demo">
                    <Button disabled>disabled</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>disabled</org>>disabled</Button>
                    </script> 
                </div>
            </div>
            <!-- primary -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="primary">primary</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"primary"</green>>primary</Button>
                    </script> 
                </div>
            </div>
            <!-- ghost -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="ghost">ghost</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"ghost"</green>>ghost</Button>
                    </script> 
                </div>
            </div>
            <!-- info -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="info">info</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"info"</green>>info</Button>
                    </script>
                </div>
            </div>
            <!-- success -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="success">success</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"success"</green>>success</Button>
                    </script>
                </div>
            </div>
            <!-- warning -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="warning">warning</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"warning"</green>>warning</Button>
                    </script>
                </div>
            </div>
            <!-- error -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="error">error</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"error"</green>>error</Button>
                    </script>
                </div>
            </div>
            <!-- primary border-radius -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="primary" class="borderRadius">primary圆按钮</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"primary"</green> class="borderRadius">primary圆按钮</Button>
                    </script>
                </div>
            </div>
            <!-- 自定义样式按钮 -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="success" class="large-btn">自定义样式按钮</Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"success"</green> class="large-btn">自定义样式按钮</Button>
                    </script>
                </div>
            </div>
            <!-- 搜索按钮 -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="primary">
                        <Icon type="ios-search" size="12"></Icon>
                        <span class="btn-txt">搜索</span>
                    </Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"primary"</green>>
                            <Icon type="ios-search" size="12"></Icon>
                            <span class="btn-txt">搜索</span>
                        </Button>
                    </script>
                </div>
            </div>
            <!-- 搜索按钮圆 -->
            <div class="example-box">
                <div class="example-demo">
                    <Button type="primary" class="btn-2">
                        <Icon type="ios-search" size="16"></Icon>
                    </Button>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Button <org>type</org>=<green>"primary"</green> class="btn-2">
                            <Icon type="ios-search" size="16"></Icon>
                        </Button>
                    </script>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    .borderRadius{
        border-radius: 32px;
    }
    .large-btn{
        padding: 10px 15px;
        border: 1px solid #bfcbd9;
    }
    .btn-txt{
        padding-left: 6px;
    }
    .btn-2{
        width: 32px;
        height: 32px;
        padding: 0;
        border-radius: 50%;
    }
</style>

