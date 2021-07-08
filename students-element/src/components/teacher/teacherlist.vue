<template >
    <div>

  <el-table :data="pageData.rows" style="width: 100%">
    <el-table-column prop="_id" label="教师ID" width="220"></el-table-column>
   
    <el-table-column prop="teachername" label="教师姓名" width="80"> </el-table-column>
    <el-table-column prop="teacherage" label="教师年龄" width="80"> </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="uppush(scope.row._id)">修改</el-button>
        <el-button size="mini" type="danger" @click="deleteone(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
      <navagation />
  </div>
</template>
<script>
import navagation from './navagation.vue'
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("teachers");
import axios from "axios";
export default {
    components:{
   navagation
  },
  data() {
    return {};
  },
  created() {
    this.getAllteachersAsync();
    this.getteacherByPageAsync();
   
  },
  computed: {
    ...mapState(["teacherdata","pageData"]),
  },

  methods: {
    ...mapActions(["getAllteachersAsync", "addTeacherAsync","deleteoneAsync","getteacherByPageAsync"]),
    uppush(_id) {
      this.$router.push('/system/upteacher/' + _id);
    },
    async deleteone(_id){
     const data=await this.deleteoneAsync(_id)
     if(data){
           this.$router.push('/system')
     }
    }
  },
}
</script>


