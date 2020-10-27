import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import QuestionCard from '../views/QuestionCard.vue'
import QuizScore from '../views/QuizScore.vue'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/questions',
    name: 'QuestionCard',
    component: QuestionCard
  },
  {
    path: '/score',
    name: 'QuizScore',
    component: QuizScore
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
