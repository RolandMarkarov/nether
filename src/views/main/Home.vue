<template>
  <div class="main-content">
    <b-row class="mt-2">
      <b-col lg="6" sm="12" class="m-auto">
        <search-input />
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12" class="m-auto"
        ><b-card title="Search Results"> <data-table /> </b-card
      ></b-col>
      <modal-version-details />
    </b-row>
  </div>
</template>

<script>
import DataTable from "./components/dataTable.vue";
import ModalVersionDetails from "./components/modalVersionDetails.vue";
import searchInput from "./components/searchInput.vue";
export default {
  components: { searchInput, DataTable, ModalVersionDetails },
  name: "Home",
};
</script>

<style lang="scss" scoped>
</style>