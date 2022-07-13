/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    fetchTodos(context) {
      const todos = [
        { id: 1, text: "Conceitos Vuex", done: true },
        { id: 2, text: "Atomic Design", done: false },
        { id: 3, text: "Começar com Nuxt", done: false },
      ];

      context.commit("SET_TODOS", todos);
    },
  },
  getters: {
    $allTodos(state) {
      return state.todos;
    },
    $doneTodos(state) {
      return state.todos.filter(todo => todo.done);
    },
  },
});
