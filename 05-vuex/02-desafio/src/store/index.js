/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
  state: {
    view: "Question",
    categories: [],
    questions: [],
    responses: "",
    details: {},
    questionDetails: {},
  },

  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    },

    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },

    SET_NEW_COMPONENT_DISPLAY(state, payload) {
      state.view = payload;
    },

    SET_RESPONSE(state, payload) {
      state.responses = payload;
    },
    SET_DETALHES_INFORMATION(state, payload) {
      state.details = payload;
    },
    SET_DETAILS_QUESTIONS(state, payload) {
      state.questionDetails = payload;
    },
  },
  actions: {
    fetchComponent({ commit }, component) {
      const viewCurrent = component;
      commit("SET_NEW_COMPONENT_DISPLAY", viewCurrent);
    },

    fetchCategories({ commit }) {
      const categories = faqCategories;
      commit("SET_CATEGORIES", categories);
    },

    fetchUniqueQuestion({ commit }, categories) {
      const faqQuestions = faqCategories;

      for (let question of faqQuestions) {
        if (question.title === categories) {
          let searchQuestion = question.questions;
          commit("SET_QUESTIONS", searchQuestion);
        }
      }
    },

    fetchResponse({ commit }, id) {
      const faqResponse = faqCategories;

      for (let response of faqResponse) {
        let questions = response.questions;
        for (let response of questions) {
          if (response.id === id) {
            let content = response.content;
            commit("SET_RESPONSE", content);
          }
        }
      }
    },

    fetchUniqueDetails({ commit }, categories) {
      const faq = faqCategories;
      for (let category of faq) {
        if (category.title === categories) {
          let detailsCategories = category;
          commit("SET_DETALHES_INFORMATION", detailsCategories);
        }
      }
    },
    fetchQuestionDetails({ commit }, idQuestion) {
      const faq = faqCategories;
      for (let newQuestionList of faq) {
        let questions = newQuestionList.questions;
        for (let question of questions) {
          if (question.id === idQuestion) {
            commit("SET_DETAILS_QUESTIONS", question.title);
          }
        }
      }
    },
  },
  getters: {
    $allCategories(state) {
      return state.categories;
    },
    $allQuestions(state) {
      return state.questions;
    },
    $currentView(state) {
      return state.view;
    },
    $response(state) {
      return state.responses;
    },
    $details(state) {
      return state.details;
    },
    $detailsQuestions(state) {
      return state.questionDetails;
    },
  },
});
