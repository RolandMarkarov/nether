<template>
  <div class="col-12 d-flex flex-wrap">
    <b-table
      :items="resultsPagination"
      :fields="fields"
      v-if="resultsPagination.length"
    >
      <template #cell(version)="row">
        <p
          variant="primary"
          size="sm"
          @click="clickLog(row.item, row.index, $event.target)"
          class="mr-1"
        >
          {{ row.item.version }}
        </p>
      </template>
      <template #cell(actions)="row">
        <b-button
          variant="primary"
          size="sm"
          @click="clickLog(row.item, row.index, $event.target)"
        >
          Details
        </b-button>
      </template>
    </b-table>
    <b-pagination
      class="m-auto"
      v-model="current"
      :total-rows="rows"
      :per-page="perPage"
      prev-text="⏪"
      next-text="⏩"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "dataTable",
  data() {
    return {
      rows: "0",
      perPage: 10,
      current: "1",
      fields: [
        { label: "Title", key: "title", class: "text-center" },
        { label: "Version", key: "version", class: "text-center" },
        { label: "Actions", key: "actions", class: "text-center" },
      ],
    };
  },

  computed: {
    ...mapGetters({
      results: ["getResults"],
      search: ["getSearchParam"],
      latest: ["getLatest"],
    }),
    resultsPagination() {
      this.rows = this.results.length;
      let from = this.current * this.perPage - this.perPage;
      let to = this.current * this.perPage;
      return this.results.slice(from, to);
    },
  },
  methods: {
    async clickLog({ version }) {
      await this.$store.dispatch("GET_CURRENT_VERSION", version);
      this.$bvModal.show("version-details");
    },
  },
  watch: {
    results(val) {
      this.rows = val.length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>