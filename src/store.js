import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
	{
	  state: {
	  	copyrightYear: 2018,
      address: 'Профсоюзная ул., 90, Москва, 117485',
      phoneNumber: '+79067000000',
      email: 'projectcompany@gmail.com',
      skype: 'project.company'
	  },
	  mutations: {

	  },
	  actions: {

	  }
	}
)
