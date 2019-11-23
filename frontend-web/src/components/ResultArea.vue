<template>
  <v-container>
    <div v-if="searchResults.length == 0">
      <h2>No results found.</h2>
    </div>
    <div
      v-else
      v-for="(value, index) in searchResults"
      :key="index"
      class="result-card"
    >
      <v-card
        class="mx-auto"
        color="primary"
        dark
        max-width="800"
        raised
        shaped
      >
        <v-card-title>
          {{ index }}
        </v-card-title>

        <v-card-text>
          <div
            v-for="(attrValue, index) in value"
            :key="index"
            class="key-value-pairs"
          >
            {{ index }}: {{ attrValue }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ResultArea",

  mouted() {
    this.fetchData();
  },

  data: () => ({}),

  methods: {
    async fetchData() {
      this.result = {
        item1: { id: 1, attr: "test" },
        item2: { id: 2, attr: "test2" }
      };
    }
  },

  computed: {
    searchResults: {
      get() {
        return this.$store.getters.getSearchResults;
      }
    }
  }
};
</script>

<style scoped>
.result-card {
  margin-top: 1em;
}
.key-value-pairs {
  text-align: left;
}
</style>
