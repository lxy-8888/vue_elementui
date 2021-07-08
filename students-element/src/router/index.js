import Vue from 'vue'
import VueRouter from 'vue-router'
// import $api from '../http/api/api'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path:'/reg',
    component: () => import( '../views/register/register.vue'),
  },
  {
    path:'/login',
    component: () => import( '../views/login/login.vue'),
  },
  {
    path: '/system',
    component: () => import( '../views/system/system.vue'),
    //beforeEnter: async (to, from, next) => {
    ///  const data = await $api.users.isLogin();
    //  if (data.success) {
     //   next();
    //  } else {
    //    alert('你还未登录，请先登录');
    //    next('/login');
    //  }
  //  },
    children:[
      {
        path:'addstudent',
        component:()=>import('../components/student/add.vue')
      },
      {
        path:'studentlist',
        component:()=>import('../components/student/list.vue')
      },
      {
        path:'teacherlist',
        component:()=>import('../components/teacher/teacherlist.vue')
      },
      {
        path:'addteacher',
        component:()=>import('../components/teacher/addteacher.vue')
      },
      {
        path:'addclass',
        component:()=>import('../components/class/addclass.vue')
      },
      {
        path:'classlist',
        component:()=>import('../components/class/classlist.vue')
      },
      {
        path:'upstudent/:_id',
        component:()=>import('../components/student/up.vue')
      },
      {
        path:'upclass/:_id',
        component:()=>import('../components/class/upclass.vue')
      },
      {
        path:'upteacher/:_id',
        component:()=>import('../components/teacher/upteacher.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
