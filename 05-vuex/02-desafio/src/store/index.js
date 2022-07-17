/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
  state: {
    view: "Question",
    categories: [],
    questions: [],
  },

  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },

    SET_NEW_COMPONENT_DISPLAY(state, payload) {
      state.view = payload;
    },
  },
  actions: {
    fetchComponent(context, component) {
      const viewCurrent = component;
      context.commit("SET_NEW_COMPONENT_DISPLAY", viewCurrent);
    },

    fetchCategories(context) {
      const categories = faqCategories;
      context.commit("SET_CATEGORIES", categories);
    },

    fetchUniqueQuestion(context, categories) {
      const faqQuestions = faqCategories;

      for (let question of faqQuestions) {
        if (question.title === categories) {
          let searchQuestion = question.questions;
          context.commit("SET_QUESTIONS", searchQuestion);
        }
      }
    },
  },
  getters: {
    $allCategories(state) {
      return state.categories;
    },
    $currentView(state) {
      return state.view;
    },
  },
});
