import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/LoginRegistLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users/Login.vue') },
      { path: 'auth/Registrasi', component: () => import('pages/Users/Registrasi.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Admin/Home/DataDriver.vue') },
      { path: 'inputdata', component: () => import('pages/Admin/Home/InputData.vue') },
      { path: 'datatransaksi', component: () => import('pages/Admin/Transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/customer',
    component: () => import('layouts/CustomerLayout.vue'),
    children: [
      { path: 'transaksi', component: () => import('pages/Customer/Transaksi/DataTransaksi.vue') },
      { path: 'pembayaran', component: () => import('pages/Customer/Transaksi/Pembayaran.vue') },
      { path: '', component: () => import('pages/Customer/Order/Order.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
