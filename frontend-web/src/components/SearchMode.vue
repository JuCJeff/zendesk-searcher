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
export default {
  name: "SearchMode",

  data: () => ({
    modeOptions: ["Users", "Tickets", "Organizations"]
  }),

  methods: {},

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
