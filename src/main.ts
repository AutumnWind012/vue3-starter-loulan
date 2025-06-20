import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import FrontPage from './pages/FrontPage.vue'
import NewsPage from './pages/NewsPage.vue'
import AboutPage from './pages/AboutPage.vue'


// 1. 配置路由规则
const routes = [
  // 路由项
  { path: "/", redirect: "/home" },
  { path: "/home", component: FrontPage },
  { path: "/about", component: AboutPage },
  { path: "/news", component: NewsPage, name: 'news' }
];

// 2. 创建路由器 
const router = createRouter({
  // 路由工作模式
  history: createWebHashHistory(),
  routes: routes
});

// 3. 加载路由器
const app = createApp(App);
app.use(router);
app.mount('#app');



