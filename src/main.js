import Vue from 'vue';
import App from './views/App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import { BootstrapVue, IconsPlugin, BPagination } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/scss/index.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('b-pagination', BPagination);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
