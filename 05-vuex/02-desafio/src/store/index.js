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
        { id: 1, text: "Atomic Design", done: true },
        { id: 2, text: "Design Web", done: false },
        { id: 3, text: "Atomic Design", done: true },
      ];

      context.commit("SET_TODOS", todos);
    },
  },
  getters: {
    $allTodos(state) {
      return state.todos;
    },
  },
});
