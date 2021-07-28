import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import app from './modules/app';
import tag from './modules/tag';
import blogEdit from './modules/blogEdit';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    tag,
    blogEdit,
  },
});
