import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      { title: 'หน้าหลัก', icon: 'home' ,to:'/'},
      { title: 'บัญชี', icon: 'account_circle', to:'/Accountuser'},
      { title: 'KPI', icon: 'trending_up', to:'/Kpiuser' },
      { title: 'ลางาน', icon: 'assignment' ,to:'/Stopwork'},
     ],
     workbuttom: [
      { title: 'ลากิจ' },
      { title: 'ลาป่วย' },
      { title: 'ลาฉุกเฉิน' },
      { title: 'ลาพักร้อน' },
      { title: 'ลาคลอด' },
     
    ],
    iconsfooter: [
      { icons: 'mdi-facebook' ,to:'https://facebook.com/jintaifamily/', },
    ],
    linksimg: [
      { title: 'img', src:"@/asset/img_users/01976.jpg" ,to:'/'},
     
     ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
