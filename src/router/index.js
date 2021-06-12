import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/main/Home.vue'),
	},
	// {
	// 	path: '/home',
	// 	name: 'Home',
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/main/Home.vue'),
	// },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
