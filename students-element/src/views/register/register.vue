<template>
    <div class="max">
       <h3>用户注册</h3>
       <el-form :label-position="labelPosition" label-width="100px" :model="user">
  <el-form-item label="管理员昵称">
    <el-input v-model="user.username"></el-input>
  </el-form-item>
  <el-form-item label="登录密码">
    <el-input v-model="user.password"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button type="success" @click="register">立即注册</el-button>
    <el-button type="success" @click="tologin">已有账号，去登录</el-button>
  </el-form-item>
</el-form> 
    </div>
</template>
<script>
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

        async register() {
            const data = await this.$api.users.register(this.user);
            if (data.success) {
                alert('注册成功');
                this.$router.push('/login')
            }

        },

        tologin() {
            this.$router.push('/login')
        }
    },
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
