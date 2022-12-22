import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage'
import RidersPage from './pages/RidersPage'
import RiderPage from './pages/RiderPage'
import DriversPage from './pages/DriversPage'
import DriverPage from './pages/DriverPage'
import OrdersPage from './pages/OrdersPage'
import OrderPage from './pages/OrderPage'
import RiderCreateComponent from './components/RiderCreateComponent'
import DriverCreateComponent from './components/DriverCreateComponent'
import OrderCreateComponent from './components/OrderCreateComponent'

export default createRouter({
  name: "router",
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/riders',
      name: 'riders',
      component: RidersPage
    },
    {
      path: '/riders/:id',
      name: 'rider',
      component: RiderPage,
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: DriversPage
    },
    {
      path: '/drivers/:id',
      name: 'driver',
      component: DriverPage,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersPage,
    },
    {
      path: '/orders/:id',
      name: 'order',
      component: OrderPage,
    },
    {
      path: '/riders/create',
      name: 'create-rider',
      component: RiderCreateComponent,
    },
    {
      path: '/drivers/create',
      name: 'create-driver',
      component: DriverCreateComponent,
    },
    {
      path: '/orders/create',
      name: 'create-order',
      component: OrderCreateComponent,
    }
  ]
})
