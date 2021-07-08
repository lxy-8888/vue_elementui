<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="upteacherdata">
    <el-form-item label="姓名">
      <el-input v-model="upteacherdata.teachername"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="upteacherdata.teacherage"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="yesup(upteacherdata)">确认修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("teachers");
import axios from "axios";
export default {
  data() {
    return {
      labelPosition: "right",
      upteacherdata: {
        teachername: "",
        teacherage: "",
        _id: "",
      },
    };
  },
  created() {
    const _id = this.$route.params._id;
    this.getByid(_id);
  },
  computed: {},
  methods: {
    ...mapActions(["getByidAsync", "yesupAsync"]),

    async getByid(_id) {
      const data = await this.getByidAsync(_id);

      if (data) {
          console.log(data.data.rows[0])
        this.upteacherdata = data.data.rows[0];
      }
    },
    async yesup({ ...upteacherdata }) {
      const data = await this.yesupAsync({ ...upteacherdata });
      if (data) {
        this.$router.push("/system/teacherlist");
      }
    },
  },
};
</script>
