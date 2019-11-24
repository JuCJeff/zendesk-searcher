<template>
  <v-container>
    <v-select
      v-model="currentSearchMode"
      :items="modeOptions"
      label="search mode"
      outlined
    ></v-select>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchMode",

  mounted() {
    this.setSearchModes();
  },

  data: () => ({
    modeOptions: []
  }),

  methods: {
    async setSearchModes() {
      let res = await axios.get("http://localhost:8081/mode");
      let resArr = await res.data;
      this.modeOptions = resArr;
    }
  },

  computed: {
    currentSearchMode: {
      get() {
        return this.$store.getters.getCurrentSearchMode;
      },
      set(input) {
        this.$store.dispatch("changeCurrentSearchMode", input);
      }
    }
  }
};
</script>
