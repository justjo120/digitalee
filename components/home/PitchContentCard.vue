<template>
  <v-card class="pitch-card fill-height" elevation="0">
    <v-card-title class="d-flex justify-center align-content-center">
      <div class="title">
        {{ title }}
      </div>
    </v-card-title>
    <v-card-text class="pt-5 text-justify fill-height">
      <span class="cyan--text text--lighten-5">
        {{ description }}
      </span>
    </v-card-text>
    <!-- <v-img :contain="false" :src="require(`@/assets/${backgroundImage}`)" :aspect-ratio="16/9">
    </v-img> -->
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: null
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.pitch-card {
  .v-card__text {
    background-color: $brand_dark1;
  }
}

</style>
