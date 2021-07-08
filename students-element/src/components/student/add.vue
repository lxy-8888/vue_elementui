<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="student">
    <el-form-item label="姓名">
      <el-input v-model="student.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="student.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio v-model="student.gender" label="男">男</el-radio>
      <el-radio v-model="student.gender" label="女">女</el-radio>
    </el-form-item>
    <el-form-item label="所在班级">
      <el-select v-model="student.classId" placeholder="请选择">
        <el-option
          v-for="item in classrows"
          :key="item.classname"
          :label="item.classname"
          :value="item._id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="上传头像">
      <el-upload
        action="http://localhost:3000/image/upload"
        list-type="picture-card"
        :on-success="upup"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="thisAddstudent(student)">新增学生</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("students");
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      labelPosition: "right",
      student: {
        name: "",
        age: "",
        gender: "",
        classId: "",
        imageName:''
      },
      classrows: "",
    };
  },
  created() {
    this.getallclass();
  },
  methods: {
    ...mapActions(["addStudentsAsync", "getallclassAsync"]),
    async thisAddstudent(student) {
      const data = await this.addStudentsAsync(student);
      console.log(data);
      if (data.success) {
        this.$router.push("/system/studentlist");
      }
    },
    async getallclass() {
      const data = await this.getallclassAsync();
      if (data) {
        this.classrows = data.data.rows;
      }
    },
    //上传图片
   upup(res){
     //console.log(res)
     if(res.success){
       this.student.imageName=res.filename[0];
     
     }
   }
  },
  //   beforeRouteLeave(to, from, next) {
  //       if (this.name) {
  //           const isleave = confirm("未提交任何数据，是否离开？")
  //           if (isleave) {
  //               next()
  //           } else {
  //               next()
  //            }
  //       }
  //  },
};
</script>
