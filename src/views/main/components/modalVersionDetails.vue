<template>
  <b-modal title="Version Information" id="version-details" centered>
    <p v-for="(item, idx) in current" :key="idx" class="d-flex">
      <span class="w-25 text-capitalize"> {{ item.type }}</span>
      <span class="text-capitalize text-danger w-25">{{ item.name }} </span>
      <span class="text-capitalize w-25" v-if="item.files"
        >{{ item.files[0].name }}
      </span>
    </p>
    <!-- {{ current }} -->
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      current: ["getCurrent"],
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>