<template lang="">
    <div>

  <el-table :data="pageData.rows" style="width: 100%">
    <el-table-column prop="_id" label="班级ID" width="220"></el-table-column>
   
    <el-table-column prop="classname" label="班级名称" width="80"> </el-table-column>
    <el-table-column prop="teacherId.teachername" label="主管老师" width="80"> </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="upclass(scope.row._id)">修改班级</el-button>
        <el-button size="mini" type="danger" @click="deleteclass(scope.row._id)">删除班级</el-button>
      </template>
    </el-table-column>
  </el-table>
    <nation/>
  </div>
</template>
<script>
import nation from './nation.vue'
import {
    createNamespacedHelpers
} from 'vuex';
const {
    mapActions,
    mapState,mapMutations,
} = createNamespacedHelpers('classes');
import axios from 'axios';

export default {
     components: {
        nation
    },
      data() {
        return {
           
        }
    },
    created() {
       this.getAsync()
       this.getclassByPageAsync()
    },
    computed: {
        ...mapState(['classdata','pageData']),
     
    },
    
    methods: {
        ...mapActions(['getAsync','dedeclassAsync','getclassByPageAsync']),
      upclass(_id){
          this.$router.push('/system/upclass/' + _id)
      },
       //删除班级
        async deleteclass(_id){   
           const data=await this.dedeclassAsync(_id)
           if(data){
               // alert("删除成功")
                this.$router.push('/system')
           }
        }

    },

}
</script>