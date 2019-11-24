import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentSearchMode: "",
  currentSearchTerm: "",
  currentSearch: "",
  searchResults: []
};

const mutations = {
  // For currentSearchMode
  CHANGE_CURRENT_SEARCH_MODE(state, payload) {
    state.currentSearchMode = payload;
  },
  CLEAR_CURRENT_SEARCH_MODE(state) {
    state.currentSearchMode = "";
  },
  // For currentSearchTerm
  CHANGE_CURRENT_SEARCH_TERM(state, payload) {
    state.currentSearchTerm = payload;
  },
  CLEAR_CURRENT_SEARCH_TERM(state) {
    state.currentSearchTerm = "";
  },
  // For currentSearch
  CHANGE_CURRENT_SEARCH(state, payload) {
    state.currentSearch = payload;
  },
  CLEAR_CURRENT_SEARCH(state) {
    state.currentSearch = "";
  },
  // for searchResults
  CHANGE_SEARCH_RESULTS(state, payload) {
    state.searchResults = payload;
  },
  CLEAR_SEARCH_RESULTS(state) {
    state.searchResults = [];
  }
};

const actions = {
  // For currentSearchMode
  changeCurrentSearchMode(context, searchMode) {
    context.commit("CHANGE_CURRENT_SEARCH_MODE", searchMode);
  },
  clearCurrentSearchMode(context) {
    context.commit("CLEAR_CURRENT_SEARCH_MODE");
  },
  // For currentSearchTerm
  changeCurrentSearchTerm(context, searchTerm) {
    context.commit("CHANGE_CURRENT_SEARCH_TERM", searchTerm);
  },
  clearCurrentSearchTerm(context) {
    context.commit("CLEAR_CURRENT_SEARCH_TERM");
  },
  // For currentSearch
  changeCurrentSearch(context, search) {
    context.commit("CHANGE_CURRENT_SEARCH", search);
  },
  clearCurrentSearch(context) {
    context.commit("CLEAR_CURRENT_SEARCH");
  },
  // For searchResults
  changeSearchResults(context, result) {
    context.commit("CHANGE_SEARCH_RESULTS", result);
  },
  clearSearchResults(context) {
    context.commit("CLEAR_SEARCH_RESULTS");
  }
};

const getters = {
  getCurrentSearchMode(state) {
    return state.currentSearchMode;
  },
  getCurrentSearchTerm(state) {
    return state.currentSearchTerm;
  },
  getCurrentSearch(state) {
    return state.currentSearch;
  },
  getSearchResults(state) {
    return state.searchResults;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
