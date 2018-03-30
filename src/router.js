import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Solutions from './views/Solutions.vue'
import Clients from './views/Clients.vue'
import Support from './views/Support.vue'
import Contacts from './views/Contacts.vue'

Vue.use(Router)

var router = new Router(
  {
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/products',
        name: 'products',
        component: Products
      },
      {
        path: '/solutions',
        name: 'solutions',
        component: Solutions
      },
      {
        path: '/clients',
        name: 'clients',
        component: Clients
      },
      {
        path: '/support',
        name: 'support',
        component: Support
      },
      {
        path: '/contacts',
        name: 'contats',
        component: Contacts
     }
    ]    
  }
)

router.afterEach(
  (to, from) => {
    console.log(`${from.name} to ${to.name}`)
  }
)

export default router