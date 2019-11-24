<template>
  <v-container>
    <v-select
      v-model="currentSearchTerm"
      :items="termOptions"
      label="search term"
      outlined
    ></v-select>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchTerms",

  data: () => ({
    termOptions: []
  }),

  methods: {},

  computed: {
    currentSearchTerm: {
      get() {
        return this.$store.getters.getCurrentSearchTerm;
      },
      set(input) {
        this.$store.dispatch("changeCurrentSearchTerm", input);
      }
    },
    
    currentSearchMode: {
      get() {
        return this.$store.getters.getCurrentSearchMode;
      }
    }
  },

  watch: {
    // Get relevant attributes based on the search mode
    async currentSearchMode() {
      this.$store.dispatch("clearCurrentSearchTerm");
      let res = await axios.post("http://localhost:8081/mode", {
        mode: this.currentSearchMode
      });
      let resArr = await res.data;

      this.termOptions = resArr;
    }
  }
};
</script>
