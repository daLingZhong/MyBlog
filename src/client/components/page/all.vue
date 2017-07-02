<template>
	<div class="list_all">
		<div v-for="item in list">
			<!-- {{item[0].type}} -->
			<div v-for="data in item">
				<div class="listBox">
					<h1 class="list_title" @click="toView(data._id)">
					{{data.title}}
						<!-- <input type="hidden" v-bind:value="data._id"> -->
					</h1>
					<div class="list_time">{{data.time}}</div>
					<div class="list_type">{{data.type}}</div>
					<div class="list_content" v-html="data.content"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.list_all{
		/*margin-top: 60px;*/
		margin-top: -30px;
		padding-top: 90px;
		min-height: 800px;
		margin-bottom: -60px;
		background-color: #f3f8f1;
	}
	.listBox{
		width:900px;
		height:230px;
		background-color:#ffffff;
		margin:0 auto 60px auto;
		box-shadow:0 2px 10px #aaaaaa;
		/*overflow: hidden;*/
	}
	.list_title{
		padding-top: 15px;
		padding-left: 20px;
		cursor: pointer;
		width: auto;
		max-width: 800px;
	}
	.list_time{
		font-size: 13px;
		color: gray;
		padding-left: 20px;
		padding-top:5px;
		display: inline-block;
	}
	.list_type{
		font-size: 12px;
		display: inline-block;
		color: gray;
		padding-left: 10px;
	}
	.list_content{
		width:860px;
		word-break:break-all;
		display:-webkit-box;
		-webkit-line-clamp:3;
		-webkit-box-orient:vertical;
		overflow:hidden;
		margin-left: 20px;
		margin-top: 30px;
		height: 100px;
	}
</style>

<script>
	export default {
		data(){
			return{
				list:[],
				item:{}
			}
		},
		mounted(){
			this.dataList()
		},
		methods:{
			dataList(){
				this.$http.get('/all').then((param)=>{
					this.list = []
					this.list.push(param.data)
					console.log(this.list)
				})
			},
			toView(id){
				// id = this.value();
				this.$router.push('/view/'+id)
				console.log(id)
			}
		}
	}
</script>