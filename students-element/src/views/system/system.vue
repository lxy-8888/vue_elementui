<template>
  <el-container class="max">
    <el-header height="80px">你已进入系统管理界面，请谨慎操作</el-header>
    <el-container>
      <el-aside width="200px"><sidebar/></el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
    <el-footer height="80px">Footer</el-footer>
  </el-container>
</template>
<script>
import sidebar from "./sidebar.vue";

export default {
  components: {
    sidebar,
  },
};
</script>
<style>
.max {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
 
 
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
