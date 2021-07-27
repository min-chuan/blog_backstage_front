import Cookies from 'js-cookie';
import router from '@/router';

const getDefaultState = () => {
  return {};
};

const state = getDefaultState();

const mutations = {
  // 清除数据并退出
  CLEAR_DATA_AND_EXIT: () => {
    localStorage.clear();
    router.push({ name: 'login' });
    Cookies.remove('token');
    window.location.reload(); // 清除vuex中的数据
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
