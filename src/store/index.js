import Vue from 'vue';
import Vuex from 'vuex';
import { axios } from '../controllers/index';

Vue.use(Vuex);
let baseURL = 'https://data.jsdelivr.com/v1/package/npm/';
export default new Vuex.Store({
	state: {
		results: [],
		latest: '',
		searchParam: '',
		current_version: [],
	},
	mutations: {
		setResults(state, payload) {
			let results = [];
			payload.versions.map((el) => results.push({ title: state.searchParam, version: el }));
			state.results = results;
			if (payload && payload.tags) {
				state.latest = payload.tags;
			}
		},
		setSearchParam(state, payload) {
			state.searchParam = payload;
		},
		setCurrentVersion(state, payload) {
			state.current_version = payload;
		},
	},
	actions: {
		async FIND_LIBRARY({ commit }, payload) {
			let url = baseURL + payload + '?page=1&limit=10';
			commit('setSearchParam', payload);

			try {
				let res = await axios.get(url);
				let data = res.data;

				commit('setResults', data);
			} catch (error) {
				console.log(error.response);
			}
		},
		async GET_CURRENT_VERSION({ commit, state }, payload) {
			let url = baseURL + state.searchParam + '@' + payload;

			try {
				let { data } = await axios.get(url);

				commit('setCurrentVersion', data.files);
				console.log(data, 'DATA');
			} catch (error) {
				console.log(error.response);
			}
		},
	},
	modules: {},
	getters: {
		getResults: (state) => state.results,
		getLatest: (state) => state.latest,
		getCurrent: (state) => state.current_version,
		getSearchParam: (state) => state.searchParam,
	},
});
