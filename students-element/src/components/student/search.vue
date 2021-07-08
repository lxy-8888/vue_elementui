<template>
<div style="margin-bottom:20px">
     <el-input placeholder="请输入内容" v-model="searchData.value" class="input-with-select">
    <el-select v-model="searchData.type" slot="prepend" placeholder="请选择">
      <el-option label="姓名" value="name"></el-option>
      <el-option label="年龄" value="age"></el-option>
      <el-option label="性别" value="gender"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="search(searchData)"></el-button>
  </el-input>
  </div>
</template>
<style>
  .el-select .el-input {
    width: 135px;
    
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
import axios from 'axios';
import {
    createNamespacedHelpers
} from 'vuex';
const {
    mapMutations,
    mapActions,
    mapState
} = createNamespacedHelpers('students');
export default {
    data(){
        return {
            searchData:{
                type:'name',
                value:'',
           }
        }
    },
    computed:{
        ...mapState(['pageData','seachData'])
    },
    methods: {
        ...mapMutations(['getsearch']),
        ...mapActions(['getStudentsByPageAsync']),
       search(searchData){
           this.getsearch(searchData)
       }
        
    },
     watch: {
     
        'seachData.value'() {
            this.getStudentsByPageAsync()
        },
       
       
    },
}
</script>