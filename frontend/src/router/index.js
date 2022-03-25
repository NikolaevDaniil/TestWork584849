import { createRouter, createWebHistory } from 'vue-router'

import AllTask from "@/components/AllTask";
import CreateTask from "@/components/CreateTask";
import EditTask from "@/components/EditTask";

const routes = [
  {
    name: 'home',
    path: '/',
    component: AllTask
  },
  {
    name: 'create',
    path: '/create',
    component: CreateTask
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
