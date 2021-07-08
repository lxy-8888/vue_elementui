
  <template> <el-form :label-position="labelPosition" label-width="80px" :model="teacher">
  <el-form-item label="姓名"> <el-input v-model="teacher.teachername"></el-input> </el-form-item>
  <el-form-item label="年龄"> <el-input v-model="teacher.teacherage"></el-input> </el-form-item>
  <el-form-item > <el-button type="primary"
  @click="thisAddteacher(teacher)">新增老师</el-button> </el-form-item> </el-form>
</template>
<script>
import axios from "axios";

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("teachers");
export default {
  data() {
    return {
         labelPosition: "right",
      teacher: {
        teachername: "",
        teacherage: "",
      },
    };
  },

  methods: {
    ...mapActions(["addTeacherAsync"]),

    async thisAddteacher(teacher) {
      // console.log(teachername,teacherage)
      const data = await this.addTeacherAsync(teacher);
      // console.log(data)
      if (data) {
        this.$router.push("/system/teacherlist");
      }
    },
  },
};
</script>
