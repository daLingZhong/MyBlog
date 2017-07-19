<template>
	<div>
		<div class="list_all" v-if="listbox">
			<div v-for="item in list">
				<div v-for="data in item">
					<div class="listBox">
						<h1 class="list_title" @click="toView(data._id)">
						{{data.title}}
						</h1>
						<div class="list_time">{{data.time}}</div>
						<div class="list_type">{{data.type}}</div>
						<div class="list_content" v-html="data.content"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="mlist_all" v-if="mlistbox">
			<div v-for="item in list">
				<div v-for="data in item">
					<div class="mlistBox">
						<div class="list_line"></div>
						<h1 class="mlist_title" @click="toView(data._id)">
						{{data.title}}
						</h1>
						<div class="mlist_time">{{data.time}}</div>
						<div class="mlist_type">{{data.type}}</div>
						<div class="mlist_content" v-html="data.content"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>

	.mlist_all{
		margin-top: 60px;
		min-height: 800px;
		margin-bottom: 30px;
	}
	.mlistBox{
		margin-left: 10px;
		margin-top: 30px;
		margin-right: 10px;
	}
	.list_line{
		width: 100%;
		height: 0;
		border-top: 1px solid #cccccc;
		margin: 0 auto 10px auto;
	}
	.mlist_time{
		font-size: 13px;
		color: gray;
		display: inline-block;
	}
	.mlist_type{
		font-size: 13px;
		color: gray;
		display: inline-block;
		margin-left: 10px;
	}
	.mlist_content{
		margin-top: 15px;
		word-break:break-all;
		display:-webkit-box;
		-webkit-line-clamp:3;
		-webkit-box-orient:vertical;
		overflow:hidden;
		height: 100px;
	}

	.list_all{
		/*margin-top: 60px;*/
		margin-top: -30px;
		padding-top: 90px;
		min-height: 800px;
		/*margin-bottom: -60px;*/
		padding-bottom: 60px;
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
				item:{},
				listbox:true,
				mlistbox:false
			}
		},
		mounted(){
			this.dataList(),
            window.addEventListener('resize', this.width)
		},
		methods:{
			dataList(){
				this.$http.get('/all').then((param)=>{
					this.list = []
					this.list.push(param.data)
				});
                this.screenWidth = document.body.clientWidth
                var width = this.screenWidth
                if (width<1000) {
                    this.listbox = false;
                    this.mlistbox = true;
                }else{
                    this.listbox = true;
                    this.mlistbox = false;
                }
			},
			toView(id){
				this.$router.push('/view/'+id)
			},
            width(){
                this.screenWidth = document.body.clientWidth
                var width = this.screenWidth
                if (width<1000) {
                    this.listbox = false;
                    this.mlistbox = true;
                }else{
                    this.listbox = true;
                    this.mlistbox = false;
                }
            }
		}
	}
</script>