import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Profile from './../components/Profile'
import AnalysisResults from "../components/AnalysisResults";

Vue.use(Router);

export default new Router({
  routes: [
    {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/profile/index/:index',
    name: 'profile',
    component: Profile,
  },
    {
      path: '/analysis',
      name: 'AnalysisResults',
      component: AnalysisResults,
    }
  ]
})
