<template>
  <v-container>
    <div v-if="searchResults.length == 0">
      <h2>No results found.</h2>
    </div>
    <div v-else>
      <h2 class="mb-5" v-if="searchResults.length == 1">
        Found {{ searchResults.length }} result.
      </h2>
      <h2 class="mb-5" v-else>Found {{ searchResults.length }} results.</h2>

      <v-card
        v-for="(value, index) in searchResults"
        :key="index"
        class="result-card mx-auto"
        color="primary"
        max-width="800"
        dark
        raised
        shaped
      >
        <v-card-title> Result {{ index + 1 }} </v-card-title>

        <v-card-text class="white--text">
          <div
            v-for="(attrValue, index) in value"
            :key="index"
            class="key-value-pairs my-5 mx-3"
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
