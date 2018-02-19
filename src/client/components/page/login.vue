 <template>
    <div>
        <div id="container" ></div>
        <div class="login-wrap">
            <div class="ms-title">破罐子破摔</div>
            <div class="ms-login">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm" method="post">
                    <el-form-item prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入用户名" name="name"></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd" @keyup.enter.native="submitForm('ruleForm')" name="pwd"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button  type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                </el-form>
                <router-link to="reg" class="link">注册-></router-link>
            </div>
        </div>

 </div>
</template>
<script>

import mouseCanvas from '../../static/js/canvas.js'
mouseCanvas.sketchFun();
    export default {
        data: function(){
            return {
                ruleForm: {
                    name: '',
                    pwd: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted(){
            this.check()        },
        methods: {
            submitForm(formName) {
                var formData = this.ruleForm;
                this.$refs[formName].validate((valid) => {

                    if (valid) {
                        // console.log('1');
                        this.$http.post('/login',formData).then((param)=> {
                            // success callback

                            if (param.data.status == 3) {
                                this.$message.warning(param.data.msg);
                            }else if(param.data.status == 2){
                                this.$message.warning(param.data.msg);
                            }else if(param.data.status == 1){
                                localStorage.setItem('ms_username',this.ruleForm.name); //通过localStorage传递username
                                this.$router.push({path: '/index', replace: true});
                            }
                        }, response => {
                            // error callback
                            this.$message.error('遇到了不可预知的错误');
                        });
                    } else {
                        return false;
                    }
                });
            },
        check(){
            this.$http.get('/login').then((param)=>{
                    if (param.check=true) {
                        // var now = this.$route.path
                        // console.log(now)
                        this.$router.push('/index')
                    }
                })
            }
        }
    }    
</script>

<style>
    *{
      margin:0;
      padding:0;
    }
    canvas{
        width: 99%;
        display: block;
    }
    .link{
        position:absolute;
        right: 40px;
        font-size: 13px;
        color: gray;
        bottom: 20px;
    }
    .container{
        position: absolute;
        top: 0;
    }
    .login-wrap{
        width:100%;
        height:100%;
        /*background-color: #000;*/
        margin: 0;
        padding:0;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #000;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
        not supported by any browser */
        cursor: default;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
