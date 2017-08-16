<template>
    <div>
        <header class="panel-heading">
            <h1>Pagination 分页</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">提供默认2种样式分页，可根据需求使用。</p>

            <h2>代码示例</h2>

            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <Pagination :total="70"></Pagination>
                    <header><h4>基础分页</h4></header>
                    <p>基本的分页，总条目数为必填参数（默认每页10条），页数过多时会自动折叠。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Pagination <org>:total</org>=<green>"50"</green>></Pagination>
                        </template>
                    </script> 
                </div>
            </div>
            <!-- demo-2 -->
            <div class="example-box">
                <div class="example-demo">
                    <Pagination :total="2000" :pageSize="40"></Pagination>
                    <header><h4>每页条目</h4></header>
                    <p>通过设置pageSize参数来修改每页显示条目数。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Pagination <org>:total</org>=<green>"1000"</green> <org>:pageSize</org>=<green>"40"</green>></Pagination>
                        </template>
                    </script> 
                </div>
            </div>
            <!-- demo-3 -->
            <div class="example-box">
                <div class="example-demo">
                    <Pagination :total="100" simple></Pagination>
                    <header><h4>简洁分页</h4></header>
                    <p>设置simple属性即可使用简洁版的分页。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Pagination <org>:total</org>=<green>"100"</green> <org>simple</org>></Pagination>
                        </template>
                    </script> 
                </div>
            </div>
            <!-- demo-4 -->
            <div class="example-box">
                <div class="example-demo">
                    <Pagination :total="1000" :pageSize="50" showSkip showTotal></Pagination>
                    <header><h4>附加显示</h4></header>
                    <p>设置 showSkip 属性，可显示跳转视图。</p>
                    <p>设置 showTotal 属性，可显示总页数视图。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Pagination <org>:total</org>=<green>"1000"</green> <org>:pageSize</org>=<green>"50"</green> <org>showSkip</org> <org>showTotal</org>></Pagination>
                        </template>
                    </script> 
                </div>
            </div>
            <!-- demo-5 -->
            <div class="example-box">
                <div class="example-demo">
                    <Pagination :total="1000" :pageSize="50" @change="pageChange"></Pagination>
                    <div style="padding-top:20px; color:#2b85e4;">
                        <span>当前所在第 {{page}} 页</span>
                    </div>
                    <header><h4>附加显示</h4></header>
                    <p>设置 change 事件，在回调中获取当前页码。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Pagination <org>:total</org>=<green>"1000"</green> <org>:pageSize</org>=<green>"50"</green> <org>@change</org>=<green>"pageChange"</green>></Pagination>
                            <div>
                                <span>当前所在第 { {page} } 页</span>
                            </div>
                        </template>
                        <script>
                            <org>export default</org> {
                                data () {
                                    return {
                                        page: 1
                                    };
                                },
                                methods: {
                                    pageChange (count) {
                                        this.page = count;
                                    }
                                }
                            }
                        &lt;/script&gt;
                    </script> 
                </div>
            </div>
            
            <h2>API</h2>
            <h3>Pagination 属性</h3>
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
                        <td>设置当前页码</td> 
                        <td>Number</td> 
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>total</td> 
                        <td>设置数据总数</td> 
                        <td>Number</td> 
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>pageSize</td> 
                        <td>每页条数</td> 
                        <td>Number</td> 
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>simple</td> 
                        <td>是否设置为简洁版</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showSkip</td> 
                        <td>是否显示跳转视图</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showTotal</td> 
                        <td>是否显示总数</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3>Pagination 事件</h3>
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
                        <td>页码改变的回调，返回改变后的页码</td> 
                        <td>页码</td> 
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
                page: 1
            };
        },
        methods: {
            pageChange (count) {
                this.page = count;
            }
        }
    }
</script>