import ArticleService from '@/services/ArticleService';
import { Article } from '@/model/Article';
let ArticleState = {
  articles: [],
  currentArticle: new Article()
};
export const state = () => ({
  namespaced: true,
  state: ArticleState,
  mutations: {
    // setList(state, payload) {
    //   state.articles = payload;
    // },
    // setArticle(state, payload) {
    //   state.currentArticle = payload;
    // }
  },
  actions: {
    // async getList({ commit }, amount) {
    //   let items = await ArticleService.getList(amount);
    //   commit("setList", items);
    //   return items;
    // },
    // async get({ commit }, id) {
    //   let item = await ArticleService.get(id);
    //   commit("setArticle", item);
    //   return item;
    // },
  },
  getters: {},
});
