import { addTag, getTagList } from '@/api/tag';

const getDefaultState = () => {
  return {};
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
};

const actions = {
  getTagList({ commit }, data) {
    return new Promise((resolve, reject) => {
      getTagList(data)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  addTag({ commit }, data) {
    return new Promise((resolve, reject) => {
      addTag(data)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
