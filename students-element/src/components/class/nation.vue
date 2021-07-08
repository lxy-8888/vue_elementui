<template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageData.dangqianye-0"
      :page-sizes="[3, 6, 9, 12]"
      :page-size="pageData.pagesize-0"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.totals">
    </el-pagination>
</template>
<script>
import {
    createNamespacedHelpers
} from 'vuex';
const {
    mapActions,
    mapState,
    mapMutations
} = createNamespacedHelpers('classes');
  export default {
    computed: {
        ...mapState(['pageData']),
      
    },
    methods: {
        ...mapMutations(['changepageSize','changeCurrent']),
        ...mapActions(['getclassByPageAsync']),
      
      handleSizeChange(val) {
        
        this.changepageSize(val)

      },
      handleCurrentChange(val) {
       
        this.changeCurrent(val)
      }
    },
    watch: {
        'pageData.pagesize'() {
            this.getclassByPageAsync()
        },
        'pageData.dangqianye'() {
            this.getclassByPageAsync()

        }
    },
   
  }
</script>