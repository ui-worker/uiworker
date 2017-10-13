<template>
    <div>
        <header class="panel-heading">
            <h1>Loading 按钮</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">加载动画 组件提供适当的等待动画，用于提升用户体验</p>

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
                        <td>postion</td> 
                        <td>定位方式 static\absolute\fixed</td> 
                        <td>String</td> 
                        <td>static</td>
                    </tr>
                    <tr>
                        <td>width</td> 
                        <td>宽度-数值类型为百分比值，字符串类型为设定值</td> 
                        <td>String、Number</td> 
                        <td>auto</td>
                    </tr>
                    <tr>
                        <td>height</td> 
                        <td>高度-数值类型为百分比值，字符串类型为设定值</td> 
                        <td>String、Number</td> 
                        <td>auto</td>
                    </tr>
                </tbody>
            </table>

            <h2>代码示例</h2>
            
            <!-- default -->
            <div class="example-box">
                <div class="example-demo">
                	<div>
                		<Button @click="static=!static">切换 {{ static }}</Button>
                		<hr>
                	</div>
                	<dl v-show="!static">
                		<dt>特性</dt>
                    	<dd>可直接使用的Vue组件</dd>
                    	<dd>基于 npm + webpack + babel 的工作流，支持 ES2015</dd>
                    	<dt>支持环境</dt>
                    	<dd>支持 Vue.js 2.x</dd>
                    	<dd>浏览器兼容至IE9以上。</dd>
                    	<dd>支持ES6写法</dd>
                	</dl>
                	<div style="position:relative;min-height:150px;">
                		<Loading  v-if="static">拼命加载中.....</Loading>
                	</div>
                	<header><h4>默认定位方式,文档流</h4></header>
                	<p>定位方式 static,加载动画会加入到文档流当中，一般是与加载数据做互斥条件</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
							<dl v-show="!static">
								<dt>特性</dt>
						    	<dd>可直接使用的Vue组件</dd>
						    	<dd>基于 npm + webpack + babel 的工作流，支持 ES2015</dd>
						    	<dt>支持环境</dt>
						    	<dd>支持 Vue.js 2.x</dd>
						    	<dd>浏览器兼容至IE9以上。</dd>
						    	<dd>支持ES6写法</dd>
							</dl>
							<div style="position:relative;min-height:150px;">
								<Loading  v-if="static">拼命加载中.....</Loading>
							</div>
                    </script> 
                </div>
            </div>
            <!-- absolute -->
            <div class="example-box">
                <div class="example-demo">

	                <div>
	                	<Button @click="absolute=!absolute">切换 {{ absolute }}</Button>
	                	<hr>
	                </div>
                	<div style="position:relative;min-height:150px;">
            			<dl>
            				<dt>特性</dt>
            		    	<dd>可直接使用的Vue组件</dd>
            		    	<dd>基于 npm + webpack + babel 的工作流，支持 ES2015</dd>
            		    	<dt>支持环境</dt>
            		    	<dd>支持 Vue.js 2.x</dd>
            		    	<dd>浏览器兼容至IE9以上。</dd>
            		    	<dd>支持ES6写法</dd>
            			</dl>
                		<Loading position="absolute" v-show="absolute">拼命加载中..absolute...</Loading>
                	</div>
                	<header><h4>默认定位方式,文档流</h4></header>
                	<p>定位方式 absolute，和内容在同级别，需要父级relative限制，同时需要有一个最小高度支撑</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
        	    	<div style="position:relative;min-height:150px;">
        				<dl>
        					<dt>特性</dt>
        			    	<dd>可直接使用的Vue组件</dd>
        			    	<dd>基于 npm + webpack + babel 的工作流，支持 ES2015</dd>
        			    	<dt>支持环境</dt>
        			    	<dd>支持 Vue.js 2.x</dd>
        			    	<dd>浏览器兼容至IE9以上。</dd>
        			    	<dd>支持ES6写法</dd>
        				</dl>
        	    		<Loading position="absolute" v-show="absolute">拼命加载中..absolute...</Loading>
        	    	</div>

					<!--  <div style="position:relative;min-height:80px;">
        	    		<Loading position="absolute" v-show="absolute">拼命加载中..absolute...</Loading>
        	    	</div> -->
                    </script> 
                </div>
            </div>
            <!-- fixed -->
            <div class="example-box">
                <div class="example-demo">
	                <div>
	                	<Button @click="fixedClick">切换 {{ fixed }}</Button>
	                	<hr>
	                </div>
                	<div style="position: relative;min-height: 150px;">
                		<Loading position="fixed" v-show="fixed">拼命加载中..fixed...</Loading>
                	</div>
                	<header><h4>默认定位方式,文档流</h4></header>
                	<p>定位方式 fixed,会覆盖全屏。</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                        <div style="position: relative;min-height: 150px;">
                            <Loading position="fixed" v-show="fixed">拼命加载中..fixed...</Loading>
                        </div>
                        
                        methods: {
                            fixedClick(){
                                this.fixed = true;
                                setTimeout(() => {
                                    this.fixed = false;
                                }, 1000)
                            }
                        }
                    </script> 
                </div>
            </div>
            
            <!-- default width height -->
            <div class="example-box">
                <div class="example-demo">
                    <div>
                        <Button @click="staticHeight=!staticHeight">切换 {{ staticHeight }}</Button>
                        <hr>
                    </div>
                    <dl v-show="!staticHeight">
                        <dt>特性</dt>
                        <dd>可直接使用的Vue组件</dd>
                        <dd>基于 npm + webpack + babel 的工作流，支持 ES2015</dd>
                        <dt>支持环境</dt>
                        <dd>支持 Vue.js 2.x</dd>
                        <dd>浏览器兼容至IE9以上。</dd>
                        <dd>支持ES6写法</dd>
                    </dl>
                        <Loading height="500px" v-if="staticHeight">拼命加载中.....</Loading>
                    <header><h4>默认定位方式,文档流</h4></header>
                    <p>定位方式 static,加载动画会加入到文档流当中，一般是与加载数据做互斥条件</p>
                </div>
                <div class="example-code">
                    <script type='text/html' v-code>
                            <dl v-show="!staticHeight">
                                <dt>特性</dt>
                                <dd>可直接使用的Vue组件</dd>
                                <dd>基于 npm + webpack + babel 的工作流，支持 ES2015</dd>
                                <dt>支持环境</dt>
                                <dd>支持 Vue.js 2.x</dd>
                                <dd>浏览器兼容至IE9以上。</dd>
                                <dd>支持ES6写法</dd>
                            </dl>
                            <Loading height="500px" v-if="staticHeight">拼命加载中.....</Loading>
                    </script> 
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                default: true,
                static: true,
                absolute: true,
                fixed: false,
                staticHeight: true,
            }
        },
        methods: {
        	fixedClick(){
        		this.fixed = true;
        		setTimeout(() => {
        			this.fixed = false;
        		}, 1000)
        	}
        }

    }
</script>

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

