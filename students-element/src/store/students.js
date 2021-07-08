//import $api from '../http/api/api'
import axios from "axios"
export default {
    namespaced:true,
    
    state: {
        pageData: {
            dangqianye: 1,
            pagesize: 3,
            totals: 0,
            totalpages: 0,
            rows: []
        },
        seachData:{
            type:'name',
            value:''
        }
       
    },
    getters:{
        
    },
    mutations: {
        //修改当前页
        changeCurrent(state,current){
            state.pageData.dangqianye=current
        },
          
      
        getStudentsByPage(state,pagedata){
            state.pageData= pagedata;
            
        },
        changepageSize(state,pagesize){
            state.pageData.pagesize=pagesize;
            
        },
      
       
        //拿到组件的搜索条件
        getsearch(state,newdata){
            state.seachData=newdata;
        }
         
       
       
      
    },
    actions: {
        async getallclassAsync(){
            const data =await axios({
                url:'/class/getClass',
                method:'get',
            });
            return data
        },
        async getStudentsByPageAsync({state,commit}) {
            const{pagesize,dangqianye} = state.pageData;
            const{type,value} = state.seachData;
            const data =await axios({
                url:'/students/getstudents',
                method:'get',
                params:{pagesize,dangqianye,type,value}
            });
               if(data){ 
                   commit('getStudentsByPage',data.data.data);
                   
               }

        },
        async addStudentsAsync(context,student){
            const {data} = await axios({
                url:'/students/addStudents',
                method:'post',
                data:{  ...student}
              });
             
             return data
          },
          async getoneAsync(context,_id) {
              
              const {data} = await axios({
                  url: '/students/upgetstudents/',
                  method: 'get',
                 params: {_id},
               
              });
             return data
    
          },
          async upYesAsync(context,updata) {
              const {data} = await axios({
                  url: '/students/upConfirm',
                  method: 'post',
                  data: {...updata},
              });
             return data
    
          },
          async dedeAsync(context,_id){
              const {data}=await axios({
                  url:'/students/deleteStudentsById',
                  method:'post',
                  data:{_id},
              });
              return data
          },
         
    },
    modules: {
    }
    

}