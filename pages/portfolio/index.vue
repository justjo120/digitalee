<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <div class="headline">
        Coming Soon
      </div>
    </v-col>
    <v-col cols="12">
      <v-skeleton-loader
        type="list-item-three-line"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>
