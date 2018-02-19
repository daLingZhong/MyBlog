<template>
	<div class="view">
		<div v-for="item in list">
			<h1 class="view_title">{{item.title}}</h1>
			<div style="text-align:center;margin:10px auto 30px auto">
				<div class="view_time">
					{{item.time}}
				</div>
				<div class="view_type">
					{{item.type}}
				</div>
			</div>
			<div class="view_content" v-html="item.content"></div>
			<el-button type="primary" icon="edit" style="margin-left:40px;" @click="toEditor(item._id)"></el-button>
			<el-button type="primary" style="margin:30px 20px 10px 10px" icon="delete" @click="del(item._id)"></el-button>
		</div>
	</div>
</template>

<script>
import $ from 'expose?$!jquery'
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.fetchData(),
			window.addEventListener('resize', this.width);
		},
		methods:{
			fetchData(){
				let id = this.$route.params.id
				this.$http.get('/view/'+id).then((param)=>{
						this.list = []
						this.list.push(param.data)
					},
					// req => console.log('错误'+req)
				);
            	this.screenWidth = document.body.clientWidth
                var width = this.screenWidth
                if (width<1000) {
                	$(".view_content img").addClass("imgsize")
                }else{
                    $('.view_content img').removeClass("imgsize")
                }
			},
			toEditor(id){
				this.$http.get('/editor/'+id).then((param)=>{
					console.log(param.data)
					if (param.data == false) {
						this.$message.error('你不是钟大灵sama  （╯＾╰）');
					}else{
						this.$router.push('/editor/'+id)
					}
				})
			},
			del(id){
				this.$http.get('/del/'+id).then((param)=>{
					console.log(param.data)
					if (param.data == false) {
						this.$message.error('mmp 还想删我？（╯‵□′）╯︵┴─┴');
					}else{
						this.$router.push('/all')
					}
				})
			}
		}
	}
</script>

<style type="text/css">
	.view{
		width: 100%;
		min-height: 800px;
		margin: 20px auto;
	}
	.view_title{
		text-align: center;
		margin-top: 50px;
	}
	.view_time{
		display: inline-block;
		color: gray;
		font-size: 13px;
	}
	.view_type{
		display: inline-block;
		font-size: 12px;
		color: blue;
		margin-left: 10px;
		cursor: pointer;
	}
	.view_content{
		margin:60px 40px 100px 40px;
	}
	.imgsize{
		width: 300px;
	}
</style>