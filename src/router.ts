
import type { RouteParams, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'


export type AppRouteNames =
  | 'home'
  | 'harga'
  | 'testimoni'
  | 'faq'
  | 'login'


export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/Home.vue')
  },
  {
    name: 'harga',
    path: '/harga',
    component: () => import('./pages/Harga.vue')
  },
  {
    name: 'testimoni',
    path: '/testimoni',
    component: () => import('./pages/Testimoni.vue')
  },
  {
    name: 'faq',
    path: '/faq',
    component: () => import('./pages/Faq.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./pages/Login.vue')
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export async function routerPush(name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
  return params === undefined
    ? await router.push({ name })
    : await router.push({ name, params })
}

