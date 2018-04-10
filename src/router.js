import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Services from './views/Services.vue'
import Portfolio from './views/Portfolio.vue'
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
        path: '/services',
        name: 'services',
        component: Services
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
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
        name: 'contacts',
        component: Contacts
     }
    ]    
  }
)

router.afterEach(
  (to, from) => {
    console.log(`${from.name} to ${to.name}`)

    if (window.pageYOffset > 0) {
      window.scrollTo(
        {
          'behavior': 'smooth',
          'top': 0
        }
      )
    }
  }
)

export default router