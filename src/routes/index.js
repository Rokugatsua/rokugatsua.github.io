import { createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import About from '../views/About.vue'
import Blogs from '../views/Blog.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blogs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

]

export default createRouter({
  routes,
  history : createWebHistory()
})