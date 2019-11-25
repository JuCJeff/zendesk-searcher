<template>
  <v-container>
    <v-text-field v-model="search" label="search" outlined></v-text-field>
  </v-container>
</template>

<script>
export default {
    name: "SearchBar",

    data: () => ({}),

    computed: {
      search: {
        get () {
          return this.$store.getters.getCurrentSearch
        },
        set (input) {
          this.$store.dispatch("changeCurrentSearch", input)
        }
      }
    },
  }
</script>
