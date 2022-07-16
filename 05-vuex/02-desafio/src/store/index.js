/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
  state: {
    categories: [],
  },
  mutations: {
    SET_TODOS(state, question) {
      state.categories = question;
    },
  },
  actions: {
    fetchCategories(context) {
      const question = faqCategories;

      context.commit("SET_TODOS", question);
    },
  },
  getters: {
    $allCategories(state) {
      return state.categories;
    },
  },
});
