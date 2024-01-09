import { API } from "@/store/config.js";

export const state = {
  pageData: null,
};

export const getters = {
  PAGE_DATA(state) {
    return state.pageData;
  },
};

export const mutations = {
  SET_PAGE_DATA(state, data) {
    state.pageData = data;
  },
};

export const actions = {
  async LOAD_PAGE(context) {
    const result = await fetch(API + "main/getInfo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.result;
      })
      .catch((e) => {
        throw new Error(e);
      });
    context.commit("SET_PAGE_DATA", result);
  },
};