<template>
 <div class="login_page">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		  		<div class="manage_tip">
		  			<span class="title">后台管理系统</span>
		  		</div>
		    	<el-form :model="Form" ref="Form" :rules="rules" class="loginForm">
					<el-form-item prop="username" class="login-item">
					    <span class="fa-tips"><i class="el-icon-user-solid"></i></span>
						<el-input @keyup.enter.native ="login('Form')" class="area" type="text" placeholder="用户名" v-model="Form.username" />
					</el-form-item>
					<el-form-item prop="password" class="login-item">
					    <span class="fa-tips"><i class="el-icon-lock"></i></span>
						<el-input @keyup.enter.native ="login('Form')" class="area" type="password" placeholder="密码" v-model="Form.password"></el-input>
					</el-form-item>
					<el-form-item>
            
				    	<el-button @click="login('Form')" type="primary"  class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
import { Login } from '../config/api'
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data(){
    return{
      Form: {
		username: 'admin',
		password: '123456'
	  },
	  rules: {
		username: [
			{ required: true, message: '请输入用户名', trigger: 'blur' },
			{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
		],
		password: [
			{ required: true, message: '请输入密码', trigger: 'blur' }
		],
	},
    }
  },
  methods:{
	//   login(){
	// 	  this.$http.post('http://localhost:3000/admin/api/login',this.loginForm).then(res=>{
	// 		  console.log(res)
	// 	  })
	//   }
	//动态弹窗
	messages(type,message){
		this.$message({
			type:type,
			message:message
		})

	},
	login(Form){
		this.$refs[Form].validate((valid)=>{  //validate from表单验证
			
			this.$store.dispatch('forlogin',this.Form).then(res=>{
				this.$router.push({ path: 'index' })
			}).catch(err=>{
				console.log(err)
			})
			
		
		})
	}
  }
};
</script>
<style lang="scss" scoped>

	.login_page{
		position: absolute;
		width: 100%;
		height: 100%;
    background-size: 100% 100%;
    background:#278296
  }
 
	.loginForm{
		 background-color: #fff;
		 padding:20px;
		 border-radius:3px;
		 box-shadow: 3px 3px 5px #01144c;
		.fa-tips{
			position: absolute;
			left: 10px;
			z-index: 20;
			font-size: 18px;
			top: 50%;
			transform: translateY(-50%);
		}
		
	}
	.manage_tip{
		margin-bottom:20px;
		.title{
			font-family: cursive;
			font-weight: bold;
			font-size: 26px;
			color:#fff;
		}
		.logo{
			width:60px;
			height:60px;
		}
	}
	.form_contianer{
		width:370px;
		height:210px;
		position: absolute;
		top: 20%;
        left: 34%;
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		.submit_btn{
			width: 100%;
			font-size: 16px;
			letter-spacing:20px;
		}
	}
	.tiparea{
		text-align:left;
		font-size: 12px;
		color: #4cbb15;
		.tip{
			margin-left: 54px;
		}
		.tips{
			color:red;
		}
	}

	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
	.loginForm{
		.el-button--primary{
			background-color:#FF7C1A;
			border:1px solid #FF7C1A;
		}
	}
	.sanFangArea{
		border-top: 1px solid #DCDFE6;
		margin-top: 5px;
		padding: 5px;
		display: none;
		.title{
			font-size: 14px;
			color: #8b9196;
		}
		ul{
			li{
				flex:1;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				img{
					width:40px;
					height:40px;
				}
			}
		}
	}
</style>
