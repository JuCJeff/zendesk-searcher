<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/zendesk-logo.jpg"
          transition="scale-transition"
          width="55"
        />
        <h1>Zendesk Searcher</h1>
      </div>
    </v-app-bar>

    <v-content>
      <!--Fields that need to be specified by the user-->
      <v-layout text-center>
        <v-flex lg2 md2 xs12>
          <SearchMode />
        </v-flex>
        <v-flex lg2 md2 xs12>
          <SearchTerms />
        </v-flex>
        <v-flex lg8 md8 xs12>
          <SearchBar />
        </v-flex>
      </v-layout>

      <!--Buttons available for users to search and clear results-->
      <v-layout text-center>
        <v-flex lg12>
          <v-btn color="primary" class="btn" @click="generateSearchResults"
            >Search</v-btn
          >
          <v-btn color="primary" class="btn" @click="clearSearchResults"
            >Clear</v-btn
          >
        </v-flex>
      </v-layout>

      <!-- Dispaly error prompt for user -->
      <v-snackbar v-model="errorSnackbar" color="primary">
        {{ errorText }}
        <v-btn text @click="errorSnackbar = false">
          Got it
        </v-btn>
      </v-snackbar>

      <!-- Area to display results after search -->
      <v-layout text-center>
        <v-flex lg12>
          <ResultArea />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import SearchMode from "./components/SearchMode";
import SearchTerms from "./components/SearchTerms";
import SearchBar from "./components/SearchBar";
import ResultArea from "./components/ResultArea";

import axios from "axios";

export default {
  name: "App",

  components: {
    SearchMode,
    SearchTerms,
    SearchBar,
    ResultArea
  },

  mounted() {},

  data: () => ({
    errorSnackbar: false,
    errorText:
      "Please fill both search mode and search term to generate search results."
  }),

  methods: {
    clearSearchResults() {
      this.$store.dispatch("clearCurrentSearchMode");
      this.$store.dispatch("clearCurrentSearchTerm");
      this.$store.dispatch("clearCurrentSearch");
      this.$store.dispatch("clearSearchResults");
    },

    async generateSearchResults() {
      if (this.currentSearchMode === "" || this.currentSearchTerm === "") {
        this.errorSnackbar = true;
        return;
      }

      let res = await axios.post(
        "http://localhost:8081/" + this.currentSearchMode,
        {
          term: this.currentSearchTerm,
          value: this.currentSearch.toString()
        }
      );
      let resObj = await res.data;

      this.$store.dispatch("changeSearchResults", resObj);
    }
  },

  computed: {
    currentSearchMode: {
      get() {
        return this.$store.getters.getCurrentSearchMode;
      }
    },
    currentSearchTerm: {
      get() {
        return this.$store.getters.getCurrentSearchTerm;
      }
    },
    currentSearch: {
      get() {
        return this.$store.getters.getCurrentSearch;
      }
    },
    searchResults: {
      get() {
        return this.$store.getters.getSearchResults;
      }
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 1em;
}
</style>
