<template>
    <div class="add_editor">
	    <el-form action="" method="post" accept-charset="utf-8">
	    	<h1 class="add_title">标题</h1>
            <el-form-item prop="title" class="add_titleInput">
            	<el-input v-model="addArt.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="选择类型" class="add_type">
			    <el-select v-model="addArt.type" placeholder="请选择一个类型">
			      <el-option label="HTML CSS JS" value="基础"></el-option>
			      <el-option label="NodeJs" value="node"></el-option>
			      <el-option label="JQuery" value="jquery"></el-option>
			      <el-option label="Vue" value="vue"></el-option>
			      <el-option label="Webpack" value="webpack"></el-option>
			      <el-option label="Other" value="other"></el-option>
			      <el-option label="随笔" value="随笔"></el-option>
			    </el-select>
		  	</el-form-item>
        	<quill-editor class="quill" ref="myTextEditor" v-model="addArt.content" :config="editorOption"></quill-editor>
	        <el-button class="editor-btn" type="primary" @click="submit('addArt')">提交</el-button>
	    </el-form>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor';
    export default {
        data: function(){
            return {
            	addArt:{
        			title:'',
        			type:'',
	                content: '',
	                time:''
            	},
                editorOption: {
                    // something config
                }
            }
        },
        components: {
            quillEditor
        },
        mounted(){
            this.admin()
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            admin(){
               this.$http.get('/admin').then((param)=>{
                    if(param.data == false){
                        this.$router.push('/index');
                    }
               }) 
            },
            submit(){
            	var date = new Date();
			    var seperator1 = "-";
			    var seperator2 = ":";
			    var month = date.getMonth() + 1;
			    var strDate = date.getDate();
			    if (month >= 1 && month <= 9) {
			        month = "0" + month;
			    }
			    if (strDate >= 0 && strDate <= 9) {
			        strDate = "0" + strDate;
			    }
			    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
			            + " " + date.getHours() + seperator2 + date.getMinutes()
			            + seperator2 + date.getSeconds();
	            this.addArt.time = currentdate;
                var addArt = this.addArt;
                this.$http.post('/add',addArt).then((param)=> {
                    // success callback
                    this.$message.success('提交成功！');
                    console.log(param.data)
                    this.$router.push('/view/'+param.data);
            }, response => {
                	// error callback
                	this.$message.error('遇到了不可预知的错误');
            	});
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        }
    }
</script>
<style scoped>
	.add_title{
		float: left;
		display: inline-block;
		margin-left: 5%;
	}
	.add_titleInput{
		width: 50%;
		display: inline-block;
		margin-top: 5px;
		margin-left: 20px;
	}
	.add_type{
		margin-left: 5%;
		margin-top: 20px;
	}
	.add_editor{
		margin-top: 50px;
	}
	.quill{
		margin:30px auto;
		width: 90%;
		height: 500px;
		min-height: 500px;
	}
    .editor-btn{
        margin-top: 40px;
        margin-left: 5%;
        margin-bottom: 3%;
    }
    canvas{
        display: none;
    }
</style>