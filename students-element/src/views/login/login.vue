<template>
    <div class="max">
       <h3>用户登录</h3>
       <el-form :label-position="labelPosition" label-width="100px" :model="user">
  <el-form-item label="用户名">
    <el-input v-model="user.username"></el-input>
  </el-form-item>
  <el-form-item label="登录密码">
    <el-input v-model="user.password"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button type="success" @click="login">立即登录</el-button>
    <router-link to='/reg'>没有账号，去注册？</router-link>
  </el-form-item>
</el-form> 
    </div>
</template>
<script>
//import axios from '../../http/axios.js'

export default {
    data() {
        return {
            labelPosition: "right",
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            const
                data = await this.$api.users.login(this.user)
            if (data.success) {
                alert('登录成功');
                localStorage.token = data.token;
                this.$router.push('/system/studentlist')

            };
            console.log(data)
        },

    }
}
</script>
<style scope>
.max{
  width:400px;
  height:250px;
  margin:100px  auto;
  border:1px solid #ccc;
  text-align:center;
  border-radius:12px;
  padding:10px
}
h3{
  margin-bottom:30px;
  height:20px;
  color:#67C23A
}
.el-form-item__label{
  font-size:15px;
  color:#67C23A;
  font-weight:bold
}

</style>
