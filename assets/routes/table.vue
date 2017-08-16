<template>
    <div>
        <header class="panel-heading">
            <h1>Table 表格</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">用于展示大量结构化数据。</p>

            <h2>代码示例</h2>

            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <Table>
                        <thead>
                            <tr>
                                <th>人物</th>
                                <th>历史时期</th>
                                <th>主要成就</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>韩非</td>
                                <td>战国先秦</td>
                                <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                            </tr>
                            <tr>
                                <td>苏秦</td>
                                <td>战国</td>
                                <td>合纵抗秦，六国之相</td>
                            </tr>
                            <tr>
                                <td>墨翟</td>
                                <td>春秋末期</td>
                                <td>墨家学派创始人</td>
                            </tr>
                        </tbody>
                    </Table>
                    <header><h4>基础表格 - auto</h4></header>
                    <p>使用 固定表格布局 table-layout:fixed，默认列等宽。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Table>
                            <thead>
                                <tr>
                                    <th>人物</th>
                                    <th>历史时期</th>
                                    <th>主要成就</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>韩非</td>
                                    <td>战国先秦</td>
                                    <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                                </tr>
                                <tr>
                                    <td>苏秦</td>
                                    <td>战国</td>
                                    <td>合纵抗秦，六国之相</td>
                                </tr>
                                <tr>
                                    <td>墨翟</td>
                                    <td>春秋末期</td>
                                    <td>墨家学派创始人</td>
                                </tr>
                            </tbody>
                        </Table>
                    </script> 
                </div>
            </div>
            <!-- demo-2 -->
            <div class="example-box">
                <div class="example-demo">
                    <Table :fixed="false">
                        <thead>
                            <tr>
                                <th>人物</th>
                                <th>历史时期</th>
                                <th>主要成就</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>韩非</td>
                                <td>战国先秦</td>
                                <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                            </tr>
                            <tr>
                                <td>苏秦</td>
                                <td>战国</td>
                                <td>合纵抗秦，六国之相</td>
                            </tr>
                            <tr>
                                <td>墨翟</td>
                                <td>春秋末期</td>
                                <td>墨家学派创始人</td>
                            </tr>
                        </tbody>
                    </Table>
                    <header><h4>基础表格 - fixed</h4></header>
                    <p>使用自动表格布局 table-layout:automatic，列宽度由单元格内容设定。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Table <org>:fixed</org>=<green>"false"</green>>
                            <thead>
                                <tr>
                                    <th>人物</th>
                                    <th>历史时期</th>
                                    <th>主要成就</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>韩非</td>
                                    <td>战国先秦</td>
                                    <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                                </tr>
                                <tr>
                                    <td>苏秦</td>
                                    <td>战国</td>
                                    <td>合纵抗秦，六国之相</td>
                                </tr>
                                <tr>
                                    <td>墨翟</td>
                                    <td>春秋末期</td>
                                    <td>墨家学派创始人</td>
                                </tr>
                            </tbody>
                        </Table>
                    </script> 
                </div>
            </div>
            <!-- demo-3 -->
            <div class="example-box">
                <div class="example-demo">
                    <Table :stripe="false" border align="center">
                        <thead>
                            <tr>
                                <th>人物</th>
                                <th>历史时期</th>
                                <th>主要成就</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>韩非</td>
                                <td>战国先秦</td>
                                <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                            </tr>
                            <tr>
                                <td>苏秦</td>
                                <td>战国</td>
                                <td>合纵抗秦，六国之相</td>
                            </tr>
                            <tr>
                                <td>墨翟</td>
                                <td>春秋末期</td>
                                <td>墨家学派创始人</td>
                            </tr>
                        </tbody>
                    </Table>
                    <header><h4>隔行换色、带边框、对齐方式</h4></header>
                    <p>设置stripe属性，可开启和关闭隔行换色。</p>
                    <p>设置border属性，添加表格的边框线。</p>
                    <p>修改align属性改变对齐方式。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Table <org>:stripe</org>=<green>"false"</green> <org>border</org> <org>align</org>=<green>"center"</green>>
                            <thead>
                                <tr>
                                    <th>人物</th>
                                    <th>历史时期</th>
                                    <th>主要成就</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>韩非</td>
                                    <td>战国先秦</td>
                                    <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                                </tr>
                                <tr>
                                    <td>苏秦</td>
                                    <td>战国</td>
                                    <td>合纵抗秦，六国之相</td>
                                </tr>
                                <tr>
                                    <td>墨翟</td>
                                    <td>春秋末期</td>
                                    <td>墨家学派创始人</td>
                                </tr>
                            </tbody>
                        </Table>
                    </script> 
                </div>
            </div>
            <!-- demo-4 -->
            <div class="example-box">
                <div class="example-demo">
                    <Table :colWidth="[60,,,]">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>人物</th>
                                <th>历史时期</th>
                                <th>主要成就</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>韩非</td>
                                <td>战国先秦</td>
                                <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>苏秦</td>
                                <td>战国</td>
                                <td>合纵抗秦，六国之相</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>墨翟</td>
                                <td>春秋末期</td>
                                <td>墨家学派创始人</td>
                            </tr>
                        </tbody>
                    </Table>
                    <header><h4>单独修改列宽</h4></header>
                    <p>设置colWidth属性可改变需求修改列的列宽，接收一个数组，长度为列的个数。</p>
                    <p>如改变第三列宽度为80px，则设置为:colWidth="[,,80]</p>
                    <p style="color: #f00;">注：只在固定表格布局下生效</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <Table <org>:colWidth</org>=<green>"[60,,,]"</green>>
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>人物</th>
                                    <th>历史时期</th>
                                    <th>主要成就</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>韩非</td>
                                    <td>战国先秦</td>
                                    <td>著有《孤愤》、《说难》、《五蠹》、《显学》等。</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>苏秦</td>
                                    <td>战国</td>
                                    <td>合纵抗秦，六国之相</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>墨翟</td>
                                    <td>春秋末期</td>
                                    <td>墨家学派创始人</td>
                                </tr>
                            </tbody>
                        </Table>
                    </script> 
                </div>
            </div>
            
            <h2>API</h2>
            <h3>Table 属性</h3>
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
                        <td>fixed</td> 
                        <td>是否采用固定表格布局table-layout:fixed，固定表格布局 算法快（列等宽，与单元格的内容无关），自动表格布局 算法慢（列的宽度由列单元格中没有折行的最宽的内容设定）</td> 
                        <td>Boolean</td> 
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>colWidth</td> 
                        <td>可改变需求修改列的列宽，参数接收一个数组，长度为列的个数，不设宽度的列可以置空，但位置要保留，如改变第三列宽度为80px，则设置为:colWidth="[,,80]，只在固定表格布局下生效。</td> 
                        <td>Array</td> 
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>border</td> 
                        <td>是否带有纵向边框</td> 
                        <td>Boolean</td> 
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>stripe</td> 
                        <td>是否为各行换色</td> 
                        <td>Boolean</td> 
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>align</td> 
                        <td>对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐</td> 
                        <td>String</td> 
                        <td>left</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>