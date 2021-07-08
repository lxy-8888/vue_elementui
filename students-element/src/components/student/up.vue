<template >
     <el-form :label-position="labelPosition" label-width="80px" :model="updata">
    <el-form-item label="姓名">
      <el-input v-model="updata.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="updata.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio v-model="updata.gender" label="男">男</el-radio>
      <el-radio v-model="updata.gender" label="女">女</el-radio>
    </el-form-item>
   
     <el-form-item >
     <el-button type="primary" @click="upYes(updata)">确认修改</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
import {
    createNamespacedHelpers
} from 'vuex';
const {
    mapActions
} = createNamespacedHelpers('students');
import axios from 'axios'
export default {
    data() {
        return {
            labelPosition: "right",
            updata: {
                name: '',
                age: '',
                gender: ''
            }
        }
    },
    created() {
        const _id = this.$route.params._id
        this.getone(_id)
    },
    methods: {
        ...mapActions(['getoneAsync', 'upYesAsync','getStudentsByPageAsync']),
        async getone(_id) {
            const data = await this.getoneAsync(_id);
            
            if (data.success) {
                this.updata = data.rows[0]
            }

        },
        async upYes(updata) {
            const data = await this.upYesAsync(this.updata);
            if (data.success) {
                alert("修改成功");
              
                this.$router.push('/system/studentlist')
            }
        },

    },
}
</script>
