<template>
  <v-card min-height="200" flat class="fill-height">
    <v-card-title class="d-flex justify-center align-content-center">
      <div class="title">
        <v-icon v-if="icon">
          {{ icon }}
        </v-icon>
        {{ title }}
      </div>
    </v-card-title>
    <v-card-text max-height="170" class="pt-5 d-flex flex-column justify-space-around text-justify pitch-card-text fill-height">
      <span class="cyan--text text--lighten-5">
        {{ description }}
      </span>
    </v-card-text>
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
    },
    icon: {
      type: String,
      required: false,
      default: null
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.pitch-card-text {
  border-radius: 10px;
  background: linear-gradient(0deg, $brand_dark1,$brand_background);
  box-shadow:  31px 31px 59px $brand_background,-31px -31px 59px $brand_dark2;
}

</style>
