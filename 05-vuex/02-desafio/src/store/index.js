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
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },

    SET_QUESTIONS(state, questions) {
      state.questions = questions;
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

    fetchResponse(context, id) {
      const faqResponse = faqCategories;

      for (let response of faqResponse) {
        let questions = response.questions;
        for (let response of questions) {
          if (response.id === id) {
            let content = response.content;
            context.commit("SET_RESPONSE", content);
          }
        }
      }
    },

    fetchUniqueDetails(context, categories) {
      const faq = faqCategories;
      for (let category of faq) {
        if (category.title === categories) {
          let detailsCategories = category;
          context.commit("SET_DETALHES_INFORMATION", detailsCategories);
        }
      }
    },
    fetchQuestionDetails(context, idQuestion) {
      const faq = faqCategories;
      for (let newQuestionList of faq) {
        let questions = newQuestionList.questions;
        for (let question of questions) {
          if (question.id === idQuestion) {
            context.commit("SET_DETAILS_QUESTIONS", question.title);
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
