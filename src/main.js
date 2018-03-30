import Vue from 'vue'

// UIkit {
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)

// components can be called from the imported UIkit reference
// UIkit.notification('Тестовое сообщение.')

// import 'uikit/dist/css/uikit.min.css'
// }

import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

new Vue(
	{
	  router,
	  store,
	  render: h => h(App)
	}
).$mount('#app')
