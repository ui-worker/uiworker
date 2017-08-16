<template>
    <div>
        <header class="panel-heading">
            <h1>Progress 进度条</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">用于显示当前进度。分为line和circle两种类型进度条。</p>

            <h2>代码示例</h2>

            <!-- demo-1 -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Progress :percent="40"></Progress>
                    </div>
                    <div style="padding-top:5px;">
                        <Progress :percent="100"></Progress>
                    </div>
                    <div style="padding-top:5px;">
                        <Progress :percent="60" status="wrong"></Progress>
                    </div>
                    <div style="padding-top:5px;">
                        <Progress :percent="80" :showInfo="false"></Progress>
                    </div>
                    <header><h4>线型进度条</h4></header>
                    <p>处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。</p>
                    <p>设置 showInfo 属性为false，不显示进度文字信息。</p>
                    <p>设置 status 为success或wrong，可改变成功或失败样式。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Progress <org>:percent</org>=<green>"40"</green>></Progress>
                            <Progress <org>:percent</org>=<green>"100"</green>></Progress>
                            <Progress <org>:percent</org>=<green>"60"</green> <org>status</org>=<green>"wrong"</green>></Progress>
                            <Progress <org>:percent</org>=<green>"80"</green> <org>:showInfo</org>=<green>"false"</green>></Progress>
                        </template>
                    </script> 
                </div>
            </div> 
            <!-- demo-2 -->
             <div class="example-box">
                <div class="example-demo">
                    <div style="padding-top:5px;">
                        <Progress :percent="20" color="#f60"></Progress>
                    </div>
                    <div style="padding-top:5px;">
                        <Progress :percent="90" :stroke="6"></Progress>
                    </div>
                    <header><h4>自定义样式</h4></header>
                    <p>通过自定义color和属性stroke可改变进度条颜色和高度。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Progress :percent="20" <org>color</org>=<green>"#f60"</green>></Progress>
                            <Progress :percent="90" <org>:stroke</org>=<green>"6"</green>></Progress>
                        </template>
                    </script> 
                </div>
            </div>  
            <!-- demo-3 -->
             <div class="example-box">
                <div class="example-demo">
                    <Progress type="circle" :width="160" :percent="100"></Progress>
                    <header><h4>圆形进度条</h4></header>
                    <p>通过定义type为circle，可改为圆形进度条。</p>
                    <p>width属性可自定义圆形宽度。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <template>
                            <Progress <org>type</org>=<green>"circle"</green> :width="160" :percent="100"></Progress>
                        </template>
                    </script> 
                </div>
            </div>  
            
            <h2>API</h2>
            <h3>Progress 属性</h3>
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
                        <td>进度条类型，可选line/circle</td> 
                        <td>String</td> 
                        <td>line</td>
                    </tr>
                    <tr>
                        <td>percent</td> 
                        <td>百分比</td> 
                        <td>Number</td> 
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>stroke</td> 
                        <td>进度条的宽度，单位 px</td> 
                        <td>Number</td> 
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>status</td> 
                        <td>状态，可选值为normal、wrong、success</td> 
                        <td>String</td> 
                        <td>normal</td>
                    </tr>
                    <tr>
                        <td>showInfo</td> 
                        <td>是否显示进度数值或状态图标</td> 
                        <td>Boolean</td> 
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>color</td> 
                        <td>进度条颜色</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>width</td> 
                        <td>圆形进度条大小</td> 
                        <td>Number</td> 
                        <td>126</td>
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
                percentage: 80
            };
        },
        methods: {
            add () {
                this.percentage < 100 && (this.percentage += 10);
            },
            reduce () {
                this.percentage > 0 && (this.percentage -= 10);
            }
        }
    }
</script>