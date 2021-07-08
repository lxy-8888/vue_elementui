<template>
<div>
<search/>
  <el-table :data="pageData.rows" style="width: 100%">
    <el-table-column prop="_id" label="学生编号" width="220"></el-table-column>
   
    <el-table-column prop="name" label="学生姓名" width="80"> </el-table-column>
    <el-table-column prop="age" label="学生年龄" width="80"> </el-table-column>
    <el-table-column prop="gender" label="学生性别" width="80"> </el-table-column>
    <el-table-column prop="classId.classname" label="所属班级" width="80">
    </el-table-column>

    <el-table-column
      prop="classId.teacherId.teachername"
      label="班主任"
      width="80"
    ></el-table-column>
<el-table-column prop="imageName" label="头像展示" width="80"> 
 <template slot-scope="scope">
        <img width="50" height="50" :src="'http://localhost:3000/images/' + scope.row.imageName"></el-button>
       
      </template>
</el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="upone(scope.row._id)">修改</el-button>
        <el-button size="mini" type="danger" @click="dede(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
    <pagenation/>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("students");
import axios from "axios";
import pagenation from "./pagenation.vue";
import search from './search.vue'
export default {
  components: {
    pagenation,
      search,
  },
  data() {
    return {
      searchData: {
        type: "name",
        value: "",
      },
    };
  },
  created() {
    this.getStudentsByPageAsync();
    
  },
  computed: {
    ...mapState(["pageData"]),
   
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },

    ...mapActions(["getStudentsByPageAsync", "dedeAsync"]),
    upone(_id) {
      this.$router.push("/system/upstudent/" + _id);
    },
    async dede(_id) {
      const data = await this.dedeAsync(_id);
      if (data.success) {
        alert("删除成功");
        this.$router.push("/system");
      }
    },
  },
};
</script>
