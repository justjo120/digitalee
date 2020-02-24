<template>
  <v-card
    elevation="0"
  >
    <v-card-title class="d-flex justify-center align-content-center">
      <div class="title">
        {{ title }}
      </div>
    </v-card-title>
    <v-img
      :contain="false"
      :src="require(`@/assets/${backgroundImage}`)"
      :aspect-ratio="16/9"
    >
      <v-card-text>
        {{ description }}
      </v-card-text>
    </v-img>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
  }
});
</script>
