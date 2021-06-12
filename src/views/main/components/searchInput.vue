<template>
  <b-card>
    <b-form-input v-model="text" placeholder="search"></b-form-input>
  </b-card>
</template>

<script>
export default {
  name: "search-input",
  data() {
    return {
      text: "",
    };
  },
  methods: {},
  watch: {
    text(val) {
      this.$store.dispatch("FIND_LIBRARY", val);
    },
  },
};
</script>
