<template>
  <div>
		<header class="panel-heading">
		  <h1>Tag 标签</h1>
		</header>
		<div class="panel-body">
			<h2>概述</h2>
			<p class="desc-line">对不同维度进行简单的标记和分类。</p>

			<h2>代码示例</h2>

			<!-- demo-1 -->
			<div class="example-box">
			  <div class="example-demo">
			  		<Tag>标签一</Tag>	
			  		<Tag>标签二</Tag>	
			      <Tag v-show="show" closable @on-close="handleClose">标签三</Tag>	
			      <header><h4>基本用法</h4></header>
			      <p>简单的展示，添加属性 closable 可以关闭标签。。</p>
			      <p>点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。</p>
			  </div>
			  <div class="example-code">
			      <script type='text/html' v-code>
		          <template>
                <Tag>标签一</Tag>	
                <Tag>标签二</Tag>			          
						    <Tag v-show="show" <org>closable</org> @on-close="handleClose">标签三</Tag>
							</template>
							<script>
						    <org>export default</org> {
					        data () {
				            <org>return</org> {
			                show: true
				            }
					        },
					        methods: {
				            handleClose () {
			                this.show = false;
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
			  		<Tag closable color="red">标签一</Tag>	
			  		<Tag closable color="green">标签二</Tag>	
			      <Tag closable color="yellow">标签三</Tag>	
			      <Tag closable color="blue">标签四</Tag>	
			      <Tag closable color="pink">标签五</Tag>	
			      <header><h4>各种颜色</h4></header>
			      <p>多种不同的颜色, 具体请参照下方Tag属性列表中的颜色选值。</p>
			  </div>
			  <div class="example-code">
			      <script type='text/html' v-code>
		          <template>
                <Tag color="red">标签一</Tag>	
                <Tag color="green">标签二</Tag>			          
                <Tag color="yellow">标签三</Tag>
                <Tag color="blue">标签四</Tag>
                <Tag closable color="pink">标签五</Tag>
							</template>
							<script>
						    <org>export default</org> {
					        
						    }
							&lt;/script&gt;
						</script>
			  </div>
			</div>

			<!-- demo-3 -->
			<div class="example-box">
			  <div class="example-demo">
			  		<Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
			      <Button type="dashed" @click="handleAdd"><Icon type="plus" size="12" color="#495060"></Icon><span>添加标签</span></Button>	
			      <header><h4>动态添加和删除</h4></header>
			      <p>用数组生成一组标签，可以动态添加和删除。</p>
			  </div>
			  <div class="example-code">
		      <script type='text/html' v-code>
	            <template>
					      <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{ { item + 1 } }</Tag>
					      <Button type="dashed" @click="handleAdd">添加标签</Button>
						  </template>
						  <script>
					    <org>export default</org> {
			          data () {
			            count: [0, 1, 2]
				        },
				        methods: {
			            handleAdd () {
		                if (this.count.length) {
	                    this.count.push(this.count[this.count.length - 1] + 1);
		                } else {
	                    this.count.push(0);
		                }
			            },
			            handleClose2 (event, name) {
		                const index = this.count.indexOf(name);
		                this.count.splice(index, 1);
			            }					        	
				        }
					    }
						&lt;/script&gt;
					</script>
			  </div>
			</div>


			<h2>API</h2>
			<h3>Tag 属性</h3>
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
            <td>closable</td> 
            <td>标签是否可以关闭</td> 
            <td>Boolean</td> 
            <td>false</td>
          </tr>
          <tr>
            <td>color</td> 
            <td>标签颜色，可选值为blue、green、red、yellow、pink、orange、cyan、purple</td> 
            <td>String</td> 
            <td>-</td>
          </tr>
					<tr>
            <td>name</td> 
            <td>当前标签的名称，使用 v-for，并支持关闭时，会比较有用</td> 
            <td>String | Number</td> 
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h3>Tag 事件</h3>
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
            <td>on-close</td> 
            <td>关闭时触发</td> 
            <td>event, name</td> 
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
	      show: true,
	      count: [0, 1, 2]
	    }
	  },
	  methods: {
	    handleClose () {
	      this.show = false;
	    },
			handleAdd () {
        if (this.count.length) {
          this.count.push(this.count[this.count.length - 1] + 1);
        } else {
          this.count.push(0);
        }
      },
      handleClose2 (event, name) {
        const index = this.count.indexOf(name);
        this.count.splice(index, 1);
      }
	  }
	}  
</script>

<style>
	.ui-btn-dashed {
		border-style: dashed !important;
		line-height: 1 !important;
		padding: 4px !important;
	}
	.ui-btn-dashed:hover {
		color: #2d8cf0;
	}					    
</style>