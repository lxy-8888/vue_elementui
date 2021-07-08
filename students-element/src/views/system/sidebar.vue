<template>
  <el-menu
    :router="true"
    default-active="2"
    class="el-menu-vertical-demo"
  
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>学生管理</span>
      </template>
      <el-menu-item-group> 
        <el-menu-item index="/system/studentlist">学生列表</el-menu-item>
        <el-menu-item index="/system/addstudent">新增学生</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
      <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span>班级管理</span>
      </template>
      <el-menu-item-group> 
        <el-menu-item index="/system/classlist">班级列表</el-menu-item>
        <el-menu-item index="/system/addclass">新增班级</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>教师管理</span>
      </template>
      <el-menu-item-group> 
        <el-menu-item index="/system/teacherlist">教师列表</el-menu-item>
        <el-menu-item index="/system/addteacher">新增教师</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {};
</script>
