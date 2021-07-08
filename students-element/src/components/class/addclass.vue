<template >
 
  <el-form :label-position="labelPosition" label-width="80px" :model="add">
    <el-form-item label="班级名称">
      <el-input v-model="add.classname"></el-input>
    </el-form-item>
   
   
    <el-form-item label="负责老师">
      <el-select v-model="add.teacherId" placeholder="请选择">
    <el-option
      v-for="item in rows"
      :key="item._id"
      :label="item.teachername"
      :value="item._id">
    </el-option>
  </el-select>
    </el-form-item>
     <el-form-item >
     <el-button type="primary" @click="thisAddclass(add)">新增班级</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import axios from "axios";

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("classes");
export default {
  data() {
    return {
        labelPosition: "right",
         add:{
              classname: "",
          teacherId: "",
         },
          rows: "",
     
    };
  },
  created() {
    this.getteacher();
  },
  computed: {},
  methods: {
    ...mapActions(["addClassAsync","getTeachersAsync"]),
    changeone(event) {
      this.teacherId = event.target.value; //获取option对应的value值
    },
    async thisAddclass(add) {
      const data = await this.addClassAsync(add);

      if (data.success) {
        this.$router.push("/system/classlist");
      }
    },
    async getteacher() {
     const data = await this.getTeachersAsync()
      if (data) {
        // console.log("获取老师数据", data.data);
        this.rows = data.data.rows;
      }
    },
  },
};
</script>
