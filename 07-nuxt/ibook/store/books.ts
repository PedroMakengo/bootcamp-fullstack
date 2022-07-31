import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class Books extends VuexModule {
  books = ['Livro 1', 'Livro 2']
}
