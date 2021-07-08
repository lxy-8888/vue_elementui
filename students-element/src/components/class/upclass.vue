<template >
     <el-form :label-position="labelPosition" label-width="80px" :model="updata">
    <el-form-item label="班级名称">
      <el-input v-model="updata.classname"></el-input>
    </el-form-item>
    <el-form-item label="主管老师">
      <el-select v-model="updata.teacherId" placeholder="请选择" >
    <el-option
      v-for="item in trows"
      :key="item._id"
      :label="item.teachername"
      :value="item._id">
     </el-option>
  </el-select>
    </el-form-item>
     <el-form-item >
     <el-button type="primary" @click="upSure({...updata})">确认修改</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("classes");
import axios from "axios";
export default {
  data() {
    return {
         labelPosition: "right", 
       updata: {
        classname: "",
        teacherId: "",
        _id: "",
       }, 
      trows: "",
    };
  },
  created() {
    const _id = this.$route.params._id;
    this.getoneclass(_id);
    this.getteacher();
  },
  computed: {

  },
  methods: {
    ...mapActions(["getoneclassAsync", "upSureAsync", "getTeachersAsync"]),
  
    async getoneclass(_id) {
      const data = await this.getoneclassAsync(_id);

      if (data) {
        this.updata = data.rows[0];
      }
    },
    async getteacher() {
      const data = await this.getTeachersAsync();
      if (data) {
        this.trows = data.data.rows;
        //console.log(this.trows);
      }
    },
    async upSure({...updata}){
        const data=await this.upSureAsync({...updata})
        if(data){
            this.$router.push('/system/classlist')
        }

    }
    
  },
};
</script>